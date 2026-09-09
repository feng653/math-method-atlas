# 多元函数微分学：概念与基本结论

本章研究两个或多个变量共同变化时的极限、线性近似与极值。以下以二元函数为主。

## 1. 二元函数与本章记号

**二元函数**是映射

$$
f:D\subseteq\mathbb R^2\longrightarrow\mathbb R,
\qquad (x,y)\longmapsto f(x,y).
$$

其图形为点集

$$
\{(x,y,z):(x,y)\in D,\ z=f(x,y)\}.
$$

例如，$z=x^2+y^2$ 的图形是旋转抛物面；等值线 $f(x,y)=c$ 是定义域内函数值相同的点集。

全文统一记

$$
\begin{gathered}
P_0=(x_0,y_0),\qquad P=P_0+(h,k),\\
\rho=\sqrt{h^2+k^2},\qquad
\Delta f=f(x_0+h,y_0+k)-f(P_0).
\end{gathered}
$$

讨论普通双侧偏导、可微及其内点判别时，默认 $P_0$ 是定义域内点，即存在以 $P_0$ 为心、完全包含于 $D$ 的开圆盘。

## 2. 二元极限与连续

设 $P_0$ 是 $D$ 的聚点，即任意去心圆盘内都有 $D$ 中的点。

**二元极限的定义：**

$$
\lim_{\substack{P\to P_0\\P\in D}}f(P)=L
\iff
\begin{gathered}
\forall\varepsilon>0,\ \exists\delta>0,\\
P\in D,\ 0<\|P-P_0\|<\delta
\ \Longrightarrow\ |f(P)-L|<\varepsilon.
\end{gathered}
$$

这里控制的是整个去心邻域。$\delta$ 不能随趋近路径改变；沿所有直线极限相同仍不够。

例如

$$
f(x,y)=\frac{x^2y}{x^4+y^2}
$$

在原点沿任意直线趋于 $0$，沿 $y=x^2$ 却恒为 $1/2$，故二元极限不存在。两个累次极限相等也不能替代二元极限。

**在 $P_0\in D$ 连续：**

$$
\forall\varepsilon>0,\ \exists\delta>0:\quad
P\in D,\ \|P-P_0\|<\delta
\Longrightarrow |f(P)-f(P_0)|<\varepsilon.
$$

当 $P_0$ 也是聚点时，等价地

$$
\boxed{\lim_{P\to P_0}f(P)=f(P_0)}
\qquad\Longleftrightarrow\qquad
\boxed{\Delta f\to0\quad(\rho\to0)}.
$$

极限唯一性、四则运算、复合运算及夹逼定理均沿用一元情形的相应条件。分母不为零等条件仍须检查。

**闭有界集合上的性质。** 若非空集合 $D\subseteq\mathbb R^2$ 闭且有界，$f$ 在 $D$ 上连续，则 $f$ 有界，并取得最大值与最小值。

若 $D$ 中任意两点可由 $D$ 内的连续曲线连接，则 $f(D)$ 是区间，因而具有介值性质。只给闭有界，不能保证这一结论。

## 3. 偏导数与高阶偏导数

**一阶偏导数：**

$$
\boxed{
f_x(P_0)=\lim_{h\to0}
\frac{f(x_0+h,y_0)-f(P_0)}{h}
}
$$

$$
\boxed{
f_y(P_0)=\lim_{k\to0}
\frac{f(x_0,y_0+k)-f(P_0)}{k}
}
$$

偏导数存在，指相应双侧极限存在且有限。它只控制一条坐标方向的截线。

若偏导数在邻域内存在，便得到新的函数 $f_x,f_y$。继续求偏导，定义

$$
f_{xx}=(f_x)_x,\quad f_{xy}=(f_x)_y,\quad
f_{yx}=(f_y)_x,\quad f_{yy}=(f_y)_y.
$$

本文下标按“先 $x$ 后 $y$”解释 $f_{xy}$。混合偏导数的次序不能无条件交换。

**混合偏导相等的常用充分条件：** 若 $f_{xy},f_{yx}$ 在 $P_0$ 的某邻域存在且连续，则

$$
f_{xy}(P_0)=f_{yx}(P_0).
$$

记 $f\in C^1(U)$ 表示各一阶偏导在开集 $U$ 内存在且连续；$f\in C^2(U)$ 表示直到二阶的各阶偏导均存在且连续。仅在一点有二阶偏导，不保证可微，也不保证二阶泰勒展开。

## 4. 可微与全微分

**可微的定义：** 若存在常数 $A,B$，使

$$
\boxed{\Delta f=Ah+Bk+o(\rho)},
$$

则称 $f$ 在 $P_0$ 可微。其中余项 $R=o(\rho)$ 的含义是

