# 高数方法独立复核

2026-09-08；范围：`methods/hm-*.json` 的 77 条现有方法。复核者为未编写这批内容的独立 agent，逐条检查条件、公式、步骤、易错点、例题推导及关联含义。77 条通过本轮数学复核并标为 `reviewed`；该状态不表示人工专家背书，也不代表 2026 官方课纲已完整核验。附加检查：`pnpm content:check` 通过，77 条公式均通过 KaTeX 解析，77 个 ID 与下表逐行对应；这些结构检查不代替数学复核。

## 修正

- 隐函数、隐方程组及切平面补齐邻域 C¹ 和非退化条件；拉格朗日乘子补目标光滑性及全局最值紧致性条件。
- 曲面积分标明 `(-g_x,-g_y,1)` 对应向上法向；Green/Gauss/Stokes 补区域、边界及可定向条件；球坐标明确极角定义。
- Fourier 写出可执行充分条件、完整系数及半区间余弦系数；Taylor 余项修正例题 x=0 时不能要求 0<ξ<x 的边界表述。
- 单调性增加跨不可导点连续性；功积分改为力的有符号分量；降阶方程明确局部 y′≠0；待定系数明确共振重数 s。
- 渐近线步骤补计算 k、b 和单侧判据；根比值判别补最终非零及极限存在条件；换元积分明确 F′=f。
- 修正 `sin` LaTeX 命令、补全势函数积分式；全部例题显式注明自编。16 条方法重选关联，移除如 Fourier→Taylor、交错级数→求和函数等缺少直接用途的推荐，补空关联。
- 原 77 个例题未发现数值答案错误；以下为逐条重算的关键依据。部分卡包含多个方法分支，仅一个例题的限制另列于缺口，不把例题当作全部分支验证。

## 逐条核算证据

