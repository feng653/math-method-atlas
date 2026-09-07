# 24 张历史课纲缺口方法独立复核

日期：2026-09-08。范围仅为 math-one-2019-audit.json 的 24 个 proposedMethodId。逐条检查适用条件、步骤、公式、易错及手算原创例题；24 张通过，状态改 reviewed。本次未发现需改动数学结论的错误。reviewed 是内容复核，不改变课纲历史审计状态，也不是 2026 官方覆盖认证。

| 方法 | 独立核算依据 |
|---|---|
| hm-function-properties | 导数 2x/(1+x²)²；偶性、值域 [0,1) 与先减后增相容 |
| hm-limit-definition | 误差恰为 3|x−2|，δ=ε/3 全称成立 |
| hm-important-limits | 三角常数比 3/2；幂式重新组合指数 6 |
| hm-plane-tangent-normal | 切向量 (1,2)，法向方向 (2,−1)，两线均过 (1,1) |
| hm-inverse-derivative | f(1)=2、f′(1)=4；全域导数正保证分支唯一 |
| hm-curvature-circle | p=0、q=2 给半径及圆心纵坐标均 1/2 |
| hm-revolution-area | 2π∫₀¹x√2 dx=π√2；不含底盖 |
| hm-cross-section-average | ∫₀¹x²=1/3；∫₀²x²/2=4/3 |
| hm-pressure-gravity | 深度积分为 2；距离反平方积分为 1/2，杆引力同向 |
| hm-direction-cosines | 模为 3；归一化分量平方和 1 |
| hm-revolution-cylinder | 半径 z² 平方后 z⁴；平移圆保留径向条件 |
| hm-second-taylor | 指数的全部一二阶导为 1，混合项为 xy |
| hm-exact-ode | 势函数梯度为 (2xy+1,x²+2y)，初值常数 1 |
| la-block-operations | 乘回单位矩阵，上右元素 −3/4+3/4=0；一般式块顺序正确 |
| la-subspace-equivalence | 基向量独立且张成齐次平面；仿射例不含零 |
| la-inertia-canonical | 两尺度平方为 2 和 8，可逆替换后惯性 (1,1) |
| pr-geometric-probability | 两补三角形总面积 1/4 |
| pr-event-union | 容斥为 0.9，恰好一项为 0.7，概率条件相容 |
| pr-poisson-approximation | λ=2；精确值 1−0.998¹⁰⁰⁰ 与近似 1−e⁻² 均正确 |
| pr-discrete-joint | 条件列和 0.6，条件比 2/3；合并对角概率 0.1/0.5/0.4 |
| pr-bivariate-normal | 条件均值 1、方差 3/4；和方差 3；联合正态限定充分 |
| pr-chebyshev-lln | 独立方差和 ≤4n，偏差概率 ≤4/(nε²) |
| pr-two-means-interval | 合并方差 4、自由度18、半宽约1.8791；共同方差假设明确 |
| pr-two-variances-interval | F₂,₂ 分布函数 x/(1+x)，分位数1/19及19，反解比值区间正确 |

限制：只验证给出的数学方法与原创示例，没有把关联题目的候选状态自动升级。后续真题关联仍需独立读取对应题面。

## 2021 / 2026 关联独立复核

重新打开两卷来源，并独立视觉读取 TEMP/math-atlas-exam-review 的 2021 全 4 页、2026 全 12 页；2021 第 14 题另读郑州工商学院 15 页版本的第 3 页完整题面。核验依据是题干条件和具体方法操作，不采信转载参考答案或初录 note。

2021：32 条通过，包括闭柱面高斯公式、非零参数导数、正定谱平方根等适用条件。第 7 题版本限定不同写入 sourceNote；这里只认证方法适用，不认证选择项或官方真实性。

2026：30 条通过；第 22 题最小值分布与无偏缩放共 2 条仍 pending，因为题面没有明确寿命独立性，不能从转载解答添加假设。其已给定似然的最大化操作可独立核验。第 3 题仍为空关联，既有差商端点排印问题又缺直接操作卡，已写 sourceNote。第 11 题仅验证叉积部分，第 21 题的幂零展开作用于降维后矩阵；没有把这些基础关联冒充整题完整方法链。

没有改动上述来源文档的初录快照；当前状态以 question JSON 为准。5 张后续新方法本轮尚未纳入审查。
