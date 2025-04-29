# 路由管理

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)


## Navigator
导航器通过维护内部的一个栈（`stack`，数据结构，不是Stack组件）来管理各个页面组件，并通过调用`Overlay`悬浮的方式，将多个页面叠加，以保证最新的页面显示在最顶层。
> 实战中很少需要自己创建`Navigator`组件。因为一般`Flutter`程序的根组件（如`MaterialApp`）会自动创建一个导航器，因此实战中只需使用`Navigator.of(context)`方法查找组件树中的父级`Navigator`。

## 匿名路由
主要通过`Push()`和`Pop()`来操作路由

- Navigator路由管理对象  
`Navigator`是一个路由管理的组件，它提供了打开和退出路由页方法。  
`Future push(BuildContext context, Route route)` 压入一个新页面到路由堆栈  
`bool pop(BuildContext context, [ result ])`压出一个页面出路由堆栈

- MaterialPageRoute 定义  
`MaterialPageRoute`继承自`PageRoute`类，`PageRoute`类是一个抽象类，表示占有整个屏幕空间的一个模态路由页面，它还定义了路由构建及切换时过渡动画的相关接口及属性。  
```dart
MaterialPageRoute({
    // 是一个WidgetBuilder类型的回调函数，它的作用是构建路由页面的具体内容，返回值是一个widget。我们通常要实现此回调，返回新路由的实例。
    WidgetBuilder builder,
    
    // 包含路由的配置信息，如路由名称、是否初始路由（首页）。
    RouteSettings settings,
    
    // 默认情况下，当入栈一个新路由时，原来的路由仍然会被保存在内存中，如果想在路由没用的时候释放其所占用的所有资源，可以设置maintainState为 false。
    bool maintainState = true,
    
    // 表示新的路由页面是否是一个全屏的模态对话框，在 iOS 中，如果fullscreenDialog为true，新页面将会从屏幕底部滑入（而不是水平方向）。
    bool fullscreenDialog = false,
})
```

- 路由传值  
传递可以在初始新界面对象时通过构造函数压入  
新界面退出后的返回值通过 Navigator.pop 的参数返回

- 示例  
首页NavPaged  
```dart
import 'package:flutter/material.dart';

class NavPaged extends StatelessWidget {
  const NavPaged({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('NavPaged'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            var result = await Navigator.push(
              context,
              MaterialPageRoute(builder: (context) {
                return const DetailPaged(
                  title: "ducafecat",
                );
              }),
            );

            print("路由返回值: $result");
          },
          child: const Text("Navigator.push DetailPage"),
        ),
      ),
    );
  }
}
```  
详情页 DetailPaged  
```dart
class DetailPaged extends StatelessWidget {
  const DetailPaged({Key? key, this.title}) : super(key: key);

  // 参数
  final String? title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('DetailPaged'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // 按钮
            OutlinedButton(
              onPressed: () {
                Navigator.pop(context, "任意类型的返回值");
              },
              child: const Text('Back'),
            ),
            // 显示传值
            Text(title ?? ""),
          ],
        ),
      ),
    );
  }
}
```

## 命名路由
当程序的页面数量较多时，应考虑使用命名路由，这样可以更方便地切换到某一页面或连续跳转多页。

### 路由表
由于大部分`Flutter`程序会直接使用根组件（如`MaterialApp`）自动创建的导航器，开发者很少会手动创建`Navigator`组件，因此`MaterialApp`或`CupertinoApp`等根组件也都提供了`routes`参数，以便迅速地为整个程序创建路由表。
```dart
void main(){
    runApp(MaterialApp(
        home: MyHomePage(), // 根目录，即"/"路径
        routes: <String, WidgetBuilder>{
            '/a': (BuildContext) => MyPage(title: 'Page A'),
            '/b': (BuildContext) => MyPage(title: 'Page B'),
            '/c': (BuildContext) => MyOtherPage(),
        },
    ));
}
```
需要打开页面时可调用导航器的`pushNamed`方法，代码如下：
```dart
Navigator.of(context).pushNamed("/b");
```
`Navigator`会根据路由表，查询到`"/b"`路径所对应的是`MyPage`这个组件（与路径`"/a"`相同，提高了代码的复用性），且应向其`title`参数传入`'Page B'`。同理，若调用`pushNamed("/c")`则会打开`MyOtherPage`组件

### 生成路由
对于更复杂的路由情况可使用`onGenerateRoute`方法，并根据传入的`RouteSettings`类，动态生成路由。

| `RouteSettings`属性 | 说明 |
| ---- | ---- |
| name | 路由名称 |
| arguments | 附加参数 |
> 其中`arguments`对应的是导航器的`pushNamed`方法所支持的可选`arguments`参数。

生成路由代码
```dart
void main(){
    runApp(MaterialApp(
        home: MyHomePage(),
        onGenerateRoute: (RouteSettings settings) {
          if( settings.name == "/user" ) {
            final args = settings.arguments as User;
            return MaterialPageRoute(builder: (_) => MyUserPage(user: args) );
          }
          return null;
        },
    ));
}
```

