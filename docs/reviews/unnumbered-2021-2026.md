# 2021–2026 无编号作答目标审计

2026-09-08。范围是六卷subquestionAudit.expectedCount=0的全部115题。复用上一批已全读题面/缓存，并对2022第17题和2025第1题重新渲染原PDF核对根式与平方；编号为零仅表示未划分显式子问，不能据此忽略并列目标。表中的作答目标为原创概括，所有既有来源、方法关联和子问结构保留。

## 复合任务与修复证据

- 2022/17 新增 `hm-concavity-asymptote`：当前网页第17题与原转载PDF物理第5页的题干一致：系数为1/(2√x)。初值解y=2x+exp(1−√x)，直接代回满足方程且y(1)=3。x→∞时y/x→2、y−2x→0，故渐近线为y=2x；x→0+时y→e有限，没有竖直渐近线。
- 2022/20 新增 `hm-integral-inequality`：当前来源第20题：对f″≥0推出积分不等式的方向，令m=(a+b)/2、h=|b−a|/2。f′单调不减使H(t)=f(m+t)+f(m−t)−2f(m)满足H(0)=0、H′(t)≥0。积分0至h得到平均积分≥f(m)，交换a,b时平均积分不变。逆方向仍由原泰勒关联处理。
- 2022/22 新增 `pr-moment-variance`：当前来源第22题明确还要求估计量方差。似然估计为θ̂=(ΣXi+ΣYj/2)/(n+m)；两样本及样本内部独立，Var(Xi)=θ²、Var(Yj)=4θ²，故Var(θ̂)=[nθ²+m·4θ²/4]/(n+m)²=θ²/(n+m)。
- 2025/1 新增 `hm-concavity-asymptote`：当前PDF物理第1页第1题：f′(x)=exp(x²)sin x在0左右由负转正且f″(0)=1；g(x)=(∫₀ˣexp(t²)dt)sin²x是光滑函数，展开后g″(x)=6x+O(x³)，因此g″在0两侧变号，(0,0)为g图像拐点。只查f的极值不足以判全题选项。

- 2021/18：已有收敛半径与求和卡分别完成两目标。几何项要求x>0，幂级数交集为(0,1]；0<x<1时和为1/(eˣ−1)+x+(1−x)ln(1−x)，x=1处和为1/(e−1)+1，端点另验。没有构造虚假子问。
- 2024/21：已有矩阵乘法与对角化能写A、算Aⁿ并恢复三条数列。独立算得谱−2、0、1，可取P列向量(−1,2,0)、(1,−1,1)、(2,−2,3)，P⁻¹α₀=(−1,−10,4)。故n≥1时xₙ=8+(−2)ⁿ、yₙ=−8−2(−2)ⁿ、zₙ=12；n=0仍用原初值，不把零特征值的正整数幂公式无条件外推。第一步直接乘A得到(6,−4,12)核对成立。
- 2021/9 两条主卡分别核验无偏与方差；2026/8 平方期望分解同时给极小点与值；2026/7 正交谱同时给柱面参数和标准形，均已有直接路线。
- 2023/3 参数公式用于非零处，零点差商及其左右变化判断一二阶可导/连续；2025/2 同时检查两级数的绝对与条件收敛，不能只查交错符号。原卡/引用足以操作，未增加同义入口。
- 2022/10 的相关系数卡、2025/18 的欧拉方程卡已由此前修复提供最终求值入口，本轮未重复实现。2025/19 的两个方向已有中值与凸割线入口。
- 2026/5 原两条主关联分别处理逆置换矩阵与伴随符号选项，不因同一选择题合并掉判断目标。2026/11 叉积是中间步骤，散度是最终任务，已有主辅划分正确。

## 实际逐题检查集合

每行列出本轮确实核对的作答目标及当前直接主方法；未列出的17道有编号题不在本轮范围。父方法有入口不等于声称所有替代解法穷尽，来源排印限制沿用各题sourceNote。

