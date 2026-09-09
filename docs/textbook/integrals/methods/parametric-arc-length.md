# 对参数位置求导后积分速度模

对分段 $C^1$ 的 $\boldsymbol r(t)$，先算每个坐标导数，再积 $\sqrt{x'^2+y'^2}$。速度模非负，反向参数不改变一次遍历长度，但重复遍历会重复计数。

**自编例题。** 圆弧 $x=2\cos t,y=2\sin t$，$0\le t\le\pi$。速度模为 $\sqrt{4\sin^2t+4\cos^2t}=2$，所以 $L=2\pi$。把区间延至 $[0,4\pi]$ 则走圆两圈，积分为 $8\pi$，不是单个圆的几何周长。

极坐标 $r=\rho(\theta)$ 可先写 $x=\rho\cos\theta,y=\rho\sin\theta$，平方相加的交叉项消去，得到 $ds=\sqrt{\rho'^2+\rho^2}d\theta$。例如自编对数螺线 $\rho=e^\theta,0\le\theta\le1$ 的长度为

$$
L=\sqrt2\int_0^1e^\theta d\theta=\sqrt2(e-1).
$$

不要把极坐标弧长误写成面积微元 $\rho^2/2$。

[返回工具箱](README.md)
