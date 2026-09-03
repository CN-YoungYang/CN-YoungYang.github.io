# CLAUDE.md

本文件为 Claude Code(claude.ai/code)在本仓库工作时提供指引。

## 项目概览

个人技术博客(阳九五的博客,<https://blog.56321654.xyz>),基于 **VuePress 1.x** 构建,部署到 GitHub Pages。内容以 markdown 形式存放在 `docs/` 目录;`docs/` 下的四个栏目(web/dart/flutter/other)以及 `docs/other/Articles`(系统工具/网络工具/自动化脚本)各有一个 README 索引列出其文章。日常在此仓库的工作几乎全部是**编写/编辑中文 markdown 文章、维护侧边栏与 README 索引**——构建配置与主题比较稳定,很少改动。

## 常用命令

```bash
npm run docs:dev      # 本地开发服务,支持热更新
npm run docs:build    # 生产构建,输出到 .vuepress/dist/
```

- `docs:build` 脚本设置了 `NODE_OPTIONS=--openssl-legacy-provider`(旧版 Webpack 4 工具链在现代 Node 上运行所必需)和 `--max_old_space_size=8192`。Node 18+ 即可;注意本机 Node 可能是 v24。
- 克隆后先运行 `npm ci`(锁定文件为 `package-lock.json`)。
- `.nojekyll` 文件由 CI 添加到 `dist/`,无需手动处理。
- 部署是自动的:推送到 `main` 会触发 `.github/workflows/deploy.yml`(部署文档工作流),它在 Node 18.19.0 上执行 `npm ci && npm run docs:build`,并通过 `JamesIves/github-pages-deploy-action` 将 `.vuepress/dist/` 发布到 `gh-pages` 分支。

## 仓库结构

- `docs/` — 实际内容。四个顶级栏目,与导航栏链接一一对应:
  - `docs/web/` → `/web`(HTML5、VUE)
  - `docs/dart/` → `/dart`
  - `docs/flutter/` → `/flutter`
  - `docs/other/` → `/other`(收录于 `docs/other/Articles/` 下的工具合集,改动最频繁)
- 每个栏目都有一个 `README.md` 作为手工维护的文章索引,另有若干子目录存放文章。同一主题的文章共享统一前缀(`HTML5_`、`Dart_`、`Flutter_`);`docs/other/Articles/*.md` 无前缀。
- `.vuepress/` — 站点配置(不属于发布内容):
  - `config.ts` — 根配置:标题/描述、SEO/sitemap/feed/tags/code-copy/baidu-autopush 等插件、`themeConfig`、域名 `https://blog.56321654.xyz`。
  - `navbar.ts`、`sidebar.ts`、`footer.ts`、`extraSideBar.ts` — 拆分出的站点导航模块,由 `config.ts` 引入。
  - `sidebars/*.ts` — 每个顶级栏目一份侧边栏配置(`webSideBar`、`dartSideBar`、`flutterSideBar`、`otherBar`),在 `sidebar.ts` 中统一挂载。
  - `theme/` — 对 `@vuepress/theme-default` 的小幅定制(新增了 Footer、ExtraSidebar、PageSidebarToc 组件,`index.js` 使用 `extend: '@vuepress/theme-default'`)。
  - `public/` — 静态资源:`logo.png`、`favicon.ico`、`extraSideBar.ts` 引用的二维码图片。
  - `dist/` — 构建产物(已被 gitignore)。

## 新增文章时需要理解的"大局"

导航**不是从文件系统自动推导的**——每一份侧边栏列表和每一个栏目索引都是手工维护的清单,需要同步更新。在一个栏目中新增文章,需要同时改动以下文件:

1. **`.vuepress/sidebars/<栏目>SideBar.ts`** — 把文章路径加到对应 `title` 分组的 `children` 数组里。(`/` 的侧边栏兜底为 `"auto"`,来自 `sidebar.ts`。)
2. **`docs/<栏目>/README.md`** — 在对应的 `##` 标题下加一行 `- [标题](./相对路径.md)` 链接。
3. 对于 `docs/other/README.md`,清单按 `###` 分类标题组织,需与 `otherBar.ts` 的分组一致。

关键路径相对于各自的侧边栏/README 文件,使用 `./` 前缀。文章文件名包含空格与中文,例如 `./集合枚举/Dart_列表 List.md` —— 必须精确匹配。注意 `webSideBar.ts` 中有一条已被转义的路径:`VUE_生产环境调用Vue%20Devtools.md`。

## 文章规范

- 文件名使用栏目前缀:`Web` → `HTML5_...`/`VUE_...`,`Dart` → `Dart_...`,`Flutter` → `Flutter_...`。
- 文章标题:以 `# 标题` 作为第一行(VuePress 据此推导页面标题;这些文章不使用 YAML frontmatter)。
- 标题下通常跟一段统一的作者/地址引用——并非每篇新文章都必须,但存在时应保持该风格:

  ```markdown
  # 标题
  > 本文作者:[阳九五](https://github.com/CN-YoungYang)
  >
  > 本站地址:[https://blog.56321654.xyz](https://blog.56321654.xyz)
  ```

- `config.ts` 提取标题直到 h6,并开启代码块行号;markdown 文章可自由嵌入 iframe/HTML。
- 代码库中的注释/URL 均为中文;新增文档与注释应保持一致。
- 整个博客是中文内容。

## 常见维护方式

- 编辑已有链接合集(「Other」栏目常有增删链接的提交):先更新文章正文,再移除失效链接、补充新链接——并保持 `docs/other/README.md` 中的分类链接清单同步。
- 近期 git 历史为聚焦的单次改动、提交信息为中文,例如 `docs(other): 添加小说下载网站链接`、`docs(other): 更新书籍下载网站合集,添加新链接并移除过时链接` —— 提交时沿用 `docs(scope): 描述` 风格。

## Agent skills

### Issue tracker

本仓库的 issue 与规格以 GitHub Issues 跟踪(仓库 github.com/CN-YoungYang/CN-YoungYang.github.io),通过 `gh` CLI 操作。详见 `.agents/issue-tracker.md`。

### Domain docs

Single-context:根目录下一份 `CONTEXT.md` + `docs/adr/`,没有 `CONTEXT-MAP.md`。详见 `.agents/domain.md`。
