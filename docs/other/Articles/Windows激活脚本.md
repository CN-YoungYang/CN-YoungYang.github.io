# Windows 激活脚本说明

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

本文仅记录作者曾见过的 Windows 激活脚本入口，不构成安全推荐或使用保证。

## 安全提示

下面的命令会从互联网下载并直接执行远程 PowerShell 脚本。执行前请确认来源可信、阅读脚本内容，并准备好重要数据备份。不要在不了解命令行为时直接复制执行。

## 命令示例

```powershell
Set-ExecutionPolicy RemoteSigned
irm https://get.activated.win | iex
```

脚本内容、域名和系统激活政策都可能发生变化；使用前请自行核实官方信息和当前法律政策。
