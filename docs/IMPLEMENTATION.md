# 已有实现速查

最后更新：2026-09-08。本表仅记录已落盘实现；“规划”不能被当作已实现。

| 能力 | 唯一入口 | 状态 / 验证 |
| --- | --- | --- |
| 产品边界 | `docs/MVP.md` | 已写；前端只读、多体系、证据频次 |
| 架构边界 | `docs/ARCHITECTURE.md` | 已实现边界；参见VERIFICATION.md |
| 协作规则 | `AGENTS.md` | 250 行门禁已接入check与CI |
| 内容类型与校验 | `src/domain/schema.ts`、`validate.ts` | 唯一契约，结构和跨文件引用 |
| 来源证据 | `src/domain/source.ts`、`components/SourceDetails.tsx` | 唯一sourceSchema；同文档锚点可继承整卷元数据，不同查询/资源不继承；说明按需展开 |
| 子问索引 | `schema.ts`的subquestions/subquestionAudit、`components/Subquestions.tsx` | 子问引用父题methodLinks；边界审计数强校验，archive-statistics共用未审/空关联报告；频次仍按主问题 |
| 内容读取 | `src/data/load.ts` | Vite glob构建时读取多体系JSON |
| 搜索/覆盖/频次 | `src/domain/search.ts`、`coverage.ts`、`statistics.ts` | 纯函数；去重/搜索/覆盖负例已测 |
| 主辅方法标注 | `schema.ts`的methodLinks、`src/domain/method-roles.ts` | 独立于核验状态；roleNote说明直接任务或中间作用；两阅读面板展示 |
| 真题范围汇总 | `src/domain/archive-statistics.ts` | getPaperStats/getArchiveStats；页面和报告共用，目标缺卷保持分母 |
| 覆盖说明展示 | `src/components/ArchiveCoverage.tsx` | 两阅读面板共用范围说明；空数据不显示从未考查 |
| 外部要求审计 | `src/domain/requirements.ts`、`content/requirements/` | requirement-items.ts核对原编号连续性/候选引用；既有CLI统一调度；不认证2026 |
| 进度报告 | `scripts/report.ts` | pnpm content:report输出实际数量/待审关联/缺口/历史编号候选数 |
| 布局与画布 | `src/domain/graph.ts`、`src/components/AtlasGraph.tsx` | graphNodeId区分root/chapter/method内部ID，data.methodId保留内容ID；空方法体系/保留名/跨库隔离回归；拖动仅会话 |
| 弹性联动 | `src/domain/elastic-layout.ts`、`src/components/useElasticGraph.ts` | 径向弹簧/阻尼/碰撞排斥；松手采纳新间距，无原位吸引；质心软约束；可暂停及减少动态 |
| 默认层级布局 | `src/domain/hierarchy-layout.ts`（graph.ts调用） | 主干树按子树大小分配连续扇区，章节/题型/方法分层；固定主干归属，节点避碰；不干预后续自由拖动 |
| 完整图谱圆点模式 | `AtlasGraph.tsx`、`AtlasNode.tsx`、`styles/graph.css` | 仅完整图谱compact节点：圆点+单行标题、2端口直线；章节概览及局部保留卡片 |
| 动画休眠 | `domain/motion-scheduler.ts`、`components/useElasticGraph.ts` | 交互后1.8秒休眠并取消帧；拖动唤醒；隐藏/暂停立即取消；粗指针最多20次模拟/秒 |
| 连线可读性 | `src/domain/edge-layout.ts` | 共享方法主干父边选择与动态朝向端口；悬停/焦点展开直接关联、一键全部连线；语义关系不删减 |
| 题型内容 | `schema.ts`的problemTypeSchema、`domain/problem-types.ts` | 每体系problem-types目录；方法选择/条件公式/显式真题归属；唯一CLI校验引用与KaTeX，报告未归类方法 |
| 题型检索与图层 | `graph.ts`调用`problem-graph.ts`、`ProblemTypeDetail.tsx` | 章节→题型→共享方法节点，点击题型聚焦其方法及卡片；目录/搜索共用选择，hash type深链 |
| 选择与页面 | `src/App.tsx` | 全屏图谱；详情/真题React.lazy按需加载，体系切换重置画布 |
| hash路由 | `src/domain/route.ts` | resolveAtlasRoute/atlasRouteHash；体系/方法/章节深链，非法ID提示；5项边界测试 |
| 阅读与检索 | `src/components/MethodDetail.tsx`、`LibraryNavigation.tsx`、`PaperLibrary.tsx` | 目录与真题年/科/方法筛选（折叠）；KaTeX由Formula渲染 |
| 内容 | `content/libraries/math-one/` | 数量由content:report计算；审校记录在docs/reviews；课纲仍草案 |
| CLI门禁 | `scripts/validate.ts`、`check-files.ts` | pnpm check；公式解析+250行硬限制 |
| 发布 | `.github/workflows/pages.yml` | 校验/构建/Pages；首次远端检查部署成功 |

维护规则：新增能力只补一行“职责→路径→状态/证据”；一个职责只能有一个主入口。保留必要公共函数名、数据入口和关键限制，不复制代码与完整目录树。路径变更同提交更新。未验证项写明，不用“完成”代替证据。

开始实现前先读本表，再 `rg` 搜职责/函数/实体；找到现有实现就扩展它。设计参考 ARCHITECTURE.md，里程碑参考 ROADMAP.md。不得新增第二套 loader、search、图谱、统计或校验器。

临时手机测试站：https://feng653.github.io/math-method-atlas-preview/ 。独立仓库feng653/math-method-atlas-preview，仅发布dev/mobile-dot-graph的64467f1静态快照；正式站不受影响。更新需重新构建并推送预览仓库，不自动同步、不自动过期。构建命令：pnpm exec vite build --base /math-method-atlas-preview/。

2026-09-08：用户确认dev/mobile-dot-graph合入main；圆点模式与动画休眠成为主分支实现。临时预览继续保留64467f1快照。

基础思路章节：basic-thinking，3张触发式策略卡与basic-unknown-function-route组合路线卡。Chapter.supplementary为补充章节标记，coverage.ts排除其条目；目录、搜索、图谱仍使用既有入口。第27题只作讨论推演，不增加真题记录或考试频次。

基础思路改为触发条件层：分组kind=trigger（省略仍为题型），3个通用触发入口引用现有方法。复用schema/loader/图谱/详情，目录与搜索区分标签；触发详情无历年真题区，CLI禁止其分类真题。report独立计数触发条件；旧basic-unknown-function-route ID保留为目标信息缺口入口。

基础思路第28/29题扩展：新增basic-structural-keyword与basic-geometric-relation触发入口，分别引用basic-hidden-constraint、basic-geometric-translation；平方量代换扩展既有basic-derivative-pattern/basic-whole-substitution，不复制求导与ODE方法。
