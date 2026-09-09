# 多元微分工具箱

先看题目要完成什么，再选下面一个动作。这里每个链接是一篇可独立阅读的短文，包含必要条件、实际操作与完整演算；工具可组合，但不把整类题目叫作一个方法。

## 极限与连续

- 正常定义点直接算值：[连续性代入](continuity-substitution.md)
- 把误差压到与方向无关的趋零量：[夹逼估计](squeeze-estimate.md)
- 分离距离和角度后控制全部角度：[极坐标一致估计](polar-uniform-estimate.md)
- 用两条路径得到矛盾：[不同路径反证](two-paths.md)

## 分段点与可微性

- 固定另一变量算接点偏导：[轴向差商求偏导](axis-difference-quotient.md)
- 先算轴上的一阶偏导再求导：[逐次定义求混合偏导](mixed-partials-definition.md)
- 扣线性项、除以距离：[余项判别可微](differentiability-remainder.md)
- 用邻域内偏导及其连续性：[用偏导连续证明可微](continuous-partials.md)
- 发现不连续或偏导不存在即排除：[用必要条件否定可微](necessary-condition-rejection.md)
- 保留前提而使结论失败：[构造反例检验逆命题](counterexample-test.md)
- 从可微展开读取线性量和误差：[从一阶增量提取微分](first-order-increments.md)

## 显式、复合与积分求导

- 普通显式表达式：[固定其他变量求偏导](fixed-variable-differentiation.md)
- 沿每条依赖路径相乘再相加：[一阶链式求导](first-order-chain.md)
- 对外层偏导与内层系数都求导：[再次链式求导](second-order-chain.md)
- 用光滑条件选择更短次序：[交换混合次序](mixed-partials-interchange.md)
- 按题给权重合并并消项：[加权组合消去中间导数](weighted-derivative-cancellation.md)
- 用独立切向条件解梯度：[沿两条曲线求导联立偏导](curve-identities.md)
- 先消去积分号：[对只影响积分限的变量先求导](variable-limit-differentiation.md)

## 隐式求导

- 对一个隐式恒等式求导：[隐式一阶导数](implicit-first-order.md)
- 保留一阶关系再求一次：[隐式二阶导数](implicit-second-order.md)
- 多个隐变量一起求解：[联立隐函数组的导数方程](implicit-linear-system.md)

## 方向变化

- 未知可微时回到定义：[沿射线差商求方向导数](directional-definition.md)
- 已知可微且方向给定：[梯度与单位方向点积](gradient-dot-product.md)
- 在所有单位方向中选最大：[用梯度范数求最大方向导数](gradient-norm-optimization.md)

## 切平面与切线

- 已知曲面显式表达式：[用全微分写显式曲面的切平面](graph-tangent.md)
- 已知曲面方程：[用梯度写隐式曲面的切平面](implicit-surface-tangent.md)
- 切点未知、给过点等限制：[设未知切点再代入几何条件](unknown-contact-point.md)
- 曲线已参数化：[对参数曲线求切向量](parametric-curve-tangent.md)
- 曲线为两正则曲面的交线：[用两梯度叉积求交线切向量](intersection-curve-tangent.md)

## 局部极值

- 提取二次型并控制高阶项：[沿增量作二阶泰勒展开](second-order-taylor.md)
- 不漏掉光滑内点候选：[用一阶必要条件找候选点](stationary-candidates.md)
- 在驻点上作二阶分类：[用 Hessian 判别驻点](hessian-test.md)
- 判别退化但增量能写成同号项：[因式分解或配方判定增量同号](degenerate-increment.md)
- 找到任意近的较大值与较小值：[用异号路径否定极值](opposite-sign-paths.md)

## 约束与全局最值

- 先从方程中解出一个变量：[用约束代入消元](constraint-elimination.md)
- 对称式改用和与积：[用对称变量换元降维](symmetric-variables.md)
- 用一个参数覆盖整条可行曲线：[参数化完整约束集](constraint-parametrization.md)
- 正则等式约束下定位候选：[用拉格朗日方程找约束候选](lagrange-candidates.md)
- 闭域最值逐段查全：[遍历内部和各段边界求最值](boundary-exhaustion.md)
- 二次和与线性约束配合：[用加权柯西不等式求全局最值](global-inequality.md)
- 参数二次目标写成平方和：[配方证明全局最小](quadratic-completion.md)

共 41 篇工具文章。真题示例使用所链题目页的条件与原创推导；片段会明确限定任务，自编题均明示。细分文章不自动继承旧大类的核验标签，也不据此改写频次；来源身份与范围见[真题索引](../questions/README.md)。

[概念篇](../concepts.md) · [按题型选工具](../problem-types/README.md)
