# 弹性布局

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

弹性布局允许子组件按照一定比例来分配父容器空间。

[https://api.flutter.dev/flutter/widgets/Flex-class.html](https://api.flutter.dev/flutter/widgets/Flex-class.html)

## Flex
实际上`Row`和`Column`组件都是继承于`Flex`组件，主要用于增强代码的可读性，类似于语法糖的作用。

`Flex`组件的用法与`Row`或`Column`几乎一致，但需要额外传入`direction`(方向)参数，以便指定`Flex`的主轴方向。

- direction: Axis.horizontal 表示认定水平方向为主轴 - Row组件效果
- direction: Axis.vertical 表示认定垂直方向为主轴 - Column组件效果

## Expanded
当使用`Flex`组件布局时(包括Row和Column组件)，通过给子组件嵌套`Expanded`组件，可以"扩张"那些子组件，使它们占满`Flex`的剩余全部可用空间。
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const FlutterLogo(
          size: 100,
        ),
        Expanded(
          child: Container(
            height: 100,
            color: Colors.grey[400],
            alignment: Alignment.center,
            child: const Text("这个部分是Expanded区域"),
          ),
        ),
        const FlutterLogo(
          size: 100,
        ),
      ],
    );
  }
}
```
运行时，Flex会首先将固定尺寸的普通组件摆放到位，在计算剩余空间，并分配给不固定尺寸的“弹性”组件。

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_弹性布局/微信截图_20241215155204.webp)

`Expanded`组件的`flex`属性可以接受一个整数，用于表示该组件相对于其他弹性组件的“弹性权重”，默认为1。若将`flex`设置为0或者null，则表示该组件没有弹性，应该被当作普通的固定尺寸的子组件处理。其余情况下，它会被当作有弹性的组件，将按照flex属性值的权重，参与Flex剩余空间的分配。
```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          flex: 1,
          child: Container(
            height: 100,
            color: Colors.black12,
          ),
        ),
        Expanded(
          flex: 2,
          child: Container(
            height: 100,
            color: Colors.black26,
          ),
        ),
        Expanded(
          flex: 3,
          child: Container(
            height: 100,
            color: Colors.black38,
          ),
        ),
      ],
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_弹性布局/微信截图_20241215160346.webp)

## Flexible
`Flexible`是`Expanded`组件的父类，主要作用也是用于“扩张”Flex中的部分组件，使它们占满全部空间。

`Flexible`可以通过`fit`属性设置其child是否必须占满Flexible为其扩张的空间，其默认值是`FlexFit.loose`。

- fit: FlexFit.tight 紧约束，强制约束子组件的尺寸必须为Flexible分配的尺寸，不可以更大或者更小 - `Expanded`组件效果
- fit: FlexFit.loose 松约束，允许子组件的尺寸小于或等于所分配的尺寸。此时，若某些子组件真的选择渲染更小的尺寸，则它们节约出的多余空间也不会再被分配给其他组件。

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Text(
          "Expanded",
          textAlign: TextAlign.center,
        ),
        Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: List.generate(
                150,
                (index) => index % 2 == 0 ? Colors.grey : Colors.white,
              ),
            ),
          ),
          child: Row(
            children: [
              Expanded(
                flex: 2,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[200],
                ),
              ),
              Expanded(
                flex: 1,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[400],
                ),
              ),
              Expanded(
                flex: 1,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[800],
                ),
              ),
            ],
          ),
        ),
        const Text(
          "Flexible",
          textAlign: TextAlign.center,
        ),
        Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: List.generate(
                150,
                (index) => index % 2 == 0 ? Colors.grey : Colors.white,
              ),
            ),
          ),
          child: Row(
            children: [
              Flexible(
                flex: 2,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[200],
                ),
              ),
              Expanded(
                flex: 1,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[400],
                ),
              ),
              Expanded(
                flex: 1,
                child: Container(
                  width: 24,
                  height: 24,
                  color: Colors.red[800],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
```
设置3个子组件的比例为2:1:1。设置`Row`容器背景为虚线格子。
- 若第一个子组件使用`Expanded`强制约束尺寸,它就一定会占满`Row`的总宽度一半
- 若第一个子组件使用`Flexible`放松约束，且它自身尺寸设置了更小的宽度时，`Row`容器就不一定会被谈满。

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_弹性布局/微信截图_20241215165725.webp)

## Spacer
英文Space是空白的意思，因此`Spacer`是一个用于在Flex中弹性留白的组件。它没有child参数，但有flex参数，用于表示该组件相对于其他弹性组件的“弹性权重”。

```dart
class CustomWidget extends StatelessWidget {
  const CustomWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.amber,
      child: Row(
        children: [
          const Spacer(
            flex: 1,
          ),
          Expanded(
            flex: 0,
            child: Container(
              width: 100,
              height: 100,
              color: Colors.black54,
            ),
          ),
        ],
      ),
    );
  }
}
```
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_弹性布局/微信截图_20241215174650.webp)