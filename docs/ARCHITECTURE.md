# 架构决策与边界

状态：2026-09-08 初始设计；实际落点以 IMPLEMENTATION.md 为准。

## 技术选择

| 层 | 选择 | 理由 / 边界 |
| --- | --- | --- |
| 前端 | React + TypeScript + Vite | 静态输出，无账号或后端依赖 |
| 图谱 | `@xyflow/react` | 原生平移、缩放、节点拖动、Controls、MiniMap、fitView；不用另写画布交互 |
| 布局 | 纯函数分层布局 | 根→章节→方法；关系边独立。首版不引入复杂自动布局引擎 |
| 公式 | KaTeX | 明确公式组件，禁止 HTML 字符串拼接；内容字段为文本和 LaTeX |
| 内容 | 每体系 JSON 清单 + 每方法/题目独立 JSON | Git diff 可审查，AI 可直接编辑；数据不依赖 UI 操作 |
| 校验 | Zod + TypeScript CLI | 结构、引用、课纲映射、证据规则共享；禁止仅在 UI 校验 |
| 测试 | Vitest；浏览器烟测 | 纯函数覆盖负例，真实浏览器验证主要检索链路 |
| 发布 | GitHub Actions + Pages | 使用仓库 base 路径，hash 参数分享选择状态，避免静态深链 404 |

官方依据：[React Flow API](https://reactflow.dev/api-reference/react-flow)、[自定义节点](https://reactflow.dev/learn/customization/custom-nodes)、[Vite 静态部署](https://vite.dev/guide/static-deploy)。依赖版本在安装时核验并锁定，不在文档重复记录版本。

## 内容契约

ID 使用稳定的 ASCII slug，所有引用使用 ID，禁止用标题关联。体系 ID 与内容 ID 构成命名空间；同一体系内不重复。所有文件含 `schemaVersion: 1` 或由体系清单声明版本。

| 实体 | 必需语义 |
| --- | --- |
| Library | schemaVersion:1、id、title、description、syllabus:{version,sourceUrl,reviewStatus}、chapters |
| Chapter | id、title、subject、syllabusTopics:[{id,title}]；数组顺序即显示顺序 |
| Method | id、libraryId、chapterId、title、summary、conditions:string[]、steps:string[]、formula:string、pitfalls:string[]、example:{prompt,solution}、relatedIds:string[]、topicIds:string[]、status:draft/reviewed |
| Paper | id、libraryId、year、exam、title、source:{url,page?}、status:indexed/partial/complete；目录存在不代表题目已完整收录 |
| Question | id、libraryId、paperId、number:string、summary、source:{url,page?}、methodLinks |
| MethodLink | methodId、verification:pending/verified、note:string；verified 必须有可追溯来源及非空核验说明 |

具体类型从 `src/domain/schema.ts` 的 Zod schema 推导，禁止前端另建相似结构。课纲覆盖按独立 syllabusTopics 的 ID 计算；来源核验状态与方法审校状态分别展示。频次逐 methodLink 核验，不把整题的有来源误认为所有方法关联正确。历史真题原文只有来源/许可足以支持公开转载时才入库；否则保存来源入口和原创摘要。自编例题明确标注，不能计入考试次数。

建议目录：`content/libraries/<id>/library.json`（含课纲）、`methods/<id>.json`、`papers/<id>.json`、`questions/<id>.json`。新增体系只能增加数据，不能增加体系专属页面或条件分支。内容独立文件可按章节分片，但不得回到一个巨大内容文件。

## 模块与 API 边界

| 建议位置 | 唯一职责 / 接口 |
| --- | --- |
| `src/domain/schema*.ts` | 实体类型与运行时结构检查，类型通过 z.infer 推导；schema 超长时按实体拆 |
| `src/domain/validate*.ts` | `validateLibrary(data)`：结构外的跨文件引用、重复、课纲/来源规则 |
| `src/data/load.ts` | 汇总 JSON 为规范化 library；UI 不直接 glob 内容 |
| `src/domain/search.ts` | `searchMethods(library, query)`；标题、摘要、关键词与章节检索 |
| `src/domain/graph.ts` | `buildGraph(library, chapterId?)`；只输出图数据，禁止访问 DOM |
| `src/domain/statistics.ts` | `getMethodStats(methodId, questions)`；verified 题次数与 distinct paper 次数 |
| `src/domain/coverage.ts` | `getCoverage(library)`；逐考点映射与审校状态，不用方法数量替代覆盖率 |
| `src/components/AtlasGraph.tsx` | React Flow 交互、视口动画；节点拖动仅为当前会话布局 |
| `src/components/MethodDetail.tsx` | 方法内容与证据展示；公式、例题、真题分组件 |
| `src/components/LibraryNavigation.tsx` | 可键盘操作目录和搜索；与图谱共用 selectedMethodId |
| `src/App.tsx` | 体系/章节/选中项组合，不放内容、统计或大段布局 |
| `scripts/validate-content.ts`、`check-files.*` | CLI 批量校验、代码文件行数门禁 |

若实现采用等价文件名，及时更新速查，无需为吻合本表新建重复文件。没有 HTTP API：构建时读取受版本控制的数据，前端只读。选中方法/体系状态可进 hash，viewport 独立；切换体系需清除无效选择。所有频次按当前收录范围计算，UI 永远显示覆盖范围；零已核验记录显示“尚无已核验记录”。

## 图谱与可访问性

画布默认占满页面，品牌/搜索/控制轻量悬浮。默认章节总览，可展开所有方法为一张大图、聚焦章节、搜索定位、恢复布局。方法详情/目录/真题按需展开浮层，移动端为可关闭面板。可拖节点且禁止连接/删除/编辑内容；关系边不改变章节树。定位使用 fitView/setCenter 动画，prefers-reduced-motion 时 duration 为 0。目录与详情可完成相同检索，不要求鼠标拖拽。

## 验证与扩展触发点

每次提交运行内容校验、250 行门禁、相关测试、生产构建。必测：未知引用、重复 ID、verified 无来源或说明、pending 不计数、同题关联去重、同卷多题计一次试卷、体系切换隔离、课纲缺映射。浏览器烟测：体系切换→搜索→定位→详情→真题来源；全图/局部/缩放/拖拽；键盘与 reduced-motion。构建成功不等于浏览器验证通过。

超过约 1000 可见节点且实际浏览器测试发现卡顿后，再引入按视口渲染/聚类与布局 worker。拥有服务器编辑/审核需求后，再讨论数据库/API；现阶段 Git 即编辑、审核、历史与回滚机制。
