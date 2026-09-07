# 概率基础扩展的作者核算证据

2026-09-08。按 probability-requirement-gaps.md 的七组历史课纲基础要求扩展。15 张原卡修改、1 张一般二维 CDF 新卡，全部保持 draft 等待另一位 reviewer；以下仅是作者核算，不替代独立审核。不变更年份题关联或历史审计结论。

| 方法 ID | 作者核算与条件检查 |
| --- | --- |
| pr-dist-cdf | 分段候选合法当且仅当 0≤a≤1；接点右连续，零点质量正是跳高 a |
| pr-dist-density | U(2,6) 密度积分 1；区间长度比 2/4；均值4、方差16/12 |
| pr-joint-marginal | 三角域面积2；∫₀²(x/2)dx=1；半截线事件积分为1/2，边缘非均匀 |
| pr-joint-cdf（新增） | 对角变量联合 CDF 为截断的 min(x,y)，四项增量给1/4；不存在二维普通密度，不能通过求导漏掉概率 |
| pr-bivariate-normal | ρ=1/2 时常数1/(π√3)、指数系数2/3；条件均值1、方差3/4；和方差3 |
| pr-dist-classic | Bin(4,1/2) 概率6/16、均值2、方差1；泊松参数3的均值方差均3 |
| pr-dist-geometric | 计成功次数的支持从1开始；p=1/4 给均值4、方差12、第三次成功9/64 |
| pr-dist-hypergeometric | 超几何均值3/5、方差28/75；显式处理 N=1 退化分支避免除零，要求 N≥1 |
| pr-dist-exponential | 速率2给均值1/2、方差1/4；无记忆条件 s,t≥0，尾概率e⁻¹ |
| pr-dist-normal | N(2,9) 的标准差为3；端点标准化为1，均值2 |
| pr-moment-expectation | U(0,1) 原点二阶矩1/3，中心二阶矩1/3−1/4=1/12；相应绝对矩有限 |
| pr-sample-empirical | 1,2,3样本的原点二阶矩14/3，中心二阶矩2/3，样本方差1；两种分母区分明确 |
| pr-sample-chi-square | n=8真均值中心化自由度8、样本中心化自由度7；方差分别16、14，独立差项自由度1；不把任意非真中心当中心卡方 |
| pr-sample-t-f | 上尾0.025换下尾0.975，t对称给负侧；F倒数必须交换自由度；t9方差9/7、F(4,6)均值3/2方差9/2，矩存在门槛明确 |
| pr-estimate-normal-variance | 真中心Q=12自由度6、样本中心Q=10自由度5；反解后较大分位数在下端点分母 |
| pr-test-normal-variance | 已知μ=0，Q=20、σ₀²=2给U=10，自由度5；右尾使用下尾1−α分位数 |

新 topic `pr-joint-cdf-topic` 仅注册在 pr-joint 章节；沿用现有 schema、loader、频次逻辑。旧卡 ID 和既有 topic 不变。结构与引用由 content:check 验证，数学独立审核仍待完成。
