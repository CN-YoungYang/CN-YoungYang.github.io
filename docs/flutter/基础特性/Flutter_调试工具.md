# devTools 调试工具

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 启动调试器
- 启动调试后
  1. 点击右上角按钮
  2. 点击选中按钮
  3. 布局浏览器

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617174426.webp)

- 命令模式 `Dart: Open DevTools`

`cmd + shift + p`

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617174728.webp)

- 我们选择 `in web browser`

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617174704.webp)

- 如果是第一次打开，选择允许打开 `always open`

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617200835.webp)

- 会在浏览器中打开调试界面

- 面板选项
  - Flutter Inspector 布局组件
  - Performance 性能
  - CPU Profiler 耗能
  - Memory 内存
  - Debugger 调试信息
  - Network 抓包
  - Logging 日志
  - App Size 文件打包尺寸分析

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617174823.webp)

> 现阶段我们把注意力放在布局面板上，其它做个了解就行，性能调试需要开启 `--profile` 参数
<br/><br/>
> Flutter Performance 性能调试工具 [https://www.bilibili.com/video/BV1Tb4y1p7t9](https://www.bilibili.com/video/BV1Tb4y1p7t9)

## 布局面板
- 说明
  1. 组件树
  2. 纵向布局信息
  3. 横向布局信息
  4. 约束信息

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_调试工具/20220617175316.webp)

## 参考
- [猫哥-devTools 调试工具](https://ducafecat.com/course/flutter-quickstart-learn/2-3-devtools)
- [https://docs.flutter.dev/development/tools/devtools/overview](https://docs.flutter.dev/development/tools/devtools/overview)