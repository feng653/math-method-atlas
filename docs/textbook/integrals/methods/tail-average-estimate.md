# 分离固定首段证明积分平均极限

若 $f$ 在每个 $[0,A]$ 可积且 $f(x)\to L$，固定足够大的 $A$，尾部满足 $|f-L|<\varepsilon$。首段是固定数，除以 $x$ 后趋零；这比无条件求导分式更直接。

**真题已摘录任务的原创证明。** [2025-03](../questions/2025-301-03.md)采用闭零端版本，保证首段有定义。对 $x>A$，令 $C_A=\int_0^A|f(t)-L|dt<\infty$，则

$$
\left|\frac1x\int_0^xf(t)dt-L\right|
\le\frac{C_A}x+\frac1x\int_A^x|f(t)-L|dt
\le\frac{C_A}x+\varepsilon.
$$

先令 $x\to\infty$，再令 $\varepsilon\downarrow0$，得到平均值趋于 $L$。这完成该摘录支持的极限结论，不恢复缺失选项。

若只在 $(0,\infty)$ 可导，$f(t)=1/t$ 虽在无穷远趋零，首段积分却不存在；所以题页记录的开闭端点来源冲突不能删去。

[返回工具箱](README.md)
