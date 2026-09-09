# 把内层变限积分作为分部因子

将内层记为 $F(x)=\int_a^x f(t)dt$，连续点有 $F'=f$。外层选择可积出的核作 $dv$，分部后检查乘积边界；零端有奇性时先用 $\varepsilon$ 截断。

**自编例题。** 求

$$
I=\int_0^1\frac{\int_0^x t^2dt}{x^2}\,dx.
$$

记 $F=x^3/3$，在 $[\varepsilon,1]$ 取 $dv=dx/x^2,v=-1/x$，得

$$
I_\varepsilon=\left[-\frac{F(x)}x\right]_\varepsilon^1
+\int_\varepsilon^1\frac{F'(x)}x dx
=-\frac13+\frac{\varepsilon^2}3+\frac{1-\varepsilon^2}2\longrightarrow\frac16.
$$

本例 $F(x)/x\to0$ 已具体证明，不能把这种结论套给未知 $F$。[2013-15](../questions/2013-301-15.md)缺外层核，零端是否可去仍待审；上例不用于替它判定奇性。

[返回工具箱](README.md)
