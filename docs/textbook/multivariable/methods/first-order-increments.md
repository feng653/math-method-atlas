# 从一阶增量提取微分

已知可微时，先写“线性项加小余项”，再代入目标式。尤其适合点上条件、切平面误差及[用可微展开求极限](../problem-types/differential-limit/index.md)。

**真题：[2020 年数学一第 3 题](../questions/2020-301-03.md)。** 设 $f(0,0)=0$ 且原点可微，记

$$
\begin{gathered}
a=f_x(0,0),\qquad b=f_y(0,0),\\
n=(a,b,-1),\qquad v=(x,y,f(x,y)),\\
r=\sqrt{x^2+y^2}.
\end{gathered}
$$

判断法向量与位置向量的数量积是否满足 $|n\cdot v|/r\to0$。

可微性给出

$$
f(x,y)=ax+by+R(x,y),\qquad R=o(r).
$$

因此

$$
n\cdot v=ax+by-f(x,y)=-R(x,y),
\qquad \frac{|n\cdot v|}r\to0.
$$

故原题选项 A 恒成立。其余三项不能由可微保证：取 $f=0$、$d=(1,0,0)$，则 $n=(0,0,-1)$，并有

$$
\begin{aligned}
\frac{\|n\times v\|}r&=1,\\
\frac{|d\cdot v|}r&=\frac{|x|}r,\\
\frac{\|d\times v\|}r&=\frac{|y|}r.
\end{aligned}
$$

后两项分别沿横轴、纵轴为 $1$。可微控制的是扣除切平面后的余项，不是所有几何分量。

[返回工具箱](README.md)
