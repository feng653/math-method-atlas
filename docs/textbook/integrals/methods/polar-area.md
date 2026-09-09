# 用扇形微元累积极坐标面积

先写实际角区间、非负径向界 $r_{\rm in}\le r\le r_{\rm out}$，确认内部无重复覆盖，再积分 $\tfrac12(r_{\rm out}^2-r_{\rm in}^2)d\theta$。负半径表示另一方向，不能直接当成径向上界。

**自编例题。** 求心形线 $r=1+\cos\theta$ 围成的面积。取 $0\le\theta\le2\pi$，半径非负，每个射线方向只覆盖一次，故

$$
A=\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta
=\frac12(2\pi+0+\pi)=\frac{3\pi}2.
$$

其中 $\int\cos\theta=0$，而 $\cos^2\theta=(1+\cos2\theta)/2$ 给出积分 $\pi$。若把角度走两周会得到两倍面积，不能因为曲线周期性就忽略重复遍历。两个极坐标边界相交时还须先查内外交换角度。

[返回工具箱](README.md)