| 方法 ID（省略 hm-） | 独立核算 / 判据 |
| --- | --- |
| alternating-series | 1/n 单调趋零；绝对值为调和级数，条件收敛。 |
| arc-work-integral | y′=√x，∫₀³√(1+x)dx=14/3。 |
| cauchy-mean-value | 比值=2/(3ξ)，乘 ab 后由 a<ξ<b 得所列严格界。 |
| chain-log-differentiation | d(x ln x)/dx=ln x+1，乘回 x^x。 |
| concavity-asymptote | y″=6x 在 0 变号；κ(1)=6/(10√10)。 |
| continuity-piecewise | sin x/x 双侧极限 1；与 a 比较。 |
| definite-symmetry | x→π−x 后 2I=π∫sin x=2π。 |
| derivative-definition | 差商 h sin(1/h) 的绝对值≤|h|→0。 |
| differential-approximation | √4=2，导数 1/4，增量 0.04，近似 2.01。 |
| direction-gradient | (2,4)·(3/5,4/5)=22/5。 |
| double-cartesian | 内积分 3x²/2，外积分 1/2。 |
| double-polar | 径向被积式 r²×r，角积分 2π，结果 π/2。 |
| equivalent-infinitesimal | 两主部分别 2x、3x，极限 2/3。 |
| fourier-half-range | bₙ=2(1−(−1)^n)/(nπ)，仅奇项非零；接缝平均 0。 |
| fourier | 分部积分得 bₙ=2(−1)^(n+1)/n，aₙ=0；接缝 ±π 平均 0。 |
| function-domain | ln(x−1) 的定义域 (1,∞)、值域 R；逆为 1+e^x。 |
| gauss | div(x,y,z)=3，乘球体积 4π/3 得 4π。 |
| general-jacobian | 逆变换行列式 −1/2，绝对值 1/2；新域单位方形。 |
| green | Q_x−P_y=2，乘单位圆面积得 2π。 |
| hessian-extrema | 唯一驻点原点，A=C=2、B=1，D=3>0，严格极小。 |
| implicit-derivative | F_y=4，y′=−2/4=−1/2；切线经过 (1,2)。 |
| improper-integral | 截断积分 1−1/R→1；无跨奇点操作。 |
| infinitesimal-order | (1−cos x)/x²→1/2，同阶但非等价。 |
| integral-area-volume | π∫₀¹(x²−x⁴)dx=π(1/3−1/5)=2π/15。 |
| integral-inequality | 内部严格界 1/2<f<1，连续积分保留严格不等式。 |
| integral-mass-centroid | M=1/2，一阶矩 1/3、1/6，质心 (2/3,1/3)。 |
| integration-by-parts | 对 (x−1)e^x 求导恢复 xe^x。 |
| intermediate-value | 端点 −1、1，导数 3x²+1>0，存在且唯一。 |
| lagrange-multipliers | y=2λx、x=2λy 导出 y=±x；值 ±1/2，圆紧致。 |
| leibniz-high-derivative | 多项式仅 0、1 阶导非零，给 (x+n)e^x。 |
| lhopital | ∞/∞，分母导数 1，导数比 1/x→0。 |
| line-first-kind | 参数速度模 1，∫₀²πcos²t dt=π。 |
| line-plane-equations | 展开 2(x−1)−y+3(z−2)=0 得常数 −8。 |
| line-second-kind | 参数 x=y=t，使 xdy−ydx 恒为 0。 |
| linear-ode-structure | 线性算子作用于差得到右端 1−1=0。 |
| mean-value-proof | 对 ln t 的中值点 ξ>1，x/ξ<x。 |
| monotonic-extrema | 候选 −2,−1,1,2 的值 −2,2,−2,2。 |
| multivariable-chain | 2u·1+1·y=2x+3y。 |
| multivariable-implicit | 点满足方程；F_z=4，偏导 −1/2、−1。 |
| multivariable-limit | |x²y/(x²+y²)|≤|y|≤r→0。 |
| newton-leibniz | 上端贡献 2xe^(x²)，下端贡献 −e^x。 |
| ode-bernoulli | z=1/y 导出 z′−z=−1；回代 y=1/(1+Ce^x)，另保留零解。 |
| ode-characteristic | 特征多项式 (r−1)²，两个独立解 e^x、xe^x。 |
| ode-euler | 对数换元得 Y″−2Y′+Y=0，回代 x(C₁+C₂ln x)。 |
| ode-homogeneous | y=ux 后 xu′=1，积分得 x(ln x+C)。 |
| ode-linear-first | (e^xy)′=e^x，初值确定 C=−1。 |
| ode-modeling | 3e^(−2t) 的导数为 −2 倍自身，初值 3，正且趋 0。 |
| ode-reduction | x³/3+C₁x+C₂ 二阶导等于 2x。 |
| ode-separable | 2e^(x²/2) 的导数为 x 倍自身，初值 2。 |
| ode-undetermined | L[Axe^x]=2Ae^x，A=1/2，加齐次两常数。 |
| parametric-derivative | y′/x′=3t/2，再按 x 求导得 3/(4t)。 |
| partial-total-differential | x²y 的偏导为 2xy、x²，目标点取 4、1。 |
| path-independence | u=x²y，梯度=(2xy,x²)，端点差 2。 |
| power-indeterminate | 对数极限 ln(1+2x)/x→2，指数还原 e²。 |
| power-radius | R=1；+1 端发散、−1 端交错收敛，区间 [−1,1)。 |
| power-sum | |x|<1 内几何级数求导得到 (1−x)^−2。 |
| quadric-surfaces | ++−=1 为单叶双曲面；z=0 截面为单位圆。 |
| ratio-root-test | 相邻项比 (n+1)/(2n)→1/2，绝对收敛。 |
| rational-integral | 部分分式 1/[2(x−1)]−1/[2(x+1)]，原函数求导核对。 |
| recursive-limit | [1,2) 不变且递增；极限方程根 2、−1，只保留 2。 |
| riemann-sum | 项写成 (1/n)/(1+(k/n)²)，积分 arctan(1)=π/4。 |
| series-basic | 部分和 1−1/(N+1)→1。 |
| series-comparison | 与 1/n² 比趋 1，收敛。 |
| space-angle-distance | 点代平面式得 9，法向模 3，距离 3。 |
| space-intersections | z=1 代球面得 x²+y²=3，确可恢复实数 z。 |
| space-tangent | r′(1)=(1,2,3)，法平面法向即该向量。 |
| squeeze | 绝对值≤x²→0。 |
| stokes | 旋度=(0,0,1)，向上圆盘通量 π，与边界方向一致。 |
| substitution-integral | sin(x²) 求导为 2x cos(x²)。 |
| surface-integrals | 图形面积因子 √(1+1+1)=√3，投影面积 1。 |
| tangent-plane | 梯度 (2,2,−1)，点法式化 z=2x+2y−2。 |
| taylor-expansion | 几何级数代 −x²，|x|<1；±1 端通项不趋零。 |
| taylor-limit | e^x 的二次主部 x²/2，除 x² 得 1/2。 |
| taylor-remainder | 二阶导 e^ξ≤e^0.1，误差≤e^0.1/200；x=0 单列。 |
| trig-substitution | x=2sin t、cos t>0，结果 arcsin(x/2)，求导核对。 |
| triple-integral | 球径积分 a³/3、极角积分 2、方位角积分 2π，得 4πa³/3。 |
| vector-products | 点积 1、模乘 √5、叉积 (0,0,2)，面积 2。 |

## 课纲与内容缺口

1. 现有考点大多与方法逐一对应，没有独立读取并核对 2026 正版课纲。因此 77/77 表示现有卡审校通过，不是官方要求覆盖率。
2. 缺少明确独立条目：极限四则/复合运算与存在性条件、无穷大量比较、连续函数有界及最值定理、反函数求导、基本积分公式和三角有理式积分、极坐标面积/弧长、旋转曲面构造。需对照官方课纲判断必须项和补充项后编写。
3. 多个独立可选方法被合并：凹凸/拐点/渐近线/曲率，面积/旋转体体积，弧长/功，空间夹角/点面距/投影，曲面积分两类，三重积分三种坐标。应逐步拆成稳定独立 ID；不能仅因父卡有一个例题就认定各分支已有完整算例。
4. 部分宽卡缺分支例题：二阶隐函数及隐方程组、一般重根复根常系数方程、含三角右端待定系数、缺 x 降阶、约束非正则点、通量投影、积分换序。当前公式步骤已核对，后续仍需新增独立实例。
5. 本轮只审方法，不核验任何真题来源或考试次数；自编题不进入频次。
