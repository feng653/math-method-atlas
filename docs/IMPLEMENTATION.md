# 已有实现速查

最后更新：2026-09-08。本表仅记录已落盘实现；“规划”不能被当作已实现。

| 能力 | 唯一入口 | 状态 / 验证 |
| --- | --- | --- |
| 产品边界 | `docs/MVP.md` | 已写；前端只读、多体系、证据频次 |
| 架构边界 | `docs/ARCHITECTURE.md` | 已实现边界；参见VERIFICATION.md |
| 协作规则 | `AGENTS.md` | 250 行门禁已接入check与CI |
| 内容类型与校验 | `src/domain/schema.ts`、`validate.ts` | 唯一契约，结构和跨文件引用 |
| 来源证据 | `src/domain/source.ts`、`components/SourceDetails.tsx` | 唯一sourceSchema；同文档锚点可继承整卷元数据，不同查询/资源不继承；说明按需展开 |
| 子问索引 | `schema.ts`的subquestions、`components/Subquestions.tsx` | 子问只引用父题methodLinks；ID/标号唯一，统计仍以主问题为单位；未录不等于无子问 |
| 内容读取 | `src/data/load.ts` | Vite glob构建时读取多体系JSON |
| 搜索/覆盖/频次 | `src/domain/search.ts`、`coverage.ts`、`statistics.ts` | 纯函数；去重/搜索/覆盖负例已测 |
| 主辅方法标注 | `schema.ts`的methodLinks、`src/domain/method-roles.ts` | 独立于核验状态；roleNote说明直接任务或中间作用；两阅读面板展示 |
| 真题范围汇总 | `src/domain/archive-statistics.ts` | getPaperStats/getArchiveStats；页面和报告共用，目标缺卷保持分母 |
| 覆盖说明展示 | `src/components/ArchiveCoverage.tsx` | 两阅读面板共用范围说明；空数据不显示从未考查 |
| 外部要求审计 | `src/domain/requirements.ts`、`content/requirements/` | requirement-items.ts核对原编号连续性/候选引用；既有CLI统一调度；不认证2026 |
| 进度报告 | `scripts/report.ts` | pnpm content:report输出实际数量/待审关联/缺口/历史编号候选数 |
| 布局与画布 | `src/domain/graph.ts`、`src/components/AtlasGraph.tsx` | graphNodeId区分root/chapter/method内部ID，data.methodId保留内容ID；空方法体系/保留名/跨库隔离回归；拖动仅会话 |
| 选择与页面 | `src/App.tsx` | 全屏图谱；详情/真题React.lazy按需加载，体系切换重置画布 |
| hash路由 | `src/domain/route.ts` | resolveAtlasRoute/atlasRouteHash；体系/方法/章节深链，非法ID提示；5项边界测试 |
| 阅读与检索 | `src/components/MethodDetail.tsx`、`LibraryNavigation.tsx`、`PaperLibrary.tsx` | 目录与真题年/科/方法筛选（折叠）；KaTeX由Formula渲染 |
| 内容 | `content/libraries/math-one/` | 数量由content:report计算；审校记录在docs/reviews；课纲仍草案 |
| CLI门禁 | `scripts/validate.ts`、`check-files.ts` | pnpm check；公式解析+250行硬限制 |
| 发布 | `.github/workflows/pages.yml` | 校验/构建/Pages；首次远端检查部署成功 |

维护规则：新增能力只补一行“职责→路径→状态/证据”；一个职责只能有一个主入口。保留必要公共函数名、数据入口和关键限制，不复制代码与完整目录树。路径变更同提交更新。未验证项写明，不用“完成”代替证据。

开始实现前先读本表，再 `rg` 搜职责/函数/实体；找到现有实现就扩展它。设计参考 ARCHITECTURE.md，里程碑参考 ROADMAP.md。不得新增第二套 loader、search、图谱、统计或校验器。
