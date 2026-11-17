# mattpocock/skills 解释与使用

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

[mattpocock/skills](https://github.com/mattpocock/skills) 是 Matt Pocock 维护的 Agent Skills 合集，副标题为 “Skills for Real Engineers”。它把资深工程师工作时的提问方式、调查习惯、测试纪律和评审标准写成 Markdown 指令，交给 Claude Code、Codex、GitHub Copilot、Gemini CLI 等编程代理执行。

它不是运行时依赖，也不是模型，而是一组可以拆开、替换、组合的工作指令。上游对它的定位是三个词：**small**（每个 Skill 只做一件事）、**adaptable**（Markdown 可以直接改）、**composable**（按需串成流程）。

> 本文依据上游 README、`.claude-plugin/plugin.json` 与 CHANGELOG 整理，对应插件版本 **1.3.2**（2026 年 11 月）。上游更新频繁，实际可用的 Skill 名称、安装命令和配置项请以仓库为准。

## 一、mattpocock/skills 是什么

它与 GSD、BMAD、Spec-Kit 这类“接管流程”的框架刻意区分开：那些框架替你规定完整开发流程，一旦流程本身有 bug，使用者很难修改；mattpocock/skills 只提供可拆装的纪律，流程的控制权仍然在使用者手里。

### 它想修复的四类问题

| 失败模式 | 典型表现 | 对应的修复 |
| --- | --- | --- |
| 代理没做对 | 实现看起来合理，但不是你想要的东西 | grilling：让代理先连续提问，把需求对齐再动手（grill-me / grill-with-docs） |
| 代理太啰嗦 | 不用项目术语，20 个词说 1 个词的事 | 共享领域语言：GLOSSARY.md 记录术语，ADR 记录决定 |
| 代码跑不起来 | 写完才发现不能工作 | 紧凑的反馈回路：类型检查、浏览器、自动化测试、红-绿-重构（tdd、diagnosing-bugs） |
| 代码变成泥团 | 功能越堆越多，越来越难改 | 深模块设计：大量行为藏在小接口后面（codebase-design、improve-codebase-architecture） |

其中“共享领域语言”是上游反复强调的技术：术语统一之后，变量名、函数名、文件名会跟着一致，代码库更容易导航，代理思考时消耗的 token 也更少。GLOSSARY.md 和 ADR 不需要单独维护，domain-modeling 会在需求澄清的过程中顺带建立。

### User-invoked 与 Model-invoked

上游把 Skill 分成两类：

- **User-invoked**：只能由用户输入触发，例如 `/grill-with-docs`、`/to-spec`、`/implement`。它们的职责是**编排流程**。
- **Model-invoked**：用户可以直接调用，代理也会在任务匹配时自动采用，例如 `tdd`、`diagnosing-bugs`、`code-review`、`domain-modeling`。它们承载**可复用的工程纪律**。

一条硬性规则：**user-invoked Skill 可以调用 model-invoked Skill，但永远不会调用另一个 user-invoked Skill**，避免流程互相套娃。例如 `/implement` 会调用 `tdd` 和 `code-review`；`/implement-spec` 会把每个 ticket 交给一个运行 `tdd` 的实现子代理。

### 仓库中的目录分桶

| 目录 | 内容 | 是否进入插件 |
| --- | --- | --- |
| `skills/engineering` | 日常工程流程，20 个 Skill | 是 |
| `skills/productivity` | 通用工作流，7 个 Skill | 是 |
| `skills/in-progress` | 公测中的实验 Skill，可能随时更改或消失 | 否，需要单独安装 |
| `skills/misc` | 作者保留但很少使用的工具 | 否 |
| `skills/deprecated` | 已废弃的 Skill | 当前为空 |

`skills/in-progress` 目前包括 `loop-me`、`writing-beats`、`writing-fragments`、`writing-shape`、`claude-handoff`、`setup-ts-deep-modules`、`software-factory`；`skills/misc` 包括 `git-guardrails-claude-code`、`migrate-to-shoehorn`、`scaffold-exercises`、`setup-pre-commit`。这两类都不在插件里，也没有官方文档页，需要单独安装。

## 二、安装方式

一条铁律：**每个代理只选择一种安装方式**。插件和文件两种方式同时安装，会让每个 Skill 出现两份，导致重复显示、版本不一致，代理也不知道该读哪一份。

### 1. Claude Code

~~~bash
claude plugin install mattpocock-skills@claude-plugins-official
~~~

这是官方插件市场中的托管插件，默认自动更新。插件包含 `skills/engineering` 和 `skills/productivity` 下的全部 27 个 Skill；`in-progress` 和 `misc` 不在其中。

### 2. Codex

~~~bash
codex plugin marketplace add mattpocock/skills
codex plugin add mattpocock-skills@mattpocock
~~~

Codex 会在启动时自动更新插件。

### 3. GitHub Copilot（CLI 与 VS Code）

~~~bash
copilot plugin marketplace add mattpocock/skills
copilot plugin install mattpocock-skills@mattpocock
~~~

然后在 `~/.copilot/settings.json` 中加入以下配置（只需一次）：

~~~json
{
  "extraKnownMarketplaces": {
    "mattpocock": {
      "source": { "source": "github", "repo": "mattpocock/skills" },
      "autoUpdate": true
    }
  }
}
~~~

在 VS Code 中也可以运行 **Chat: Install Plugin From Source**，输入 `https://github.com/mattpocock/skills`，插件每天自动更新。

### 4. Gemini CLI（手动更新）

~~~bash
gemini skills install https://github.com/mattpocock/skills.git --path skills/engineering
gemini skills install https://github.com/mattpocock/skills.git --path skills/productivity
~~~

更新时重新执行这两条命令。

### 5. 其他代理或想编辑文件

~~~bash
npx skills@latest add mattpocock/skills -a <agent>  # cursor、opencode、devin、windsurf、amp、pi；省略 -a 则交互选择
~~~

安装器会询问两件事：

1. 要安装到哪些编程代理；
2. 要安装哪些 Skill。

第一次使用工程流程时，务必勾选 `setup-matt-pocock-skills`；只使用独立 Skill 时不必安装它。

更新方式：

~~~bash
npx skills@latest update
~~~

上游新增 Skill 后，需要重新执行 add 才能看到。如果只想安装某个未收录进插件的 Skill（例如 `in-progress` 或 `misc` 目录中的），可以指定名称：

~~~bash
npx skills@latest add mattpocock/skills --skill=<name>
~~~

### 两种安装方式的差异

| 方式 | 特点 | 更新 |
| --- | --- | --- |
| Claude Code 插件（Codex、Copilot 同理） | 托管内容，按只读包使用，整套安装，不能逐个挑选 | 插件机制自动更新 |
| npx skills 文件安装 | 文件写进项目，可阅读、修改、提交到版本库 | 手动执行 `npx skills@latest update`，需要检查 Git diff |

如果希望长期定制 Skill，选择文件安装方式；如果只想使用官方版本并减少维护，选择插件方式。

### 按工作流按需安装

使用 npx skills 安装时，不必把全部 Skill 都装进每个项目。注意 user-invoked Skill 会调用 model-invoked 的辅助 Skill，选择时要把依赖一起装上：

- `/grill-with-docs` 需要 `grilling` 和 `domain-modeling`；
- `/implement` 需要 `tdd` 和 `code-review`；
- `/improve-codebase-architecture` 需要 `codebase-design`。

| 工作流 | 建议安装的 Skill | 是否需要 setup |
| --- | --- | --- |
| 只澄清一个想法，不修改项目 | `grill-me`、`grilling` | 否 |
| 在项目中澄清需求并留上下文 | `setup-matt-pocock-skills`、`grill-with-docs`、`grilling`、`domain-modeling` | 是 |
| 当前会话完成一个小功能 | 上一行 + `implement`、`tdd`、`code-review` | 是 |
| 跨多个会话开发大功能 | 上一行 + `to-spec`、`to-tickets`、`implement-spec`（或继续用 `implement`） | 是 |
| 处理外部提交的 Issue | `setup-matt-pocock-skills`、`triage`、`implement`、`tdd`、`code-review` | 是 |
| 排查复杂 Bug | `diagnosing-bugs`、`tdd`、`code-review` | 否 |
| 架构维护与领域建模 | `improve-codebase-architecture`、`codebase-design`、`grill-with-docs`、`grilling`、`domain-modeling` | 建议 |
| 资料调研或一次性原型 | `research` 或 `prototype`；需要跨会话时再加 `handoff` | 否 |
| 收尾与提交 | `retro`、`pr` | 否 |

例如，只想在当前项目中采用“小功能开发”流程，可以在安装器中选择：

~~~text
setup-matt-pocock-skills
grill-with-docs
grilling
domain-modeling
implement
tdd
code-review
~~~

不需要安装 `triage`、`wayfinder`、`teach` 等与当前任务无关的 Skill。需要时重新执行安装命令，选择新增 Skill 即可。

## 三、首次配置：运行 setup-matt-pocock-skills

安装完成后，在每个项目里运行一次：

~~~text
/setup-matt-pocock-skills
~~~

它不是简单的初始化脚本，而是一个“先探索项目、再逐段询问、最后写入配置”的交互流程：读取 `git remote -v`、`AGENTS.md` / `CLAUDE.md`、`GLOSSARY.md` / `GLOSSARY-MAP.md`（以及旧版的 `CONTEXT.md` / `CONTEXT-MAP.md`）、`docs/adr/`、`docs/agents/`、`.scratch/`，判断是否安装了 triage，以及项目是否是 monorepo（`pnpm-workspace.yaml`、`workspaces`、`packages/*` 等信号）。然后依次确认三件事。

### A. Issue Tracker

选择项目跟踪任务的位置：

- **GitHub**：通过 `gh` CLI 操作。当 remote 指向 GitHub 时，这是默认选项。
- **GitLab**：通过 `glab` CLI 操作。
- **本地 Markdown**：每个功能一个目录，文件放在 `.scratch/<feature>/`。
- **其他**：Jira、Linear 或团队自己的流程，用一段话描述即可。

选择结果记录在 `docs/agents/issue-tracker.md`。GitHub 和 GitLab 需要有一个可达的 remote；如果仓库还没有 remote，setup 会让你提供仓库地址，并帮你执行 `git remote add origin`。GitHub 和 GitLab 的模板里还有一个 “PRs as a request surface” 开关，默认关闭；只有希望外部 PR 也走 triage 时才需要打开。

### B. Triage 标签

这一节只在安装了 `triage` 时执行。它使用五个规范角色：

| 标签 | 含义 |
| --- | --- |
| `needs-triage` | 尚未评估 |
| `needs-info` | 信息不足，等待补充 |
| `ready-for-agent` | 已经足够明确，可以直接交给代理 |
| `ready-for-human` | 需要人类决策或人工处理 |
| `wontfix` | 不会处理 |

默认标签串就是角色名。如果项目里已经有自己的标签体系，setup 只做映射，不会重复创建；在 GitHub 和 GitLab 上，缺失的标签会被自动创建。

### C. 领域文档

默认使用 single-context 布局：

~~~text
GLOSSARY.md      # 领域术语与共享语言
docs/adr/        # 架构决定记录
~~~

只有当项目是 monorepo 时，才提供 multi-context 布局：

~~~text
GLOSSARY-MAP.md              # 根目录，指向各个上下文
packages/a/GLOSSARY.md
packages/a/docs/adr/
packages/b/GLOSSARY.md
packages/b/docs/adr/
~~~

注意命名变化：旧版本使用 `CONTEXT.md` 和 `CONTEXT-MAP.md`，1.3.0 起改名为 `GLOSSARY.md` 和 `GLOSSARY-MAP.md`。如果项目里还留着旧文件，setup 会提议用 `git mv` 迁移。

### setup 会写入什么

- 如果项目里已有 `CLAUDE.md`，就更新它；否则更新 `AGENTS.md`；两者都不存在时，会询问你要创建哪一个，**不会擅自决定，也不会在已有 `CLAUDE.md` 时另建一个 `AGENTS.md`**。
- 在文件里加入一个 `## Agent skills` 段落，包含 Issue tracker、Triage labels、Domain docs 三个小节。
- 创建以下文件：
  - `docs/agents/issue-tracker.md`
  - `docs/agents/domain.md`
  - `docs/agents/triage-labels.md`（仅安装 triage 时）

运行结束后建议看一眼 `git diff`，确认它选择的 tracker、标签和文档布局符合预期。需要切换 issue tracker，或者上游更新了模板、想刷新 `docs/agents/` 时，重新运行 setup 即可。

## 四、常用 Skill 说明

### Engineering：User-invoked

| Skill | 作用 | 适合什么时候使用 |
| --- | --- | --- |
| `ask-matt` | 根据当前情况指路；回答前会先读对应 Skill 的 SKILL.md | 不确定下一步该用哪个 Skill |
| `grill-with-docs` | grilling + domain-modeling，边提问边写 GLOSSARY.md 和 ADR | 在项目中开发功能或设计方案 |
| `triage` | 让 Issue 和外部 PR 在 triage 角色状态机中流转，写出 agent-ready brief | 外部 Bug 报告或需求刚进入项目 |
| `improve-codebase-architecture` | 扫描可深化之处，生成可视化 HTML 报告，再对选中的机会继续 grill | 日常架构维护 |
| `setup-matt-pocock-skills` | 配置 issue tracker、triage 标签、领域文档布局 | 每个项目第一次使用前 |
| `to-spec` | 把当前会话综合成规格并发布，不再采访 | 讨论已充分，需要正式规格 |
| `to-tickets` | 拆成 tracer-bullet ticket，并声明阻塞边 | 功能较大，需要多会话协作 |
| `implement` | 按 spec 或 ticket 实现，驱动 tdd，最后 code-review 并提交 | 已有明确的实现任务 |
| `implement-spec` | 把整条 spec 放到一条 integration branch 上并行实现 | 想一次跑完整个 spec |
| `wayfinder` | 为超出单会话容量的大工程建立决策地图 | 目标太大，看不清路线 |
| `retro` | 复盘会话，改进代理环境 | 一次构建结束后 |

### Engineering：Model-invoked

| Skill | 作用 |
| --- | --- |
| `prototype` | 用一次性原型回答设计问题：逻辑用单个 HTML 文件，UI 用多个可切换变体 |
| `diagnosing-bugs` | 硬 Bug 的诊断循环：先建立对该 Bug 报红的反馈回路，再最小化、假设、插桩、修复、回归测试 |
| `research` | 后台代理只查一手来源，在仓库中留下逐条引用的 Markdown |
| `tdd` | 红-绿-重构，一次一个垂直切片；测试只打公开接口 |
| `domain-modeling` | 主动维护领域模型：挑战术语、用边界场景施压、更新 GLOSSARY.md 和 ADR |
| `codebase-design` | 深模块词汇：module、interface、depth、seam、adapter、leverage、locality |
| `code-review` | 从 Standards（仓库规范 + Fowler 坏味道基线）和 Spec（忠实实现来源 Issue）两轴并行复审 |
| `pr` | 塑造 PR 正文：最小可视化摘要、前后证据、单向门/双向门与影响范围判断 |
| `wizard` | 为只有人类能做的步骤生成交互式 bash 向导 |

### Productivity：User-invoked

| Skill | 作用 |
| --- | --- |
| `grill-me` | 只提问，不写项目文档，适合不在工作目录时澄清想法 |
| `handoff` | 把当前会话压缩成交接文档，存到操作系统临时目录，供另一个代理继续 |
| `teach` | 以当前目录为学习工作区，跨会话学习一个概念 |
| `to-questionnaire` | 把需要别人回答的决定做成问卷；只 grill “发送”，不 grill 主题 |
| `wait-what` | 消息没听懂时重新讲解：补充上下文，用简化技术英语和共享词汇 |

### Productivity：Model-invoked

| Skill | 作用 |
| --- | --- |
| `grilling` | 提问原语：设计树、轮次、frontier，每题带推荐答案，“yes” 即接受推荐 |
| `writing-for-agents` | 编写代理消费的文档：Skill、AGENTS.md / CLAUDE.md、被指针引用的文档 |

### 已移除与实验中的 Skill

- `resolving-merge-conflicts` 在 1.3.0 中移除，**没有替代品**：代理会直接处理进行中的 merge 或 rebase 冲突。
- `in-progress` 目录中的 Skill 是公测功能，不进入插件，也没有文档页，可能随时更改或消失。需要尝鲜时用 `npx skills@latest add mattpocock/skills --skill=<name>` 单独安装。
- `misc` 目录中的 Skill 是作者保留但很少使用的工具，不对外推广，但同样可以单独安装。

## 五、推荐工作流

### 主流程：从想法到交付

~~~text
/grill-with-docs
    ↓
/prototype（可选，用 /handoff 进出）
    ↓
/to-spec
    ↓
/to-tickets
    ↓
/implement（逐个 ticket）  或  /implement-spec（整条 spec 并行）
    ↓（内部 /tdd）
/code-review
    ↓
/retro
~~~

这是 `ask-matt` 描述的主流程。它不是必须逐字执行的流水线，而是一张地图：小改动可以只走 grill-with-docs → implement；大功能才需要 spec 和 tickets；研究、原型、triage、wayfinder 是从旁边汇入的支路。

### 上下文卫生

上游建议把主流程的前三步（grilling、spec、tickets）保持在**同一个未中断的上下文窗口**里，不要在 `/to-tickets` 之前 compact 或 clear，否则提问、规格和 ticket 之间会失去共同的思考背景。

限制来自 **smart zone**：模型仍能清晰推理的窗口大约为 150k tokens。如果会话在 `/to-tickets` 之前接近这个上限，应该在最近的阶段边界执行 `/compact`，而不是在退化状态下继续。

### 阶段边界怎么选

一个“阶段”是会话中的一块工作：grilling、实现、QA。阶段之间的边界有五种选择：

| 选择 | 什么时候用 |
| --- | --- |
| 继续（Continue） | 下一个阶段需要当前阶段作为一手来源，或 smart zone 仍然充足 |
| `/clear` | 接下来的工作与当前上下文无关；最便宜，但对相关内容是一去不返的损失 |
| `/handoff` | 换 harness、换目录、交给同事，或在阶段中分叉一个侧任务 |
| 子代理 | 任务可以独立完成，且你希望省下主窗口的上下文 |
| `/compact` | 以上都不适用时的默认选项，压缩时传入指令，保留需要的内容 |

除“继续”之外，每一种选择都会把一手来源变成二手材料。因此顺序是：先问能不能继续，再问能不能清空，然后才是 handoff、子代理、compact。

### 1. 澄清需求：grill-with-docs

`/grill-with-docs` 会同时调用 `grilling` 和 `domain-modeling`。grilling 使用一棵“设计树”，一轮一轮地问；每一轮只问那些前置问题已经确定、现在可以回答的问题（frontier）。问题会编号，并附带推荐答案，措辞使得回答 “yes” 就等于接受推荐。

与 `/grill-me` 的区别在于状态：`grill-me` 只调用 grilling，不写任何文件，适合不在工作目录时使用；`grill-with-docs` 会把术语沉淀到 `GLOSSARY.md`，把难以逆转的决定写成 ADR，适合在有仓库的地方工作。

### 2. 可选：prototype

如果某个问题无法只靠对话回答（例如“这个状态模型感觉对吗”“这个界面应该长什么样”），就绕道 `/prototype`。原型是**一次性代码**，从第一天起就明确标记，并放在真正会被使用的位置附近。

- 逻辑问题：生成一个可分享的 HTML 文件，包含自由操作按钮和分页的引导式走查。
- UI 问题：在同一路由上放置多个截然不同的变体，用 URL 查询参数和底部浮动栏切换。

原型完成后，把验证过的决定折回真实代码；原型本身提交到 `main` 之外的 throwaway 分支，作为一手来源保留，并在实现 Issue 上留一个 context pointer。`main` 只保留验证后的决定。

需要跨会话做原型时，用 `/handoff` 把当前会话写成交接文档，再在原型目录中新开会话继续。

### 3. 写规格：to-spec

`/to-spec` **不再采访**。需求已经在 grilling 阶段问清楚了，它只做四件事：探索仓库、使用 glossary 里的词汇、尊重已有 ADR、把讨论综合成一份可执行的规格。

在发布之前，它会先与你确认测试 seam：优先使用现有 seam，位置尽可能高，理想情况下只有一个。确认后，规格发布到 issue tracker，并打上 `ready-for-agent` 标签，不需要再走 triage。

### 4. 拆 ticket：to-tickets

`/to-tickets` 把规格拆成 **tracer-bullet** 式的垂直切片：每个 ticket 都贯穿必要的层，能够独立演示、独立验证，并且能在一个全新的会话中完成。

每个 ticket 会声明自己的 **blocking edges**（先依赖谁），并作为来源 Issue 的 sub-issue 发布。如果 tracker 支持原生 blocking link（例如较新的 `gh`），就直接建立链接，正文里不再写“Blocked by”；本地 Markdown tracker 则每个 ticket 一个文件，在文件中用 `Blocked by:` 列出阻塞项。

### 5. 实现：implement 与 implement-spec

两种实现方式，按你想要的掌控程度选择。

**`/implement`：一次一个 ticket。** 它会先取回 ticket 并复述标题，然后在预先约定的 seam 上调用 `tdd`，一次完成一个红-绿-重构切片。实现过程中会经常运行类型检查和单个测试文件，最后运行一次全量测试，再调用 `code-review`，最后把改动提交到当前分支。每完成一个 ticket，建议 `/clear`，因为下一个 ticket 是自包含的，上一个 ticket 的上下文可以直接丢弃。

**`/implement-spec`：整条 spec 一次跑完。** 它把 spec 和 tickets 读成一张任务图，在一条 integration branch 上并行调度：

1. 可选地启动一个探索子代理，把调研笔记保存在仓库之外；
2. 为每个就绪的 ticket 启动一个**全新的 implementer 子代理**，各自使用独立的 worktree 和分支，基于 integration branch 工作，驱动 `tdd`，完成前先把 integration tip 合并进来；
3. 由 merger 子代理负责合并；
4. 随着依赖完成，frontier 会不断补充，并发数随之增加；
5. 全部完成后，在 integration branch 上运行一次 `code-review`，再由一个全新的 implementer 统一修复所有问题；
6. 只有当 tracker 通过 PR 关闭工作，或用户明确要求时，才在第一次合并后开 draft PR；否则按 tracker 的方式关闭 ticket；
7. 最后清理 worktree。

想逐个掌控 ticket、在不同会话之间切换，选 `/implement`；想编排整条 spec、让实现并行推进，选 `/implement-spec`。

### 6. 复查：code-review

`/code-review` 需要一个固定点：某个 commit、分支、tag 或 merge-base。它从两个轴并行复查：

- **Standards**：仓库自己的规范、`CODING_STANDARDS.md` / `CONTRIBUTING.md`，以及 Fowler 的坏味道基线；
- **Spec**：改动是否忠实实现了来源 Issue 或规格，不多也不少。

每个子代理都使用全新的上下文，避免被实现过程锚定。

### 7. 收尾：retro

`/retro` 复盘的是**代理环境**，不是代码。它寻找可以下次避免同类问题的改动：导航指针、自动化检查、编码规范、精简过大的全局 AGENTS.md、以及需要新增或调整的 Skill。

机械性的错误应该变成确定性检查（lint、类型检查、测试）；判断性的问题应该写进 `CODING_STANDARDS.md`，供 `code-review` 使用。`CLAUDE.md` / `AGENTS.md` 应当保持极简，只放指针和不可推导的约定。

### 场景速查

| 当前情况 | 建议路径 |
| --- | --- |
| 只有一个小改动 | `grill-with-docs` → `implement` → `code-review` |
| 一个功能，当天能完成 | `grill-with-docs` → `implement`（内部 tdd）→ `code-review` → `retro` |
| 一个功能，需要多次会话 | `grill-with-docs` → `to-spec` → `to-tickets` → 逐 ticket `implement`（ticket 之间 `/clear`） |
| 想并行推进整条 spec | 同上，直到 `to-tickets`，然后 `/implement-spec` |
| 收到外部 Issue 或 PR | `triage` → `implement`（或先交给人类） |
| 一个反复出现的怪 Bug | `diagnosing-bugs` → 修复后在同一会话 `retro` |
| 目标太大，看不清路线 | `wayfinder` → 地图清晰后 `to-spec` |
| 想长期维护代码库结构 | `improve-codebase-architecture` → 选中机会后 `grill-with-docs` |

## 六、完整示例

假设要给一个订单系统增加“导出 CSV”功能。

### 第一步：安装与配置

在 Claude Code 中安装插件：

~~~bash
claude plugin install mattpocock-skills@claude-plugins-official
~~~

在项目根目录运行一次 setup：

~~~text
/setup-matt-pocock-skills
~~~

选择 GitHub 作为 issue tracker，接受默认的五个 triage 标签，使用 single-context 布局（`GLOSSARY.md` + `docs/adr/`）。setup 会把配置写进已有的 `CLAUDE.md`，并创建 `docs/agents/issue-tracker.md` 和 `docs/agents/domain.md`。

### 第二步：澄清需求

~~~text
/grill-with-docs 我想让用户把订单列表导出成 CSV
~~~

代理会一轮一轮提问：导出全部还是当前筛选结果？十万行以上怎么处理？编码用 UTF-8 还是带 BOM？哪些角色可以导出？导出记录要不要审计？

回答的同时，它会把 `Order`、`Export`、`Filter` 等术语写进 `GLOSSARY.md`；如果决定采用流式导出以避免内存峰值，就写一条 ADR。

### 第三步：写规格、拆 ticket

~~~text
/to-spec
/to-tickets
~~~

`/to-spec` 会先确认测试 seam，例如只通过 `ExportService.export()` 这个公开入口测试，不 mock 内部实现。随后把规格发布到 GitHub Issue，打上 `ready-for-agent`。

`/to-tickets` 可能拆出三个垂直切片：

1. 小数据量导出（当前筛选结果，同步返回）；
2. 大数据量流式导出（含进度与超时）；
3. 权限与审计（记录谁在什么时候导出了什么）。

第二个和第三个 ticket 会声明对第一个的阻塞关系。

### 第四步：实现与复查

逐个 ticket 实现：

~~~text
/implement
~~~

完成一个 ticket 后 `/clear`，再开始下一个；或者一次性交给：

~~~text
/implement-spec
~~~

它会在 integration branch 上并行实现，最后统一跑 `code-review`。

### 第五步：复盘

~~~text
/retro
~~~

如果这次实现中反复出现“忘记给导出接口加权限检查”，retro 会建议把它变成一条确定性检查（例如路由级测试或 lint 规则），而不是只写一句“下次注意”。

## 七、维护和安全注意事项

1. **把 Skill 当成可执行的工作指令来审阅。** 安装前快速读一遍相关 `SKILL.md`，尤其是会运行脚本或访问外部服务的 Skill。`wizard` 的 `template.sh` 是库代码，不要手改；`research` 会读取外部来源；`diagnosing-bugs` 要求先对密钥脱敏，但你自己也不要把生产密钥贴进会话。
2. **不要同时保留两种安装来源。** 插件和 npx 文件安装二选一，否则每个 Skill 都会出现两份。
3. **更新前看变更。** 插件方式自动更新；文件方式执行 `npx skills@latest update` 后检查 `git diff`；Gemini CLI 需要重跑两条安装命令。上游更新模板后，重新运行 `/setup-matt-pocock-skills` 刷新 `docs/agents/`。README 和 CHANGELOG 是判断“这个 Skill 还在不在”的第一来源，`ask-matt` 也会在回答前先读对应的 `SKILL.md`。
4. **给代理清晰的边界。** Skills 提供的是纪律，不是保证。CI、权限控制、代码审查和人工验收仍然必须保留；不要让代理在无人监督的情况下执行不可逆操作。
5. **模型兼容性。** 指令尽量写成“调用 Skill 工具”，不绑定某一个厂商；但不同 harness 对 Skill 的支持程度不同，插件方式通常最省心。

## 八、常见问题

**安装后找不到 Skill？**

先确认安装器选中的是当前使用的代理；文件安装需要在项目目录中启动代理；安装后重新打开会话。Claude Code 的当前命令是 `claude plugin install ...`，不是旧版的 `claude plugins install`。

**为什么有这么多安装命令？**

每种代理有自己的插件机制：Claude Code、Codex、Copilot 用插件市场，Gemini CLI 用 `gemini skills install`，其他代理用 npx。每个代理只选一种方式即可。

**可以只安装一个 Skill 吗？**

插件做不到，它总是安装整套 27 个。使用 npx 时可以加 `--skill=<name>` 单独安装，但要注意依赖：例如 `grill-with-docs` 还需要 `grilling` 和 `domain-modeling`。

**setup 为什么改了我的 CLAUDE.md？**

它优先编辑已存在的 `CLAUDE.md`，没有时才用 `AGENTS.md`，两者都没有才询问创建哪一个。新增内容是一个 `## Agent skills` 段落，通常只有几行指针。

**CONTEXT.md 去哪了？**

1.3.0 起改名为 `GLOSSARY.md`，多上下文项目用 `GLOSSARY-MAP.md`。项目里如果还有旧文件，setup 会提议用 `git mv` 迁移。

**resolving-merge-conflicts 去哪了？**

1.3.0 中移除，没有替代品。代理会直接处理进行中的 merge 或 rebase 冲突。

**grill-me 和 grill-with-docs 有什么区别？**

两者都调用 grilling。`grill-me` 无状态，不写文件；`grill-with-docs` 会写 `GLOSSARY.md` 和 ADR，适合有仓库的项目。

**to-spec 为什么不继续提问？**

采访应该在 grilling 阶段完成。`to-spec` 只负责探索仓库、确认测试 seam，并把已经想清楚的东西写成规格。

**to-tickets 为什么不按“前端、后端、数据库”拆分？**

那样会得到不能独立验证的水平切片。它拆的是 tracer-bullet 垂直切片：每个 ticket 都能端到端演示一个行为，适合在一个全新会话中完成。

**implement 和 implement-spec 怎么选？**

想逐个掌控 ticket、在每个 ticket 之间清空上下文，用 `implement`；想编排整条 spec、让实现并行推进，用 `implement-spec`。

**用了这些 Skill 还需要测试和评审吗？**

需要。Skill 让代理更可能按纪律工作，但它不会替你运行 CI、做权限控制或承担验收责任。

## 参考链接

- [mattpocock/skills](https://github.com/mattpocock/skills)
- [CHANGELOG](https://github.com/mattpocock/skills/blob/main/CHANGELOG.md)
- [skills.sh 上的 mattpocock/skills](https://skills.sh/mattpocock/skills)
- [Claude Code 插件文档](https://code.claude.com/docs/en/plugins)
