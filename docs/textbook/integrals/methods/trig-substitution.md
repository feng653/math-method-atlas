# 选择三角分支消去二次根式

根式为 $\sqrt{a^2-x^2}$ 时可取 $x=a\sin t$；先把区间放在 $\cos t\ge0$ 的分支，才能把 $\sqrt{\cos^2t}$ 写成 $\cos t$。配方和平移须在这一步之前完成。

**自编例题。** 求 $\int_0^1\sqrt{1-x^2}\,dx$。取 $x=\sin t$，$0\le t\le\pi/2$，$dx=\cos t\,dt$，根式也等于 $\cos t$。故

$$
I=\int_0^{\pi/2}\cos^2t\,dt
=\left[\frac t2+\frac{\sin2t}{4}\right]_0^{\pi/2}=\frac\pi4.
$$

对于 $\sqrt{x^2+a^2}$ 可选正切，对 $\sqrt{x^2-a^2}$ 可选正割，但必须重新核对定义域及绝对值，不能照搬本例区间。

[返回工具箱](README.md)
