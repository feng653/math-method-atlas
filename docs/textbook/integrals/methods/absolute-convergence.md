# 先比较绝对值以证明收敛

对振荡或变号积分，若绝对值能压在已知可积函数之下，便可证明绝对收敛，进而收敛。仍须逐个反常端检查；绝对值积分发散不能直接推出原积分发散。

**自编例题。** 判断 $\int_1^\infty\sin(x^2)x^{-2}dx$。因为

$$
\left|\frac{\sin(x^2)}{x^2}\right|\le\frac1{x^2},
\qquad\int_1^\infty\frac{dx}{x^2}=1,
$$

它绝对收敛。进一步对任意 $R\ge1$，尾部误差满足 $|\int_R^\infty\sin(x^2)x^{-2}dx|\le1/R$，得到可用于截断计算的误差界。

相比之下 $\int_1^\infty\sin x/x\,dx$ 的绝对值积分发散，却可由[Dirichlet 判别](dirichlet-integral.md)证明收敛。不要把充分条件当成必要条件，也不必为本例强求初等原函数。

[返回工具箱](README.md)
