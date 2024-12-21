# 图片组件

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


## Image
`Image`是一个常用的组件，用于显示图片并调节渲染方式或尺寸等。

本文中的资源包图片都封装在`AssetsImages`类里面。

### 1. ImageProvider
`Image`组件有1个必传的参数`image`， 类型为`ImageProvider`。实际上，`ImageProvider`(图片提供者)是一个抽象类，而Flutter框架提供了4种已知继承。

#### a. NetworkImage
网络图片，顾名思义就是直接提供某张图片资源的URL链接。
```dart
const Image(
    image: NetworkImage('http://blog.59young.com/logo.png');
)
```

#### b. FileImage
文件图片一般用来加载存储设备(如磁盘、扩展卡等)的文件系统中的图片资源文件。
```dart
Image(
    image: FileImage(
        File("path/to/DCIM/logo.png"),
    ),
)
```

#### c. AssetImage
资源包(AssetBundle)是指程序在编译时打包嵌入程序可执行文件中的其他文件，一般有图片资源和文字资源等。
```dart
Image(
    image: AssetImage("image/tomato.png"),
)
```

#### d. MemoryImage
`Image`组件还可以快速地从内存中的一个`Uint8List`字节列加载图片。`Uint8List`是一个固定长度的8位正整数列表类型，可以存储任何二进制信息。
```dart
// 图片数据，用base64形式保存为字符串
final String data = "xxxxxx";

// 转码至 Uint8List 类型
late final Bytes = base64Decode(data);

... // 无关代码略

// build方法中，利用 MemoryImage 从内存中加载图片
Image(
    image: MemoryImage(Bytes)
)
```

### 2. 构造函数
Image组件共有5种构造函数。除了主构造函数Image()外，还有4种，分别对应4种支持的图片资源提供方式。

| 加载方式 | 构造函数 |
| ---- | ---- |
| NetworkImage | Image.network() |
| FileImage | Image.file() |
| AssetImage | Image.asset() |
| Memory | Image.memory() |

### 3. 尺寸和比例
#### a. width 和 height
`Image`组件的尺寸可以由`width`(宽度)和`height`(高度)这2个参数设置，类型为小数。

#### b. alignment
当Image组件与素材图片的长宽比不符，或素材图片的解析度不够时，这时图片的具体对齐方式就由alignment属性控制。

#### c. fit
当素材文件尺寸或比例不适合时，除了缩小图片并留白再调整对齐方式外，也可以借助`fit`参数设置其他适配模式。
| 名称 | 说明 |
| ---- | ---- |
| fill | 图片按照指定的大小在 Image 中显示，拉伸显示图片，不保持原比例，填满 Image。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/fill.webp) |
| contain | 以原图正常显示为目的，如果原图大小大于 Image 的 size，就按照比例缩小原图的宽高，居中显示在 Image 中。如果原图 size 小于 Image 的 size，则按比例拉升原图的宽和高，填充 Image 一边并居中显示。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/contain.webp) |
| cover | 以原图填满 Image 为目的，如果原图 size 大于 Image 的 size，按比例缩小，居中显示在 Image 上。如果原图 size 小于 Image 的 size，则按比例拉升原图的宽和高，填充 Image 居中显示。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/cover.webp) |
| fitWidth | 以原图正常显示为目的，如果原图宽大小大于（小于）Image 的宽，就缩小（放大）原图的宽与 Image 一致，居中显示在 Image 中。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/fitWidth.webp) |
| fitHeight | 以原图正常显示为目的，如果原图高大小大于（小于）Image 的高，就缩小（放大）原图的高与 Image 一致，居中显示在 Image 中。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/fitHeight.webp) |
| none | 保持原图的大小，显示在 Image 的中心。当原图的 size 大于 Image 的 size 时，多出来的部分被截掉。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/none.webp) |
| scaleDown | 以原图正常显示为目的，如果原图大小大于 Image 的 size，就按照比例缩小原图的宽高，居中显示在 Image 中。如果原图 size 小于 Image 的 size，则不做处理居中显示图片。<br>![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/scaleDown.webp) |

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Center(
        child: Column(
          children: [
            for (var it in BoxFit.values) _buidFit(it),
          ],
        ),
      ),
    );
  }

  Column _buidFit(fit) {
    return Column(
      children: [
        Text("$fit"),
        Container(
          color: Colors.amber,
          child: SizedBox(
            width: 400,
            height: 100,
            child: Image.asset(
              AssetsImages.guiDaoBgJpg,
              color: Colors.blue,
              colorBlendMode: BlendMode.dstOver,
              fit: fit,
            ),
          ),
        ),
      ],
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/QQ截图20241221194256.webp)

#### d. repeat
当通过前面介绍的`width`、`height`及`fit`属性设置完素材与组件之间的尺寸与适配关系后，仍出现组件由留白的情况时，可再借助`repeat`参数选择是否重复使用素材，达到平铺的效果。

| 属性 | 说明 |
| ---- | ---- |
| ImageRepeat.repeat | 允许平铺 |
| ImageRepeat.repeatX | 只允许X轴方向 |
| ImageRepeat.repeatY | 只允许Y轴方向 |
| ImageRepeat.noRepeat | 不允许平铺 |

### 4. 区域放大
利用`Image`组件的`centerSlice`参数传入一个中心矩形，这样它就可以在矩形的上方和下方进行水平方向缩放，而矩形的左右区域可以任意进行垂直方向缩放。

即: 以`centerSlice`为中心部分，四个角的矩形部分不会改变，而左右上下四部分就会进行拉伸。

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/078f101aa100055d647238ed8f5a0db4.webp)


