# 脚手架

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 定义
Scaffold是一个页面布局脚手架，实现了基本的 Material 布局，继承自 StatefulWidget,是有状态组件。

它提供了Material Design布局结构的基本实现, 标题栏，主体内容，底部导航菜单或者侧滑抽屉菜单等等

对应 ios 的是 CupertinoPageScaffold

[https://api.flutter.dev/flutter/material/Scaffold-class.html](https://api.flutter.dev/flutter/material/Scaffold-class.html)

[https://api.flutter.dev/flutter/cupertino/CupertinoPageScaffold-class.html](https://api.flutter.dev/flutter/cupertino/CupertinoPageScaffold-class.html)

```dart
const Scaffold({
    Key key,
    // 菜单栏
    this.appBar,
    // 中间主体内容部分
    this.body,
    // 悬浮按钮
    this.floatingActionButton,
    // 悬浮按钮位置
    this.floatingActionButtonLocation,
    // 悬浮按钮动画
    this.floatingActionButtonAnimator,
    // 固定在下方显示的按钮
    this.persistentFooterButtons,
    // 左侧 侧滑抽屉菜单
    this.drawer,
    // 右侧 侧滑抽屉菜单
    this.endDrawer,
    // 底部菜单
    this.bottomNavigationBar,
    // 底部拉出菜单
    this.bottomSheet,
    // 背景色
    this.backgroundColor,
    // 自动适应底部padding
    this.resizeToAvoidBottomPadding,
    // 重新计算body布局空间大小，避免被遮挡
    this.resizeToAvoidBottomInset,
    // 是否显示到底部，默认为true将显示到顶部状态栏
    this.primary = true,
    this.drawerDragStartBehavior = DragStartBehavior.down,
})
```

## 示例
```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

// class CupertinoPage extends StatelessWidget {
//   const CupertinoPage({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return const CupertinoPageScaffold(
//       navigationBar: CupertinoNavigationBar(
//         middle: Text('我是标题'),
//       ),
//       child: Center(
//         child: Text('我是内容'),
//       ),
//     );
//   }
// }

class ScaffoldPage extends StatelessWidget {
  const ScaffoldPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // 菜单栏
      appBar: AppBar(
        title: const Text('Material App Bar'),
      ),

      // 悬浮按钮
      // floatingActionButton: FloatingActionButton(
      //   onPressed: () {},
      //   child: const Icon(Icons.add_photo_alternate),
      // ),

      // 悬浮按钮位置
      // floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,

      // 固定在下方显示的按钮
      // persistentFooterButtons: const [
      //   Text('persistentFooterButtons1'),
      //   Text('persistentFooterButtons2'),
      // ],

      // 压缩顶部菜单空间
      // primary: true,

      // 左侧 侧滑抽屉菜单
      // drawer: const Drawer(
      //   child: Text('data'),
      // ),

      // 右侧 侧滑抽屉菜单
      // endDrawer: const Drawer(
      //   child: Text('data'),
      // ),

      // 检测手势行为方式，与drawer配合使用 down 方式有卡顿，可以 start 方式
      // drawerDragStartBehavior: DragStartBehavior.start,

      // 底部导航栏
      // bottomNavigationBar: const Text('bottomNavigationBar'),

      // 底部拉出菜单
      // bottomSheet: const Text('bottomSheet'),

      // 背景色
      // backgroundColor: Colors.amberAccent,

      // 自动适应底部padding
      // resizeToAvoidBottomInset: true,

      // 正文
      body: Builder(
        builder: (BuildContext context) {
          return Center(
            child: ElevatedButton(
              onPressed: () {
                // 脚手架管理
                // Scaffold.of(context).openDrawer();

                // 应用消息管理
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                  content: Text('Hello!'),
                ));
              },
              child: const Text('showSnackBar'),
            ),
          );
        },
      ),
    );
  }
}
```

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/布局容器/Flutter_脚手架/image-20220619094948313.webp =400x)