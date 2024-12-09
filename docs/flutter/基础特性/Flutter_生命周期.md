# 生命周期

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## StatefulWidget 生命周期
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/基础特性/Flutter_生命周期/000129.webp)

- 执行顺序,从上往下

| 名称 | 说明 |
| ---- | ---- |
| createState | 创建 State 只执行1次 |
| initState | 初始 State, mounted 等于 true, 只执行1次 |
| didChangeDependencies | 父或祖先widget中的InheritedWidget改变时会被调用 |
| build | UI 被重新渲染的时候多次执行 |
| addPostFrameCallback | 渲染结束回调，只执行1次 |
| didUpdateWidget | 父类 setState 后，子类就会触发 |
| deactivate | 从组件树中移除 State 时调用 |
| dispose | 组件被释放时调用 |

> 不要再 build 里面更新状态, 影响性能

### 说明
- initState 初始状态数据
```dart
@override
void initState() {
    super.initState();
    print("initState");
}
```

- build 渲染视图，可多次
```dart
@override
Widget build(BuildContext context) {
    return Column(
        children: [
            ElevatedButton(
                onPressed: () {},
                child: const Text("切换图片"),
            ),
            imageWidget(
                imgUrl: imgUrl ?? img1,
            ),
        ],
    );
}
```

- mounted 状态

`flutter` 分配完你的组件树位置，会设置 `mounted` 为 `true`.  
你需要在 `mounted == true` 情况下，调用 `setState()` 来更新 UI ，这才是安全的操作。
```dart
ElevatedButton(
    onPressed: () {
        if (mounted == true) {
            setState(() {
                imgUrl = imgUrl == img1 ? img2 : img1;
            });
        }
    },
    child: const Text("切换图片"),
),
```

- didChangeDependencies

父或祖先widget中的InheritedWidget改变时会被调用。
> `InheritedWidget`和 React 中的 context 功能类似，和逐级传递数据相比，它们能实现组件跨级传递数据。
> <br><br>
> 这种从根开始向下传递数据的方式，很适合做全局数据的管理，如样式、基础数据等。
```dart
  // 父或祖先widget中的InheritedWidget改变时会被调用
@override
void didChangeDependencies() {
    super.didChangeDependencies();
    print("didChangeDependencies");
}
```

- didUpdateWidget

父类 setState 后，子类就会触发
```dart
// 父类 setState 后，子类就会触发
@override
void didUpdateWidget(oldWidget) {
    super.didUpdateWidget(oldWidget);
    print("didUpdateWidget");
}
```

- addPostFrameCallback

渲染结束回调，只执行1次  
如我们可以放在 initState 时设置
```dart
// 需要引用 SchedulerBinding
// 初始 State, mounted 等于 true, 只执行1次
@override
void initState() {
    super.initState();
    print("initState");

    // 渲染结束调用，只执行1次
    SchedulerBinding.instance?.addPostFrameCallback((timeStamp) {
    print("addPostFrameCallback");
    print(timeStamp);
    });
}
```

- deactivate

从组件树中移除 State 时调用
```dart
@override
void deactivate() {
    super.deactivate();
    print("deactivate");
}
```

- dispose

组件被释放时调用
```dart
@override
void dispose() {
    print("dispose");
    super.dispose();
}
```

### 代码
```dart
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

void main() {
  runApp(const MyApp());
}

const img1 =
    "https://ducafecat.tech/2021/12/09/blog/2021-jetbrains-fleet-vs-vscode/2021-12-09-10-30-00.png";
const img2 =
    "https://ducafecat.tech/2021/12/09/blog/2021-jetbrains-fleet-vs-vscode/2021-12-09-20-45-02.png";

Widget imageWidget({required String imgUrl}) {
  return Container(
    padding: const EdgeInsets.all(10),
    color: Colors.amber,
    child: Image.network(imgUrl),
  );
}

class BannerWidget extends StatefulWidget {
  const BannerWidget({Key? key}) : super(key: key);

  // 创建 State 只执行1次
  @override
  State<BannerWidget> createState() {
    print("createState");
    return _BannerWidgetState();
  }
}

class _BannerWidgetState extends State<BannerWidget> {
  String? imgUrl;

  // 初始 State, mounted 等于 true, 只执行1次
  @override
  void initState() {
    super.initState();
    print("initState");

    // 渲染结束调用，只执行1次
    SchedulerBinding.instance?.addPostFrameCallback((timeStamp) {
      print("addPostFrameCallback");
      print(timeStamp);
    });
  }

  // 父或祖先widget中的InheritedWidget改变时会被调用
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print("didChangeDependencies");
  }

  // 父类 setState 后，子类就会触发
  @override
  void didUpdateWidget(oldWidget) {
    super.didUpdateWidget(oldWidget);
    print("didUpdateWidget");
  }

  // 从组件树中移除 State 时调用
  @override
  void deactivate() {
    super.deactivate();
    print("deactivate");
  }

  // 组件被释放时调用
  @override
  void dispose() {
    print("dispose");
    super.dispose();
  }

  // UI 被重新渲染的时候多次执行
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
          onPressed: () {
            if (mounted == true) {
              setState(() {
                imgUrl = imgUrl == img1 ? img2 : img1;
              });
            }
          },
          child: const Text("切换图片"),
        ),
        imageWidget(
          imgUrl: imgUrl ?? img1,
        ),
      ],
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          children: const [
            Text('有无状态组件'),
            BannerWidget(),
          ],
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```
```sh
flutter: createState
flutter: initState
flutter: didChangeDependencies
flutter: addPostFrameCallback
flutter: 0:00:00.000000
```

