# 目录结构

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 创建Flutter项目
- 使用`VS Code`创建项目
`cmd + shift + p` 命令模式下 `flutter new project`

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20220617160934.webp)

选择 `Application` 类型

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20220617161715.webp)

- 使用 cli 方式 
```shell
$ flutter create flutter_quickstart_learn
```

## 目录文件说明
```
├── android // Android 端
├── build // 编译输出目录
├── ios // IOS 端
├── lib // flutter dart 代码
│   └── main.dart
├── linux // linux 端
├── macos // macos 端
├── test // 测试目录
├── web // web 端
├── windows // windows 端
├── README.md
├── analysis_options.yaml
├── flutter_quickstart_learn.iml
├── pubspec.lock // 包版本 lock
└── pubspec.yaml // flutter 配置文件，包管理 资源管理 配置管理
```
> 可以发现 flutter 是一个多端编译框架，各个平台对应的目录都有了

## 目录扩展
VS Code 安装[`Flutter GetX Generator - 猫哥`](https://marketplace.visualstudio.com/items?itemName=ducafecat.getx-template)插件

右键`lib`文件夹,选择`Getx: Create Common Directory`

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20241114230017.webp =300x)
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20241114230444.webp)

自动创建开发目录
```
├── common // 公共
│   │── api // 接口
│   │── components // 组件
│   │── extension // 扩展
│   │── i18n // 国际化
│   │── models // 模型
│   │── routers // 路由
│   │── services // 服务
│   │── style // 样式
│   │── utils // 工具
│   │── values // 值
│   └── widgets // 组件
├── pages // 页面
│   └── index.dart // 首页文件
└── main.dart // 入口文件
```

## 运行程序
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20220617163204.webp =300x)


## 参考
- [猫哥-目录结构](https://ducafecat.com/course/flutter-quickstart-learn/2-1-directory)
- [https://docs.flutter.dev/reference/flutter-cli](https://docs.flutter.dev/reference/flutter-cli)
- [https://docs.flutter.dev/get-started/codelab](https://docs.flutter.dev/get-started/codelab)