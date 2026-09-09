# 无穷小比值定阶

比较无穷小要固定同一趋近过程和基准 $\beta$，确认分母最终非零，再求 $\alpha/\beta^k$。比值趋于非零有限常数说明是关于该基准的 $k$ 阶；等于 $1$ 才是与 $\beta^k$ 等价。非整数幂应先检查基准正性。

**自编例题。** 当 $x\downarrow0$ 时，比较 $\alpha=\sqrt{1+x^2}-1$ 与 $\beta=x$。

有理化后

$$
\frac\alpha{x^2}
=\frac1{\sqrt{1+x^2}+1}\to\frac12.
$$

因此 $\alpha$ 是关于 $x$ 的二阶无穷小，且 $\alpha\sim x^2/2$。进一步，

$$
\frac\alpha x
=\frac{x}{\sqrt{1+x^2}+1}\to0,
$$

所以 $\alpha=o(x)$，不是与 $x$ 同阶。

易错处是把“大 $O$”当作比值存在。例如 $x(2+\sin(1/x))=O(x)$，但它除以 $x$ 的比值不收敛。相消后的首项须先用[泰勒展开](taylor-leading-term.md)算准，再判阶。

[返回工具箱](README.md)
