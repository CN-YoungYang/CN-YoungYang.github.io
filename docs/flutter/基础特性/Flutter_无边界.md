# 无边界 unbounded

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## UnconstrainedBox 不受约束
- `UnconstrainedBox`的子组件将不再受到约束
```dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: ConstrainedBox(
          constraints: const BoxConstraints(
            minWidth: 100,
            minHeight: 100,
            maxWidth: 300,
            maxHeight: 300,
          ),
          child: UnconstrainedBox(
            child: Container(
              width: 10,
              height: 10,
              color: Colors.blue,
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```
- 显示了一个 `10*10` 的正方形，没有收到 `ConstrainedBox` 的影响

![Image](/https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/Flutter_无边界/image-20220617230952463.wenp)

- 约束查看 Container 10*10, 父级约束 最小宽高 100

![Image](/https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/Flutter_无边界/image-20220617231111345.wenp =400x)

## unbounded 组件
`unbounded`(无界)组件指的是那些在主轴方向上不限制子组件大小的布局组件。

常见的`unbounded`组件以及它们的设置

- `Row` 和 `Column`  
    这些组件的大小由子元素的最大尺寸决定，在主轴方向上是`unbounded`(无界)的，即它们不会限制子组件在主轴方向上的大小。

- `ListView`  
    `ListView`也是一个`unbounded`组件，因为它可以在滚动方向上无限扩展以容纳其子组件。

- `UnconstrainedBox`  
    `UnconstrainedBox`允许其子组件在没有约束的情况下渲染，这意味着子组件可以自由地确定自己的尺寸。

- `BoxConstraints`  
    `BoxConstraints.expand()`：对传递给它的宽度或高度设置Tight约束，并对未传递给构造函数的宽度或高度参数设置`Unbounded`约束,即`double.infinity`。

- ......

## 溢出警告
在 debug 模式下，如果子组件溢出，控制台会打印警告，并且会在溢出区域显示黑黄相间的条纹