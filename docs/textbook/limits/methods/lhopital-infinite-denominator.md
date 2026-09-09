# 分母无穷型洛必达

本工具以微分学为先修。这里使用分母绝对值趋于无穷的版本：在趋近端点的一侧区间上 $f,g$ 可导，$g'\ne0$，$|g|\to\infty$，且 $f'/g'\to L\in\mathbb R$，则 $f/g\to L$。不要求分子也趋于无穷。

以 $x\to+\infty$ 为例说明这个有限 $L$ 版本。给定 $\varepsilon>0$，选固定 $A$，使 $t>A$ 时 $|f'(t)/g'(t)-L|<\varepsilon$。对 $[A,x]$ 用柯西中值定理，得到

$$
\left|\frac{f(x)-f(A)}{g(x)-g(A)}-L\right|<\varepsilon.
$$

因为 $g'$ 不为零，分母差不为零。又因 $|g(x)|\to\infty$，固定首段项除以 $g(x)$ 趋零，且 $(g(x)-g(A))/g(x)\to1$，所以原商趋于 $L$。其他单侧端点同样固定一个区间内的点作估计。

**真题片段演算：[2025-301-03](../questions/2025-301-03.md)。** 使用该页选定的闭端点版本：$f$ 在 $[0,+\infty)$ 可导且 $f(x)\to a\in\mathbb R$。只证明积分平均结论。设 $F(x)=\int_0^x f(t)\,dt$，则由连续性与微积分基本定理，$F'(x)=f(x)$。分母 $x\to+\infty$，导数为 $1$，故

$$
\frac{F'(x)}{(x)'}=f(x)\to a,
\qquad \frac1x\int_0^x f(t)\,dt\to a.
$$

没有用到 $F(x)$ 趋无穷；例如 $f\equiv0$ 时它始终为零。零端只有开区间条件时，必须另证积分存在，不能照搬。无需可导的更弱条件证明见[积分平均尾部估计](integral-average-tail.md)。

[返回工具箱](README.md)
