# mklink 命令详解

`mklink` 是一个 Windows 命令行工具，用于创建符号链接（Symbolic Link）。符号链接，也被称为“软链接”，是一个指向另一个文件或目录的特殊文件。这在很多场景下都非常有用，例如，将一个应用程序的配置文件链接到另一个位置，或者将一个大的文件夹移动到另一个磁盘，同时在原来的位置保留一个链接。

**本文档中的所有命令和技巧均适用于 Windows 10 和 Windows 11 环境。**

## 语法

`mklink` 命令的基本语法如下：

```bash
mklink [[/d] | [/h] | [/j]] <link> <target>
```

-   `<link>`：指定要创建的符号链接的名称。
-   `<target>`：指定符号链接指向的现有文件或目录的路径。

### 参数

-   **无参数**：创建文件的符号链接（默认）。
-   **/d**：创建一个目录的符号链接，也称为“软链接”。
-   **/h**：创建一个硬链接（Hard Link），而不是符号链接。
-   **/j**：创建一个目录联接（Directory Junction），也称为“目录连接点”。

**注意**：使用 `mklink` 命令需要管理员权限。请以管理员身份运行命令提示符（CMD）或 PowerShell。

## 各种链接类型的区别

| 类型 | 命令 | 描述 |
| :--- | :--- | :--- |
| **文件的符号链接** | `mklink` | 类似于文件的快捷方式，但功能更强大，应用程序会将其视为真实文件。 |
| **目录的符号链接** | `mklink /d` | 类似于目录的快捷方式，可以跨越不同的磁盘分区。 |
| **文件的硬链接** | `mklink /h` | 创建一个与原始文件几乎无法区分的链接。它们共享相同的文件信息（如时间戳、属性），但占用独立的目录条目。删除其中一个不会影响另一个，只有当所有链接都被删除后，文件才会被真正删除。**重要：硬链接不能跨越不同的文件系统（例如，不能从 C 盘链接到 D 盘）。** |
| **目录联接** | `mklink /j` | 类似于目录的符号链接，**可以跨越不同的磁盘分区**，但不能链接到网络共享驱动器。它是一个较旧的功能，但在本地卷上解析，性能可能稍好。 |

## 快速参考表 (Cheat Sheet)

| 特性 | 文件符号链接 (`mklink`) | 目录符号链接 (`mklink /d`) | 目录联接 (`mklink /j`) | 文件硬链接 (`mklink /h`) |
| :--- | :--- | :--- | :--- | :--- |
| **作用于** | 文件 | 目录 | 目录 | 文件 |
| **可否跨盘符** | ✅ 可以 | ✅ 可以 | ✅ 可以 | ❌ **不可以** |
| **可否链接网络路径** | ✅ 可以 | ✅ 可以 | ❌ **不可以** | ❌ **不可以** |
| **删除源文件后** | 链接失效 | 链接失效 | 链接失效 | 链接**依然有效** |
| **CMD 识别** | `<SYMLINK>` | `<SYMLINKD>` | `<JUNCTION>` | 无法直接识别 |
| **PowerShell 识别** | `Mode` 含 `l` | `Mode` 含 `l` | `Mode` 含 `l` | 无法直接识别 |

---

## 使用示例

### 1. 创建文件的符号链接

假设你想在 `C:\Users\YourUser\Documents` 目录下创建一个指向 `D:\Files\MyDocument.txt` 的链接，名为 `MyDoc.txt`。

```bash
mklink "C:\Users\YourUser\Documents\MyDoc.txt" "D:\Files\MyDocument.txt"
```

### 2. 创建目录的符号链接

假设你想将 `C:\Program Files\SomeApp\LargeFolder` 移动到 `D:\BigFolders\SomeApp`，但在原始位置保留一个链接。

**推荐方法：使用 `robocopy` 进行安全的文件夹移动**

`move` 命令在移动文件夹时，如果中途因文件占用等原因失败，会导致文件被分割在源和目标两个位置，非常不安全。因此，强烈推荐使用更专业的 `robocopy` 命令来完成移动操作。