$$
\lim_{(h,k)\to(0,0)}\frac{R(h,k)}{\sqrt{h^2+k^2}}=0.
$$

可微时 $A,B$ 唯一，且

$$
A=f_x(P_0),\qquad B=f_y(P_0).
$$

**全微分**是这个线性主部：

$$
\boxed{df=f_x(P_0)\,dx+f_y(P_0)\,dy},
\qquad dx=h,\ dy=k.
$$

因此 $\Delta f=df+o(\rho)$。$\Delta f$ 是实际增量；$df$ 是线性近似，两者一般不相等。

由定义立即得到下面的充要条件：在两个偏导存在时，

$$
\boxed{
f\text{ 在 }P_0\text{ 可微}
\iff
\frac{\Delta f-f_x(P_0)h-f_y(P_0)k}{\rho}\longrightarrow0
}.
$$

## 5. 连续、偏导存在与可微的关系

**可微的充分条件：** 两个偏导在 $P_0$ 的某邻域内存在，且都在 $P_0$ 连续。

$$
\boxed{
\begin{gathered}
\text{邻域内偏导存在，且在 }P_0\text{ 连续}\\
\Downarrow\\
P_0\text{ 处可微}\\
\Downarrow\\
\begin{cases}
P_0\text{ 处连续},\\
P_0\text{ 处各偏导存在}.
\end{cases}
\end{gathered}
}
$$

下方两个必要条件即使同时满足，也不能反推可微；上方充分条件也不是必要条件。

三个短反例足以分清这些边界。以下原点均补定义为 $0$。

| 函数 | 原点性质 | 关键计算 |
|---|---|---|
| $\dfrac{xy}{x^2+y^2}$ | 两偏导为 $0$，但不连续 | 沿 $y=x$ 函数值为 $1/2$ |
| $\dfrac{xy^2}{x^2+y^2}$ | 连续、两偏导为 $0$，但不可微 | 沿 $x=y=t>0$，$f/\rho=1/(2\sqrt2)$ |
| $x^2\sin(1/x)$（$x=0$ 时为 $0$） | 可微，但 $f_x$ 不连续 | $\lvert f\rvert/\rho\le\rho$；$f_x=2x\sin(1/x)-\cos(1/x)$ |

第二个反例的连续性来自 $|f|\le|x|\le\rho$。另有 $|x|+|y|$ 在原点连续，但两个偏导均不存在。

做概念判断时还常用两个补充结论：

- 若 $f_x$ 在邻域内存在且在 $P_0$ 连续，$f_y(P_0)$ 存在，则 $f$ 在 $P_0$ 可微；交换 $x,y$ 同样成立。
- 若两个偏导在某圆盘内处处存在，且统一满足 $|f_x|,|f_y|\le M$，则沿坐标方向用中值定理可得 $|\Delta f|\le\sqrt2M\rho$，因而连续；不能据此推出可微。

## 6. 方向导数与梯度

取单位方向向量 $\boldsymbol u=(a,b)$，$a^2+b^2=1$。

**本文采用有向射线的方向导数：**

$$
\boxed{
D_{\boldsymbol u}f(P_0)
=\lim_{t\downarrow0}
\frac{f(P_0+t\boldsymbol u)-f(P_0)}{t}
}.
$$

它表示沿该方向每单位距离的瞬时变化率。给定非零向量 $\boldsymbol v$ 时，方向应取 $\boldsymbol u=\boldsymbol v/\|\boldsymbol v\|$。

**梯度**是在各偏导存在时定义的向量

$$
\nabla f(P_0)=\bigl(f_x(P_0),f_y(P_0)\bigr).
$$

**若 $f$ 在 $P_0$ 可微，** 则所有方向导数存在，且

$$
\boxed{D_{\boldsymbol u}f(P_0)=\nabla f(P_0)\cdot\boldsymbol u}.
$$

仅有偏导存在，不足以使用这个公式。上一节第二个反例在原点有

$$
D_{(a,b)}f(0,0)=ab^2,
\qquad \nabla f(0,0)=(0,0).
$$

因此连续且所有方向导数存在，仍不保证可微。

可微时，由单位向量点积的范围，

$$
\max_{\|\boldsymbol u\|=1}D_{\boldsymbol u}f=\|\nabla f\|,
\qquad
\min_{\|\boldsymbol u\|=1}D_{\boldsymbol u}f=-\|\nabla f\|.
$$

梯度非零时，取等方向分别为正、负梯度方向；梯度为零时，各方向导数均为零，但该点未必是极值点。