### 2021

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 连续与可导判别 | hm-derivative-definition |
| 2 | 复合路径偏导和全微分 | hm-multivariable-chain |
| 3 | 泰勒三系数 | hm-taylor-limit |
| 4 | 积分采样和式 | hm-riemann-sum |
| 5 | 正负惯性指数 | la-quadratic-completion |
| 6 | 两个正交系数 | la-vector-orthogonal |
| 7 | 分块秩选项 | la-matrix-rank |
| 8 | 条件概率命题 | pr-event-total |
| 9 | 无偏性与方差 | pr-estimate-unbiased、pr-moment-variance |
| 10 | 第二类错误概率 | pr-test-errors |
| 11 | 反常积分值 | hm-improper-integral |
| 12 | 参数二阶导 | hm-parametric-derivative |
| 13 | 初值特解 | hm-ode-euler |
| 14 | 闭面通量 | hm-gauss |
| 15 | 余子式列和 | la-matrix-adjugate |
| 16 | 抽球相关系数 | pr-moment-correlation |
| 17 | 抵消型极限 | hm-taylor-limit |
| 18 | 收敛域及和函数 | hm-power-radius、hm-power-sum |
| 19 | 距离全局最大值 | hm-lagrange-multipliers |
### 2022

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 极限与点值命题 | hm-squeeze |
| 2 | 函数值及导数参数 | hm-multivariable-chain |
| 3 | 复合数列极限命题 | hm-inverse-limit |
| 4 | 三个积分排序 | hm-integral-inequality |
| 5 | 可对角化充分条件 | la-eigen-diagonalization |
| 6 | 两个系统同解 | la-system-homogeneous |
| 7 | 向量组等价参数 | la-vector-representation |
| 8 | 线性组合方差 | pr-moment-variance |
| 9 | 样本平方均值概率界 | pr-moment-inequality |
| 10 | 相关系数 | pr-moment-correlation |
| 11 | 最大方向导数 | hm-direction-gradient |
| 12 | 对数定积分 | hm-integration-by-parts |
| 13 | 恒成立参数范围 | hm-monotonic-extrema |
| 14 | 收敛域阈值 | hm-ratio-root-test |
| 15 | 矩阵差 | la-matrix-product |
| 16 | 条件事件概率 | pr-event-conditional |
| 17 | 初值曲线渐近线 | hm-ode-linear-first、hm-concavity-asymptote |
| 18 | 平面区域积分 | hm-double-polar |
| 19 | 空间环流 | hm-stokes |
| 20 | 二阶非负与积分界等价 | hm-taylor-remainder、hm-integral-inequality |
| 22 | 似然估计及其方差 | pr-estimate-mle、pr-moment-variance |
### 2023

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 全部渐近线 | hm-concavity-asymptote |
| 2 | 有界解参数 | hm-ode-characteristic |
| 3 | 一二阶可导与连续性 | hm-derivative-definition |
| 4 | 绝对收敛充要关系 | hm-series-comparison |
| 5 | 三个分块秩排序 | la-matrix-rank |
| 6 | 不可对角化选项 | la-eigen-diagonalization |
| 7 | 交空间全部向量 | la-vector-representation |
| 8 | 绝对偏差期望 | pr-moment-expectation |
| 9 | 方差比分布 | pr-sample-t-f |
| 10 | 无偏比例系数 | pr-estimate-unbiased |
| 11 | 等价小量参数 | hm-taylor-limit |
| 12 | 切平面 | hm-tangent-plane |
| 13 | 余弦偶系数和 | hm-fourier-half-range |
| 14 | 平移定积分 | hm-definite-symmetry |
| 15 | 坐标平方和 | la-vector-coordinate |
| 16 | 离散同值概率 | pr-event-independence |
| 18 | 二元函数全部极值 | hm-hessian-extrema |
| 19 | 闭面通量 | hm-gauss |
### 2024

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 两个函数奇偶性 | hm-definite-symmetry |
| 2 | 有向通量转换 | hm-surface-integrals |
| 3 | 偶系数加权和 | hm-power-sum |
| 4 | 导数与极限命题 | hm-derivative-definition |
| 5 | 系数与增广秩 | la-system-consistency |
| 6 | 整体相关与两两无关参数 | la-vector-dependence |
| 7 | 矩阵幂的迹 | la-eigen-diagonalization |
| 8 | 正态概率阈值 | pr-dist-normal |
| 9 | 条件矩协方差 | pr-moment-covariance |
| 10 | 绝对差同分布选项 | pr-joint-convolution |
| 11 | 幂指极限参数 | hm-taylor-limit |
| 12 | 复合二阶导 | hm-multivariable-chain |
| 13 | 奇指标系数极限 | hm-equivalent-infinitesimal |
| 14 | 方程初值解 | hm-ode-separable |
| 15 | 双线性不等式参数 | la-quadratic-completion |
| 16 | 重复试验成功率 | pr-event-conditional |
| 17 | 曲边区域积分 | hm-double-cartesian |
| 20 | 空间环流 | hm-stokes |
| 21 | 递推矩阵、矩阵幂及数列值 | la-eigen-diagonalization、la-matrix-product |
### 2025

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 极值与拐点 | hm-monotonic-extrema、hm-concavity-asymptote |
| 2 | 两个级数的绝对条件收敛 | hm-alternating-series |
| 3 | 函数极限与平均极限命题 | hm-lhopital、hm-integral-inequality |
| 4 | 积分换序 | hm-double-cartesian |
| 5 | 正惯性指数 | la-quadratic-completion |
| 6 | 仿射解集几何 | la-system-general |
| 7 | 四条秩结论 | la-rank-inequalities |
| 8 | 方差最大值 | pr-moment-variance |
| 9 | 泊松近似概率 | pr-poisson-approximation |
| 10 | 单侧拒绝域 | pr-test-normal-mean |
| 11 | 幂指极限 | hm-equivalent-infinitesimal |
| 12 | 傅里叶跳点值 | hm-fourier-half-range |
| 13 | 方向导数 | hm-direction-gradient |
| 14 | 开曲线积分 | hm-green |
| 15 | 不同零空间的参数差 | la-det-parameter |
| 16 | 条件下恰一事件概率 | pr-event-conditional |
| 17 | 有理定积分 | hm-rational-integral |
| 18 | 由偏导约束求函数 | hm-ode-euler |
| 19 | 严格导数单调与割线等价 | hm-mean-value-proof、hm-convex-secant |
| 20 | 旋转曲面通量 | hm-gauss |
### 2026

