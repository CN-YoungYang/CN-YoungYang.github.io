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

## 运行程序
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_目录结构/20220617163204.webp =300x)


## 参考
- [猫哥-目录结构](https://ducafecat.com/course/flutter-quickstart-learn/2-1-directory)
- [https://docs.flutter.dev/reference/flutter-cli](https://docs.flutter.dev/reference/flutter-cli)
- [https://docs.flutter.dev/get-started/codelab](https://docs.flutter.dev/get-started/codelab)