`robocopy` 是 Windows 内置的强大工具，它的 `/MOVE` 参数可以安全地移动文件和目录（先复制，成功后再从源头删除）。

**步骤如下：**

1.  **使用 `robocopy` 移动文件夹：**
    打开命令提示符（管理员），执行以下命令：

    ```bash
    robocopy "C:\Program Files\SomeApp\LargeFolder" "D:\BigFolders\SomeApp" /E /MOVE
    ```
    -   `/E`：表示复制所有子目录，包括空的子目录。
    -   `/MOVE`：表示移动文件和目录（移动后会从源位置删除）。

    如果 `robocopy` 成功完成，它会返回一个小于 8 的退出码，并且源文件夹 `LargeFolder` 会被清空。

2.  **创建符号链接：**
    确认文件夹移动成功后，再创建符号链接。为了保证安全，我们依然可以使用 `&&` 操作符。

    ```bash
    robocopy "C:\Program Files\SomeApp\LargeFolder" "D:\BigFolders\SomeApp" /E /MOVE && mklink /d "C:\Program Files\SomeApp\LargeFolder" "D:\BigFolders\SomeApp"
    ```
    这样，只有在 `robocopy` 成功移动所有文件后，才会执行 `mklink` 命令。

**高级技巧：失败回滚（手动清理）**

您可能会问：如果 `robocopy` 命令本身执行失败了怎么办？它可能会在目标文件夹留下一些不完整的文件。

在这种情况下，最安全的做法是**手动清理目标文件夹**，以确保下次尝试时是一个干净的状态。您可以使用 `rmdir` (或 `rd`) 命令来删除整个文件夹：

```bash
rmdir /s /q "D:\BigFolders\SomeApp"
```
- `/s`：删除指定目录及其所有子目录和文件。
- `/q`：安静模式，删除时不需要确认。

**因此，对于关键操作，最佳实践是：**
1.  运行 `robocopy` 命令。
2.  检查命令的输出，如果报告了错误（`robocopy` 的退出码大于等于 8 表示失败）。
3.  手动运行 `rmdir /s /q <目标文件夹>` 命令进行清理。
4.  解决问题（如关闭占用文件的程序）后，再重新尝试。

现在，任何访问 `C:\Program Files\SomeApp\LargeFolder` 的程序都会被无缝重定向到 `D:\BigFolders\SomeApp`。

### 3. 创建文件的硬链接

假设 `D:\Files\Original.txt` 是一个重要文件，你想在同一磁盘分区的 `D:\Backup` 目录下创建一个硬链接。

```bash
mklink /h "D:\Backup\Backup.txt" "D:\Files\Original.txt"
```

现在，即使 `D:\Files\Original.txt` 被删除了，`C:\Backup\Backup.txt` 仍然可以访问文件内容。

### 4. 创建目录联接

假设你想在 `C:\MyMusic` 创建一个指向 `E:\MusicCollection` 的目录联接。和目录符号链接一样，目录联接也可以跨越不同的磁盘分区。

```bash
mklink /j "C:\MyMusic" "E:\MusicCollection"
```

## 常见应用场景

`mklink` 的真正威力在于它能“欺骗”操作系统和应用程序，让它们以为文件还在原来的位置，从而实现灵活的文件管理。以下是一些绝佳的应用场景：

1.  **拯救 C 盘空间**
    很多软件（尤其是游戏、专业软件）默认将大量的缓存或数据文件安装在 C 盘的用户目录下，导致 C 盘空间告急。您可以使用 `robocopy` 将这些巨大的文件夹移动到其他盘，然后在原位置创建一个目录符号链接 (`/d`) 或目录联接 (`/j`)。这样既释放了 C 盘空间，又完全不影响软件的正常运行。

2.  **统一管理云同步文件夹**
    如果您同时使用多个云盘（如 OneDrive, Dropbox, Google Drive），它们的数据会分散在不同目录。您可以创建一个“总工作区”目录，然后将各个云盘中的重要子文件夹以符号链接的形式链接到这个工作区中，实现集中访问和管理。

