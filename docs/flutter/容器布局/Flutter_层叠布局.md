# 层叠布局

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## Stack
`Stack`是一个可将子组件叠在一起显示的容器组件。

### 布局算法
`Stack`里的子组件在布局时会被分为“有位置”和“无位置”这2大类。
- “有位置”组件 - `Positioned`组件
- “无位置”组件 - 非`Positioned`组件

布局时，`Stack`首先会找到所有的“无位置”的子组件，并向它们传入`fit`属性所设置的布局约束，允许它们一定程度内自由选择自身的尺寸，并让它们依次汇报最终确定的尺寸结果。

在得到全部“无位置”子组件所确定的最终尺寸后，`Stack`会把自身尺寸匹配到其中最大的子组件的尺寸，再把其他的子组件按照`aligenment`属性设置的对齐方式拜访。

#### fit属性
尺寸适配属性用于控制`Stack`如何将自己的父级组件的尺寸约束传达给“无位置”的子组件，类型是StackFit,默认值是StackFit.loose(宽松)。
- **StackFit.loose**: 未定位的子组件可以自由地选择它们的大小，不受Stack大小的限制。子组件会根据它们自己的属性和内容来确定大小，而不会尝试去填充或扩展到Stack的边界。

- **StackFit.expand**: 未定位的子组件会尽可能地扩展以填充Stack的可用空间。这意味着如果Stack有一个确定的大小，子组件会尝试扩展到这个大小，通常是通过设置子组件的double.infinity作为约束条件。这通常用于让子组件填满整个Stack的空间。

- **StackFit.passthrough**: 这个值表示父组件（即Stack）的约束条件会直接传递给未定位的子组件，而不会进行任何调整。这意味着子组件将根据父组件的约束条件来确定自己的大小。如果父组件的约束条件是宽松的，子组件可能会比Stack的实际大小小；如果约束条件是严格的，子组件可能会被压缩以适应Stack的大小。

#### alignment属性
如果子组件的尺寸小于`Stack`本身，`alignment`属性可用指定对齐方式。

Alignment由两个值组成：x和y，它们分别表示水平和垂直方向上的相对位置。

Alignment的x和y值的范围是从-1.0到1.0，其中：  

x = -1.0 表示最左边。  
x = 0.0 表示中间。  
x = 1.0 表示最右边。  

同样地，

y = -1.0 表示最顶部。  
y = 0.0 表示中间。  
y = 1.0 表示最底部。  

以下是一些常用的Alignment值的例子：

Alignment.topLeft：表示左上角，值为(-1.0, -1.0)。  
Alignment.topCenter：表示顶部中间，值为(0.0, -1.0)。  
Alignment.topRight：表示右上角，值为(1.0, -1.0)。  
Alignment.centerLeft：表示中间左侧，值为(-1.0, 0.0)。  
Alignment.center：表示正中心，值为(0.0, 0.0)。  
Alignment.centerRight：表示中间右侧，值为(1.0, 0.0)。  
Alignment.bottomLeft：表示左下角，值为(-1.0, 1.0)。  
Alignment.bottomCenter：表示底部中间，值为(0.0, 1.0)。  
Alignment.bottomRight：表示右下角，值为(1.0, 1.0)。

### 叠放次序
`Stack`在渲染时会将子组件按照children属性里的列表顺序依次绘制并覆盖叠放，因此列表里第一个组件首先被绘制，于是出现在最底层，容易被其他组件覆盖。

### 溢出
默认情况下，溢出`Stack`尺寸边界的子组件会被裁剪，不予显示。这一行为是由`clipBehavior`属性控制的，默认为`Clip.hardEdge`。

| 名称 | 说明 |
| ---- | ---- |
| Clip.none | 不进行裁剪。如果子组件没有超出父组件的边界，这个选项不会有任何性能消耗。 |
| Clip.hardEdge | 进行裁剪但不应用抗锯齿。这种方式的裁剪速度比Clip.none慢一点，但比其他抗锯齿的方式快。 |
| Clip.antiAlias | 进行裁剪并且应用抗锯齿，使得边缘更平滑。这种方式的裁剪速度比Clip.antiAliasWithSaveLayer快，但比Clip.hardEdge慢，通常用于处理圆形和弧形裁剪。 |
| Clip.antiAliasWithSaveLayer | 进行裁剪、抗锯齿，并且在裁剪之后立即保存一个saveLayer。这种方式的性能开销最大，因为它涉及到额外的缓冲区，所以使用的情况较少。 |

## 示例
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        child: Stack(
          // 居中对齐
          alignment: Alignment.center,
          // 子元素溢出, none 不裁剪
          clipBehavior: Clip.none,
          // 子元素层叠放
          children: [
            // 三个色块
            Container(
              width: 300,
              height: 300,
              color: Colors.amber,
            ),
            Container(
              width: 200,
              height: 200,
              color: Colors.blue,
            ),
            Container(
              width: 100,
              height: 100,
              color: Colors.green,
            ),
            // 绝对定位
            const Positioned(
              right: -50,
              bottom: -50,
              child: FlutterLogo(size: 100),
            ),
          ],
        ),
      );
  }
}
```
[Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_层叠布局/微信截图_20241215215544.webp)