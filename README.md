# 方寸 · 数学方法图谱

[在线使用](https://feng653.github.io/math-method-atlas/) · [路线图](docs/ROADMAP.md)

用一张可拖动、缩放的思维导图检索数学方法。界面保持安静，搜索、章节和方法详情按需出现。

- React Flow 画布：章节总览、所有方法大图、章节聚焦、节点拖拽、动画定位。
- 方法卡：适用条件、步骤、公式、易错点、原创算例与相关方法。
- 题型层：章节→题型→共享方法；题型卡包含方法选择清单、带条件和推导的二级公式、按目标选入的历年真题。新题型保持草案，内容扩展计划见[V2](docs/V2_CONTENT_PLAN.md)。
- 多体系 JSON 内容，AI agent 直接编辑文件；前端只读。
- 真题来源与逐题方法关联；只计算已核验证据，缺失数据不会冒充零次考查。

## 运行

Node 24，pnpm 11.5.1。

```sh
pnpm install
pnpm dev --port 43127
pnpm check
pnpm build
```

## 编辑与协作

先读 [MVP](docs/MVP.md)、[架构](docs/ARCHITECTURE.md)、[实现速查](docs/IMPLEMENTATION.md)、[路线图](docs/ROADMAP.md)。内容在 `content/libraries/<id>/`，每方法、每题独立 JSON。手写代码文件硬上限 250 行。

## 当前范围

详见 [实施状态](docs/STATUS.md)。课纲映射是草案；方法交叉审校不等于官方大纲完整覆盖。真题目标 2009—2026 年数学一，未收录年份不参与统计。第三方原题与解析仅链接到来源，不包含在本仓库。

仓库公开不代表第三方材料获得再分发授权。
