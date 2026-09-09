# mattpocock/skills 解释与使用

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

本文介绍 [mattpocock/skills](https://github.com/mattpocock/skills) 的定位、安装方式和推荐工作流。它适用于 Claude Code、Codex 以及其他支持 Agent Skills 的编程代理。

> 本文根据上游仓库当前的 README 和插件清单整理。Skills 会持续更新，实际可用的名称和安装提示应以上游仓库为准。

---

## 一、mattpocock/skills 是什么

mattpocock/skills 是一组面向软件工程的 Agent Skills。它不是 npm 运行时依赖，也不是一个新的大模型，而是一组由 Markdown 编写的工作规范：告诉编程代理应该如何提问、调查代码、拆分任务、编写测试、排查问题和复查结果。

它主要解决 AI 编程中常见的几个问题：

- 需求没有问清楚，代理做出了“看起来合理但不是用户想要”的功能；
- 代理不了解项目中的业务术语，反复使用冗长、含糊的描述；
- 没有快速、可靠的反馈回路，代码写完后才发现并不能工作；
- 功能越堆越多，项目逐渐变成难以维护的代码泥团。

因此，这套 Skills 更像一套轻量的工程流程。它强调先对齐目标，再建立反馈回路，然后用小的、可验证的切片完成工作。

### User-invoked 与 Model-invoked

上游仓库把 Skills 分成两类：

- **User-invoked**：需要用户明确输入，例如 /grill-with-docs、/to-spec、/implement。这类 Skill 通常负责组织一个完整流程。
- **Model-invoked**：用户可以直接调用，代理也可以在任务匹配时自动采用，例如 tdd、diagnosing-bugs、code-review、domain-modeling。这类 Skill 更像可复用的工程纪律。

一个 User-invoked Skill 可以调用 Model-invoked Skill；例如 /implement 会使用 TDD，并在完成后进行代码复查。但一个 User-invoked Skill 不会再自动调用另一个 User-invoked Skill，避免流程互相套娃。

---

## 二、安装方式

安装时选择一种方式即可，不要同时安装 Claude Code 插件和 skills.sh 文件版本，否则同一个 Skill 可能出现两份。

| 使用场景 | 安装命令 | 特点 |
| --- | --- | --- |
| Claude Code | claude plugins install mattpocock-skills | 作为托管插件安装，更新由插件机制处理，Skill 文件通常按只读包使用 |
| Claude Code 会话内 | /plugin install mattpocock-skills | 与上一种方式相同，只是从当前会话发起安装 |
| Codex 或其他编程代理 | npx skills@latest add mattpocock/skills | 交互式选择要安装的 Skill 和目标 Agent，Skill 会写入项目并可自行修改 |
| 想研究和改造 Skill | npx skills@latest add mattpocock/skills | 把普通文件放进项目，之后可按需修改，更新时手动执行 npx skills update |

### Codex 及其他 Agent 的安装步骤

在项目根目录执行：

~~~bash
npx skills@latest add mattpocock/skills
~~~

安装器会询问两件事：

1. 要安装到哪些编程代理；
2. 要安装哪些 Skill。

如果准备使用工程流程，第一次安装时选择 setup-matt-pocock-skills。它负责为当前项目建立后续工程流程所需要的配置；只使用独立 Skill 时不必安装它。

在 Windows PowerShell 中也可以执行同一条命令。需要提前准备好 Node.js、npm，以及已经安装并能正常启动的目标编程代理。

### 两种安装方式的差异

Claude Code 插件适合“直接使用上游版本”：Skill 作为一组托管内容安装，上游发布更新后会随插件机制更新。

npx skills 适合“把 Skill 当作项目文件维护”：文件在自己的项目中，可以阅读、修改和提交到版本库，但不会在后台自动更新。更新后建议先查看 Git diff，再决定是否接受上游改动。

如果希望长期定制 Skill，通常应选择文件安装方式；如果只想使用官方版本并减少维护，则选择 Claude Code 插件方式。

### 按工作流按需安装

不需要把仓库中的全部 Skill 都安装到每个项目。使用 `npx skills` 安装时，在交互式列表中只勾选当前工作流需要的 Skill；后续遇到新的任务，再补充安装即可。

| 工作流 | 建议安装的 Skill | 是否需要 setup |
| --- | --- | --- |
| 只澄清一个想法，不修改项目 | `grill-me` | 否 |
| 在项目中澄清需求并保留上下文 | `setup-matt-pocock-skills`、`grill-with-docs` | 是 |
| 当前会话完成一个小功能 | `grill-with-docs`、`implement`、`tdd`、`code-review` | 是，首次使用工程流程时 |
| 开发跨多个会话的大功能 | `setup-matt-pocock-skills`、`grill-with-docs`、`to-spec`、`to-tickets`、`implement`、`tdd`、`code-review` | 是 |
| 处理外部提交的 Issue | `setup-matt-pocock-skills`、`triage`、`implement`、`tdd`、`code-review` | 是 |
| 排查复杂 Bug | `diagnosing-bugs`、`tdd`、`code-review` | 否，除非需要 issue tracker |
| 做架构和领域建模 | `improve-codebase-architecture`、`grill-with-docs`、`domain-modeling`、`codebase-design` | 项目内工作建议安装 |
| 只做资料调研或一次性原型 | `research` 或 `prototype`，需要跨会话时再加 `handoff` | 否 |

例如，只想在当前项目中采用“小功能开发”流程，可以在安装器中选择：

~~~text
setup-matt-pocock-skills
grill-with-docs
implement
tdd
code-review
~~~

不需要同时安装 `triage`、`wayfinder`、`teach` 等与当前任务无关的 Skill。需要时重新执行安装命令，选择新增 Skill 即可。

需要注意：Claude Code 的插件安装方式是托管的整套插件，不能像 `npx skills` 一样在项目中逐个挑选。若目标是精确控制安装范围，应使用 `npx skills@latest add mattpocock/skills`，并在安装器中按上表选择。

---

## 三、首次配置：运行 setup

安装完成后，在项目根目录打开编程代理，执行：

~~~text
/setup-matt-pocock-skills
~~~

这个 Skill 应该在每个项目中运行一次。它不是简单的初始化脚本，而是一个会先检查项目、再询问用户并写入配置的交互流程，主要完成以下工作。

### 1. 配置 Issue Tracker

后续的 /to-spec、/to-tickets、/triage 等流程需要知道任务放在哪里。常见选择包括：

- **GitHub Issues**：使用 gh CLI；如果项目远程地址指向 GitHub，通常优先选择它；
- **GitLab Issues**：使用 glab CLI；
- **本地 Markdown**：把任务保存在项目的 .scratch/<feature>/ 下，适合个人项目；
- **其他工具**：例如 Linear、Jira 或团队自定义流程，需要按提示说明如何读取和创建任务。

配置通常会写入 docs/agents/issue-tracker.md。如果使用 GitHub 或 GitLab，还应先确认对应 CLI 已登录，并且当前账号有访问项目和创建任务的权限。

### 2. 配置 triage 标签

如果安装了 triage，setup 会询问是否使用默认标签。默认的五个角色是：

~~~text
needs-triage
needs-info
ready-for-agent
ready-for-human
wontfix
~~~

如果团队已有自己的标签，可以在 setup 时映射，而不是再创建一套含义重复的标签。

### 3. 配置领域文档

默认使用单一上下文布局：

~~~text
CONTEXT.md
docs/adr/
~~~

CONTEXT.md 用来记录项目的领域术语和共享语言，ADR 用来记录不容易改变的架构决定。大型 monorepo 才需要考虑 CONTEXT-MAP.md 和多个上下文目录。

setup 还会询问新文档的保存位置。完成后，其他 Skill 可以读取这些文件，减少每次进入项目都重新解释术语和约束的成本。

### setup 会修改什么

如果项目已经有 CLAUDE.md，setup 会优先更新它；没有时才考虑 AGENTS.md。它还可能创建以下配置文件：

~~~text
docs/agents/issue-tracker.md
docs/agents/domain.md
docs/agents/triage-labels.md  # 安装并启用 triage 时才需要
~~~

运行结束后应检查一次 diff，确认 issue 地址、标签和文档目录符合团队约定。

---

## 四、常用 Skill 说明

### 工程流程类

| Skill | 作用 | 适合什么时候使用 |
| --- | --- | --- |
| /ask-matt | 根据当前情况选择合适的流程 | 不确定下一步该用哪个 Skill 时 |
| /setup-matt-pocock-skills | 配置 issue tracker、triage 标签和领域文档 | 第一次在某个项目中使用前 |
| /grill-with-docs | 通过连续提问澄清需求，并把术语和决定写入项目文档 | 准备开发一个功能或设计方案时 |
| /grill-me | 只进行提问和澄清，不写入项目上下文 | 没有项目目录，只想打磨想法时 |
| /to-spec | 把已经讨论清楚的内容整理成规格说明并发布 | 需要跨多个会话完成的功能 |
| /to-tickets | 把规格拆成可独立验证的垂直切片，并标记阻塞关系 | 功能较大，需要多人或多会话协作时 |
| /implement | 按规格或 ticket 实现功能，尽量使用 TDD，并在最后复查 | 已经有明确的实现任务时 |
| /triage | 按状态和角色处理外部提交的 issue | bug 报告或需求刚进入项目时 |
| /wayfinder | 为巨大、模糊、跨多会话的工作建立决策地图 | 目标太大，暂时无法直接拆成实现任务时 |
| /improve-codebase-architecture | 扫描代码库，寻找可以深化模块边界的地方 | 做日常架构维护时 |

### 质量与问题处理类

| Skill | 作用 |
| --- | --- |
| /tdd | 遵循“红 → 绿 → 重构”的测试驱动循环，以公开接口和行为为测试边界 |
| /diagnosing-bugs | 先建立能复现当前问题的红色反馈回路，再最小化、假设验证、修复和回归测试 |
| /code-review | 从 Standards 和 Spec 两个维度分别复查固定起点之后的改动 |
| /prototype | 用一次性原型回答状态模型、交互逻辑或 UI 形态问题 |
| /domain-modeling | 整理项目领域语言，解决术语含义重叠和架构决定记录问题 |
| /codebase-design | 用深模块、接口、seam 等词汇讨论模块形状和边界 |
| /resolving-merge-conflicts | 按每个冲突块追溯双方意图，完成正在进行的 merge 或 rebase |
| /research | 让后台 Agent 查阅高可信来源，并在项目中生成带引用的 Markdown 结果 |

### 通用效率类

| Skill | 作用 |
| --- | --- |
| /handoff | 把当前上下文整理成可交给另一会话、目录或同事的文档 |
| /teach | 以当前目录为学习工作区，分多个会话学习一个概念 |
| /to-questionnaire | 把需要其他人回答的问题整理成问卷 |
| /wait-what | 当一段说明没有被理解时，要求 Agent 使用更清楚的语言重新解释 |
| /writing-for-agents | 编写 Agent 会读取的 Skill、AGENTS.md、CLAUDE.md 和配套文档 |

上表是使用时最常见的主线。上游仓库还可能包含实验中或只面向特定 Agent 的目录，具体可用清单应以仓库的 README.md 和插件清单为准。

---

## 五、推荐工作流

### 场景一：一个可以在当前会话完成的小功能

~~~text
/grill-with-docs
    ↓
/implement
    ↓
/tdd（实现过程中按需使用）
    ↓
/code-review
~~~

先用 /grill-with-docs 把需求、边界、术语和验收条件问清楚，再让 /implement 实现。实现过程中应一次完成一个垂直切片：先写能复现行为的失败测试，再写最少代码让测试通过。

### 场景二：跨多个会话的大功能

~~~text
/grill-with-docs
    ↓
/to-spec
    ↓
/to-tickets
    ↓
按阻塞关系逐个启动 /implement
    ↓
/code-review
~~~

/to-spec 负责把讨论结果变成规格说明；/to-tickets 再把规格拆成可以独立演示或验证的 tracer-bullet tickets。每个 ticket 都应说明自己的阻塞项，优先实现没有阻塞项的任务。

不要把所有任务都拆成“先改数据库、再改 API、最后改 UI”的水平层切片。更好的 ticket 是一条从数据到接口再到用户行为的窄而完整的路径，完成后能单独验证。

### 场景三：遇到复杂 Bug

~~~text
/diagnosing-bugs
    ↓
建立会针对当前症状失败的测试、脚本或复现命令
    ↓
最小化复现 → 提出可证伪的假设 → 一次验证一个变量
    ↓
修复 → 回归测试 → 清理调试代码
~~~

/diagnosing-bugs 的重点不是一开始猜原因，而是先建立一个紧凑、确定、能对当前问题报红的反馈回路。没有可靠的复现信号时，不应直接凭感觉修改代码。

### 场景四：处理别人提交的 Issue

对于外部提交的 bug 或需求，先使用 /triage，将它整理成 Agent 可以执行的任务；对于已经由 /to-tickets 生成的任务，不需要再次 triage，直接进入 /implement。

### 场景五：问题太大，暂时看不清路线

当目标是一个新产品或大型改造，且一次会话无法看清从当前状态到目标的路径，可以使用 /wayfinder。它先在 issue tracker 中建立决策票据，逐个消除不确定性；路线清晰后，再回到 /to-spec → /to-tickets → /implement，不要跳过规格阶段直接开工。

---

## 六、一个完整的使用示例

假设要给项目增加“用户可以导出数据”的功能，可以按下面的方式与 Agent 交互：

### 第一步：首次安装和配置

~~~text
npx skills@latest add mattpocock/skills
/setup-matt-pocock-skills
~~~

安装器中选择目标 Agent，并勾选 setup-matt-pocock-skills。setup 过程中选择项目实际使用的 issue tracker、标签和文档布局。

### 第二步：澄清需求

~~~text
/grill-with-docs

我想增加用户数据导出功能，请先通过提问帮我明确用户范围、数据格式、权限、失败重试和验收标准。
~~~

不要在需求还含糊时直接要求 Agent“把导出功能做出来”。提问阶段的结果应包括明确的用户故事、边界条件、项目术语和重要决定。

### 第三步：决定是否拆分任务

如果功能可以在当前会话完成：

~~~text
/implement
~~~

如果功能较大，需要多个会话：

~~~text
/to-spec
/to-tickets
~~~

/to-tickets 会先展示建议的拆分和阻塞关系，确认粒度后才发布任务。之后每个新会话从一个已准备好的 ticket 开始：

~~~text
/implement
~~~

完成后运行测试，并让 /code-review 针对明确的固定起点检查改动。

---

## 七、维护和安全注意事项

### 1. 把 Skill 当作可执行的工作指令审阅

Skill 本身通常是 Markdown，但其中的流程可能要求 Agent 执行命令、修改文件、创建 issue、提交代码或访问外部服务。安装第三方 Skill 后，建议先阅读对应目录中的 SKILL.md，尤其关注：

- 是否会写入项目文件；
- 是否会创建或修改远程 issue；
- 是否会运行脚本、安装依赖或访问网络；
- 是否会接触密钥、环境变量和私有数据。

不要把 API Key、密码或未脱敏日志放进 CONTEXT.md、Issue 或交给 Agent 的调试输出中。

### 2. 不要同时保留两种安装来源

同一个 Skill 同时存在于 Claude Code 插件和项目文件中时，可能发生重复显示、版本不一致或 Agent 不确定该读取哪一份。需要从托管版本切换到可编辑版本时，应先清理另一来源，并检查当前 Agent 实际加载的目录。

### 3. 更新前查看变更

- Claude Code 插件：按插件机制更新；
- npx skills 文件安装：执行 npx skills update，然后检查 Git diff；
- 如果本地改过 Skill，应先备份或提交，再接受上游更新。

上游 Skill 的流程可能变化，特别是命令名、配置文件位置和 issue tracker 约定。升级后建议重新阅读 README，并验证一次 /ask-matt 或 /setup-matt-pocock-skills 的行为。

### 4. 给 Agent 清晰的边界

这些 Skill 可以改善工程过程，但不能替代代码审查、权限控制、CI 和人工验收。对会修改生产数据、创建远程资源、提交代码或发布版本的操作，应在 Agent 执行前明确授权范围。

---

## 八、常见问题

### 安装后找不到 Skill

确认安装器中选择了当前使用的 Agent，并重新打开会话。使用 npx skills 安装时，Skill 是写入项目的文件；需要在包含这些文件的项目目录中启动 Agent。

### /setup-matt-pocock-skills 提示缺少配置

在项目根目录运行 setup，并确认 docs/agents/issue-tracker.md、docs/agents/domain.md 等文件已经生成。不要只在任意父目录或临时目录执行。

### 为什么 /grill-me 和 /grill-with-docs 都能提问

两者都用于澄清需求，但前者是无状态的；后者会把领域语言和架构决定写进项目文档。在有项目目录时优先使用 /grill-with-docs。

### 为什么 /to-spec 不继续提问

它的职责是综合当前会话已有的信息形成规格，而不是重新采访用户。如果需求还没有讨论清楚，应回到 /grill-with-docs。

### 为什么 /to-tickets 生成的任务不是按技术层拆分

该 Skill 有意使用垂直切片：每个 ticket 都要尽量贯穿完整路径，并能独立验证。这样 Agent 可以在较小的上下文中交付一个可见结果，也能减少长期分支之间的耦合。

### 可以只安装一个 Skill 吗

可以。安装器支持选择 Skill；但第一次使用工程流程时，建议至少安装 setup-matt-pocock-skills，并根据需要选择 grill-with-docs、implement、tdd、diagnosing-bugs 等。

---

## 参考链接

- [mattpocock/skills GitHub 仓库](https://github.com/mattpocock/skills)
- [skills.sh 上的 mattpocock/skills](https://skills.sh/mattpocock/skills)
- [Claude Code Plugins 文档](https://code.claude.com/docs/en/plugins)
