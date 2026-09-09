# 积分平均值尾部估计

本工具以积分学为先修。若 $f$ 在每个 $[0,A]$ 上可积且 $f(t)\to a\in\mathbb R$，则其长区间平均值趋于 $a$。方法是切开固定首段与可统一控制的尾段，不需要整个积分趋无穷。

**真题片段演算：[2025-301-03](../questions/2025-301-03.md)。** 使用该页闭端点可导版本，其连续性足以保证有限首段可积。只推导平均值结论。

对任意 $\varepsilon>0$，由尾部极限选 $A>0$，使 $t\ge A$ 时 $|f(t)-a|<\varepsilon$。对 $x>A$，拆分并估计：

$$
\left|\frac1x\int_0^x f(t)\,dt-a\right|
\le\frac1x\left|\int_0^A(f(t)-a)\,dt\right|
+\frac1x\int_A^x|f(t)-a|\,dt.
$$

令固定常数 $C=|\int_0^A(f-a)|$，则右端不超过 $C/x+\varepsilon$。再取 $x>C/\varepsilon$，误差小于 $2\varepsilon$，因此

$$
\lim_{x\to+\infty}\frac1x\int_0^x f(t)\,dt=a.
$$

易错处是让切分点随 $x$ 随意变化，使“首段常数”不再固定。若只在 $(0,+\infty)$ 可导，零端可能不可积，例如 $1/t$；必须另核对。可导条件下另一条路线见[分母无穷型洛必达](lhopital-infinite-denominator.md)。

[返回工具箱](README.md)
