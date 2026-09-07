# 2021–2026 方法角色标注

2026-09-08。逐条读取既有核验说明；对明确子问边界另读原题/转载题面。primary 为直接完成至少一个任务或替代直接路线；supporting 为该路线的中间操作。角色不改变 verification，来源和原核验 note 均保留。

特别复查了2021第18–22题、2024第7–22题、2025第18–22题、2026第11–22题的子问。未把只关联一张卡自动视为主方法：2022第10题、2025第18题目前仅有辅助操作；2024第18题第二问两张卡分别处理内部及边界候选，角色不冒充完整闭域最值链。

- 2021/1：hm-derivative-definition → primary（差商直接判断拼接点可导性。）
- 2021/2：hm-multivariable-chain → primary（两条复合路径直接解出目标偏导。）
- 2021/3：hm-taylor-limit → primary（展开系数直接给所求极限参数。）
- 2021/4：hm-riemann-sum → primary（积分定义直接判别和式选项。）
- 2021/5：la-quadratic-completion → primary（配方直接确定正负惯性。）
- 2021/6：la-vector-orthogonal → primary（正交投影直接求所需系数。）
- 2021/7：la-matrix-rank → primary（可逆块消元直接比较题设秩。）
- 2021/8：pr-event-total → primary（全概率加权比较直接判断概率命题。）；pr-event-conditional → supporting（将交集与条件概率互换，为加权比较提供表达式。）
- 2021/9：pr-estimate-unbiased → primary（直接判断估计量是否无偏。）；pr-moment-variance → primary（直接计算同一估计量的方差判别项。）
- 2021/10：pr-test-errors → primary（在备择下取不拒绝概率，直接求第二类错误。）；pr-sample-normal → supporting（提供样本均值分布与标准误。）
- 2021/11：hm-improper-integral → primary（截断后取无穷上限直接定义并计算目标积分。）；hm-rational-integral → supporting（配方反正切用于计算截断积分的原函数。）
- 2021/12：hm-parametric-derivative → primary（参数二阶求导直接给目标值。）
- 2021/13：hm-ode-euler → primary（欧拉换元求出满足初值的解。）
- 2021/14：hm-gauss → primary（散度定理是闭柱面通量的直接路线。）
- 2021/15：la-matrix-adjugate → primary（伴随恒等式直接解目标分量。）
- 2021/16：pr-event-conditional → supporting（两阶段乘法先形成相关系数所需联合表。）；pr-moment-correlation → primary（将联合矩标准化，直接求目标相关系数。）
- 2021/17：hm-taylor-limit → primary（保留抵消后的主部直接求极限。）
- 2021/18：hm-power-radius → primary（直接完成题目要求的收敛域。）；hm-power-sum → primary（直接完成题目要求的和函数。）
- 2021/19：hm-space-intersections → supporting（消去约束并描述真实可行交线。）；hm-lagrange-multipliers → primary（约束优化直接求到坐标面的最大距离。）
- 2021/20：hm-double-polar → primary（第一问直接计算最优区域上的积分值。）；hm-line-second-kind → primary（第二问边界参数化直接计算环流。）
- 2021/21：la-eigen-symmetric → primary（第一问直接构造正交对角化矩阵。）；la-eigen-diagonalization → primary（第二问用共同特征基构造正定平方根。）
- 2021/22：pr-dist-transform → primary（第一、二问直接求短段及比值的分布。）；pr-moment-expectation → primary（第三问直接求比值期望。）
- 2022/1：hm-squeeze → primary（有界因子乘趋零量直接判函数极限。）
- 2022/2：hm-multivariable-chain → primary（加权链式偏导直接求指定表达式。）
- 2022/3：hm-inverse-limit → primary（连续反函数直接判复合数列极限。）
- 2022/4：hm-integral-inequality → primary（积分保序直接比较大小。）
- 2022/5：la-eigen-diagonalization → primary（独立特征向量条件直接判可对角化。）
- 2022/6：la-system-homogeneous → primary（零空间条件直接比较同解系统。）
- 2022/7：la-vector-representation → primary（双向线性表示直接判向量组等价。）
- 2022/8：pr-moment-variance → primary（方差展开直接计算题给线性组合。）
- 2022/9：pr-moment-inequality → primary（切比雪夫界直接给所求概率估计。）
- 2022/10：pr-moment-total-expectation → supporting（条件期望用于求混合矩；题目最终相关系数还需标准化协方差。）
- 2022/11：hm-direction-gradient → primary（梯度模直接求最大方向导数。）
- 2022/12：hm-integration-by-parts → primary（分部积分直接求对数积分。）
- 2022/13：hm-monotonic-extrema → primary（一元极值直接确定恒成立参数。）
- 2022/14：hm-ratio-root-test → primary（比值及临界点检验直接判级数参数。）
- 2022/15：la-matrix-product → primary（保序矩阵整理直接解矩阵关系。）
- 2022/16：pr-event-conditional → primary（条件概率比直接给目标概率。）
- 2022/17：hm-ode-linear-first → primary（积分因子直接求初值解。）
- 2022/18：hm-double-polar → primary（极坐标分片积分直接计算区域积分。）
- 2022/19：hm-stokes → primary（斯托克斯转换是环流的直接路线。）
- 2022/20：hm-taylor-remainder → primary（二阶展开直接证明必要方向。）
- 2022/21：la-quadratic-orthogonal → primary（正交变换直接完成二次型化简。）
- 2022/22：pr-estimate-mle → primary（似然最大化直接求估计量。）
- 2023/1：hm-concavity-asymptote → primary（斜率截距极限直接确定渐近线。）
- 2023/2：hm-ode-characteristic → primary（特征根增长性直接判有界解。）
- 2023/3：hm-parametric-derivative → supporting（给非零参数两侧斜率，不能代替零点判别。）；hm-derivative-definition → primary（零点左右差商直接完成可导性判断。）
- 2023/4：hm-series-comparison → primary（比较不等式直接证明绝对收敛。）
- 2023/5：la-matrix-rank → primary（块消元直接求矩阵秩关系。）
- 2023/6：la-eigen-diagonalization → primary（特征空间维数直接判可对角化。）
- 2023/7：la-vector-representation → primary（联立表示直接求共同张成部分。）
- 2023/8：pr-moment-expectation → primary（按离散概率求和直接求绝对偏差。）
- 2023/9：pr-sample-t-f → primary（独立卡方比直接识别所求分布。）
- 2023/10：pr-estimate-unbiased → primary（匹配期望直接确定无偏系数。）
- 2023/11：hm-taylor-limit → primary（首个未抵消项直接给等价量。）
- 2023/12：hm-tangent-plane → primary（偏导与点值直接写切平面。）
- 2023/13：hm-fourier-half-range → primary（余弦展开及系数组合直接给目标和。）
- 2023/14：hm-definite-symmetry → primary（区间平移直接利用函数差求积分。）
- 2023/15：la-vector-coordinate → primary（Gram坐标系统直接解目标向量。）
- 2023/16：pr-event-independence → primary（同值事件独立连乘求和直接得概率。）
- 2023/17：hm-ode-linear-first → primary（切线关系所得一阶方程直接求曲线。）
- 2023/18：hm-hessian-extrema → primary（驻点及二阶判别直接求二元极值。）
- 2023/19：hm-gauss → primary（高斯公式直接求闭面通量。）
- 2023/20：hm-taylor-remainder → primary（双侧泰勒余项直接构造证明所需点。）
- 2023/21：la-quadratic-completion → primary（配方直接解决可逆合同化简部分。）
- 2023/22：pr-moment-covariance → primary（直接完成不相关性判断。）；pr-dist-transform → primary（另一个求分布子问由径向事件原像直接完成。）
- 2024/1：hm-definite-symmetry → primary（奇偶换元直接判变限函数性质。）
- 2024/2：hm-surface-integrals → primary（有向面积元转换直接比较通量表达。）
- 2024/3：hm-power-sum → primary（和函数逐项运算直接求偶系数和。）
- 2024/4：hm-derivative-definition → primary（真实点值差商直接判导数命题。）
- 2024/5：la-system-consistency → primary（系统秩直接判断三平面公共解。）
- 2024/6：la-vector-dependence → primary（相关判别直接区分整体与成对无关。）
- 2024/7：la-eigen-diagonalization → primary（特征基中求幂直接确定题目所求迹。）；la-eigen-similarity → supporting（相似不变性将对角形的迹传回原矩阵。）
- 2024/8：pr-dist-normal → primary（标准化正态概率等式直接确定阈值。）；pr-moment-variance → supporting（先给两个线性组合的方差。）
- 2024/9：pr-moment-total-expectation → supporting（由条件分布先求边缘矩与混合矩。）；pr-moment-covariance → primary（直接计算目标协方差。）
- 2024/10：pr-joint-convolution → primary（差的卷积并合并两侧直接判同分布。）；pr-dist-exponential → supporting（提供原密度和所得分布的参数识别。）
- 2024/11：hm-power-indeterminate → supporting（取对数是转成可展开表达式的中间变换。）；hm-taylor-limit → primary（保留三阶主项直接解极限参数。）
- 2024/12：hm-multivariable-chain → primary（二次链式求导直接得到目标导数。）
- 2024/13：hm-fourier-half-range → supporting（先求目标极限中使用的奇指标系数。）；hm-equivalent-infinitesimal → primary（系数趋零后用正弦等价直接计算目标极限。）
- 2024/14：hm-ode-separable → primary（代换后分离变量直接求初值解。）
- 2024/15：la-quadratic-completion → primary（配方直接给不等式参数范围。）
- 2024/16：pr-event-conditional → primary（条件概率等式直接解成功率。）；pr-event-independence → supporting（先计算全成功及至少一次成功概率。）
- 2024/17：hm-double-cartesian → primary（累次积分直接计算题给二重积分。）
- 2024/18：hm-tangent-plane → primary（第一问明确要求切平面方程。）；hm-hessian-extrema → supporting（为第二问闭域最值提供内部驻点判别。）；hm-monotonic-extrema → supporting（为第二问提供边界一元最值，尚需与内部候选比较。）
- 2024/19：hm-taylor-remainder → primary（第一问直接证明插值点误差界。）；hm-integral-inequality → primary（第二问由点态界积分直接证明整体误差界。）
- 2024/20：hm-stokes → primary（旋度通量是空间环流的直接计算路线。）；hm-general-jacobian → supporting（椭圆尺度换元用于后续面积积分。）
- 2024/21：la-eigen-diagonalization → primary（直接求题目要求的矩阵幂。）；la-matrix-product → primary（写递推矩阵并乘初始向量直接恢复所求数列。）
- 2024/22：pr-joint-max-min → supporting（提供最大值分布和矩供估计量比较。）；pr-estimate-unbiased → primary（两问直接确定无偏系数与MSE最优系数。）
- 2025/1：hm-monotonic-extrema → primary（导数变号直接判断极值子任务。）
- 2025/2：hm-alternating-series → primary（交错与绝对收敛分类直接判敛散。）
- 2025/3：hm-lhopital → primary（闭端点可积版本下直接求平均极限的一条路线。）；hm-integral-inequality → primary（分段尾部估计是独立完成同一极限的替代路线。）
- 2025/4：hm-double-cartesian → primary（切片换序直接写所求积分表达。）
- 2025/5：la-quadratic-completion → primary（配方直接确定惯性指数。）
- 2025/6：la-system-general → primary（特解加齐次空间直接判解集几何。）
- 2025/7：la-rank-inequalities → primary（秩下界连用直接判等式条件。）
- 2025/8：pr-moment-variance → primary（保留协方差的方差式直接求极值。）
- 2025/9：pr-dist-classic → supporting（先识别伯努利和的精确二项模型。）；pr-poisson-approximation → primary（题目明确要求泊松近似值。）
- 2025/10：pr-test-normal-mean → primary（正态均值检验直接判拒绝域。）
- 2025/11：hm-equivalent-infinitesimal → primary（指数等价替换直接求幂指极限。）
- 2025/12：hm-fourier-half-range → primary（奇延拓收敛值直接求跳点和。）
- 2025/13：hm-direction-gradient → primary（梯度点乘直接求方向导数。）
- 2025/14：hm-green → primary（补线格林转换直接求曲线积分。）
- 2025/15：la-det-parameter → primary（可逆性排除后直接提取参数差。）
- 2025/16：pr-event-conditional → primary（条件事件比直接求目标概率。）
- 2025/17：hm-rational-integral → primary（部分分式积分直接求有理积分。）
- 2025/18：hm-multivariable-chain → supporting（链式偏导把条件化为常微分方程；求f还需解方程及初值。）
- 2025/19：hm-mean-value-proof → primary（相邻区间中值定理直接证明必要方向。）；hm-convex-secant → primary（割线极限和等号排除直接证明充分方向。）
- 2025/20：hm-gauss → primary（补面高斯是侧面通量的直接路线。）
- 2025/21：la-eigen-characteristic → primary（重根特征多项式直接求第一问参数。）
- 2025/22：pr-moment-expectation → primary（第一问直接求赔付期望。）；pr-event-total → primary（第二问条件混合直接求理赔次数分布。）
- 2026/1：hm-multivariable-implicit → primary（隐式偏导直接给所求导数关系。）
- 2026/2：hm-power-radius → primary（奇偶系数半径及端点直接判收敛域。）
- 2026/3：hm-convex-secant → primary（三点割线条件直接判断凹凸命题。）
- 2026/4：hm-triple-integral → primary（球坐标直接计算球锥体积分。）
- 2026/5：la-matrix-elementary → primary（换行逆序直接证明逆矩阵仍为置换矩阵这一选项。）；la-matrix-adjugate → primary（伴随与逆的符号关系直接判断其余伴随矩阵选项。）
- 2026/6：la-vector-representation → primary（列空间包含直接判系统有解推论。）
- 2026/7：la-quadratic-orthogonal → primary（正交标准形直接识别柱面参数。）
- 2026/8：pr-moment-variance → primary（平方期望分解直接求平移极小值。）
- 2026/9：pr-dist-transform → supporting（先识别CDF对应的仿射变换方向。）；pr-moment-variance → primary（均值和方差约束直接解平移尺度参数。）
- 2026/10：pr-event-conditional → primary（尾事件概率比直接完成条件概率判断。）；pr-dist-discrete → supporting（累加概率质量以计算两个尾概率。）
- 2026/11：hm-vector-products → supporting（叉积先得到待求散度的场。）；hm-divergence → primary（题目最终要求散度，按偏导求和直接完成。）
- 2026/12：hm-taylor-limit → primary（展开抵消直接给差式极限。）
- 2026/13：hm-parametric-derivative → primary（参数二阶公式直接给指定点导数。）
- 2026/14：hm-integration-by-parts → primary（分部积分是求目标对数积分的直接路线。）；hm-improper-integral → supporting（对该路线的边界项与余项提供截断取极限控制。）
- 2026/15：la-eigen-characteristic → primary（特征根分支直接求最大根比较范围。）
- 2026/16：pr-moment-covariance → primary（协方差关系直接恢复所求混合矩。）
- 2026/17：hm-hessian-extrema → primary（Hessian判别直接确定二元极值。）
- 2026/18：hm-path-independence → primary（第一问由精确微分条件直接证明单变量恒等关系。）；hm-ode-undetermined → primary（第二问解非齐次方程并用初值确定函数。）
- 2026/19：hm-green → primary（补线格林计算直接求椭圆弧积分。）；hm-definite-symmetry → supporting（补线积分的奇偶抵消用于简化计算。）
- 2026/20：hm-integral-inequality → primary（第一问直接证明半区间积分严格为正。）；hm-mean-value-proof → primary（第二问两次罗尔直接证明二阶导零点存在。）
- 2026/21：la-vector-basis → primary（第一问明确要求证明极大无关组。）；la-matrix-product → supporting（结合律整理降维幂的中间乘积。）；la-matrix-power → supporting（对降维后的小矩阵计算有限幂零展开。）；la-rank-factor-power → primary（第二问直接构造GH并按降维公式求十次幂。）
- 2026/22：pr-joint-max-min → unclassified（独立寿命条件缺失，第一问拟用最小值路线仍待证据，暂不定角色。）；pr-estimate-unbiased → unclassified（其矩依赖尚未核实的寿命联合假设，暂不定角色。）；pr-estimate-mle → primary（第二问明确给出的似然最大化直接求估计值。）

## 计数

| 年份 | 主方法 | 辅助方法 | 待分类 |
| --- | --- | --- | --- |
| 2021 | 27 | 5 | 0 |
| 2022 | 21 | 1 | 0 |
| 2023 | 23 | 1 | 0 |
| 2024 | 24 | 11 | 0 |
| 2025 | 24 | 2 | 0 |
| 2026 | 26 | 7 | 2 |

2026第22题的两条 pending 仍为 pending，角色保留 unclassified；独立性来源缺口未被分类掩盖。
