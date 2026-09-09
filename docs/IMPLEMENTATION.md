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
| 默认层级布局 | `src/domain/hierarchy-layout.ts`（graph.ts调用） | 复用elastic-layout预计算力导向位置；所有节点互斥、连接弹簧吸引、中心力与矩形避碰；固定主干归属 |
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

基础思路唯一入口：`thinking-schema.ts` 定义分类与样本；`thinking.ts` 校验样本引用并计算抽样覆盖；`trigger-graph.ts` 在既有图谱中插入四类分类节点。`ThinkingCoverage` 展示范围，`ThinkingSamples` 在触发卡片内展示原创推理与原题外链。样本按题分文件存 `thinking-samples/<questionId>.json`，不改变题型归属或考试频次。基础章节仍 supplementary；13 个触发条件、13 张基础策略卡，数量以 content:report 为准。分类局部视图仅会话有效，章节/触发/方法仍使用既有 hash 深链。

例题排版唯一入口 `MethodExample.tsx`：example.formulas 为题面公式，solution 兼容旧字符串或 [{title,text,formulas}]；新步骤共用 Formula，CLI 校验所有公式。第27—29题是用户讨论示例，不认定真题。第29题已纠正中点横坐标，详情见 reviews/thinking-map.md。

图谱范围按钮：graph.css 以 max-content + nowrap 保持两个切换按钮单行；category-back 独立定位在上方，不参与胶囊宽度。禁止在 thinking.css 恢复 flex-wrap；抽样说明在上方区域，避免遮住底部控制。

2026-09-09：初始力导向排布唯一入口仍为hierarchy-layout，由graph调用；createElasticLayout的initializing参数选择目标连接距离与中心力，stepElasticLayout为初始和拖动共用引擎，settleCollisions只做连续位置的残余重叠消解。完整图谱保持圆点，章节保留卡片；不采用分栏/同心环，不含小地图。AtlasGraph自动适配、阅读大小及画布避让控制区；App目录点选保持挂载与位置。验证见VERIFICATION。
2026-09-09 宽松初始态：hierarchy-layout内radialSeed复用4433c88的大尺寸层级环，作为唯一模拟种子；createElasticLayout的preserveScale保留70%种子连接距离（至少280），不启用中心压紧。返回relaxation元数据：settled/ticks/maxSpeed；连续30步最大位移<0.12为稳定，4000步保护上限。全图与所有章节收敛测试通过。
