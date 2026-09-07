# 高数基础补强：待第二人审核

2026-09-08。依据 calculus-basic-subrequirements.md 的实际差距，在 17 张既有卡内补写；无新卡、无新 topic。下列全部为 draft，不以自算替代独立复核。每张保留原方法 ID，避免重复实现。

| 方法 ID | 新增操作 / 可复算证据与边界 |
| --- | --- |
| hm-linear-ode-structure | 阶、初值、原/齐次特解、基本解组独立性；y″−y=2 的基 W=−2，零初值得 eˣ+e⁻ˣ−2；eˣ、2eˣ 不能凑二阶通解 |
| hm-ode-reduction | 三种降阶；y‴=6 连积，缺 y 的 p′=p/x，缺 x 的 p dp/dy=2yp² 给隐式积分，另保留所有常值解 |
| hm-ode-characteristic | 一般重数及复共轭成对规则；(D−1)³y=0 得三独立常数乘 1、x、x² |
| hm-ode-euler | 右端 g(x) 同步换 g(±eᵗ)；非齐次例 x²y″−xy′+y=x² 的特解 x²，不能跨 x=0 自动延拓 |
| hm-series-basic | 有限项不变敛散、已收敛级数线性及连续有限分组；1−1+… 的分组反例阻止逆推和任意重排 |
| hm-series-comparison | p 级数 iff p>1；1/(n²+n) 比 p=2 收敛，1/√(n²+n) 比 p=1 发散 |
| hm-alternating-series | 一般实/复项绝对收敛与条件收敛定义、绝对⇒原收敛；保留原交错调和反例，绝对值发散不能推出原发散 |
| hm-power-sum | 内部连续、逐项微积分且半径不变；对几何级数求导和积分；−1 处积分后级数收敛而导数级数通项不趋零 |
| hm-partial-total-differential | 可微⇒连续及偏导存在；xy/(x²+y²) 补零反例，x²sin(1/x) 扩成二元函数给可微但偏导不连续；补多元全微分形式不变性 |
| hm-multivariable-chain | C² 二阶链式完整五项；z=(x²+y)²+(xy)² 的 zxx=12x²+4y+2y²，经直接与链式两算一致 |
| hm-space-tangent | 交线正则条件 ∇F×∇G≠0；柱面与斜平面交线在 (0,1,0) 的切向 (1,0,1)，法平面 x+z=0 |
| hm-tangent-plane | 现有梯度切平面配明确法线式；抛物面例法线 (1,1,2)+t(2,2,−1)，梯度退化仍不可用 |
| hm-recursive-limit | 不再限自治；先单调有界，求数值再合法传限。显含 n 例 aₙ=1−1/n，递推直接取限只得 L=L；保留自治平方根例 L=2 |
| hm-limit-definition | 唯一、局部有界、非零极限保号及有限四则；定义证明后用分母极限 3 得商 5/3，不允许除零极限 |
| hm-newton-leibniz | 原函数族与区间内相差常数、定积分线性/区间可加与方向；反向 ∫₁⁰x=−1/2，变上下限两链式项 |
| hm-substitution-integral | 常见幂/对数/指数/三角/反三角原函数表和实定义域；1/(4+x²) 换元得 arctan(x/2)/2，1/x 两侧常数可不同 |
| hm-space-angle-distance | 点线叉积距离及线线/线面角；(1,2,3) 到 z 轴 √5、原点面例距离 3 |

2011 第 18 题另重新读了 [实际题面](https://www.csgraduates.com/study_methods/math/math1/2011/)：相邻差用短区间 1/t 积分估界为负，调和部分与 ∫₁ⁿ1/t 比较给正下界，所以一般单调有界方法直接适用，不需要自治递推。递推卡仍 draft，未自行升级该题的 pending 关联；交由第二 reviewer 核完卡后处理。题面未入仓库，例题采用不同的裂项数列。

content:check 通过仅证明结构；2026 官方版本及最终子要求全覆盖仍未核验。本轮不把“已补薄项”写成“课纲已全部完成”。
