# Domain Docs(领域文档)

工程技能在探查代码库时应如何消费本仓库的领域文档。

## 探查前先阅读

- 仓库根目录的 **`CONTEXT.md`**,或
- 仓库根目录的 **`CONTEXT-MAP.md`**(若存在):它指向每个 context 各一份 `CONTEXT.md`。阅读与当前主题相关的每一份。
- **`docs/adr/`**:阅读触及你即将工作区域的 ADR。在多 context 仓库中,也检查 `src/<context>/docs/adr/` 下的 context 级决策。

若以上文件不存在,**静默跳过**。不要指出其缺失,也不要主动建议现在创建。`/domain-modeling` 技能(通过 `/grill-with-docs` 与 `/improve-codebase-architecture` 触达)会在术语或决策真正落定时按需惰性创建它们。

## 文件结构

Single-context 仓库(大多数仓库):

```
/
├── CONTEXT.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

Multi-context 仓库(根目录存在 `CONTEXT-MAP.md`):

```
/
├── CONTEXT-MAP.md
├── docs/adr/                          ← 系统级决策
└── src/
    ├── ordering/
    │   ├── CONTEXT.md
    │   └── docs/adr/                  ← context 级决策
    └── billing/
        ├── CONTEXT.md
        └── docs/adr/
```

本仓库为 **single-context**:领域文档(若有)位于仓库根目录,而非各子目录。

## 使用术语表中的词汇

当你的输出命名某个领域概念时(在 issue 标题、重构提案、假设、测试名中),使用 `CONTEXT.md` 中定义的术语。不要偏离到术语表明确规避的同义词。

若所需概念尚未收录进术语表,那是一个信号:要么你正在发明项目并不使用的语言(重新考虑),要么存在真实缺口(记下来交给 `/domain-modeling`)。

## 标记 ADR 冲突

若你的输出与现有 ADR 相悖,应显式指出,而非静默覆盖:

> _与 ADR-0007(event-sourced orders)冲突,但值得重新讨论,因为……_