**定义口径须一致。** 有些教材使用 $t\to0$ 的双侧定义。可微时两种口径一致；一般函数则不同。例如 $f=|x|$ 在原点的单侧方向导数为 $|a|$，但 $f_x(0,0)$ 不存在。双侧定义下，“所有方向导数存在”必然包括两个偏导存在。

## 7. 复合函数求导与全微分形式不变性

设

$$
z=F(u,v),\qquad u=u(x,y),\quad v=v(x,y).
$$

若内层 $u,v$ 在研究点可微，外层 $F$ 在对应点可微，则复合函数可微，且

$$
\boxed{
\begin{aligned}
z_x&=F_u u_x+F_v v_x,\\
z_y&=F_u u_y+F_v v_y.
\end{aligned}
}
$$

外层偏导均在 $(u(x,y),v(x,y))$ 取值。只有相关偏导存在，不能替代这里的可微条件。

若相关函数均为 $C^2$，则

$$
\begin{aligned}
z_{xx}={}&F_{uu}u_x^2+2F_{uv}u_xv_x+F_{vv}v_x^2\\
&+F_u u_{xx}+F_v v_{xx}.
\end{aligned}
$$

**一阶全微分的形式不变性：** 在上述可微条件下，不论 $u,v$ 是独立变量还是中间变量，均有

$$
\boxed{dz=F_u\,du+F_v\,dv}.
$$

二阶微分不能无条件照搬这种形式；中间变量的二阶变化会贡献额外项。

## 8. 隐函数及其导数

**隐函数存在定理。** 对方程 $F(x,y,z)=0$，若

$$
\begin{cases}
F(x_0,y_0,z_0)=0,\\
F\text{ 在该点某邻域内为 }C^1,\\
F_z(x_0,y_0,z_0)\ne0,
\end{cases}
$$

则它在该点附近唯一确定经过该点的 $C^1$ 隐函数 $z=f(x,y)$，并且

$$
\boxed{f_x=-\frac{F_x}{F_z},\qquad f_y=-\frac{F_y}{F_z}}.
$$

右侧在 $(x,y,f(x,y))$ 取值。存在性与唯一性都是局部结论。[多伦多大学 MAT237：隐函数定理](https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter3/S3.1.html)

$F_z=0$ 只表示这个充分条件失效。例如 $(z-x-y)^3=0$ 仍唯一确定 $z=x+y$。

若 $F\in C^2$，可继续对恒等式求导；例如

$$
f_{xx}=-\frac{F_{xx}+2F_{xz}f_x+F_{zz}f_x^2}{F_z}.
$$

对方程组 $\boldsymbol F(\boldsymbol x,\boldsymbol z)=\boldsymbol0$，设方程数等于待求隐变量 $\boldsymbol z$ 的个数。若基点满足 $\boldsymbol F(\boldsymbol x_0,\boldsymbol z_0)=\boldsymbol0$，$\boldsymbol F$ 在其邻域为 $C^1$，且关于**待求隐变量**的雅可比方阵满足

$$
\det\frac{\partial\boldsymbol F}{\partial\boldsymbol z}\ne0.
$$

其中行列式在基点取值，则存在经过基点的唯一局部 $C^1$ 隐函数。该矩阵第 $i$ 行、第 $j$ 列是 $\partial F_i/\partial z_j$，其导数满足

$$
\frac{\partial\boldsymbol z}{\partial\boldsymbol x}
=-\left(\frac{\partial\boldsymbol F}{\partial\boldsymbol z}\right)^{-1}
\frac{\partial\boldsymbol F}{\partial\boldsymbol x}.
$$

右侧矩阵均在对应解点 $(\boldsymbol x,\boldsymbol z(\boldsymbol x))$ 取值。

## 9. 二阶泰勒公式与 Hessian 矩阵

若 $f$ 在 $P_0$ 某邻域内属于 $C^2$，则

$$
\boxed{
\begin{aligned}
\Delta f={}&f_x(P_0)h+f_y(P_0)k\\
&+\frac12\bigl(f_{xx}(P_0)h^2
+2f_{xy}(P_0)hk+f_{yy}(P_0)k^2\bigr)\\
&+o(\rho^2).
\end{aligned}
}
$$

二阶偏导组成 **Hessian 矩阵**

$$
H_f(P_0)=
\begin{pmatrix}
f_{xx}(P_0)&f_{xy}(P_0)\\
f_{yx}(P_0)&f_{yy}(P_0)
\end{pmatrix}.
$$

$C^2$ 条件下它对称，二次项可写成 $\tfrac12(h,k)H_f(P_0)(h,k)^{\mathsf T}$。

一阶可微展开的余项是 $o(\rho)$；二阶泰勒展开的余项是 $o(\rho^2)$，不可混用。

## 10. 局部极值、驻点与最值

