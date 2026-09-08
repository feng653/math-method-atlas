# 高数进阶题型首批草案自审

2026-09-08，roadmap。新增18个题型JSON，仅涉及geometry、multivariable、multiple-integrals、series。全部status=draft，等待另一人审查；不是课纲或技巧穷尽声明。已阅读AGENTS、MVP、ARCHITECTURE、IMPLEMENTATION、ROADMAP及当前schema/validator入口，不另建内容契约或加载器。

## 范围与唯一入口

- geometry：4题型；该章已有8方法全部被引用。文件：`spatial-metric.json`、`surface-equation-classification.json`、`space-intersection-projection.json`、`space-tangency.json`。
- multivariable：4题型；该章已有9方法全部被引用。文件：`multivariable-local-behavior.json`、`multivariable-differentiation.json`、`multivariable-optimization.json`、`directional-optimization.json`。
- multiple-integrals：6题型；该章已有14方法全部被引用。文件：`double-integral-coordinate-choice.json`、`volume-mass-moments.json`、`curve-scalar-integral.json`、`circulation-and-work.json`、`surface-area-flux.json`、`local-vector-field.json`。
- series：4题型；该章已有9方法全部被引用。文件：`numeric-series-convergence.json`、`power-series-domain.json`、`power-series-expansion-sum.json`、`fourier-expansion-values.json`。

四章共40张现有方法，无遗漏；另有跨章线代正交化引用，避免为二次曲面交叉项重复造卡。方法选择按“何种题面特征考虑该路线”写when，不保证每道示例题都能用全部备选方法。

## 分组与数学自审

| 题型 | 常用二级公式的独立核算与边界 |
| --- | --- |
| spatial-metric | 将点差分为沿线投影与垂直余量，勾股推出距离平方；要求方向非零。 |
| surface-equation-classification | 绕z轴参数化消角，r为非负半径，恢复√(x²+y²)并保留母线范围。 |
| space-intersection-projection | 两独立法向的叉积非零，交线方向同时垂直两法向；交线上一点必须实际满足两方程。 |
| space-tangency | F=z−g的梯度第三分量为1，故图形C¹曲面正则；点积为零直接给切平面。 |
| multivariable-local-behavior | 余量除欧氏距离趋0正是可微定义，沿坐标轴再确认线性系数为偏导；不能靠有限路径证极限存在。 |
| multivariable-differentiation | 先用隐函数定理保证可微，再对F=0微分解dz；Fz≠0是必要使用门槛。 |
| multivariable-optimization | C²驻点Taylor主部是Hessian二次型；D>0且A>0为正定，D<0可找到异号方向，D=0不判断。 |
| directional-optimization | 单位向量上的点积最大值由Cauchy不等式给出；零梯度时最大值0但方向不唯一。 |
| double-integral-coordinate-choice | 轴向伸缩Jacobian ab乘极坐标r，得abr；要求a,b正且控制覆盖次数。 |
| volume-mass-moments | 截面积法来自Fubini，一阶矩多乘高度；密度均匀才能在形心比值中直接消去。 |
| curve-scalar-integral | 正交圆基消掉速度平方中的交叉项，得ds=Rdt；方向不影响第一类积分。 |
| circulation-and-work | 常旋度Green积分为常数乘面积，但域内场必须C¹且边界正向；奇点明确排除。 |
| surface-area-flux | Gauss加曲面可加性推出补面相减式，所有补面必须使用同一外向约定。 |
| local-vector-field | div curl展开后的六项两两抵消，要求C²以交换混合偏导；不是C¹自动成立。 |
| numeric-series-convergence | 先对有限部分和裂项，后取极限，不改变无穷级数次序。 |
| power-series-domain | 固定幂权根值n^(k/n)趋1，夹逼上极限说明半径不变，包括0和∞；端点另判。 |
| power-series-expansion-sum | 两次作用x d/dx于几何级数，独立化简为x(1+x)/(1−x)³，限|x|<1。 |
| fourier-expansion-values | 奇/偶延拓在零点的左右平均分别0与f(0+)；充分收敛条件写明有限分段、分段C¹及单侧极限。 |

每题型都有至少2个方法选择和至少1条公式；本批共18公式。formula.methodIds是对应题型methods子集，全部条件用真实字符串数组，没有按竖线拆分数学文本。

## 真题选择证据

已实际读取所列每题的summary及全部methodLinks.note，沿用此前原题复核记录，不靠共用方法选题：

