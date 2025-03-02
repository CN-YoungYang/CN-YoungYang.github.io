# 流式布局

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## Wrap
`Wrap`是一个流式布局的小部件，它允许子组件沿着主轴（可以是水平或垂直）排列，并在空间不足时自动换行。

| 属性 | 说明 |
| ---- | ---- |
| direction | 方向，用来确定主轴 |
| alignment | 主轴的对齐方式 |
| spacing | 主轴方向的每个子组件之间的留白 |
| crossAxisAligment | 交叉轴的对齐方式 |
| runAlignment | 每行(或列)的对齐方式 |
| runSpacing | 每行(或列)的间距 |
| textDirection | 文本的方向 |
| verticalDirection | 子组件的摆放顺序 |

> `Wrap`组件沿着主轴方向依次排列子组件，当空间不足时便会另起一行或一列。它的每行(或列)被称作一个`Run`

## 示例
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 200,
      color: Colors.black26,
      child: Wrap(
        // 主轴方向
        direction: Axis.horizontal,
        // 主轴对齐方式
        alignment: WrapAlignment.center,
        // 主轴每项间距
        spacing: 20,
        // 交叉轴对齐方式
        crossAxisAlignment: WrapCrossAlignment.end,
        // 每行(或列)的对齐方式
        runAlignment: WrapAlignment.end,
        // 每行(或列)的间距
        runSpacing: 40,
        // 文本的方向
        textDirection: TextDirection.rtl,
        // 子组件的摆放顺序, down（从上到下）,up（从下到上）
        verticalDirection: VerticalDirection.down,
        children: [
          Container(
            color: Colors.amber,
            width: 50,
            height: 60,
            child: const Center(
              child: Text("1"),
            ),
          ),
          Container(
            color: Colors.amber,
            width: 40,
            height: 40,
            child: const Center(
              child: Text("2"),
            ),
          ),
          Container(
            color: Colors.amber,
            width: 50,
            height: 50,
            child: const Center(
              child: Text("3"),
            ),
          ),
          Container(
            color: Colors.amber,
            width: 30,
            height: 60,
            child: const Center(
              child: Text("4"),
            ),
          ),
          Container(
            color: Colors.amber,
            width: 40,
            height: 30,
            child: const Center(
              child: Text("5"),
            ),
          ),
        ],
      )
    );
  }
}
```

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_流式布局/微信截图_20241216225321.webp)