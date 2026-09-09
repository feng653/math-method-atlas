# 一元积分：题型与真题交接

本阶段新增 [23 个入口](problem-types/README.md)和 [44 道材料页](questions/README.md)。其中 22 个为教学任务，1 个为待分类材料入口。只读 AGENTS.md 与 docs，只写本章题型、题目及本交接稿；未阅读代码或内容目录，未运行项目程序、来源访问、测试或构建。

## 第三作者的完整工具清单

以下 58 个 slug 已被题型页引用，请逐一在本章 methods 下写同名 Markdown。它们是文章路径，不是正式数据库 methodId；本阶段未创建工具正文。标题可以调整，但路径保持一致。

| slug | 中文名与执行边界 |
| --- | --- |
| primitive-existence-check | 用连续性与导数介值性质检查原函数存在性；非跳跃间断需另议 |
| piecewise-primitive | 分段积分并匹配常数和接点导数；连续不等于可导 |
| direct-differential | 直接识别原函数并凑微分 |
| partial-fractions | 多项式除法与实部分分式积分；一次和不可约二次因子分别处理 |
| quadratic-completion | 配平方后用反正切原函数；正配方常数 |
| radical-substitution | 幂代换消根式；分支、微分与积分限 |
| trig-substitution | 三角代换消二次根式；根式绝对值与分支 |
| reciprocal-substitution | 倒代换化简倒数结构；不跨零且方向正确 |
| trig-rationalization | 三角恒等变形与正切半角有理化；半角断点分区间 |
| parts-once | 单次分部降低乘积复杂度；保留边界项 |
| parts-cycle | 循环分部解积分方程；常数与移项系数 |
| recover-primitive | 积分恢复局部函数并由初值定常数 |
| function-period-reduction | 依奇偶性和周期归约自变量；不能外推局部公式 |
| newton-leibniz-evaluation | 原函数端点差求有限定积分 |
| nested-integral-parts | 以变限积分为分部因子；奇点先截断 |
| parity-integral | 对称区间消奇项并折半偶项；先确认可积 |
| reflection-pairing | 关于区间中点反射并配对求积分 |
| translation-overlap | 平移区间后消去重叠部分；函数差关系的有效区间 |
| periodic-splitting | 按周期或半周期拆分并保留非周期权重 |
| riemann-normalization | 识别网格宽、采样点、区间与倍率 |
| separable-double-sum | 分离乘积型双重和为一维 Riemann 和；一般双重和不适用 |
| variable-limit-chain | 变上限及双变限链式求导；可连续使用求高阶导数 |
| parameter-kernel-differentiation | 含参核求导并保留积分限边界项；有限正常区间条件 |
| integral-difference-quotient | 积分差商判断间断点处导数 |
| integral-graph-analysis | 导数符号和累积面积判断图像、极值与零点 |
| integral-function-parity | 变限积分反射判断奇偶性；固定下限常数不可丢 |
| integral-squeeze | 可积上界夹逼积分序列；不无条件交换极限 |
| tail-average-estimate | 固定首段与尾部估计求积分平均极限 |
| pointwise-integral-order | 点态保序与严格积分比较；严格性须有正长度依据 |
| taylor-interpolation-bound | Taylor 余项给点态插值误差；写明导数条件 |
| absolute-integral-bound | 积分绝对值估计传递误差界 |
| convex-symmetric-average | 对称配点证明凸函数积分平均下界 |
| local-average-expansion | 缩小区间并展开提取二阶导数符号；控制余项 |
| parts-recurrence | 分部建立积分递推；指标范围、初值与边界项 |
| recurrence-ratio-squeeze | 用单调性夹逼相邻积分比值 |
| weighted-integral-mean | 带权积分中值取点；连续函数与不变号权重 |
| integral-rolle-construction | 由积分条件构造多点等值函数并逐次用 Rolle |
| improper-endpoint-split | 逐个瑕点和无穷端拆分截断；主值不替代收敛 |
| power-log-comparison | 幂函数及对数幂比较；有限端和无穷端阈值不同 |
| limit-comparison | 正函数比值极限判断同敛散；零与无穷比值只有单向推论 |
| absolute-convergence | 先检验绝对收敛；不能反推必要性 |
| dirichlet-integral | 有界累积函数配单调趋零因子的振荡积分判别 |
| ode-decay-integrability | 稳定特征根控制解的衰减与可积性；复根、重根分别交代 |
| truncated-integral-evaluation | 截断后换元或分部并取边界极限 |
| integrate-ode-boundary | 积分微分方程并利用解及导数衰减求反常积分 |
| cartesian-area | 分段积分上下边界之差求平面面积 |
| parametric-area | 参数曲线面积换元；坐标微分与遍历方向 |
| polar-area | 极坐标扇形微元求面积；非负半径及无重复覆盖 |
| unbounded-area-sum | 截断无界区域并累加非负分段面积 |
| cross-section-volume | 截面积切片累积体积 |
| washer-volume | 圆盘圆环法；真实外内半径与轴距 |
| shell-volume | 圆柱壳法；同半径壳层不重复 |
| graph-arc-length | 显式图像速度模求弧长 |
| parametric-arc-length | 参数和极坐标速度模求弧长；重复遍历边界 |
| velocity-displacement | 积分速度求位移、绝对速度求路程及比较位置差 |
| variable-force-work | 沿位移累加变力功；方向与单位 |
| density-centroid | 密度积分求质量、一阶矩及质心 |
| iterated-integral-parts | 固定其余变量逐次分部并核对边界条件 |

每篇工具必须给出适用信号、具体步骤、失效边界与完整自编演算，所有自编例题明确标注；可复用基本公式解释，但不可只留通用口号。不要为覆盖清单把没有题面条件支持的真题配成已核验例题。

## 真题与来源边界

44 道均来自 source-dossier 的真实登记键。本轮没有访问外部来源，逐页保留实际链接、题号及已知页码或题面图序号；旧来源身份、可用性与核验结论不得自动升级为本轮核验。

- 2018-15、2022-12、2025-17 的原式及积分限不足，单列待分类。允许给候选工具，禁止认定不定积分、普通定积分或反常积分类型。
- 2013-15 有零端边界极限要求，可读截断工具，但是否可去奇点尚不确定。
- 2016-16 缺参数范围；旧“根都负”的表述不足以覆盖复根情况。工具稿应按实部与重根完整分析，勿强编该真题参数。
- 2011-11 上限为 xy 的纠错、2011-09 弧长导数的误写、2019-18 递推分母 n+2 的纠错均保留为旧记录。
- 2024-19 的端点导数排印冲突、2025-03 的零端开闭区间冲突均逐页说明；没有因此声称已确认官方原版。
- 2011-19、2026-19 仅保留本章在跨章任务里的局部作用；2011-11 是多元求导，2009-16 后续是级数，2012-18 前置是切线模型。
- 无材料的工具或题型只表示本批没有确认样本。58 个工具不能被写成“58 种已考方法”，44 个材料也不是频次。

## 主线待办

第三作者补齐 methods 后，主线统一核对相对链接、公式、数学边界与入口目录；再运行仓库内容检查、代码行数检查、相关测试及构建。本阶段未将任意文稿关系写成正式方法关联或统计。
