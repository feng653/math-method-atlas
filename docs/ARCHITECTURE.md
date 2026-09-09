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
| Library | schemaVersion:1、id、title、description、syllabus:{version,sourceUrl,reviewStatus}、chapters、可选examScope:{exam,startYear,endYear}（每年一卷的目标范围） |
| Chapter | id、title、subject、syllabusTopics:[{id,title}]；数组顺序即显示顺序 |
| Method | id、libraryId、chapterId、title、summary、conditions:string[]、steps:string[]、formula:string、pitfalls:string[]、example:{prompt,solution}、relatedIds:string[]、topicIds:string[]、status:draft/reviewed |
| Paper | id、libraryId、year、exam、title、source:{url,page?}、status:indexed/partial/complete；目录存在不代表题目已完整收录 |
| Question | id、libraryId、paperId、number:string、summary、source:{url,page?}、methodLinks |
| MethodLink | methodId、verification:pending/verified、note:string；verified 必须有可追溯来源及非空核验说明；role/roleNote独立记录主辅作用，省略按未分类 |

具体类型从 `src/domain/schema.ts` 的 Zod schema 推导，禁止前端另建相似结构。课纲覆盖按独立 syllabusTopics 的 ID 计算；来源核验状态与方法审校状态分别展示。频次逐 methodLink 核验，不把整题的有来源误认为所有方法关联正确。历史真题原文只有来源/许可足以支持公开转载时才入库；否则保存来源入口和原创摘要。自编例题明确标注，不能计入考试次数。

建议目录：`content/libraries/<id>/library.json`（含课纲）、`methods/<id>.json`、`papers/<id>.json`、`questions/<id>.json`。新增体系只能增加数据，不能增加体系专属页面或条件分支。内容独立文件可按章节分片，但不得回到一个巨大内容文件。

## 模块与 API 边界

V2增加ProblemType实体（唯一schema.ts）：题型属于一个章节，methods多对多引用同体系方法并写选择条件；formulas记录推导公式及基本方法引用，questionIds显式记录作答目标归属。problem-types.ts校验与查询、现有loader/CLI/report统一接入；无单独后端。graph.ts继续作为唯一布局入口，problem-graph.ts插入题型层并保留共享方法单节点；聚焦题型包含其全部候选方法，允许跨章复用。题型卡、目录和搜索共用App选择，hash使用type参数。题型草案的选题数不进入已核验方法频次。

来源契约由 `domain/source.ts` 唯一定义，schema.ts引用。source.metadata记录发布者/级别、检查日期/可用性、真实性证据和外链许可边界；题目可继承同一文档的整卷元数据（忽略fragment，保留query差异）。缺元数据保持未知，不能由HTTP成功推官方身份。

Question.subquestions为主问题内可选子条目：id、原标号label、原创summary、methodIds、evidenceNote、可选source。方法引用必须属于父题methodLinks，不复制核验和主辅状态；子问只展示关联方法。频次与试卷完整性保持主问题级计数，未登记子问不能解释为原题没有子问。

subquestionAudit独立记录题面编号边界核验（expectedCount/checkedOn/note），数量必须与子问数组一致；expectedCount=0表示已确认无显式编号，省略审计字段表示未知。统计纯函数输出已录子问、已审主题数、未审主题ID及空方法子问；子问边界全部核验不等于所有任务都有已核验方法。

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

画布默认占满页面，品牌/搜索/控制轻量悬浮。完整图谱和章节展开由hierarchy-layout调用elastic-layout生成力导向初始位置：800坐标单位内所有节点间存在软化反平方排斥（不区分是否连接），空间网格跳过远处节点，连接采用随伸长增加的弹簧吸引；仅实际连线产生吸引，无独立中心力；矩形避碰保护中文标题。radialSeed恢复4433c88的宽大分层径向起点；连接静长为起点距离22%，限制在160—420，取消初始中心压紧。最大节点每步位移低于0.12连续30步才标记settled，4000步上限记录未收敛；再消除残余重叠。当前全部章节与全图均通过收敛测试；结果确定，但力模拟后不保证严格同心环或零交叉。主干父边仍由edge-layout选择并冻结，所有语义边保留，次要连接参与较弱吸引。圆点标题26px、局部卡片标题16px；自动适配完整范围，用户可恢复100%阅读。长标题有省略与title提示，不能承诺任意屏幕同时显示所有完整标题。没有导航小地图。

useElasticGraph复用同一引擎处理拖动钉住、阻尼、暂停和减少动态；拖动放开后不重设弹簧静长；连线只产生吸引，压缩不反向推开，位置仅本次会话有效。后台或暂停立即停止，持续运动时继续模拟，连续30步最大速度低于0.12后再保留1.8秒稳定窗口。目录点选章节、题型和方法保持挂载、展开与滚动位置，桌面详情并排；窄屏详情在目录上方，关闭详情返回原目录。禁止连接/删除/编辑内容；关系边不改变内容章节归属。prefers-reduced-motion下停止动态并取消定位动画；目录与详情仍可完成检索。
## 验证与扩展触发点

每次提交运行内容校验、250 行门禁、相关测试、生产构建。必测：未知引用、重复 ID、verified 无来源或说明、pending 不计数、同题关联去重、同卷多题计一次试卷、体系切换隔离、课纲缺映射。浏览器烟测：体系切换→搜索→定位→详情→真题来源；全图/局部/缩放/拖拽；键盘与 reduced-motion。构建成功不等于浏览器验证通过。

超过约 1000 可见节点且实际浏览器测试发现卡顿后，再引入按视口渲染/聚类与布局 worker。拥有服务器编辑/审核需求后，再讨论数据库/API；现阶段 Git 即编辑、审核、历史与回滚机制。

覆盖统计：archive-statistics.ts统一计算收录年份、主问题去重数、核验入口题数、逐卷索引完整性及声明目标缺卷年份；MethodDetail、PaperLibrary和content:report共用。目标范围来自Library.examScope，缺卷不能缩小分母；未声明目标的体系不套用数学一范围。索引完整性不等于来源官方认证。


圆点模式（2026-09-08从dev/mobile-dot-graph合入main）：完整图谱以compact数据标记驱动轻量圆点标题组件，减少端口为每节点2个，使用直线边；章节概览与局部卡片保持原样。motion-scheduler仅在加载、恢复布局、拖动、键盘移动或重新可见时安排短时模拟，运动会延长模拟，低速稳定后才取消rAF；暂停/后台立即取消。粗指针50ms、其他40ms最小模拟间隔，低于0.05世界单位的位移不更新React节点引用。休眠不代表关闭交互。dev分支只运行CI，不部署正式Pages。


## 做题思路图谱

基础思路是 supplementary 章节：章节 → 读题/变换/分支/验证分类 → 触发条件 → 基础策略与既有技术方法。普通章节保留题型层。分类枚举集中在 thinking-schema.ts，trigger-graph.ts 只改触发分支；布局依据实际树深度，不再假定三层。点击分类在当前章节筛选，点击触发进入既有 type 路由。分类筛选仅会话状态，不改变内容关系。

thinking-samples 是独立证据实体，一题一文件，id=questionId。chapterIds 必须由样本所引用的已核验技术方法支撑；triggerIds 只能引用同库触发条件。signal → reasoning → boundary 记录原创推理，evidenceBasis 说明本轮是否重查原题。与 question.methodLinks 分离，不能把抽样标签变成考试频次。thinking.ts 是校验及抽样覆盖的唯一计算入口；页面/CLI 共用。未来补样本先找已有题号，合并新推理而非复制实体；待审关联不能成为已核验样本的方法依据。
