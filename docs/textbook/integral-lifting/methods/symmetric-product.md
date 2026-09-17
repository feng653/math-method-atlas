# 把对称三角域补成正方形

看到 $f(x)\int_a^x f(t)\,dt$ 时，两个变量中的函数具有相同形式。设 $f$ 在 $[a,b]$ 上连续且 $a<b$，可以把三角区域补成正方形；$f$ 可以变号。

## 对称的是区域和乘积核

记

$$
I=\int_a^b f(x)\left[\int_a^x f(t)\,dt\right]dx
=\iint_{a\leq t\leq x\leq b}f(x)f(t)\,dt\,dx.
$$

交换 $x,t$ 后得到正方形的另一半，乘积 $f(x)f(t)$ 不变。两块区域只在零面积的对角线上重叠，因此

$$
2I=\int_a^b\int_a^b f(x)f(t)\,dt\,dx
=\left(\int_a^bf(x)\,dx\right)^2.
$$

这比机械平方一个未知积分更有针对性：题目本身已经给出了可以配成正方形的结构。

## 自编例题：不用先展开内积分

计算

$$
I=\int_0^{\pi/2}\sin x\left[\int_0^x\sin t\,dt\right]dx.
$$

乘积核 $\sin x\sin t$ 在正方形内连续且关于交换变量对称，故

$$
I=\frac12\left(\int_0^{\pi/2}\sin x\,dx\right)^2=\frac12.
$$

直接复核：内积分为 $1-\cos x$，外积分为 $\int_0^{\pi/2}\sin x(1-\cos x)dx=1-1/2=1/2$。

## 同一个结论的一元写法

令 $F(x)=\int_a^x f(t)dt$，则 $F(a)=0,F'=f$，所以

$$
I=\int_a^b F(x)F'(x)\,dx=\frac{F(b)^2}{2}.
$$

考试中优先用你最容易核对的一条路线；二维表示帮助识别结构，凑微分往往更短。

## 不能忽略的边界

若 $f,g$ 都在 $[a,b]$ 上连续，乘积改成 $f(x)g(t)$ 后，交换变量一般不再保持核不变。此时两半的和仍满足

$$
\int_a^bf(x)\int_a^xg(t)\,dt\,dx
+\int_a^bg(x)\int_a^xf(t)\,dt\,dx
=\left(\int_a^bf\right)\left(\int_a^bg\right),
$$

但不能单独把任意一半写成乘积的一半。无穷区间或奇点还要另查绝对可积等条件，不能照搬有限区间结论。

[返回工具箱](README.md) · [专题概念](../concepts.md)
