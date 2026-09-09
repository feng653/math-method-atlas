# 极坐标一致估计

分母含 $x^2+y^2$ 时，令 $x=r\cos\theta,y=r\sin\theta$，常能分离距离阶数与角度因子。证明极限存在的最后一步必须是对全部 $\theta$ 成立的估计。

**自编例题。** 求

$$
\lim_{(x,y)\to(0,0)}\frac{x^3y}{x^2+y^2}.
$$

对 $r>0$，

$$
\frac{x^3y}{x^2+y^2}=r^2\cos^3\theta\sin\theta,
\qquad
\left|r^2\cos^3\theta\sin\theta\right|\le r^2.
$$

右端与角度无关且趋于零，故所求极限为 $0$。

仅证明“每个固定 $\theta$ 下趋于零”只检查了直线。一般路径上 $\theta$ 可以随 $r$ 变化；若分母也含趋零角度因子，不能未经估计便删去它。无法建立统一界时，可以尝试[不同路径反证](two-paths.md)。

[返回工具箱](README.md)
