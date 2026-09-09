# 逐次定义求混合偏导

本文 $f_{xy}=(f_x)_y$。接点处求它时，先得到邻近纵轴上的 $f_x(0,y)$，再对 $y$ 求导；交换次序则先研究 $f_y(x,0)$。

**自编例题。** 原点补零，令

$$
f(x,y)=\begin{cases}\dfrac{xy(x^2-y^2)}{x^2+y^2},&(x,y)\ne(0,0),\\0,&(x,y)=(0,0).\end{cases}
$$

轴上函数值均为零，故 $f_x(0,0)=f_y(0,0)=0$。对固定 $y\ne0$，

$$
f_x(0,y)=\lim_{h\to0}\frac{y(h^2-y^2)}{h^2+y^2}=-y.
$$

同理，对固定 $x\ne0$，

$$
f_y(x,0)=\lim_{k\to0}\frac{x(x^2-k^2)}{x^2+k^2}=x.
$$

因此

$$
\begin{aligned}
f_{xy}(0,0)&=\lim_{y\to0}\frac{-y}y=-1,\\
f_{yx}(0,0)&=\lim_{x\to0}\frac{x}x=1.
\end{aligned}
$$

两者都存在，却不相等。若满足相应连续性条件，可使用[混合偏导换序](mixed-partials-interchange.md)。

[返回工具箱](README.md)
