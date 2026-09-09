# 本轮来源复查

2026-09-09，主 agent 重新读取以下第三方题面页，核对题目条件与任务，不采用附带解析。下列计算为独立演算。未核验官方原版或再分发许可。

## 2017 年数学一第 15 题

[题面页](https://www.csgraduates.com/study_methods/math/math1/2017/#15)。外函数有二阶连续偏导，内变量分别为指数函数和余弦函数，确实同时要求基点处的一阶、二阶导数。

独立计算：

$$
\begin{aligned}
y&=f(e^x,\cos x),\\
y'&=e^xf_u-\sin x\,f_v,\\
y''&=e^{2x}f_{uu}-2e^x\sin x\,f_{uv}+\sin^2x\,f_{vv}
      +e^xf_u-\cos x\,f_v.
\end{aligned}
$$

在零点代入，外函数偏导均在 $(1,1)$ 处取值。

## 2020 年数学一第 12 题

[题面页](https://www.csgraduates.com/study_methods/math/math1/2020/#12)。函数为含参变上限积分，要求先对 $y$、再对 $x$ 求导后在 $(1,1)$ 的值。

$$
F(x,y)=\int_0^{xy}e^{xt^2}\,dt.
$$

固定 $x$ 时被积函数与 $y$ 无关。故先求 $F_y$ 可消去积分：

$$
\begin{aligned}
F_y&=x e^{x^3y^2},\\
(F_y)_x&=(1+3x^3y^2)e^{x^3y^2},\\
(F_y)_x(1,1)&=4e.
\end{aligned}
$$

本轮文章可用这道题讲“变限积分先对只影响上限的变量求导”。不修改网站中的题面数量或方法核验频次。

## 2012 年数学一第 3 题

[题面页](https://www.csgraduates.com/study_methods/math/math1/2012/#3)。前提是原点连续；辨析除以 $|x|+|y|$ 或 $x^2+y^2$ 的有限极限与可微的关系。

第二种有限比值给出 $f=O(\rho^2)$，由连续性得 $f(0,0)=0$，从而 $f=o(\rho)$，原点可微且微分为零。第一种有限比值只能给 $O(\rho)$，不能直接推出可微。其余反向断言可用 $f=x$ 检验。

## 教材口径

[OpenStax 方向导数定义](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient)采用双侧参数极限；本套文章若采用单侧射线口径，必须明确区别。仅有偏导存在不能作为梯度方向导数公式的充分条件，使用时检查可微性。

## 2015 年数学一第 17 题

[题面页](https://www.csgraduates.com/study_methods/math/math1/2015/#17)。研究 $f=x+y+xy$ 在椭圆 $x^2+y^2+xy=3$ 上各点、各单位方向中的最大方向导数。

主 agent 独立计算：令 $s=x+y$，则 $xy=s^2-3$，实数解条件给 $-2\le s\le2$，且

$$
\|\nabla f\|^2=(1+x)^2+(1+y)^2=9-(s-1)^2.
$$

最大方向导数为 $3$；取等点为 $(2,-1)$ 或 $(-1,2)$，方向分别为正 $y$ 轴、正 $x$ 轴。这里的方向没有被限制为曲线切向。

## 2021 年数学一第 19 题

[题面页](https://www.csgraduates.com/study_methods/math/math1/2021/#19)。求下面交线上到 $xOy$ 平面的距离最大值：

$$
\begin{cases}
x^2+2y^2-z=6,\\
4x+2y+z=30.
\end{cases}
$$

主 agent 独立消元并配方：

$$
\begin{gathered}
u=x+2,\quad v=y+\tfrac12,\\
u^2+2v^2=\tfrac{81}{2},\quad z=39-4u-2v,\\
|4u+2v|\le\sqrt{(16+2)(u^2+2v^2)}=27.
\end{gathered}
$$

因此 $12\le z\le66$，距离 $|z|$ 的最大值为 $66$，在 $(-8,-2,66)$ 取到。不能一开始就把“距离”写成有符号的 $z$ 而不检查范围。
