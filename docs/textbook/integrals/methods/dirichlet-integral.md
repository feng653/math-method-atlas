# 用有界累积函数控制振荡尾部

若振荡因子在每个有限子区间可积，其累积积分有界，另一因子单调趋零，就可用 Dirichlet 判别。对光滑单调因子，也可分部直接控制尾部，说明抵消怎样产生收敛。

**自编例题。** 证明 $\int_1^\infty\sin x/x\,dx$ 收敛。$\int_1^R\sin xdx=\cos1-\cos R$ 有界，而 $1/x$ 单调趋零。具体对 $B>A\ge1$，分部得

$$
\int_A^B\frac{\sin x}x dx
=\left[-\frac{\cos x}x\right]_A^B-\int_A^B\frac{\cos x}{x^2}dx,
\qquad\left|\int_A^B\frac{\sin x}x dx\right|\le\frac2A.
$$

尾部满足柯西条件。它却不绝对收敛：在 $[k\pi+\pi/6,k\pi+5\pi/6]$ 上 $|\sin x|\ge1/2$，每段绝对积分至少 $\pi/[3(k+1)\pi]=1/[3(k+1)]$，和发散。

只知道振荡因子本身有界不够，条件是它的累积积分有界；趋零但不单调的乘子也不能直接套此版本。

[返回工具箱](README.md)