3.  **软件开发中的共享库**
    在开发多个项目时，如果它们依赖于同一个本地库或资源文件集，您可以将这个库放在一个公共位置，然后在每个项目的目录中创建一个指向它的符号链接。这样可以避免重复复制，并且当库更新时，所有项目都能立即生效。

---

## 如何删除链接？

删除通过 `mklink` 创建的链接非常简单，其操作方式与删除普通文件和目录类似。最重要的一点是：**删除链接本身，绝对不会删除它所指向的原始文件或目录。**

### 删除文件链接（符号链接和硬链接）

对于文件的符号链接和硬链接，您可以像删除普通文件一样使用 `del` 命令。

```bash
del <链接的路径>
```

-   **对于符号链接**：这只会删除链接本身，原始文件安然无恙。
-   **对于硬链接**：这也只会删除这一个“入口”。只有当指向该文件的最后一个链接被删除后，文件数据才会被系统真正释放。

### 删除目录链接（符号链接和目录联接）

对于目录的符号链接和目录联接，您可以像删除一个空目录一样使用 `rmdir` (或 `rd`) 命令。

```bash
rmdir <链接的路径>
```

这同样只会删除链接本身，原始的目录和它里面的所有内容都将保持不变。

---

## 如何识别链接？

创建链接后，我们需要一种方法来识别它们。根据您使用的命令行环境（CMD 或 PowerShell），方法略有不同。

### 在命令提示符 (CMD) 中

在 CMD 中，使用 `dir` 命令可以非常直观地识别链接。

```bash
dir
```

在输出结果中，链接类型会直接显示出来：
-   `<SYMLINK>`：文件的符号链接。
-   `<SYMLINKD>`：目录的符号链接。
-   `<JUNCTION>`：目录联接。

**CMD 示例输出：**
```
2023/10/27  09:45    <SYMLINKD>     MyLinkedFolder [D:\RealFolder]
2023/10/27  09:50    <JUNCTION>     MyJunction     [E:\AnotherFolder]
```
`dir` 命令还会用方括号 `[]` 显示链接指向的目标。

### 在 PowerShell 中

在 PowerShell 中，`dir` 是 `Get-ChildItem` 命令的别名。其默认输出需要通过解读 `Mode` 列来识别链接。

```powershell
Get-ChildItem
# 或者使用别名
dir
```

在输出的 `Mode` 列中，如果包含字母 `l`，则表示该项是一个链接（符号链接或联接点）。

**PowerShell 示例输出：**
```
Mode           LastWriteTime         Length Name
----           -------------         ------ ----
d----l         2023/10/27  9:45                MyLinkedFolder
d----l         2023/10/27  9:50                MyJunction
-a---l         2023/10/27  9:55             12 MyLinkedFile.txt
```
-   `d----l`：`d` 代表目录（directory），`l` 代表链接（link）。这是一个目录链接。
-   `-a---l`：`-` 代表文件，`l` 代表链接。这是一个文件链接。

要查看链接指向的目标，并**区分符号链接和联接点**，可以使用 `Format-List` 查看详细属性：
```powershell
Get-ChildItem | Format-List Name, LinkType, Target
```
在输出结果中，`LinkType` 属性会明确告诉您它们的区别：
-   `SymbolicLink`：由 `mklink /d` 创建的目录符号链接。
-   `Junction`：由 `mklink /j` 创建的目录联接。

**示例输出：**
```
Name     : MyLinkedFolder
LinkType : SymbolicLink
Target   : D:\RealFolder

Name     : MyJunction
LinkType : Junction
Target   : E:\AnotherFolder
```
通过这种方式，您可以在 PowerShell 中精确地识别每一种链接类型。

### 关于硬链接

无论是 CMD 还是 PowerShell，都**无法**直接通过 `dir` 或 `Get-ChildItem` 识别出硬链接。因为从文件系统的角度看，硬链接和原始文件是平等的，它们共享相同的数据。识别硬链接通常需要专门的第三方工具。

