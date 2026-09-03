# Issue tracker:GitHub

本仓库的 issue 与规格以 GitHub issue 形式存储。所有操作使用 `gh` CLI。

## 常用约定

- **创建 issue**:`gh issue create --title "..." --body "..."`。多行正文用 heredoc。
- **读取 issue**:`gh issue view <number> --comments`,用 `jq` 过滤评论,同时取回标签。
- **列出 issue**:`gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`,配合合适的 `--label` 与 `--state` 过滤。
- **评论 issue**:`gh issue comment <number> --body "..."`
- **增删标签**:`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭**:`gh issue close <number> --comment "..."`

从 `git remote -v` 推断仓库;在克隆目录内运行时 `gh` 会自动完成。

## 以 Pull Request 作为请求来源

**是否将 PR 视为请求来源:否。** _(若本仓库将外部 PR 视为功能请求,则改为 `yes`;`/triage` 会读取此标志。)_

当设为 `yes` 时,PR 与 issue 走相同的标签与状态流转,使用 `gh pr` 对应命令:

- **读取 PR**:`gh pr view <number> --comments`,查看差异用 `gh pr diff <number>`。
- **列出待分类的外部 PR**:`gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`,仅保留 `authorAssociation` 为 `CONTRIBUTOR`、`FIRST_TIME_CONTRIBUTOR` 或 `NONE` 的(丢弃 `OWNER`/`MEMBER`/`COLLABORATOR`)。
- **评论 / 打标签 / 关闭**:`gh pr comment`、`gh pr edit --add-label`/`--remove-label`、`gh pr close`。

GitHub 上 issue 与 PR 共用同一编号空间,所以裸 `#42` 可能是其中任一个:用 `gh pr view 42` 解析,失败再退回 `gh issue view 42`。

## 当技能说"发布到 issue tracker"

创建一个 GitHub issue。

## 当技能说"获取相关 ticket"

运行 `gh issue view <number> --comments`。

## Wayfinding 操作

供 `/wayfinder` 使用。**map** 是一个单一 issue,其下挂 **子 issue** 作为 ticket。

- **Map**:一个标有 `wayfinder:map` 标签的 issue,存放 Notes / Decisions-so-far / Fog 正文。创建:`gh issue create --label wayfinder:map`。
- **子 ticket**:以 GitHub sub-issue 形式关联到 map 的 issue(`gh api` 调用 sub-issues 接口)。若未启用 sub-issues,则把子项加进 map 正文的任务列表,并在子 issue 正文顶部写 `Part of #<map>`。标签为 `wayfinder:<type>`(`research`/`prototype`/`grilling`/`task`)。被认领后,ticket 指派给主导开发的开发者。
- **阻塞关系**:GitHub 的**原生 issue 依赖**,是规范、界面可见的表示方式。用 `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>` 添加一条边,其中 `<blocker-db-id>` 是阻塞方的数字**数据库 id**(用 `gh api repos/<owner>/<repo>/issues/<n> --jq .id` 获取,_不是_ `#number` 也不是 `node_id`)。GitHub 通过 `issue_dependencies_summary.blocked_by` 报告状态(仅统计未关闭的阻塞方,即实时闸门)。若未启用依赖,退而求其次,在子 issue 正文顶部写一行 `Blocked by: #<n>, #<n>`。只有当每个阻塞方都关闭后,ticket 才解除阻塞。
- **前沿查询**:列出 map 下未关闭的子项(`gh issue list --state open`,限定到 map 的 sub-issues / 任务列表),剔除带未关闭阻塞方(`issue_dependencies_summary.blocked_by > 0`,或 `Blocked by` 行里有未关闭 issue)或有指派人的;按 map 内顺序取第一个。
- **认领**:`gh issue edit <n> --add-assignee @me`,这是本会话的第一次写操作。
- **解决**:`gh issue comment <n> --body "<答案>"`,然后 `gh issue close <n>`,再把上下文指针(gist + 链接)追加到 map 的 Decisions-so-far。