**局部极小值点：** 对 $P_0\in D$，存在 $\delta>0$，使

$$
P\in D,\ \|P-P_0\|<\delta
\quad\Longrightarrow\quad f(P)\ge f(P_0).
$$

反向不等号定义局部极大值点。若对 $P\ne P_0$ 均严格不等，则称严格局部极值。若不等式对整个 $D$ 成立，则是 $D$ 上的最小值或最大值。

**驻点**是各一阶偏导均为零的点。若内点 $P_0$ 是局部极值点且两个偏导存在，则

$$
f_x(P_0)=f_y(P_0)=0.
$$

这是必要条件。偏导不存在的点也可能取极值；边界点不能直接套内点结论。

**二阶充分条件。** 若 $f\in C^2$ 于驻点 $P_0$ 的邻域，记

$$
A=f_{xx}(P_0),\quad B=f_{xy}(P_0),\quad C=f_{yy}(P_0),
\qquad D=AC-B^2.
$$

| 条件 | 结论 |
|---|---|
| $D>0,\ A>0$ | 严格局部极小值 |
| $D>0,\ A<0$ | 严格局部极大值 |
| $D<0$ | 鞍点：任意邻域内都有函数值比该点大、也有比该点小的点 |
| $D=0$ | 本判别法不能判断 |

例如 $x^4+y^4$ 与 $x^4-y^4$ 在原点都有 $D=0$，前者为严格极小值，后者不是极值。

求指定集合上的最值时，须覆盖内部驻点、不可微点与边界；闭有界连续只保证最值存在，并不定位最值点。

## 11. 条件极值与拉格朗日必要条件

**条件极值**是把局部极值定义中的比较点限制在约束集合内。

对约束 $g(x,y)=0$，若 $f,g$ 在候选点附近为 $C^1$，且

$$
\nabla g(P_0)\ne0,
$$

则条件极值点必存在乘数 $\lambda$，满足

$$
\boxed{
\begin{cases}
\nabla f(P_0)=\lambda\nabla g(P_0),\\
g(P_0)=0.
\end{cases}
}
$$

这只给候选点。约束梯度为零的奇异点，以及约束中的端点、附加边界，须另行讨论。

多约束 $g_1=\cdots=g_m=0$ 的相应前提是约束梯度线性无关；必要条件为

$$
\nabla f=\sum_{j=1}^m\lambda_j\nabla g_j,
\qquad g_1=\cdots=g_m=0.
$$

## 12. 曲面与空间曲线的微分几何量

切线或切平面描述曲线或曲面的正则一阶近似；法线、法平面由相应垂直方向确定。

**显式曲面 $z=f(x,y)$。** 若 $f$ 在 $P_0$ 可微，令 $Q_0=(x_0,y_0,f(P_0))$，则

$$
\begin{aligned}
\text{切平面：}\quad
Z-f(P_0)&=f_x(P_0)(X-x_0)+f_y(P_0)(Y-y_0),\\
\text{法线：}\quad
(X,Y,Z)&=Q_0+t\bigl(f_x(P_0),f_y(P_0),-1\bigr).
\end{aligned}
$$

**隐式曲面 $F(X,Y,Z)=0$。** 若 $F$ 在 $Q_0$ 邻域为 $C^1$，$F(Q_0)=0$ 且 $\nabla F(Q_0)\ne0$，则

$$
\begin{aligned}
\text{切平面：}\quad &\nabla F(Q_0)\cdot(Q-Q_0)=0,\\
\text{法线：}\quad &Q=Q_0+t\nabla F(Q_0).
\end{aligned}
$$

这也是“梯度垂直于正则等值面”的含义。

**参数曲线 $\boldsymbol r(t)$。** 若它在 $t_0$ 可导且 $\boldsymbol r'(t_0)\ne0$，则

$$
\begin{aligned}
\text{切线：}\quad &Q=\boldsymbol r(t_0)+s\boldsymbol r'(t_0),\\
\text{法平面：}\quad
&\boldsymbol r'(t_0)\cdot\bigl(Q-\boldsymbol r(t_0)\bigr)=0.
\end{aligned}
$$

若曲线是两个 $C^1$ 曲面 $F=0,G=0$ 的交线，且两梯度在交点线性无关，则切向量可取

$$
\boldsymbol T=\nabla F\times\nabla G\ne\boldsymbol0.
$$

这些非零条件保证所用的一阶方向有效；向量为零时，相应公式不能直接给出切线或切平面。

---

本文是概念与必要结论的阅读稿，不宣称已核验某一年度课纲的完整覆盖。具体判别、计算与例题留给题型导读和逐方法文章；隐函数定理的局部性与雅可比条件已对照文中所链大学讲义。
