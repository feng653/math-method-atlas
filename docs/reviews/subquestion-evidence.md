# 真题子问证据与首批迁移复核

2026-09-08。完成设计取证后，主 agent 已实现子问契约和 UI；本轮将下列三题的 7 个真实子问写入对应 JSON，并独立审查 schema.ts、validate.ts、statistics.ts、Subquestions.tsx。这里的“原始子问”指题面明确列出的编号，不指官方真实性认证。未修改源码。

## 当前契约与最小增量

当前 questionSchema 为 strict，已接收可选 subquestions。路线图 P4 要求子问保留在主问题内，P5 要求同题不重复计次。statistics.ts 的 questionKey 仍为 libraryId/paperId/数值主题号，getMethodStats 仍只读取主问题 methodLinks 中 verified 关联。

已实现且本轮实际使用的 subquestions 数组契约：

| 字段 | 最小语义 |
| --- | --- |
| id | 在本主问题内稳定且唯一，如 part-1；完整定位键为 question.id + 子问 id，不能新建顶层题记录 |
| label | 忠实保留题面标号，如 (I)、(II)，与内部 id 分开 |
| summary | 极短原创任务摘要，既不复制条件也不存整题 |
| methodIds | 引用本主问题已存在的 methodLinks.methodId，允许为空；不重复保存 verification/note |
| evidenceNote | 记录来源何处出现该子问边界及此次核对依据，不使用解答中的步骤编号 |
| source（可选） | 与父题同页同源则继承；跨页时可按既有 HTTPS URL/page 结构覆盖。HTML 不虚构页号或子问 anchor |

首版未复制子问方法角色：父题 primary 表示至少完成该主问题的一个任务，不可自动解释为每个子问的 primary。子问显示方法按钮，父关联 pending 时附“待核”；以后若需要子问角色，再独立扩展，避免出现两份权威数据。

没有 subquestions 表示尚未结构化，不表示原题没有子问；有若干子问也不自动表示录入完整。先显示“已录 N 个子问”，不要凭数组长度宣布全题内容完备。单个编号内包含“证明并计算”等多个动作仍保留为一个子问，不按解题步骤进一步拆分。

## 已目视核实并落盘的三题

下表 methodIds 均真实存在且已在对应父题 methodLinks 中，不需要发明新标签。示例摘要合计仅数十字；核验状态仍由父题关联决定。

### 2015-301-21：两项矩阵任务

