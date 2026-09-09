# 参数化完整约束集

圆或椭圆约束可用正弦、余弦完整覆盖，把最值化成一元问题。参数区间和覆盖性要写清，不能只取上半支。

**自编例题。** 求 $x^2/4+y^2=1$ 上 $L=x+y$ 的最大值与最小值。

整个椭圆可写为

$$
x=2\cos t,\quad y=\sin t,\qquad 0\le t\le2\pi.
$$

代入目标，选择 $\varphi$ 满足 $\cos\varphi=2/\sqrt5$、$\sin\varphi=1/\sqrt5$，则

$$
L=2\cos t+\sin t=\sqrt5\cos(t-\varphi).
$$

所以

$$
\begin{aligned}
\max L&=\sqrt5,\\
\text{取等点 }(x,y)&=(4/\sqrt5,1/\sqrt5),\\
\min L&=-\sqrt5,\\
\text{取等点 }(x,y)&=(-4/\sqrt5,-1/\sqrt5).
\end{aligned}
$$

两点都满足原约束。参数重复覆盖端点无妨，但漏掉部分可行集会让“全局”最值证明失效。

[返回工具箱](README.md)
