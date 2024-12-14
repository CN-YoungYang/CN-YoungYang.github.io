# 线性布局

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_线性布局/1_Ns99Rw7DS75pZvAfuvBVmg.webp =500x)


## Row 和 Column
- **横列(Row)**: 可将多个子组件沿水平直的"横坐标轴"方向排列。
- **竖列(Column)**: 可将多个子组件沿着垂直的"纵坐标轴"方向排列。

由于它们需要同时排列多个子组件，所以嵌套子组件的参数不是`child`，二十复数形式`children`。

## 定义
```dart
Column({
    Key key,

    // * 子元素集合
    List<Widget> children = const <Widget>[],

    // 主轴方向上的对齐方式
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
    // 在主轴方向占有空间的值，默认是max
    MainAxisSize mainAxisSize = MainAxisSize.max,

    // 在交叉轴方向的对齐方式
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,

    // 子组件的排列顺序
    VerticalDirection verticalDirection = VerticalDirection.down,

    // 文本的方向
    TextDirection textDirection,
    // 文本基线
    TextBaseline textBaseline,
})
```

- MainAxisAlignment  
主轴属性：主轴方向上的对齐方式
```dart
enum MainAxisAlignment {
  // 按照主轴起点对齐，例如：按照靠近最左侧子元素对齐
  start,

  // 将子元素放置在主轴的末尾，按照末尾对齐
  end,

  // 子元素放置在主轴中心对齐
  center,

  // 将主轴方向上的空白区域均分，使得子元素之间的空白区域相等，首尾子元素都靠近首尾，没有间隙。有点类似于两端对齐
  spaceBetween,

  // 将主轴方向上的空白区域均分，使得子元素之间的空白区域相等，但是首尾子元素的空白区域为1/2
  spaceAround,

  // 将主轴方向上的空白区域均分，使得子元素之间的空白区域相等，包括首尾子元素
  spaceEvenly,
}
```

- CrossAxisAlignment  
交叉属性：在交叉轴方向的对齐方式
```dart
enum CrossAxisAlignment {
  // 子元素在交叉轴上起点处展示
  start,

  // 子元素在交叉轴上末尾处展示
  end,

  // 子元素在交叉轴上居中展示
  center,

  // 让子元素填满交叉轴方向
  stretch,

  // 在交叉轴方向，使得子元素按照baseline对齐
  baseline,
}
```

- MainAxisSize  
在主轴方向子元素占有空间的方式
```dart
enum MainAxisSize {
  // 根据传入的布局约束条件，最大化主轴方向占用可用空间，也就是尽可能充满可用宽度
  max,

  // 与max相反，是最小化占用主轴方向的可用空间
  min,
}
```

## 例子
```dart
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.amber,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          // mainAxisSize: MainAxisSize.min,
          children: const [
            FlutterLogo(
              size: 24,
            ),
            FlutterLogo(
              size: 48,
            ),
            FlutterLogo(
              size: 128,
            ),
            FlutterLogo(
              size: 200,
            ),
          ],
        ),
      ),
    );
  }
```

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_线性布局/image-20220619101549323.webp =350x)