# 数学一课纲差距审计

2026-09-08；审计基线为数学一 151 个方法。结论：已有 topic 多由方法名生成，不能据此宣称完整课纲覆盖。独立历史原文对照找到 24 个缺口/明显偏薄任务，已加入 library.json 的未映射 topic；未修改方法。即使这些任务全部写完，2026 官方版本核验仍是独立未完成项。

## 依据与可靠性

| 来源 | 实际取得证据 | 用途 / 限制 |
| --- | --- | --- |
| [高校存档 2019 数学一 PDF](https://jtb.ncbcjxau.edu.cn/uploadfile/3/Attachment/667c3cc0da.pdf) | 下载并读取全部 10 页，题名明确 2019 | 本轮外部独立要求基线；高校托管不等于 2026 官方发布，旧试卷结构不沿用 |
| [2025 二手 PDF](https://www.juyingonline.com/upload/202409/11/202409111455369795.pdf) | 搜索索引可核对部分要求；直接下载返回 403 | 只交叉核对，未完整取得，不声称已全文审计 |
| [2025 范围整理页](https://cf.kuaiyizhi.cn/zh-cn/courses/higher-mathematics/2025/) | 可读整理文本，部分“了解/理解”措辞有改写 | 辅助导航；不能作为官方要求强度的最终依据 |
| [2026 图书书目](https://www.sanmin.com.tw/product/index/015215997) | ISBN 9787107404689；教育部教育考试院编著、人民教育出版社 | 仅确认书目线索，未取得原文；零售来源不升级为官方验证 |
| [高教社旧版官方书目](https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=5f0752d5b0b2bda7c523ccdf) | 2020 出版信息 | 仅说明旧版出版来源；不是 2026 内容证据 |

原 jingweimath 页面自称 2026，同时又写适用于 2027，且指向高教出版，存在版本歧义；已将库来源改为明确的高校历史存档，版本仍标“2026 目标版草案”。本轮未找到可全文核验的 2026 官方原文，也没有把培训机构的“无变动”说法当作事实。PDF 未转载入公开仓库；取证文件 SHA256：`8a5cb6ceaf195113ffba8d99316b3255cdcbf8f72d8e0e3b7a4c170ba5c91afb`。

## 外部要求—已有入口—差距

编号是高校存档各科内部“考试要求”的编号；范围合计 123 条，不是 123 个方法。每行审视整个编号范围，方法列只列主要入口；“候选”表示找到了实现，不等于条款内全部子要求已逐句复核。精确机器索引见 `content/requirements/math-one-2019-audit.json`。

| 要求组 / 页 / 编号 | 已有方法入口（省略 .json） | 缺口或待加强 |
| --- | --- | --- |
| 高数一 / 1–2 / 1–10 | hm-function-domain、hm-squeeze、hm-recursive-limit、hm-intermediate-value | 函数性质与图形/建模；极限定义性质；直接重要极限 |
| 高数二 / 2 / 1–9 | hm-derivative-definition、hm-mean-value-proof、hm-concavity-asymptote | 平面切法线；反函数求导；曲率圆半径。微分形式不变性偏薄 |
| 高数三 / 3 / 1–6 | hm-riemann-sum、hm-substitution-integral、hm-improper-integral、hm-arc-work-integral | 侧面积；一般截面体积/平均值；压力与引力模型。弧长例题不等于覆盖全部物理量 |
| 高数四 / 3 / 1–9 | hm-vector-products、hm-line-plane-equations、hm-space-intersections | 方向余弦；由母线构造旋转/柱面。已有二次曲面识别不替代构造 |
| 高数五 / 4 / 1–9 | hm-multivariable-limit、hm-multivariable-implicit、hm-hessian-extrema | 二元二阶泰勒完全缺独立步骤；极值 Hessian 判别不是展开公式 |
| 高数六 / 4 / 1–8 | hm-double-cartesian、hm-triple-integral、hm-green、hm-gauss、hm-stokes | 核心方法候选已在；需扩写积分性质/两类关系、散度旋度坐标公式、引力应用 |
| 高数七 / 5 / 1–11 | hm-series-basic、hm-series-comparison、hm-power-radius、hm-taylor-expansion、hm-fourier | 核心候选已在；函数项定义与五个标准展开表偏薄，不能只由 e^x 公式视作全部掌握 |
| 高数八 / 5–6 / 1–9 | hm-ode-separable、hm-ode-reduction、hm-linear-ode-structure、hm-ode-euler | 全微分方程缺少；其他简单换元及三类降阶需例题补强 |
| 线代一 / 6 / 1–2 | la-det-row-operations、la-det-expansion | 候选已在；定义及性质待条款复核 |
| 线代二 / 6 / 1–5 | la-matrix-product、la-matrix-inverse、la-matrix-adjugate、la-matrix-rank | 分块矩阵运算缺少；特殊矩阵与等价性质偏薄，分块行列式不等于分块运算 |
| 线代三 / 6–7 / 1–8 | la-vector-representation、la-vector-basis、la-vector-coordinate、la-vector-orthogonal | 子空间判别与向量组等价缺独立方法；正交矩阵性质需加强 |
| 线代四 / 7 / 1–5 | la-system-cramer、la-system-consistency、la-system-homogeneous、la-system-general | 候选已在；零空间维数及必要充分条件待复核 |
| 线代五 / 7 / 1–3 | la-eigen-characteristic、la-eigen-diagonalization、la-eigen-symmetric | 候选已在；相似与合同区别需交叉提醒 |
| 线代六 / 8 / 1–3 | la-quadratic-matrix、la-quadratic-completion、la-quadratic-positive | 惯性/合同/规范形仅零散提到，补专门判别与缩放步骤 |
| 概率一 / 8 / 1–3 | pr-event-counting、pr-event-conditional、pr-event-total、pr-event-bayes | 几何概型与事件容斥缺少 |
| 概率二 / 8 / 1–5 | pr-dist-cdf、pr-dist-classic、pr-dist-density、pr-dist-transform | 泊松定理近似缺少；已有泊松模型条目明确未提供近似条件 |
| 概率三 / 9 / 1–4 | pr-joint-marginal、pr-joint-conditional、pr-joint-independence、pr-joint-transform | 二维离散表；二维正态参数/条件/线性组合缺少 |
| 概率四 / 9 / 1–2 | pr-moment-expectation、pr-moment-variance、pr-moment-correlation | 候选已在；常用分布矩表需补强 |
| 概率五 / 9 / 1–3 | pr-moment-inequality、pr-limit-lln、pr-limit-clt、pr-limit-binomial | 非同分布的切比雪夫大数律与伯努利特例需明确，现条目仅辛钦 |
| 概率六 / 10 / 1–3 | pr-sample-empirical、pr-sample-chi-square、pr-sample-t-f、pr-sample-normal | 候选已在；分位数约定和查表/对称关系需补强 |
| 概率七 / 10 / 1–4 | pr-estimate-moments、pr-estimate-mle、pr-estimate-unbiased、pr-estimate-normal-mean | 双总体均值差和方差比置信区间缺少 |
| 概率八 / 10 / 1–2 | pr-test-errors、pr-test-normal-mean、pr-test-two-means、pr-test-two-variances | 候选已在；双总体已知方差均值检验分支需补强 |

## 可直接交给内容 agent 的 24 个任务

`content/requirements/math-one-2019-audit.json` 的 gaps 是本轮精确任务表：包含 chapterId、topicId、proposedMethodId、原文要求定位。后续实施已补24方法并完成独立审校，证据在reviews/audit-gaps.md。历史gap列表保留作为来源追踪；当前未覆盖条目由getCoverage计算，不将已完成补写继续计为缺失。

| 优先批次 | proposedMethodId |
| --- | --- |
| 高数直接缺项 | hm-second-taylor、hm-exact-ode、hm-revolution-area、hm-revolution-cylinder、hm-curvature-circle |
| 概率直接缺项 | pr-two-means-interval、pr-two-variances-interval、pr-bivariate-normal、pr-discrete-joint、pr-poisson-approximation、pr-geometric-probability、pr-chebyshev-lln |
| 概念与基础方法 | hm-function-properties、hm-limit-definition、hm-important-limits、hm-plane-tangent-normal、hm-inverse-derivative、hm-direction-cosines、pr-event-union |
| 应用与线代 | hm-cross-section-average、hm-pressure-gravity、la-block-operations、la-subspace-equivalence、la-inertia-canonical |

每条需条件、步骤、公式、错误边界与自编可复算例题。先写 draft，再独立数学复核。条件更广的高级结论可作为扩展，但不得用新增“高级方法”掩盖基本要求缺项。表中的“偏薄”优先扩展既有方法，不另建重复条目。

## 最小接入设计与验收

独立 JSON 已接入 `src/domain/requirements.ts` 与既有 CLI，校验 library/chapter/method/topic 引用、外部要求 ID 唯一及来源定位；并对真题驱动缺口验证卷与题号引用。前端暂仅显示 topic 缺口。结构验证不授予官方版本核验状态，禁止由 methods 反推要求数量。

在取得目标版原文后，将 22 组细化为逐要求及子要求的稳定 ID，保存来源页/编号、内容摘要、candidate/verified/missing 映射。由既有 coverage.ts 增加独立要求覆盖计算，保留“方法 topic 完成率”与“目标课纲已核验覆盖率”两种不同数值。未取得目标原文前后者显示未核验；不能把本轮 123 个历史编号自动迁移成 2026 完整分母。

验收顺序：补 24 条及偏薄项→独立数学复核→取得目标版原文→逐子要求重新映射与核验→零遗漏报告。当前审计是可靠性受限的差距发现，不是 P2 最终完成证明。

历史编号细化已落盘：math-one-2019-items.json 共123项，记录原编号起始页与原创短标签、candidateMethodIds。CLI对照同源22组检查每个编号无遗漏/重复，页号与候选引用有效；content:report列候选数量，不给它赋予已核验覆盖率。向量第1要求起始于物理第6页，旧group第7页已纠正。细分候选映射仍需原文与内容人工逐子要求核验，2026官方原文未取得。

2026-09-08补充发现：实际打开[教育考试院数学大纲页面](https://yankao.neea.edu.cn/xhtml1/report/21115/5103-1.htm)，其标题明确2022，不能替代2026。人民教育出版社产品首页含硕士入学考试分类，但该分类抓取超时。[浙江新华书店2026书目](https://www.zxhsd.com/kgsm/ts/2025/10/17/6704598.shtml)另确认ISBN9787107404689、157页及目录含数学一考试要求与2024/2025附录；实际可读部分只有书目/概述/目录，没有数学一逐条正文。未改变P2的未完成结论，也未以零售书目充当官方内容。
