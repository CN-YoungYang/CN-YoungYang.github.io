# 文本组件

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


## Text
`Text`组件，顾名思义，是一个最基础的显示文本的组件。
```dart
Text("Hello Flutter");
```

### 1. 必传的位置参数
在`Text`组件的默认构造函数种有一个必须传的位置参数(也称作非命名参数)，必须作为第1个参数传入。其内容就是需要显示的文本，类型是`String`。
> 这里需要显示的文本字符串可以是空字符(""),但不可以为空值(null)。

`Text`组件还有一个非常好用的构造函数，`Text.rich()`可以用于在一段文字之间切换样式。使用这个构造函数时，必传的位置参数则不是需要显示的字符串，而是一个`TextSpan`类。`TextSpan`类除了可以通过`text`属性传入字符串外，还可以通过`style`属性自定义文字样式，甚至可以再通过`children`属性嵌套另一个T`TextSpan`列表，以达成叠加文字样式的目的。

### 2. style属性
`Text`组件的默认样式是由上级`DefaultTextStyle`(默认文本样式组件)继承而来。

如果需要修改样式，则可以通过`style`参数传入一个`TextStyle`类型的值。`Text`组件在渲染时，会自动将`style`参数种的样式与上级提供的样式合并。

| 名称 | 说明 |
| ---- | ---- |
| inherit | 是否继承父类组件属性，默认true |
| color | 字体颜色 |
| fontSize | 文字大小，默认14px |
| fontWeight | 字体粗细 |
| fontStyle | 字体样式,normal或italic |
| letterSpacing | 字母间距，默认为0，负数间距缩小，正数间距增大 |
| wordSpacing | 单词间距，默认为0，负数间距缩小，正数间距增大 |
| textBaseline | 字体基线 |
| height | 行高 |
| locale | 设置区域 |
| foreground | 前景色 |
| background | 背景色 |
| shadows | 阴影 |
| decoration | 文字划线，下换线等等装饰 |
| decorationColor | 划线颜色 |
| decorationStyle | 划线样式，虚线、实线等样式 |
| debugLabel | 描述信息 |
| fontFamily | 字体 |
| fontFamilyFallback | 备用字体 |
| package | 用于指定字体资源所在的包 |

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          "文字阴影",
          style: TextStyle(
            fontSize: 40,
            shadows: [
              BoxShadow(
                offset: Offset(-5, -5),
                color: Colors.amber,
              ),
              BoxShadow(
                offset: Offset(5, 5),
                color: Colors.red,
              )
            ],
          ),
        ),
        Stack(
          children: [
            Text(
              '文字镂空效果',
              style: TextStyle(
                fontSize: 40,
                foreground: Paint()
                  ..style = PaintingStyle.stroke
                  ..strokeWidth = 4
                  ..color = Colors.black,
              ),
            ),
            const Text(
              '文字镂空效果',
              style: TextStyle(
                fontSize: 40,
                color: Colors.white,
              ),
            ),
          ],
        ),
        Text(
          "颜色渐变",
          style: TextStyle(
            fontSize: 48,
            background: Paint()
              ..shader = ui.Gradient.linear(
                const Offset(0, 0),
                const Offset(150, 0),
                [Colors.black, Colors.white],
              ),
            foreground: Paint()
              ..shader = ui.Gradient.linear(
                const Offset(150, 0),
                const Offset(0, 0),
                [Colors.amber, Colors.white],
              ),
          ),
        ),
      ],
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs.flutter/常用组件/Flutter_文本组件/QQ截图20241218224547.webp)

### 3. textAlign 和 textDirection
因为文字的对齐不属于文本渲染样式，而是属于排版方式，所以不是通过`style`属性设置,而是通过`textAlign`属性设置。

| 名称 | 说明 |
| ---- | ---- |
| textAlign | 对齐方式 |
| textDirection | 阅读方式 |

> `textAlign`用于设置文本在`Text`组件内的对齐方式，而不是`Text`组件本身在其父级组件中的对齐方式。

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          color: Colors.grey[400],
          child: const Text(
            "末尾对齐",
            textAlign: TextAlign.end,
          ),
        ),
        Container(
          color: Colors.grey[400],
          width: 300, // 影响Text组件尺寸
          child: const Text(
            "末尾对齐",
            textAlign: TextAlign.end,
          ),
        )
      ],
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs.flutter/常用组件/Flutter_文本组件/QQ截图20241218225958.webp)

### 4. maxLines 和 softWrap
| 名称 | 说明 |
| ---- | ---- |
| softWrap | 自动换行，默认true |
| maxLines | 最多显示几行，类型为整数 |

### 5. overflow
当文本较长,且不需要渲染全部内容时，可用 `overflow`属性这是超出部分该如何处理。

可传入的参数为TextOverflow
| 名称 | 说明 |
| ---- | ---- |
| clip | 裁剪 |
| fade | 渐淡 |
| ellipsis | 省略号 |
| visible | 可见 |

> 当`overflow`参数被设置为`TextOverflow.ellipsis`(省略号)时，即使没有特别传入`maxLines`规定的最大行数，也没有关闭`softWrap`自动换行，`Text`组件默认仍然只会显示一行，而不会自动换行。

### 6.textScaleFactor
文字缩放系数，可以接收一个小数类型，并在`Text`组件渲染文本时将`style`参数里设置的字号数值(或默认的字号数值14)与该系数相乘。

> `textScaleFactor`的默认值并不总是1.0，是操作系统层级的缩放比例。比如老年模式下全局文字的150%,`textScaleFactor`的默认值就是1.5。

### 7. semanticsLabel
语义标签是辅助功能的一部分，用来协助第三方软件为有障碍人士提供无障碍服务。
```dart
Text("￥5.00",semanticsLabel:"五元整");
```

## DefaultTextStyle

## RichText