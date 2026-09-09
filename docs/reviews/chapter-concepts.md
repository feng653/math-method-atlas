# 2026-09-09 全部章节概念扩充

## 本轮交付

两个体系的全部 24 张章节卡由 49 条简述扩为 140 条概念。每条包含数学定义、常用性质、易错点或使用边界，按具体主题编写，未套用无内容的占位说明。概念仍存于既有 `library.json` 的 `chapters[].concepts`，章节卡和题型卡读取同一份内容；不增加 loader、schema 或显示组件。章节及课纲引用 ID 不变。

这是章节教学文字扩充完成，不是官方课纲完整认证，也不是独立数学复审完成。方法卡及真题的状态、题面、来源、关联和频次未修改；原有 draft 边界保留。

## 逐章清单

| 章节 ID | 条数 | 本轮定义与性质范围 |
| --- | ---: | --- |
| basic-thinking | 6 | 命题、充要条件、等价变形、分类、线性对称、反例 |
| limits | 6 | 函数复合与反函数、ε—δ 极限、数列、运算夹逼、无穷小、连续 |
| derivatives | 6 | 导数微分、求导规则、中值定理、极值、凸性渐近线、泰勒与洛必达 |
| integrals | 6 | 原函数、黎曼积分、基本定理、换元分部、反常积分、估计与应用 |
| geometry | 6 | 内积、叉积混合积、线面、距离夹角、曲面投影、空间切线 |
| multivariable | 6 | 多元极限、全微分、梯度、隐函数、Hessian、约束极值 |
| multiple-integrals | 7 | 重积分与换元、两类线面积分、格林、高斯、斯托克斯 |
| series | 6 | 部分和、正项判别、绝对条件收敛、幂级数、一致收敛、泰勒傅里叶 |
| ode | 6 | 方程与解、初值、分离变量与线性型、解空间、特征根、降阶 |
| la-determinants | 5 | 排列定义、行列变换、余子式、乘积伴随、克拉默 |
| la-matrices | 5 | 乘法、特殊矩阵、逆与初等矩阵、秩、分块与幂 |
| la-vectors | 5 | 相关张成、子空间、基维数、坐标换基、正交投影 |
| la-systems | 5 | 增广矩阵、秩判据、基础解系、非齐次结构、参数分类 |
| la-eigen | 5 | 特征空间、迹行列式、相似、重数与对角化、实对称谱性质 |
| la-quadratic | 5 | 对称表示、合同、惯性、正负定、半正定与不定 |
| pr-events | 6 | 公理、容斥与界、等可能模型、条件、贝叶斯、独立 |
| pr-distributions | 6 | CDF、质量、密度、常见模型、函数分布、分位数 |
| pr-joint | 6 | 联合 CDF、边缘、条件、独立、函数变换、二维正态 |
| pr-moments | 6 | 期望存在性、矩、方差、相关、常见分布特征、条件期望与界 |
| pr-limit | 6 | 收敛方式、大数定律、切比雪夫型、CLT、二项近似、标准化区别 |
| pr-sampling | 6 | 样本统计量、均值方差、经验分布、χ²/t/F、单总体及双总体抽样 |
| pr-estimation | 7 | 矩估计、似然、MSE、相合、枢轴量、单总体及双总体区间 |
| pr-testing | 6 | 假设拒绝域、错误功效、p 值、均值检验、方差检验、区间反演 |
| proof-basics | 6 | 量词否定、直接证明、逆否反证、归纳、反例、唯一性 |

## 数学自查与来源边界

本轮为原创组织与复述，不转载题目或教材整段解析。使用标准数学定义编写，在线抽查以下公开教学资料作为核对入口；未把课程首页可访问当作逐条定理已经核验，也未声称 140 条都经过第二位审校者复核。

| 公开来源 | 本轮核对重点 |
| --- | --- |
| [OpenStax：极限运算法则](https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws) | 分项有限极限与分母非零条件 |
| [OpenStax：格林公式](https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem) | 边界定向、导数差顺序、带孔区域 |
| [OpenStax：斯托克斯公式](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem) | 可定向曲面、边界右手规则 |
| [MIT 18.06：正定矩阵与极小值](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-27-positive-definite-matrices-and-minima/) | 正定矩阵定义及判据的教学入口 |
| [OpenStax：样本均值的中心极限定理](https://openstax.org/books/introductory-statistics-2e/pages/7-1-the-central-limit-theorem-for-sample-means-averages) | 标准误 σ/√n，均值与原变量分布的区别 |
| [OpenStax：t 分布均值区间](https://openstax.org/books/introductory-statistics-2e/pages/8-2-a-single-population-mean-using-the-student-t-distribution) | 未知方差与自由度 |
| [OpenStax：两类错误](https://openstax.org/books/introductory-statistics-2e/pages/9-2-outcomes-and-the-type-i-and-type-ii-errors) | 第一、第二类错误的条件方向 |
| [NIST：卡方分布](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm) | 标准正态平方和与自由度 |
| [MIT：数学证明课程](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/) | 量词、归纳、反证的课程入口，非逐条引用 |

Penn State STAT 414/415 页面请求出现超时/502，未作为本轮已读取证据；改查上述公开统计教材。正文统一用 N(μ,σ²) 表示正态分布的均值和方差，不沿用部分教材以标准差为第二参数的记号。分位点使用左侧累积概率约定。

本轮逐类自查保留的关键条件：

- 极限不依赖点值；等价替换不能任意用于差式；洛必达导数比无极限不能反推原比无极限。
- 反常积分各奇点分别收敛；主值不等于通常积分；重积分注明规则区域，斯托克斯注明可定向。
- 偏导存在不等于可微；Hessian 退化时不直接判极值；拉格朗日法需另查约束奇点。
- 实对称正定可用顺序主子式；半正定需所有主子式非负，不能只检查顺序主子式。
- 独立不等于互斥；两两独立不等于相互独立；零相关仅在联合正态等附加前提下推出独立。
- 有限期望、有限正方差、正态总体、组间独立、同方差及各自由度均在相应条目写出。

## 验证记录

- `pnpm check`：81 个代码文件通过 250 行门禁，结构/引用/现有 LaTeX 公式与 TypeScript 检查通过，21 个测试文件、85 项测试通过。
- 既有 `learning-content.test.ts` 增加逐章至少五项、标题不重复、每项定义/性质/边界齐全的内容覆盖检查；这些检查不能证明数学正确。
- 章节概念沿用纯文本字段，内联 Unicode 数学表达式不是新增 KaTeX 字段；没有声称 CLI 自动验证了这些表达式的数学正确性。
- 生产构建和最终 Git 差异检查结果见同次提交的 `docs/VERIFICATION.md`；本次未做浏览器与线上部署验证。
