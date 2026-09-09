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
| 弹性联动 | `src/domain/elastic-layout.ts`、`src/components/useElasticGraph.ts` | 连线只拉不推/阻尼/邻域碰撞排斥；松手不改静长，无中心力；可暂停及减少动态 |
| 默认层级布局 | `src/domain/hierarchy-layout.ts`（graph.ts调用） | 复用elastic-layout预计算力导向位置；所有节点互斥、连接弹簧吸引、中心力与矩形避碰；固定主干归属 |
| 完整图谱圆点模式 | `AtlasGraph.tsx`、`AtlasNode.tsx`、`styles/graph.css` | 仅完整图谱compact节点：圆点+单行标题、2端口直线；章节概览及局部保留卡片 |
| 持续模拟 | `domain/motion-scheduler.ts`、`components/useElasticGraph.ts` | 可见且启用时持续模拟，稳定后不停；拖动不创建重复循环；隐藏/暂停立即取消；粗指针最多20次模拟/秒 |
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

2026-09-09 紧凑邻域力布局：保留radialSeed大分层起点，稳定连线目标改为种子距离22%并限制160—420，替代上一版70%保宽。spatial-neighbors.ts为唯一空间网格邻域枚举入口；800内全部节点互斥、远处跳过，仅语义连接吸引，取消中心吸引与整体回拉。残余碰撞也复用邻域网格。

2026-09-09 节点与标签：node-presentation.ts唯一负责按去重连接数计算圆点大小；AtlasNode固定下置32px文字，取消文字碰撞和动态避让。AtlasGraph提供章节/分类/题型/方法目标层级连线高亮；每节点仅2端口且采用固定直线端口，不再随运动计算端口方位。文字范围计入适配全图。力参数目标距离改为种子30%限制240—560；软排斥7200/560，吸引0.15/0.03，阻尼保留0.7。初始收敛与持续模拟仍共用elastic-layout。

2026-09-09 高亮工具栏：LevelHighlight.tsx复用底部canvas-controls按钮样式，图层图标入口、浅绿选中态；层级选项上弹，选择/外部点击/Escape/焦点离开关闭。移除左上独立文字栏。浏览器检查展开、章节选择通过，构建通过；首轮全图测试1项5秒超时，保留门槛重跑。

2026-09-09 高亮单击循环：LevelHighlight按不高亮→当前图可用层级→不高亮循环，移除弹层；title/aria-label给出当前与下一层级。排斥系数7200/560→9000/700（增加25%）；试验50%未达原4000步收敛标准，采用25%后全图和所有章节收敛通过。浏览器确认点击到章节再到分类、无弹层。

2026-09-09 force-lab实验分支：ForceTestSliders提供开发模式吸引/排斥0—1000倍log(1+x)滑块，倍率传入既有纯模拟步骤。elastic-layout取消800距离截断及衰减窗，所有节点对软化反平方排斥，仅有边吸引；精确全对计算为O(N²)。初始化步数上限8000，保留连续30步速度<0.12标准（4000步时全图未稳定），全图及章节收敛通过。滑块仅开发模式显示，生产构建仍隐藏。

2026-09-09 force-lab取消速度限制：elastic-layout移除vx/vy的±20截断，仅保留0.7阻尼。原76测试及校验通过；新增速度可超过20并保留阻尼的回归通过（1000倍吸引单步有限，不代表极端倍率长期稳定），生产构建通过。浏览器未复测。

2026-09-09 force-lab软约束测试版（替代本分支此前显式吸引公式）：physics-settings.ts唯一参数定义，默认连接2Hz、阻尼比1、排斥1倍、空气阻力3/s、6迭代。elastic-layout以隐式速度级软绳约束求解，频率换算刚度和有效质量、相对连线速度换算阻尼，累计冲量限制为只拉不推；每子步排斥只计算一次，连接迭代不重复全对排斥。无距离或速度截断。motion-scheduler固定1/120秒累计步长，UI约30Hz发布，后台停止；单帧最多追赶100ms，超长卡顿时间丢弃以防追帧雪崩。空气衰减exp(-airDrag*h)，速度单位改为坐标/秒；初始化与运行时同一参数，收敛元数据记录每步位移。drag-target.ts以35ms时间常数跟随目标并传递端点速度，释放后完成跟随再解钉。开发面板改为频率0—30Hz、阻尼比0—3、排斥0—1000倍对数、空气阻力0—20/s、迭代1—20。默认空气3/s；不再使用固定0.7速度保留或旧吸引倍率。参数不持久化，恢复默认按钮可重置。

2026-09-09 force-lab面板简化：仅保留连接松紧0—100%滑块，内部频率范围0—30不变，默认30。运行时固定阻尼比3、排斥1000、空气20/s、迭代20；初始布局仍使用physics-settings基准生成。面板隐藏参数名称与单位，用松开/收紧表达作用；开发模式范围保持。普通边opacity0.65、最小线宽1.3；层级未选中边0.18、悬停非关联边0.22。浏览器仅1滑块与文案确认，81测试、73文件门禁、内容/类型及构建通过。

2026-09-09 点选视图与松紧折叠：App画布方法点选通过preserveGraph保留章节/题型上下文；AtlasGraph分类不再依赖selected，移除选中自动居中和焦点自动平移，只在图范围变化时适配。搜索/目录仍可导航。ForceTestSliders右上收起按钮，收起保留原右上位置的小图标，展开复用原value。浏览器共享方法点选前后314节点及viewport transform完全一致；收起隐藏内容、再次展开通过。81测试及构建通过。

2026-09-09 松紧入口定位修正：ForceTestSliders从AtlasGraph移到App的utility-nav末位，按钮锚定整个页面右上角；面板从按钮下方展开，详情缩窄画布不影响按钮位置。81测试、行数/内容/类型门禁、生产构建通过。