按钮部分代码
```dart
ElevatedButton(
  child: Text("Goto Yang"),
  onPressed: () => Navigator.of(context)
    .pushNamed("/user", arguments: User("Yang", 24));
)
```

由此可见，`onGenerateRoute`方式主要目的是配合`arguments`附加参数，解决普通路由表不易向新页面传附加参数的问题。

### 未知路由
当程序出现不存在的路径时，可使用`onUnknownRoute`方法，并根据传入的`RouteSettings`类，生成未知路由类似网站的404页面。
```dart
void main(){
    runApp(MaterialApp(
        home: MyHomePage(),
        onUnknownRoute: (RouteSettings settings) {
          return MaterialPageRoute(builder: (_)=> Text("404") )
        }
    ));
}
```

### 示例
```dart
import 'package:flutter/material.dart';

// 应用程序的入口函数
void main() {
  runApp(MaterialApp(
    // 设置应用的首页为 MyHomePage
    home: const MyHomePage(),
    // 定义命名路由
    routes: <String, WidgetBuilder>{
      '/a': (BuildContext context) => const MyPage(title: 'Page A'), // 路由 "/a" 映射到 MyPage，标题为 "Page A"
      '/b': (BuildContext context) => const MyPage(title: 'Page B'), // 路由 "/b" 映射到 MyPage，标题为 "Page B"
      '/page/other': (BuildContext context) => const MyOtherPage(),  // 路由 "/page/other" 映射到 MyOtherPage
    },
    // 动态路由生成器
    onGenerateRoute: (RouteSettings settings) {
      // 如果路由是 "/user"，则解析参数并导航到 MyUserPage
      if (settings.name == "/user") {
        final User user = settings.arguments as User; // 获取传递的 User 参数
        return MaterialPageRoute(
          builder: (BuildContext context) => MyUserPage(user: user), // 返回 MyUserPage
        );
      }
      return null; // 如果未匹配，返回 null
    },
    // 未知路由处理
    onUnknownRoute: (RouteSettings settings) {
      // 如果路由未定义，显示 "404 Not Found"
      return MaterialPageRoute(
        builder: (BuildContext context) => const Text("404 Not Found"),
      );
    },
  ));
}

// 主页面 MyHomePage
class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("路由演示"), // 应用标题
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly, // 子组件均匀分布
          children: [
            // 按钮：通过命名路由打开 Page A
            ElevatedButton(
              child: const Text("命名打开 Page A"),
              onPressed: () => Navigator.pushNamed(context, "/a"),
            ),
            // 按钮：通过命名路由打开 Page B
            ElevatedButton(
              child: const Text("命名打开 Page B"),
              onPressed: () => Navigator.pushNamed(context, "/b"),
            ),
            // 按钮：通过命名路由打开 Other 页面
            ElevatedButton(
              child: const Text("命名打开 Other"),
              onPressed: () => Navigator.pushNamed(context, "/page/other"),
            ),
            // 按钮：直接通过 MaterialPageRoute 打开 Other 页面
            ElevatedButton(
              child: const Text("直接打开 Other"),
              onPressed: () => Navigator.of(context).push(
                MaterialPageRoute(
                    builder: (BuildContext context) => const MyOtherPage()),
              ),
            ),
            // 按钮：通过命名路由打开 User 页面，并传递参数
            ElevatedButton(
              child: const Text("命令打开 User"),
              onPressed: () {
                final User user = User("阳九五", 18); // 创建一个 User 对象
                Navigator.of(context).pushNamed("/user", arguments: user); // 传递参数
              },
            ),
            // 按钮：直接通过 MaterialPageRoute 打开 User 页面，并传递参数
            ElevatedButton(
              child: const Text("直接打开 User"),
              onPressed: () {
                final User user = User("阳九五", 18); // 创建一个 User 对象
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (BuildContext context) => MyUserPage(user: user), // 传递参数
                  ),
                );
              },
            ),
            // 按钮：打开一个未知路由
            ElevatedButton(
              child: const Text("打开未知路由"),
              onPressed: () => Navigator.of(context).pushNamed("/unknown"),
            ),
          ],
        ),
      ),
    );
  }
}

// 页面 MyPage，显示传递的标题
class MyPage extends StatelessWidget {
  final String title;

  const MyPage({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Text(title); // 显示标题
  }
}

// 页面 MyOtherPage，显示固定文本
class MyOtherPage extends StatelessWidget {
  const MyOtherPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text("My Other Page"); // 显示固定文本
  }
}

// 页面 MyUserPage，显示用户信息
class MyUserPage extends StatelessWidget {
  final User user;

  const MyUserPage({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Text("user: ${user.name}, age: ${user.age}"); // 显示用户的姓名和年龄
  }
}

// 用户类 User，包含姓名和年龄
class User {
  final String name;
  final int age;

  User(this.name, this.age);
}
```