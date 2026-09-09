# 再次链式求导

二阶求导时，外层偏导仍是复合函数，内层导数也是随变量变化的系数。对一阶式逐项用乘积法则，可以避免漏项。

**真题二阶小问：[2017 年数学一第 15 题](../questions/2017-301-15.md)。** 设 $f\in C^2$，$y=f(e^x,\cos x)$，求 $y''(0)$。

先保留一般点的一阶式

$$
y'=e^xf_u-\sin x\,f_v.
$$

以下外层偏导均在 $(e^x,\cos x)$ 处：

$$
\begin{aligned}
(f_u)'&=e^xf_{uu}-\sin x\,f_{uv},\\
(f_v)'&=e^xf_{vu}-\sin x\,f_{vv}.
\end{aligned}
$$

由 $C^2$ 条件可交换混合次序，再用乘积法则：

$$
\begin{aligned}
y''={}&e^{2x}f_{uu}-2e^x\sin x\,f_{uv}+\sin^2x\,f_{vv}\\
&+e^xf_u-\cos x\,f_v.
\end{aligned}
$$

最后代入，得到

$$
\boxed{y''(0)=f_{uu}(1,1)+f_u(1,1)-f_v(1,1)}.
$$

后两项来自内函数的二阶变化，不能只保留外函数的二阶偏导。

[返回工具箱](README.md)