## StatelessWidget 生命周期

无状态组件，不需要处理生命周期，直接显示即可

```dart
abstract class StatelessWidget extends Widget {
  /// Initializes [key] for subclasses.
  const StatelessWidget({ Key? key }) : super(key: key);

  /// Creates a [StatelessElement] to manage this widget's location in the tree.
  ///
  /// It is uncommon for subclasses to override this method.
  @override
  StatelessElement createElement() => StatelessElement(this);
  ...
```
> 在源码中可见 `createElement()` 创建组件到组件树，不需要重写去维护

## App生命周期

- 第一步： 创建 StatefulWidget 组件，混入 `WidgetsBindingObserver`
```dart
class _MyAppState extends State<MyApp> with WidgetsBindingObserver {
  ...
```

- 第二步：添加观察者 `addObserver`
```dart
@override
void initState() {
    super.initState();
    WidgetsBinding.instance?.addObserver(this); //添加观察者
}
```

- 生命周期变化时回调 `didChangeAppLifecycleState`
```dart
//  生命周期变化时回调
@override
void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    print("didChangeAppLifecycleState: $state");
}
```

| 名称 | 说明 |
| ---- | ---- |
| resumed | 应用程序可见且响应用户输入 |
| inactive | 应用程序处于非激活状态，无法响应用户输入 |
| pause | 应用程序不可见且无法响应用户输入，运行在后台 |
| detached | 应用程序仍寄存在Flutter引擎上，但与平台 View 分离 |
| suspending | 应用被挂起，此状态IOS永远不会回调 |

### 代码
```dart
import "package:flutter/material.dart";

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

//实现WidgetsBindingObserver观察者
class _MyAppState extends State<MyApp> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance?.addObserver(this); //添加观察者
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("App生命周期"),
        ),
        body: Column(
          children: <Widget>[
            const Text("首页"),
          ],
        ),
      ),
    );
  }

  //  生命周期变化时回调
  //  resumed:应用可见并可响应用户操作,app进入前台
  //  inactive:用户可见，但不可响应用户操作，比如来了个电话,前后台切换的过渡状态
  //  paused:已经暂停了，用户不可见、不可操作，app进入后台
  //  suspending：应用被挂起，此状态IOS永远不会回调
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    print("didChangeAppLifecycleState: $state");
  }

  //当前系统改变了一些访问性活动的回调
  @override
  void didChangeAccessibilityFeatures() {
    super.didChangeAccessibilityFeatures();
    print("didChangeAccessibilityFeatures");
  }

  //低内存回调
  @override
  void didHaveMemoryPressure() {
    super.didHaveMemoryPressure();
    print("didHaveMemoryPressure");
  }

  //用户本地设置变化时调用，如系统语言改变
  @override
  void didChangeLocales(List<Locale>? locale) {
    super.didChangeLocales(locale);
    print("didChangeLocales");
  }

  //应用尺寸改变时回调，例如旋转
  @override
  void didChangeMetrics() {
    super.didChangeMetrics();
    Size? size = WidgetsBinding.instance?.window.physicalSize;
    print("didChangeMetrics  ：宽：${size?.width} 高：${size?.height}");
  }

  //系统切换主题时回调
  @override
  void didChangePlatformBrightness() {
    super.didChangePlatformBrightness();
    print("didChangePlatformBrightness");
  }

  ///文字系数变化
  @override
  void didChangeTextScaleFactor() {
    super.didChangeTextScaleFactor();
    print(
        "didChangeTextScaleFactor  ：${WidgetsBinding.instance?.window.textScaleFactor}");
  }

  @override
  void dispose() {
    super.dispose();
    WidgetsBinding.instance?.removeObserver(this); //销毁观察者
  }
}
```

```sh
flutter: didChangeMetrics  ：宽：1125.0 高：2436.0
flutter: didChangeAppLifecycleState: AppLifecycleState.inactive
flutter: didHaveMemoryPressure
flutter: didChangeAppLifecycleState: AppLifecycleState.paused
flutter: didChangePlatformBrightness
flutter: didChangeMetrics  ：宽：1125.0 高：2436.0
flutter: didChangePlatformBrightness
flutter: didChangeMetrics  ：宽：1125.0 高：2436.0
flutter: didChangeAppLifecycleState: AppLifecycleState.inactive
flutter: didChangeAppLifecycleState: AppLifecycleState.resumed
```