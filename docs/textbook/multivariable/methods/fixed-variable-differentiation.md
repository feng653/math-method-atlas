# 固定其他变量求偏导

显式表达式在正常定义点求偏导时，把其余自变量视为常数，再用一元求导规则。每换一次求导变量，都重新确认谁保持不变。

**自编例题。** 求 $f(x,y)=x^2e^y+\sin(xy)$ 的 $f_x,f_y,f_{xy}$。

固定 $y$ 对 $x$ 求导，固定 $x$ 对 $y$ 求导，得到

$$
\begin{aligned}
f_x&=2xe^y+y\cos(xy),\\
f_y&=x^2e^y+x\cos(xy).
\end{aligned}
$$

再固定 $x$，对第一式求 $y$ 导数：

$$
\boxed{f_{xy}=2xe^y+\cos(xy)-xy\sin(xy)}.
$$

最后一式中 $y\cos(xy)$ 是关于 $y$ 的乘积，两部分都要求导。若题目换成分段接点，改用[轴向差商](axis-difference-quotient.md)，不能沿用非接点公式硬代。

[返回工具箱](README.md)