- 二次曲面识别：2016Q6实际要求曲面类型；不把它当旋转构面真题。
- 交线投影：2017Q19(I)；其(II)才对应曲面质量，两个目标分别列入不同题型，父题不复制。
- 切平面：2018Q2实际接触点和过两点条件。
- 多元局部行为：2020Q3已给可微后求比例极限，边界注明不是从零判可微题。
- 复合/隐式求导：2017Q15、2016Q11；局部/约束优化：2020Q15、2018Q16；移动点最大梯度：2015Q17。
- 二重积分：2016Q15题面给极域；体积分/矩：2015Q12、2019Q19。
- 弧长标量积分：2018Q12；有向功/环流/势差：2015Q19、2020Q16、2016Q17。2020Q16含内部奇点，明确只作为参数积分匹配例，不能充当Green成功例。
- 曲面积分/通量：2017Q19(II)、2016Q18、2018Q17；2018开曲面不被当成已闭曲面。
- 局部旋度：2018Q11、2016Q10，边界注明不代表这些题考了div curl恒等式。
- 数项敛散：2019Q3部分和抵消；半径：2015Q3、2020Q17；展开/求和/读导数：2020Q17、2017Q12、2017Q9。
- 空间度量、旋转构面的一些分支及傅里叶当前没有逐题核选的例题，不把其他目标强行挂入；其中spatial-metric与fourier-expansion-values的questionIds为空。空列表仅表示本轮未核选，并非历年未考。

真实源与定位在各question.source及既有年度sources/reviews文档，题型层只存稳定ID、原创短摘要和方法选择，不复制整题。

## 待补与验收边界

40张基础入口都存在且已引用，只说明现卡可检索，不说明作答分支齐备。回查基础卡后确认两项尚未形成具体操作步骤的分支：

- Hessian退化点：hm-hessian-extrema只写“零另用定义”，hm-second-taylor仅给二阶展开，尚无D=0时如何比较增量符号的可执行例子。优先扩现卡，补f=x⁴+y⁴严格极小、f=x⁴−y⁴鞍点两个同为零Hessian的对照，并以统一非负性/两路径异号分别证明；不要只补“看高阶”的口号。本批题型明确保留D=0不判定，未假称该分支已解决。
- 两空间直线的最短距离：hm-space-angle-distance现有步骤/公式只有点线、点面及角度，尚无异面线公垂向投影与平行退化分支。可扩现卡：方向叉积非零时以该叉积作共同法向投影点差；平行时退回点线距离。此项是常见替代度量路线建议，未证明它是冻结课纲的独立必考要求，也未虚构题号。当前spatial-metric的二级公式只承诺点线距离。

上述两项为初审发现的薄项，已在根agent随后授权下扩写既有卡，见下节；未新建方法ID。后续还应补可核验真题示例、不同难度变式与分类粒度二审；无对应原题不伪造示例题号。题型覆盖现卡不等于官方2026课纲完整覆盖。

结构/引用与KaTeX检查：pnpm content:check通过（全库当时2体系、190方法、18卷、408主问题；其他agent并发增加题型，数量以报告为准）。题型专用测试4项通过。未改源码、方法卡或真题；未提交。

根agent已逐条核算本批18条公式及条件、推导，确认未发现数学错误，特别核验了div curl混合偏导抵消、固定n^k权根值半径、补盖外向通量与切片质心。此二审仅覆盖18条公式；分类完整度及所有questionIds尚未全量二审，因此全部题型继续draft，不提升整体状态。

## 两处分支扩写已落盘，等待二审

本轮只扩hm-hessian-extrema、hm-space-angle-distance两方法及multivariable-optimization、spatial-metric两题型；两方法暂回draft。两张方法原例题的prompt和solution完整保留并追加对照；题型也继续draft。原18公式二审结论不自动延伸到以下新增2公式。

- Hessian退化：现有方法增加实际增量统一估计与两路径异号判别，明确有限路径同号不足以证明极值。新增g=x⁴+y⁴、h=x⁴−y⁴对照，两者零Hessian相同。前者由x⁴+y⁴≥(x²+y²)²/2在完整去心邻域严格正而得极小；后者沿两坐标轴异号而为鞍点。题型加入该统一四次下界及推导，限定增量本身或已证下界，不能忽略未知余项。此项从“零另用定义”的提示补成可执行路线。
- 两直线距离：方向u,v均非零；非平行时n=u×v≠0，所有连接向量沿n投影相同，平面内分量可通过参数消去，故距离为混合积绝对值除||n||。平行时退回点线距离，禁止除零叉积。方法步骤还给最近点的两个正交线性条件，非平行Gram行列式||u×v||²>0保证可解。追加同一x轴对照：与(0,s,2)异面距离2，最近点为原点和(0,0,2)；与(0,s,0)在原点相交距离0；与(s,3,4)平行距离5。题型新增两分支公式及共同法向投影推导，明确非平行零距是相交、平行零距是重合。

自审：四次下界由(h²−k²)²≥0等价整理，三个线距例的叉积、混合积、垂直长度逐个复算一致。content:check通过（2体系、190方法、73题型、18卷、408主问题），结构/引用和KaTeX解析均通过。两个薄项已补内容，尚待根agent独立数学复核；未提交。

根agent补写后二审：两张扩写方法和新增两公式通过。四次估计由(h²−k²)²≥0整理，对全方向统一成立，异号坐标轴否定另一例极值；两非平行直线共同法向投影不变且切向分量可消去，平行退回点线距离，三例2/0/5核算正确。两方法恢复reviewed；题型整体仍draft。
