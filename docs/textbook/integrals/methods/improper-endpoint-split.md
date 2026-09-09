# 逐个瑕点与无穷端独立截断

先找内部奇点、有限奇端及无穷端，选正常内点拆分；每一段用独立截断变量取极限。所有段都收敛才能相加，不能让发散的正负部分相消。

**自编例题。** 对 $\int_{-1}^1dx/x$，左段为

$$
\int_{-1}^{-\varepsilon}\frac{dx}x=\ln\varepsilon\to-\infty,
\qquad
\int_\delta^1\frac{dx}x=-\ln\delta\to+\infty.
$$

故普通反常积分发散，即使规定 $\delta=\varepsilon$ 后总和恒为零，也只得到主值。

对照 $\int_0^\infty dx/[\sqrt x(1+x)]$，必须在一处分成零端与无穷端：前者类似 $x^{-1/2}$，后者类似 $x^{-3/2}$，两端都收敛。不同端点的幂阈值不可混用，见[幂与对数比较](power-log-comparison.md)。

[返回工具箱](README.md)