---

## 终极技巧：如何扫描全盘的链接？

有时我们想知道整个系统中到底创建了多少链接。虽然 Windows 没有一键完成的命令，但我们可以通过脚本或工具实现。

**警告：全盘扫描是一个非常耗时的操作，可能会持续几分钟到半小时不等，具体取决于您的磁盘大小和文件数量。**

### 方法一：使用 PowerShell 脚本

这是最原生的方法。下面的脚本可以扫描指定驱动器（例如 `C:\`）并列出所有找到的符号链接和联接点。

```powershell
# 以管理员身份运行 PowerShell

# 设置要扫描的根目录
$scanPath = "C:\"

# 递归扫描，查找所有链接项，并忽略可能出现的“拒绝访问”错误
Get-ChildItem -Path $scanPath -Recurse -Force -ErrorAction SilentlyContinue | Where-Object { $_.LinkType -ne $null } | Select-Object FullName, LinkType, Target
```
-   `-Recurse`：递归扫描所有子目录。
-   `-Force`：包含隐藏和系统文件。
-   `-ErrorAction SilentlyContinue`：忽略扫描过程中遇到的权限错误。
-   `Where-Object { $_.LinkType -ne $null }`：筛选出所有是链接的项目。

### 方法二：使用 Sysinternals Junction 工具

微软官方的 Sysinternals Suite 工具集提供了一个名为 `junction.exe` 的小程序，它可以非常快速地扫描目录联接。

1.  从 [Microsoft Sysinternals](https://docs.microsoft.com/en-us/sysinternals/downloads/junction) 网站下载 Junction 工具。
2.  将其解压到您的系统路径下。
3.  在命令提示符（管理员）中运行：

    ```bash
    # 扫描 C 盘下的所有目录联接
    junction.exe -s C:\
    ```
    -   `-s`：递归扫描子目录。

这个工具专注于 Junction，对于查找符号链接，PowerShell 脚本是更全面的选择。

---

## 常见问题

-   **“你没有足够的权限执行此操作”**
    -   **原因**：没有以管理员身份运行命令提示符。
    -   **解决方法**：右键单击“命令提示符”或“PowerShell”，然后选择“以管理员身份运行”。
-   **“当文件已存在时，无法创建该文件”**
    -   **原因**：你尝试创建的链接名称 `<link>` 在该位置已经存在。
    -   **解决方法**：删除现有文件或为链接选择一个不同的名称。

## 绝对路径 vs 相对路径

创建链接时，`<target>` 参数可以使用绝对路径或相对路径，但这会影响链接的健壮性。

-   **绝对路径** (例如 `D:\Files\MyDoc.txt`)：链接的目标是固定的。无论您将链接文件本身移动到哪里，它始终指向那个绝对位置。这是最常用、最不容易出错的方式。

-   **相对路径** (例如 `..\Files\MyDoc.txt`)：链接的目标是相对于链接文件**自身所在的位置**来计算的。如果将链接文件移动到其他地方，它指向的目标也会随之改变，很可能导致链接失效。

**建议：除非您有非常明确的理由（例如，希望整个项目文件夹可以被随意移动），否则请始终使用绝对路径来创建链接。**

## 图形界面替代工具

对于不习惯使用命令行的用户，有一些优秀的第三方工具提供了图形化界面来创建和管理链接：

-   **Link Shell Extension (LSE)**：这是一个非常强大且广受好评的免费工具。它会直接集成到 Windows 的右键菜单中。您只需在一个文件/文件夹上右键拖动到目标位置，在弹出的菜单中选择“在此处创建符号链接/联接点/硬链接”即可，非常直观方便。

---

## 总结

`mklink` 是一个强大的工具，可以帮助你更灵活地管理文件和目录。通过理解不同类型的链接，你可以根据具体需求选择最合适的链接方式，从而优化磁盘空间使用和文件组织结构。