# 多元函数微分学卡片试做

本目录是概念卡、题型卡和方法卡的编审底稿；公开站读取既有 JSON 内容，不另建 loader 或文档内容库。

## 章节成果

- [概念地图与教材讲解](concepts.md)。
- 题型：保留四个稳定 ID，按任务拆为九类；本章已有 39 道题全部归类，允许同题多类。
- 真题：每题一份 Markdown 来源与归属索引；其中十题具有精确条件的 statement（含三题此前已有整理）。其余 29 题仍为摘要及外链。
- 方法：复用九个既有方法 ID，补齐条件、选择依据、推导、步骤与真题原创例解；另有两个跨章前置工具说明。九张方法卡及九类题型已由主 agent 交叉审校，见[审校记录](review.md)。

## 题型目录

- [求方向导数与最大变化率](problem-types/directional-optimization/index.md)（6 个链接，非互斥计数）。
- [求抽象复合函数的一阶与高阶导数](problem-types/multivariable-differentiation/index.md)（9 个链接，非互斥计数）。
- [求具体表达式的偏导数与全微分](problem-types/multivariable-explicit-differentiation/index.md)（2 个链接，非互斥计数）。
- [求最大最小值与约束优化](problem-types/multivariable-global-optimization/index.md)（5 个链接，非互斥计数）。
- [求隐函数及隐方程组的偏导与微分](problem-types/multivariable-implicit-differentiation/index.md)（4 个链接，非互斥计数）。
- [判别二重极限、连续、偏导与可微](problem-types/multivariable-local-behavior/index.md)（2 个链接，非互斥计数）。
- [求无条件极值与退化驻点判别](problem-types/multivariable-optimization/index.md)（7 个链接，非互斥计数）。
- [求一点处的偏导数与全微分](problem-types/multivariable-point-differential/index.md)（3 个链接，非互斥计数）。
- [求曲面切平面、法线与切点约束](problem-types/multivariable-tangent-plane/index.md)（6 个链接，非互斥计数）。

## 方法目录

| 方法文档 | 卡片例题 | 核心教学补充 |
| --- | --- | --- |
| [二重极限](methods/hm-multivariable-limit.md) | 2012-03 | 统一径向估计、阶数与逐项反例 |
| [偏导与全微分](methods/hm-partial-total-differential.md) | 2020-03 | 可微余项、法向消去、其余选项反证 |
| [复合函数求导](methods/hm-multivariable-chain.md) | 2017-15 | 完整二阶链式与混合偏导展开 |
| [隐函数与方程组](methods/hm-multivariable-implicit.md) | 2016-11 | 可微条件边界、方程组线性系统算例 |
| [Hessian极值判别](methods/hm-hessian-extrema.md) | 2020-15 | 全部驻点、退化与弯曲路径反例 |
| [二阶Taylor展开](methods/hm-second-taylor.md) | 2020-15 | 精确余项与统一正下界 |
| [方向导数与梯度](methods/hm-direction-gradient.md) | 2017-03 | 单位化、固定点与变点优化边界 |
| [拉格朗日乘子](methods/hm-lagrange-multipliers.md) | 2018-16 | 正长度开域、全局下界与等号条件 |
| [切平面与法线](methods/hm-tangent-plane.md) | 2013-02 | 正则性、常数项与法线参数式 |

跨章复用： [变限积分求偏导](methods/hm-newton-leibniz.md)、[单位向量与方向余弦](methods/hm-direction-cosines.md)。二者保留原方法实体与归属，不因教学复用自动新增核验频次。

阶段3的九张卡均使用 `example.questionId` 链接既有 verified 方法关联，网站展示真题来源与原创讲解；文档中的额外自编演算明确标识，不计真题。九方法使用八道不同代表题，同一题可以演示两种方法，不能重复计作新主问题。

## 阶段 2 验收与边界

- 2026-09-09：按题面作答目标交叉核对 2009—2026 各年本章 39 题的归属；外部转录存在排版风险，精确例解只使用本轮详细核对或原已有详细核对的代表题。
- 2012-03 是连续性前提下的可微充分条件辨析；2020-03 已给可微，只是应用余量。不能把二者改成从头判断连续的计算题。
- 具体表达式题目前是积分型计算；隐方程组子类未新增核验真题。空缺不表示从未考查。
- 2020-15 新增 Taylor 辅助关联来自独立多项式展开，不声称原题指定该解法。它增加该方法的已核验关联，不增加主问题数。
- 章节数学交叉复核已完成；最终工程与浏览器验证见[审校记录](review.md)，部署通过仓库既有 GitHub Pages 流程执行。
