# 已有实现速查

最后更新：2026-09-08。本表仅记录已落盘实现；“规划”不能被当作已实现。

| 能力 | 唯一入口 | 状态 / 验证 |
| --- | --- | --- |
| 产品边界 | `docs/MVP.md` | 已写；前端只读、多体系、证据频次 |
| 架构边界 | `docs/ARCHITECTURE.md` | 已设计；尚未代码验证 |
| 协作规则 | `AGENTS.md` | 已写；250 行门禁待实现 |
| 内容类型与校验 | `src/domain/schema.ts`、`validate.ts` | 唯一契约，结构和跨文件引用 |
| 内容读取 | `src/data/load.ts` | Vite glob构建时读取多体系JSON |
| 搜索/覆盖/频次 | `src/domain/search.ts`、`coverage.ts`、`statistics.ts` | 纯函数，15项测试通过 |
| 外部要求审计 | `src/domain/requirements.ts`、`content/requirements/` | 既有CLI校验历史要求引用；不冒充2026版核验 |
| 进度报告 | `scripts/report.ts` | pnpm content:report输出实际数量/待审关联/缺口 |
| 布局与画布 | `src/domain/graph.ts`、`src/components/AtlasGraph.tsx` | 总览/完整图/章节；拖动仅会话 |
| 选择与页面 | `src/App.tsx` | hash保持体系/方法；全屏图谱+按需浮层 |
| 阅读与检索 | `src/components/MethodDetail.tsx`、`LibraryNavigation.tsx`、`PaperLibrary.tsx` | 目录与真题检索；KaTeX由Formula渲染 |
| 内容 | `content/libraries/math-one/` | 151方法，审校记录在docs/reviews；课纲仍草案 |
| CLI门禁 | `scripts/validate.ts`、`check-files.ts` | pnpm check；公式解析+250行硬限制 |
| 发布 | `.github/workflows/pages.yml` | 校验/构建/Pages；首次远端检查部署成功 |

维护规则：新增能力只补一行“职责→路径→状态/证据”；一个职责只能有一个主入口。保留必要公共函数名、数据入口和关键限制，不复制代码与完整目录树。路径变更同提交更新。未验证项写明，不用“完成”代替证据。

开始实现前先读本表，再 `rg` 搜职责/函数/实体；找到现有实现就扩展它。设计参考 ARCHITECTURE.md，里程碑参考 ROADMAP.md。不得新增第二套 loader、search、图谱、统计或校验器。
