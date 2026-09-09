# 夹逼估计

要证明二元极限为 $L$，把误差压到只依赖距离的趋零量：

$$
|f(x_0+h,y_0+k)-L|\le\omega(\rho),\qquad
\rho=\sqrt{h^2+k^2},\qquad \omega(\rho)\to0.
$$

这个界必须同时覆盖所有趋近方向。常用 $|h|,|k|\le\rho$ 及 $2|hk|\le\rho^2$。

**自编例题。** 求 $x^2y/(x^2+y^2)$ 在原点的极限。

分子中的 $x^2$ 可以直接被分母吸收：

$$
\left|\frac{x^2y}{x^2+y^2}\right|
\le |y|\le\sqrt{x^2+y^2}\longrightarrow0.
$$

故极限为 $0$。若原点补值为 $c$，连续的充要条件就是 $c=0$。

这里估计的是函数本身。若要判定原点补零后是否可微，还须对[扣除线性项后的余项除以距离](differentiability-remainder.md)，不能把当前结论直接升级为可微。

[返回工具箱](README.md)
