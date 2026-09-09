# 梯度与单位方向点积

函数在研究点可微时，方向导数等于梯度与单位方向向量的点积。普通光滑函数可先由偏导连续确认此前提。

**真题：[2017 年数学一第 3 题](../questions/2017-301-03.md)。** 求 $f=x^2y+z^2$ 在 $P=(1,2,0)$ 沿 $v=(1,2,2)$ 的方向导数。

多项式处处可微。先算梯度和单位方向：

$$
\begin{aligned}
\nabla f&=(2xy,x^2,2z),&\nabla f(P)&=(4,1,0),\\
\|v\|&=3,&u&=\left(\frac13,\frac23,\frac23\right).
\end{aligned}
$$

再作点积：

$$
\boxed{D_u f(P)=4\cdot\frac13+1\cdot\frac23=2}.
$$

若省略单位化会算出 $6$，那是沿参数 $P+tv$ 的参数变化率。若只有偏导存在而未确认可微，改用[射线差商](directional-definition.md)。

[返回工具箱](README.md)
