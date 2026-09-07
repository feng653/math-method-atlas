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

新增体系不需要改前端：loader 自动读取匹配目录。独立体系 `proof-toolkit` 的计数、方法引用与数学一完全隔离；它是自定义工具集，不是中国考试课纲。
