# 布局约束规则

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 让子元素竟可能的大，撑满父元素
- 在 main 函数中，直接创建 Container 显示
```dart
void main(List<String> args) {
  runApp(build());
}

Widget build() {
  return Container(
    width: 200,
    height: 200,
    color: Colors.amber,
  );
}
```
![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-26-22-22-07.webp =150x)

## 确认位置后，按子元素大小显示
- 用 Center 包裹 Container
```dart
void main(List<String> args) {
  runApp(build());
}

Widget build() {
  return Center(
    child: Container(
      width: 200,
      height: 200,
      color: Colors.amber,
    ),
  );
}
```
![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-26-22-23-37.webp =150x)

## 核心规则: Constraints go down. Sizes go up. Positions are set by parents.
约束减少，尺寸增加，位置由父母决定。
- 上层 widget 向下层 widget 传递约束条件。
- 下层 widget 向上层 widget 传递大小信息。
- 上层 widget 决定下层 widget 的位置。

![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-11-24-23-10-10.webp)

- 我们写3个文字组件纵向排列

![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-23-21-50-16.webp =300x)

- 宽度 `0.0 <= w <= 303.0` , 高度 `0.0 <= h <= 523.0` , 就是上层传下来的约束

![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-23-21-55-33.webp)

- 宽度 `w=32.0` , 高度 `h=16.0` 就是组件向上层传递的大小信息

![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-23-21-57-45.webp)

- 元素左边 `w=7.5`, 右边 `w=7.5`，就是上层决定下层的组件位置

![Images](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_布局约束规则/2021-12-23-21-59-32.webp)

## 参考
- [猫哥-布局约束规则](https://ducafecat.com/course/flutter-quickstart-learn/2-4-layout-rule)
- [https://medium.com/flutter-community/flutter-the-advanced-layout-rule-even-beginners-must-know-edc9516d1a2](https://medium.com/flutter-community/flutter-the-advanced-layout-rule-even-beginners-must-know-edc9516d1a2)
- [https://juejin.cn/post/6846687593745088526](https://juejin.cn/post/6846687593745088526)
- [https://docs.flutter.dev/development/ui/layout/constraints](https://docs.flutter.dev/development/ui/layout/constraints)