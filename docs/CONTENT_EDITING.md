# AI 内容编辑速查

编辑入口是 `content/libraries/` 中的 JSON；前端只读，无须 computer use。类型与字段规则见 `src/domain/schema.ts`，跨文件规则见 `src/domain/validate.ts`。完整的小体系可复制 `proof-toolkit/` 的结构再替换 ID 和内容。

1. 先读 `docs/IMPLEMENTATION.md` 并检索同类方法，避免重复。
2. 每个体系一个 `library.json`；其中定义章节及独立考点 ID。每个方法放 `methods/<id>.json`，真题分为 `papers/<id>.json` 与 `questions/<id>.json`。
3. 更新最少文件。ID 稳定；libraryId、chapterId、topicIds 和 relatedIds 都只能引用本体系条目。
4. 运行 `pnpm content:check`，再运行 `pnpm check` 与 `pnpm build`。修复错误后审阅 diff，按里程碑提交并 push。

最小方法模板（替换文字，引用必须已存在）：

```json
{
  "id": "new-method", "libraryId": "proof-toolkit", "chapterId": "proof-basics",
  "title": "方法名称", "summary": "一句话说明何时使用",
  "conditions": ["必要条件"], "steps": ["可执行步骤"], "formula": "x^2",
  "pitfalls": ["具体错误与边界"],
  "example": { "prompt": "自编：具体题目", "solution": "完整推导与答案" },
  "relatedIds": [], "topicIds": ["contradiction"], "status": "draft"
}
```

LaTeX 反斜杠在 JSON 中写成 `\\`，只在 formula 中写公式，不放 HTML。CLI 会解析 KaTeX，限制危险宏；文本字段由前端作为文本呈现。

格式校验通过仅表示结构、引用和公式可解析，不表示数学正确。`draft` 先保留；逐项核对适用条件、推导、边界与例题后才改为 `reviewed`。课纲来源的 reviewStatus 独立维护，不能因方法写满就宣布课纲已核验。

真题来源必须为 HTTPS。只创建试卷目录用 indexed；部分逐题用 partial；complete 必须填 expectedQuestionCount 且实际题数吻合。每道题的方法关联分别维护 pending/verified，verified 必须写核验说明。来源链接存在不证明方法关联正确；自编例题不能入真题统计。转载依据不足时只写来源入口与原创摘要，不搬运解析。

题号只用主问题编号字符串（例如"1"，不写"01"或"1a"），子问归于主问题，防止重复统计。complete 卷还检查1到expectedQuestionCount连续。`sourceNote`可添加到卷或题，显示转载排印问题或来源限制。

子问写入父题可选 `subquestions` 数组，每项为 `{id,label,summary,methodIds,evidenceNote,source?}`。id和原标号label在本题内唯一；methodIds仅引用父题已有方法关联，可为空，不重复保存verification或主辅角色。必须根据题面显式编号划分，不能把解析步骤编成子问；未写数组表示尚未结构化，已录数不代表全部子问齐全。参考2015-301-21、2016-301-23、2017-301-23。

来源可增加 `source.metadata`：publisher、level（official/university-hosted/third-party/unknown）、checkedOn（实际检查日）、availability（available/unavailable/unverified）、evidence、bodyMode（external-link）、rightsNote。访问成功不等于官方发布，未知转载许可继续只存外链与原创摘要。题目与试卷是同一资源时继承元数据（忽略hash、保留query）；换来源必须单独取证，不复制整卷身份。缺失元数据显示待登记。

source.page默认PDF物理页；文章图片序号须同时写 `locatorKind: "image-index"`，前端显示“文章第N张试卷图”并打开文章，不伪造#page跳转。子问同源可省略source，跨页/异来源时明确覆盖并核对定位。

运行 `pnpm content:report` 查看实际待审关联、未映射题、方法审校与topic缺口。`content/requirements/`的历史要求/真题缺口另受既有校验器检查；历史要求通过校验不会自动成为目标年份的官方课纲。

新增体系不需要改前端：loader 自动读取匹配目录。独立体系 `proof-toolkit` 的计数、方法引用与数学一完全隔离；它是自定义工具集，不是中国考试课纲。

历史课纲编号编辑：content/requirements/*-items.json 只记录同源audit内的真实编号、起始页、原创短标签和候选入口。保留historical-only状态；新增目标版本需独立来源及审计，不能直接改成reviewed。运行content:check检查跨文档编号完整性。

可选examScope：体系清单可声明单个考试代码的年度目标{exam,startYear,endYear}，每年一卷。它决定目标完整索引分母，和当前已收录卷数分开；未声明时不显示目标分母。变更范围需依据产品目标，不可为消除缺卷缩小范围。

主辅角色与核验是两条独立轴：methodLinks.role可为primary（直接解决至少一个明确求值/证明/判断任务，可多个主入口）、supporting（中间变换/引理/计算工具）、unclassified（证据不足或尚未分类）。分类须填写简短原创roleNote；不能根据数组位置或标签数量猜角色。角色不能提升verification，待核主方法仍不计频次；已核验的主、辅方法均参与当前证据频次。旧条目省略角色按待分类展示。原note继续保留数学核验依据。