来源：[新东方页图文章](https://kaoyan.xdf.cn/202310/13540418.html)，第 4 张试卷图，第 21 题主体下明确排列 (I)、(II)，不存在跨页歧义。页码是文章内图序，不是 HTML 分页。当地核阅缓存为 TEMP/math-atlas-exam-review/2015-4.jpg；来源属性见 sources/2015.md。

| id | label | 原创 summary | methodIds | 边界与适用依据 |
| --- | --- | --- | --- | --- |
| part-1 | (I) | 相似条件定参 | la-eigen-similarity | 第一个编号只要求确定参数；相似不变量直接处理该任务 |
| part-2 | (II) | 构造对角变换 | la-eigen-diagonalization | 第二个编号要求构造可逆对角化矩阵；不是第一问解答中的计算步骤 |

两条实际均继承父题 source；evidenceNote 分别说明第4张图第21题的(I)/(II)独立边界。不把第一问可能使用的迹、行列式再拆成子问。

### 2016-301-23：密度与估计系数

来源：[新东方 PDF](https://file.xdf.cn/uploads/151228/124_151228165345iuBbx7Mn8g2DSO7R.pdf)，物理第 16 页，第 23 题。题面在解析开始前明确列 (I)、(II)；第 17 页是解析续页，不新增子问。当地缓存 TEMP/math-atlas-exam-review/2016-16.png；来源属性见 sources/2016.md。

| id | label | 原创 summary | methodIds | 边界与适用依据 |
| --- | --- | --- | --- | --- |
| part-1 | (I) | 最大值密度 | pr-joint-max-min | 第一编号直接要求最大值的密度；独立样本的分布函数乘积适用 |
| part-2 | (II) | 无偏倍数 | pr-estimate-unbiased、pr-joint-max-min | 第二编号要求无偏系数；最大值密度在该子问仅供期望计算，主问题层仍可为第一问主方法 |

两个子问均定位第16页。pr-joint-max-min 出现在两个子问引用中是实际依赖复用，不代表参加了两道题；不得把第17页的求期望步骤编为 part-3。

### 2017-301-23：三个显式统计任务

来源：[新东方页图文章](https://kaoyan.xdf.cn/202310/13540317.html)，第 5 张试卷图。第 23 题标题位于第4图末，完整条件和 (I)、(II)、(III) 都在第5图；主问题与三个子问均应指向第5图。当地缓存 TEMP/math-atlas-exam-review/2017-5.jpg；来源属性见 sources/2017.md。

| id | label | 原创 summary | methodIds | 边界与适用依据 |
| --- | --- | --- | --- | --- |
| part-1 | (I) | 绝对误差密度 | pr-dist-transform | 第一编号求绝对偏差密度，可合并正负原像 |
| part-2 | (II) | 一阶矩估计 | pr-estimate-moments | 第二编号明确限定一阶矩估计，不能由解答推成任意矩任务 |
| part-3 | (III) | 似然估计 | pr-estimate-mle | 第三编号是独立的似然估计要求，样本条件来自父题 |

三个方法在父题均为 primary，正是不同显式任务可以并列主方法的内容证据；不把三个子问分成三道顶层真题。

## 必须维持的统计与验证边界

1. 上述三题仍为 3 个主问题、3 张不同年份试卷，不能变成 7 题。年度 expectedQuestionCount 和已索引主问题分母不变。
2. 方法频次继续按 libraryId/paperId/主题号去重。2016 的 pr-joint-max-min 在两个子问出现，题次数仍为 1、试卷次数仍为 1；任何子问引用都不绕过父级 verified 门槛。
3. 子问 methodIds 必须唯一且为父题方法集合子集；跨体系、未知 ID、悬空父级引用都应拒绝。新增方法时先正常建立并核验父级关联，再在子问引用。
4. 已运行相关测试：同方法跨两个子问只计一次，父级 pending 不因子问引用计入；子问不进入主题号连续性检查。同卷多题去重另由原统计测试保障。
5. 来源均为转载，许可未知；只保存标号、原创摘要和证据定位。来源记录中的初录 pending 快照不覆盖当前 question 核验状态，本设计不升级来源认证，也不声称已录全库子问。

## 实现边界独立复核

后续修正（主agent）：ebc1f45已修复下文审阅时的两项来源展示限制；HTML页图现用image-index且不再生成#page，子问独立source会展示SourceDetails。浏览器实测见VERIFICATION；下列记录保留初次审阅时态。

- schema：子问数组若存在须非空；摘要、标签、证据经 trim 后须非空；方法引用可为空但不能重复；source 沿用 HTTPS/正整数页号与来源元数据契约，未知字段被拒绝。
- validate：同父题的子问 id 与 label 分别检查唯一；方法引用必须已在父题，父题引用还受同体系真实 method 检查，故未知或跨体系引用不能借子问绕过。重复 part-1 在不同父题允许，符合局部 ID 约定。
- UI：无子问时不显示空折叠；原生 details/summary 提供折叠和键盘入口；显示“已录 N 个子问”而非全部收录。文本用 React 转义，方法按钮调用现有选择回调，待核提示只读父关联。没有在子问展示父级主辅标记，避免误导作用范围。
- source：优先子问覆盖来源，否则继承父题。此次三题均继承，无重复来源元数据。已知限制是 sourceHref 对 HTML 页图也生成 #page=N；该片段未证实能滚动到图，实际定位依赖 evidenceNote 明确的图序。将来使用独立子问来源时，其 metadata 在该子组件尚未单独展示；本批没有覆盖来源，不受影响。两点已告知主 agent，本轮未越界改源码。
- 未执行浏览器实测，不以 JSX 审阅或测试通过声称实际焦点、点击或页面滚动已验收。

验证：content:check 通过（2体系、185方法、18卷、408主问题）；domain、archive-statistics、source 三个测试文件共25项通过，含子问重复 ID/label、父级无引用负例及去重门槛。本轮仅改三个指定题 JSON 和本记录；其余父题字段及原方法关联保持不变。首批为三题七子问，不代表全库子问录入完成。未提交。