### 5. 混色
Flutter框架支持完善的混色处理，其中图片的混色是通过`color`和`colorBlendMode`参数设置的。

默认混色模式是`SrcIn`,即原图中所有不透明的颜色全被改涂为color传入的颜色。

常用的混色属性:

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/image-20190523170707924.webp)

### 6. 无缝切换
当`Image`组件的素材文件源发生改变，尤其是切换到网络资源文件时，通常新图片资料的加载不会瞬间完成。此时`gaplessPlayback`参数可以控制`Image`组件是否应该继续显示之前的图片，直到新文件加载完成。

### 7. 加载过程
#### a. errorBuilder
如果图片加载的过程中发生错误，则`Image`组件会将`errorBuilder`方法的返回值渲染到屏幕上，因此借助`errorBuilder`参数可设置图片加载错误时需要显示的提示信息或代替内容。
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.network(
      'src',
      errorBuilder: (context, error, stackTrace) {
        // error - 错误信息
        // stackTrace - 堆栈追踪
        return const Text("图片出错啦~");
      },
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_图片组件/QQ截图20241221234208.webp)

#### b. frameBuilder
这里`frame`应取动画术语中的“帧”之意，而不是“画框”的意思。

这个回传函数包含4个参数
| 属性 | 说明 |
| ---- | ---- |
| BuildContext context | 这是一个构建上下文对象，提供了关于当前组件树的信息。 |
| Widget child | 这个参数代表当前的图像小部件。它是 Image 组件的输出，你可以将其视为当前帧的图像。 |
| int frame | 这个参数表示当前渲染的帧的索引。对于非动画图像，这个值总是 null。 |
| bool wasSynchronouslyLoaded | 这个布尔值参数指示图像是否是同步加载的。 |

利用`frameBuilder`实现图片淡入效果。
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      AssetsImages.guiDaoBgJpg,
      frameBuilder: (context, child, frame, wasSynchronouslyLoaded) {
        return AnimatedOpacity(
          opacity: frame == null ? 0 : 1,
          duration: const Duration(
            seconds: 1,
          ),
          child: child,
        );
      },
    );
  }
}
```
> 在图片加载的过程中,`frame`值为空，当一帧图片加载完成后，`frame`值不为空。

#### c. loadingBuilder
它的回传函数中会包含一种类型为`ImageChunkEvent`的值，用于描述当前文件的加载状态。

这个回传函数包含3个参数
| 属性 | 说明 |
| ---- | ---- |
| BuildContext context | 这是一个构建上下文对象，提供了关于当前组件树的信息。 |
| Widget child | 这个参数代表当前的 Image 小部件。在 loadingBuilder 回调中，child 是正在加载的图片。 |
| ImageChunkEvent loadingProgress | 这个参数提供了图片加载的进度信息。 |

利用`loadingBuilder`显示加载百分比
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.network(
      'http://blog.59young.com/logo.png',
      loadingBuilder: (context, child, loadingProgress) {
        // 如果已经加载完成，就直接显示图片
        if (loadingProgress == null) return child;

        // 计算加载完成度百分比: 已下载字节 / 预计总字节 * 100
        final percent = loadingProgress.cumulativeBytesLoaded / loadingProgress.expectedTotalBytes! * 100;
        return Text("加载 $percent %");
      },
    );
  }
}
```
> 当`frameBuilder`与`loadingBuilder`同时出现时，`frameBuilder`会被先执行，其运行结果（它的返回值）会被传递为`loadingBuilder`的child参数。

### 8. 语义标签
#### a. semanticLabel
语义标签是辅助功能的一部分，用来协助第三方软件为有障碍人士提供无障碍服务。

#### b. excludeFromSemantics
提示辅助软件该图片不提供有意义的信息，无需朗读。


## FadeInImage
若需要在图片加载的过程中暂时显示另一张代替图片，并在图片加载完毕后平滑过渡，就可以使用`FadeInImage`组件。

### 1. 基础用法
`FadeInImage`组件的默认构造函数由两个必传的参数，分别是`placeholder`(加载过程中临时显示的代替图)和`image`(最终显示的图片)。
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return FadeInImage(
      placeholder: AssetImage(AssetsImages.loadingGif),
      image: NetworkImage("http://blog.59young.com/logo.png"),
    );
  }
}
```

### 2. 构造函数
`FadeInImage`组件共有3种构造函数。除了主构造函数FadeInImage()外，还有2个命名构造函数。
| 函数 | 说明 |
| ---- | ---- |
| FadeInImage.assetNetwork | 从资源包图片切换到网络图片 |
| FadeInImage.memoryNetwork | 从内存图片切换到网络图片 |

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return FadeInImage.assetNetwork(
      placeholder: AssetsImages.loadingGif,
      image: "http://blog.59young.com/logo.png",
    );
  }
}
```

### 3. 过渡效果
| 参数 | 说明 |
| ---- | ---- |
| fadeInDuration | 渐入时长 |
| fadeInCurve | 渐入动画曲线 |
| fadeOutDuration | 渐出时长 |
| fadeOutCurve | 渐出动画曲线 |


### 4.其他属性
由于`FadeInImage`组件可在一定情况下代替`Image`组件，因此它也支持大部分`Image`组件的属性。

`FadeInImage`组件没有`Image`组件的`gaplessPlayback`(是否启用无缝切换)属性，因为它总是无缝切换。

当图片加载错误时，`Image`组件会调用`errorBuilder`方法，但由于`FadeInImage`组件增加了替代图的概念，因此这里提供了2个回传函数，分别是`imageErrorBuilder`用来在图片加载错误时调用，以及`placeholderErrorBuilder`用来在代替图加载错误时调用。