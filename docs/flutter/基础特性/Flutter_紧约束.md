# 紧约束

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

松约束(tight constraints)是指在布局过程中，给定的约束条件使得子组件的尺寸被精确地确定，通常等于某个特定的值。

即 **尺寸是固定的**

## ConstrainedBox 约束组件
- `constraints` 通过 `maxWidth` `maxHeight` ,来设置子组件最大约束
```dart
void main() {
  runApp(build());
}

Widget build() {
  return MaterialApp(
    home: Scaffold(
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(
            maxWidth: 200,
            maxHeight: 200,
          ),
          child: Container(
            color: Colors.amber,
            width: 50,
            height: 50,
          ),
        ),
      ),
    ),
  );
}
```
显示了一个 50 x 50 的 Container

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_紧约束/image-20220617214549883.webp =300x)

- 我们加上 `minWidth` `minHeight` ,来设置子组件最小约束
```dart
void main() {
  runApp(build());
}

Widget build() {
  return MaterialApp(
    home: Scaffold(
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(
            minWidth: 100,
            minHeight: 100,
            maxWidth: 200,
            maxHeight: 200,
          ),
          child: Container(
            color: Colors.amber,
            width: 10,
            height: 10,
          ),
        ),
      ),
    ),
  );
}
```
这时候 尺寸强制被设置为了 100 * 100

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_紧约束/image-20220617214913498.webp =300x)

- 查看约束情况

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_紧约束/image-20220617215049479.webp =300x)


## 紧约束定义
它的最大/最小宽度是一致的，高度也一样。
- 通过 BoxConstraints.tight 可以设置紧约束
```dart
void main() {
  runApp(build());
}

Widget build() {
  return MaterialApp(
    home: Scaffold(
      body: Center(
        child: ConstrainedBox(
          constraints: BoxConstraints.tight(const Size(100, 100)),
          child: Container(
            color: Colors.amber,
            width: 10,
            height: 10,
          ),
        ),
      ),
    ),
  );
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_紧约束/image-20220617223634120.webp =300x)

- 宽高约束都被设置成了 100

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_紧约束/image-20220617225309360.webp =300x)

## 参考
- [猫哥-紧约束](https://ducafecat.com/course/flutter-quickstart-learn/2-6-tight)