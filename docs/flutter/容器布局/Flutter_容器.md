# 容器

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 定义
若需对一个组件进行包装活修饰，则最直接的办法就是将它嵌套在一个容器组件里面。  
`Container`组件就是这样一个结合了定义尺寸、形状、背景颜色、间距、留白、装饰等多功能于一身的组件。

[https://api.flutter.dev/flutter/widgets/Container-class.html](https://api.flutter.dev/flutter/widgets/Container-class.html)

- Container
```dart
Container({
    Key key,
    // 容器子Widget对齐方式
    this.alignment,
    // 容器内部padding
    this.padding,
    // 背景色
    Color color,
    // 背景装饰
    Decoration decoration,
    // 前景装饰
    this.foregroundDecoration,
    // 容器的宽度
    double width,
    // 容器的高度
    double height,
    // 容器大小的限制条件
    BoxConstraints constraints,
    // 容器外部margin
    this.margin,
    // 变换，如旋转
    this.transform,
    // 容器内子Widget
    this.child,
})
```

- BoxDecoration
```dart
const BoxDecoration({
  // 背景色
  this.color,
  // 背景图片
  this.image,
  // 边框样式
  this.border,
  // 边框圆角
  this.borderRadius,
  // 阴影
  this.boxShadow,
  // 渐变
  this.gradient,
  // 背景混合模式
  this.backgroundBlendMode,
  // 形状
  this.shape = BoxShape.rectangle,
})
```

## 示例
```dart
class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          margin: const EdgeInsets.all(50), // 外边距
          padding: const EdgeInsets.fromLTRB(10, 20, 30, 40), // 内边距
          decoration: BoxDecoration(
            color: Colors.amber, // 背景色
            border: Border.all(
              color: Colors.red,
              width: 5,
            ), // 边框
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(0), // 左上角半径
              topRight: Radius.circular(25), // 右上角半径
              bottomLeft: Radius.circular(50), // 左下角半径
              bottomRight: Radius.circular(0), // 右下角半径
            ), // 角度
            boxShadow: const [
              BoxShadow(
                blurRadius: 10,
                offset: Offset(0, 2),
                color: Colors.blue,
              ),
            ], // 阴影
            image: const DecorationImage(
              image: NetworkImage('http://blog.59young.com/logo.png'),
              fit: BoxFit.cover,
            ), // 背景图片
            backgroundBlendMode: BlendMode.color, // 背景混合模式
          ),
          constraints: const BoxConstraints.expand(
            width: 200.0, // 宽
            height: 200.0, // 高
          ), // 约束父容器
          alignment: Alignment.bottomRight, // 对其方式
          transform: Matrix4.rotationZ(0.05), // 旋转
          child: const Text(
            "我是内容",
            style: TextStyle(
              color: Colors.white,
              fontSize: 20.0,
              fontWeight: FontWeight.w600,
            ),
          ), // 内容
        ),
      ),
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_容器/QQ图片20241214215950.webp)