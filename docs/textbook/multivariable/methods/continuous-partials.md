# 用偏导连续证明可微

函数由光滑表达式组成时，先算偏导，再检查它们在基点邻域存在且在基点连续。这是证明可微的充分条件，通常比直接估计余项短。

**自编例题。** 证明 $f(x,y)=x^2e^y+\sin(xy)$ 在 $(1,0)$ 可微，并求全微分。

$$
\begin{aligned}
f_x&=2xe^y+y\cos(xy),\\
f_y&=x^2e^y+x\cos(xy).
\end{aligned}
$$

两式在整个平面连续，故 $f$ 在 $(1,0)$ 可微。代入得

$$
\begin{gathered}
f_x(1,0)=f_y(1,0)=2,\\
\boxed{df=2\,dx+2\,dy}.
\end{gathered}
$$

如果某个偏导不连续，只能说本工具未能给出结论；应改用[余项判别](differentiability-remainder.md)。偏导连续不是可微的必要条件。

[返回工具箱](README.md)
