# 一元微分题型与真题篇交接

已写 25 篇细题型入口、45 篇真题任务页和两个目录；44 道可依据任务/条件摘要安排入口，2026-301-03 待分类。分类依据为概念篇及主作者提供的 source-dossier，不按旧 methodId 倒推题型。

## 第三作者工具清单

下面 40 个 slug 是题型页的完整工具链接合同；文件应写在 methods 下，不改 slug。每个工具写可执行动作、必要条件、步骤与易错点，并给完整自编示例。未重新取得完整真题并核对条件前，不把摘要改装成真题例解。

| slug | 中文名 |
| --- | --- |
| difference-quotient | 定义差商求导数 |
| one-sided-difference | 左右差商判可导 |
| endpoint-derivative-limit | 连续端点由邻域导数极限求单侧导数 |
| product-quotient-rule | 四则求导与零因子消项 |
| chain-rule | 逐层链式求导 |
| logarithmic-differentiation | 对数求导 |
| inverse-derivative | 反函数求导 |
| implicit-differentiation | 隐式恒等式逐次求导 |
| parametric-first | 参数一阶导数比 |
| parametric-second | 参数二阶导数算子 |
| leibniz-rule | Leibniz 高阶乘积求导 |
| nth-derivative-pattern | 基本函数高阶导数归纳 |
| taylor-coefficient | 由 Taylor 系数提取已存在的导数 |
| difference-product-proof | 差商拆项证明乘积法则 |
| rolle-direct | 端点等值直接用 Rolle |
| rolle-construction | 构造等端值函数用 Rolle |
| repeated-rolle | 重复 Rolle 定位高阶导零点 |
| lagrange-increment | Lagrange 中值式控制增量 |
| cauchy-ratio | Cauchy 中值式联系两个增量 |
| lhopital-check | 逐轮核对条件使用洛必达 |
| power-log-limit | 幂指未定式取对数 |
| taylor-leading-term | Taylor 首个非零项比阶 |
| taylor-error-bound | Taylor 余项估计误差 |
| derivative-sign-chart | 列导数符号表判单调 |
| first-derivative-extremum | 一阶导数变号判极值 |
| second-derivative-extremum | 二阶导数判极值 |
| higher-derivative-extremum | 首个非零高阶导数判极值 |
| candidate-value-comparison | 全域候选点与端点值比较 |
| difference-function-inequality | 构造差函数证明不等式 |
| monotone-root-count | 分单调区间计根 |
| intermediate-value-root | 连续函数异号定位零点 |
| second-sign-concavity | 二阶导数变号判凹凸与拐点 |
| convex-secant | 三点割线比较判凸性 |
| symmetric-increment | 对称增量比较与二阶展开 |
| tangent-line | 切线斜率与截距列式 |
| normal-line | 用法线方向向量列方程 |
| explicit-curvature | 显式曲线曲率计算 |
| parametric-curvature | 参数曲线曲率计算 |
| asymptote-limits | 分方向计算渐近线极限 |
| variable-limit-derivative | 变上限积分求导与边界项抵消 |

## 必须保留的数学边界

差商总要减实际点值。邻域导数极限推端点导数另需端点连续；左右差商有限相等才判可导。对数求导明确正底数或非零因子并用绝对值取对数，不在零点直接套用。

参数二阶是再次对参数求导后除横坐标导数；奇异点回定义。隐式分母非零与反函数条件先检查。Taylor 系数只能提取已保证存在的相应阶导数，不能从渐近展开反推可导性。

Rolle 构造必须展示辅助函数和等端值，重复使用要逐层给出连续与可导性。多次中值或余项点不得默认相同。洛必达逐轮检查；导数商极限不存在不代表原商无极限。

凸统一指弦下图形；三点割线可不假设可导，但点序与分母必须合法。严格性须单独论证。二阶导为零不等于拐点，驻点不等于极值。全域最值检查边界及取得条件，降维包络验证可取等。

## 来源和跨章边界

所有题页注明本轮未打开来源。44 道归档只代表作答目标可辨认，不代表完整题面已整理；没有新增来源核验、细工具 verified 关联或频次。

2011-301-17 保留镜像根数冲突提醒；2024-301-19 保留端点导数/区间排印冲突；2026-301-03 不作确定分类。2025-301-19 的严格割线命题须重读精确措辞后才能撰写真题解答。

2016-301-17 的曲线积分化势函数、2019-301-15 与 2022-301-17 的微分方程求解、2023-301-17 的微分方程求解、2024-301-18 的切平面、2026-301-20 的积分正性均保留跨章边界。本章只讲由它们导出的微分任务，不假装完成整题。

variable-limit-derivative 只说明变限积分转为一元导数和代数拆分，不另建积分理论篇。iteration-estimate 入口用中值式提供收缩估计，收敛所用数列结论属于先修知识。

## 完成和验收状态

仅阅读仓库约定与 docs，写本章 problem-types、questions 与此交接文件；未编辑概念、方法、代码或正式内容 JSON，未运行项目程序。工具文件待第三作者完成，当前链接是交接合同，不声明已经存在。

主作者后续需统一进行数学独立审校、链接/公式/内容校验、代码行数门禁、相关测试、生产构建及页面阅读验证，再更新仓库速查和里程碑状态。本阶段不声明这些检查通过，也不提交或 push 共享工作区。