| 主题号 | 作答目标 | 直接入口 |
| --- | --- | --- |
| 1 | 隐函数偏导组合 | hm-multivariable-implicit |
| 2 | 奇偶系数收敛域 | hm-power-radius |
| 3 | 凹凸与割线单调命题 | hm-convex-secant |
| 4 | 球锥三重积分转换 | hm-triple-integral |
| 5 | 置换逆及伴随命题 | la-matrix-elementary、la-matrix-adjugate |
| 6 | 列表示与系统有解命题 | la-vector-representation |
| 7 | 柱面参数及标准形 | la-quadratic-orthogonal |
| 8 | 平方期望极小点和值 | pr-moment-variance |
| 9 | 分布变换尺度与平移 | pr-moment-variance |
| 10 | 混合离散尾概率命题 | pr-event-conditional |
| 11 | 叉积场的散度 | hm-divergence |
| 12 | 差式极限 | hm-taylor-limit |
| 13 | 参数二阶导 | hm-parametric-derivative |
| 14 | 对数反常积分 | hm-integration-by-parts |
| 15 | 最大特征根比较范围 | la-eigen-characteristic |
| 16 | 混合矩 | pr-moment-covariance |
| 17 | 二元函数全部极值 | hm-hessian-extrema |
| 19 | 椭圆弧积分 | hm-green |

结果：115题均检查，新增4条既有方法父级verified/primary入口，无需扩卡；没有新建子问或schema。2026第22题属于有编号题，本轮未触碰，两条pending不变。四条新增关联交根agent二审。

另按根agent要求复查2024第18题：原PDF明确为切平面与三个坐标面所围有界区域的投影，D为闭三角形。保留“闭域最值”摘要；旧共用note的“无界端”是笔误，本轮仅纠正为边界与角点，不改其已有数学路线。

根agent独立复核四条新路线：初值解的衰减余项给斜渐近线且零端有限；对称函数H的单调性经积分给充分方向，未与原泰勒必要方向混淆；双样本缩放方差为θ²/(n+m)；解析g的局部二阶导主项6x保证变号，拐点判据成立。完整内容check的46项测试通过，数学复核与结构校验分别记录。
