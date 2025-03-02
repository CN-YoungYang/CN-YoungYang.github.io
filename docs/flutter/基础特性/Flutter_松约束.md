# 松约束

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

松约束(loose constraints)是指在布局过程中，给定的约束条件允许子组件的尺寸可以小于某个特定的值。

即 **尺寸是弹性的**

## Column 宽度等于子元素最大宽度
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(build());
}

Widget build() {
  return MaterialApp(
    home: Scaffold(
      body: Column(
        children: const [
          Text("aaaaaaaaaaaaaaaaaaaaaa"),
          Text("aaaaaaaaaaa"),
        ],
      ),
    ),
  );
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_松约束/image-20220628083227210.webp =300x)

## Container 紧包裹子元素
- Scaffold 填充了整个屏幕，Container 包裹了 Column
```dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          color: Colors.amber,
          child: Column(
            children: const [
              Text("aaaaaaaaaaaaaaaa"),
              Text("bbbbbbbbb"),
            ],
          ),
        ),
      ),
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_松约束/image-20220617212555636.webp =300x)

- Container 的宽高随着 Column 一起变化 w = 124.0，紧包裹

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_松约束/image-20220617213030796.webp =300x)

## 松约束定义
当一个 widget 告诉其子级可以比自身更小的话, 我们通常称这个 widget 对其子级使用 宽松约束(loose)。
- Scaffold 对 Column 的约束是宽高屏幕宽度内即可

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_松约束/image-20220617213257446.webp =300x)

- Column 的宽度按 Text 最大宽度为准

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_松约束/image-20220617213448521.webp =300x)

## 参考
- [猫哥-松约束](https://ducafecat.com/course/flutter-quickstart-learn/2-5-loose)
- [https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html)