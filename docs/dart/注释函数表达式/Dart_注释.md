# 注释 comments

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

[高效 Dart 语言指南：文档](https://dart.cn/effective-dart/documentation/)

可以通过 `dartdoc` 工具导出api文档

## 单行注释
```dart
// Symbol libraryName = new Symbol('dart.core');
```

## 多行指数
```dart
  /*
   * Symbol
   *
  Symbol libraryName = new Symbol('dart.core');
  MirrorSystem mirrorSystem = currentMirrorSystem();
  LibraryMirror libMirror = mirrorSystem.findLibrary(libraryName);
  libMirror.declarations.forEach((s, d) => print('$s - $d'));
  */
```
> 一般用在需要说明 类 函数 功能 输入 输出

## 文档注释
```dart
/// `main` 函数
///
/// 符号
/// 枚举
///
void main() {
  ...
}
```
> 类、函数 请用 /// 方式定义，后期导出文档有帮助