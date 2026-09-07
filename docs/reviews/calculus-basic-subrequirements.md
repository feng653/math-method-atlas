# 高数基础子要求二次差距检查

2026-09-08。重新读取高校存档 2019 大纲全文高数部分（PDF 第 1–6 页，缓存 .cache/audit/math-one-2019.txt），并逐张读取下列现卡的条件、步骤、公式与例题。此处聚焦基础子要求；不是 2026 原文审计，不重报已补 24 张及 9 张的任务，也不由 topic 数量声称全覆盖。

原文：[2019 高校存档](https://jtb.ncbcjxau.edu.cn/uploadfile/3/Attachment/667c3cc0da.pdf)。下表区分“已有直接入口”和“入口存在但具体操作仍薄”。只建议扩展既有卡，本次不新增方法。

| 原文页 / 要求 | 实际入口与判断 | 最小补强建议 |
| --- | --- | --- |
| 5 / 八.1 | ode 卡普遍使用通解/特解/阶，但未集中说明概念；linear-ode-structure 的例题只有两特解相减 | 在 hm-linear-ode-structure 补阶、解、初值与通解独立常数的概念；不得把任意含 n 常数表达式都当 n 阶通解 |
| 5 / 八.2–3 | hm-ode-separable、hm-ode-linear-first、hm-ode-homogeneous、hm-ode-bernoulli 已有可执行换元；伯努利明确 n≠0,1、非零分支、零解复查，例 y=1/(1+Ceˣ) 可直接代回 | 这些分支不缺，不另造伯努利卡。全微分已由前轮 hm-exact-ode 补齐 |
| 5 / 八.4 | hm-ode-reduction 写了缺 y、缺 x 的两种代换，但例题只有 y″=2x；原文另列 y⁽ⁿ⁾=f(x) | 同一卡明确连续积分 n 次产生 n 常数；分别给缺 y 与缺 x 的非平凡短例，保留 y′=0 检查 |
| 5 / 八.5 | hm-linear-ode-structure 已有 y=yh+yp 与差为齐次解；缺“n 个线性无关齐次解张成通解”的明确条件 | 补基本解组及独立性判别（如二阶在一点 W≠0），并给无法用相关解凑通解的反例 |
| 5 / 八.6 | hm-ode-characteristic 已泛称特征多项式与根重数，但公式和例题仅二阶 | 明确重数 m 对应 xᵏeʳˣ，k=0…m−1；补一例三阶以验证常数个数，不需新卡 |
| 5–6 / 八.7–8 | hm-ode-undetermined 条件已含多项式、指数、正余弦及有限乘积和；hm-ode-euler 只写右端 0 | 待定系数不是缺项。欧拉卡补一般右端 g(x)→g(±eᵗ) 与一例非齐次；原换元导数公式已正确，x=0 奇点提醒已在 |
| 5 / 七.1–2 | hm-series-basic 新增函数项定义但尚未写数项级数有限项改动、线性与分组性质；hm-series-comparison 只在例题使用 p=2，明确 p>1 规则只在反常积分卡 | 扩 basic 的有限项/线性/收敛后分组性质，说明反向分组推收敛不成立；在 comparison 明写 p 级数当且仅当 p>1 收敛，不能把积分判据当作级数公式 |
| 5 / 七.3–5 | hm-ratio-root-test 已有比较边界 L=1、绝对值与最终非零条件；hm-alternating-series 有莱布尼茨与条件收敛例 | 比值/根值/交错主体不缺；alternating 补一般项的“绝对收敛⇒收敛、逆命题不成立”明示定义关系 |
| 5 / 七.6–11 | 函数项定义、五展开由前轮补强；hm-power-radius 有根上极限和端点；hm-fourier/half-range 有系数、延拓及接缝平均值 | hm-power-sum 补内部和函数连续、逐项求导/积分后半径不变的明确性质。不是再写一套展开卡；taylor-expansion 已有余项趋零要求 |
| 4 / 五.3 | hm-partial-total-differential 已有偏导存在必要、偏导连续充分及余项定义；例题仅光滑多项式 | 补可微⇒连续及偏导存在；逆向均不可随意推，并用一例偏导存在但不连续、另一例可微但偏导不连续说明。再补多元全微分形式不变性，与一元卡区分 |
| 4 / 五.5–6 | hm-multivariable-chain 明确二阶继续对全部依赖项求导，但例仅一阶；implicit 有非零隐式偏导条件 | 链式卡补一个二阶实际计算，以覆盖“会求”而非只有提醒；隐函数入口已在 |
| 4 / 五.7 | hm-space-tangent 直接给参数切向量、切线及法平面，并有法平面例；hm-tangent-plane 直接给曲面梯度法向、切平面和法线步骤；hm-line-plane-equations 提供参数直线式 | 两类对象不是遗漏。建议原 space-tangent 补隐式交线 ∇F×∇G≠0 分支；tangent-plane 的原例加法线 r=P+t∇F 即可，不新建“法平面”卡 |
| 4 / 五.9 | hm-hessian-extrema、hm-lagrange-multipliers 已有驻点、二阶判别及边界提醒 | 基础极值入口已在；必要条件中的“内点且偏导存在”可比 C² 充分条件更清楚地区分，暂不列独立缺卡 |

其他已实际抽查的基础薄项：一.6 的 hm-limit-definition 只有定义和分母零提醒，未明列唯一性/局部有界/保号及四则规则；三.1–2 的 riemann-sum/newton-leibniz/substitution 有算法，但原函数族与基本积分表不集中；四.6 的 space-angle-distance 只给点面距离，点线距离无明确公式/例。这些属于下一批候选补强，不是本轮已逐条穷尽一至八章的证明。

建议先补四组：ODE 结构与降阶/非齐次欧拉；级数基本性质与 p 级数；多元微分逻辑关系与二阶链式；空间隐式交线分支。所有补写先 draft，再由另一人算例与条件审核。未修改任何方法或核验状态。
