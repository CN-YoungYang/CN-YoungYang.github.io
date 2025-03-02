# 有状态无状态组件

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

在Dart的Flutter框架中，组件(widgets)是构建用户界面的基本构建块，它们分为有状态(stateful)和无状态(stateless)两种类型

在Flutter中，选择使用StatelessWidget还是StatefulWidget取决于你的组件是否需要管理状态。如果组件的行为不依赖于可以改变的状态，那么使用StatelessWidget；如果组件的行为依赖于状态，那么使用StatefulWidget。

## StatelessWidget (无状态组件)
- **定义:** StatelessWidget是不包含状态的组件,它在任何时候都是相同的,不会因为状态的改变而重新构建.
- **用途:** 用于那些不会改变状态的简单组件，例如显示静态文本、图片或任何不随用户交互变化的UI元素。
- **特点:** 
    - 构建函数build不会接收任何状态参数.
    - 每次框架需要重建UI时,都会调用build方法,因此StatelessWidget应该尽可能轻量,避免复杂逻辑.
    - 没有与之关联的状态管理.

```dart
class MyStatelessWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text('I am a stateless widget');
  }
}
```

## StatefulWidget (有状态组件)
- **定义:** StatefulWidget是可以拥有和管理系统状态的组件,当状态改变时,可以通过调用setState来触发组件的重建.
- **用途:** 用于需要响应用户输入、处理数据变化或维护临时状态的组件,例如表单、列表视图或任何需要根据状态变化更新UI的组件.
- **特点:** 
    - 有一个与之关联的State对象,该对象包含状态数据和setState方法.
    - 可以通过State对象来响应事件和更新UI.
    - 通常比StatelessWidget更复杂,因为它们涉及到状态管理.

```dart
class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _incrementCounter,
      child: Text('You pressed me $_counter times'),
    );
  }
}
```

## 主要区别
StatelessWidget和StatefulWidget是Flutter中两种不同类型的组件，它们的主要区别在于是否能够存储状态以及如何响应状态变化。

1. **状态管理：**
    - StatelessWidget：不能存储状态，每次构建都是全新的，没有记忆能力。适用于不随时间变化的静态组件。
    - StatefulWidget：能够存储状态，并且可以在状态变化时更新UI。适用于需要根据用户交互或其他因素改变状态的动态组件。
2. **生命周期：**
    - StatelessWidget：没有复杂的生命周期，每次框架需要重建界面时，都会调用其build方法。
    - StatefulWidget：有一个与之关联的State对象，该对象有自己的生命周期，包括创建、更新和销毁。
3. **性能：**
    - StatelessWidget：通常性能更好，因为它们不需要管理状态，构建成本较低。
    - StatefulWidget：可能涉及到更多的性能考虑，因为状态管理可能会导致不必要的重建。
4. **使用场景：**
    - StatelessWidget：适用于不需要交互或状态的简单组件，如显示文本、图片等。
    - StatefulWidget：适用于需要交互或状态管理的复杂组件，如按钮、表单、列表等。
5. **构建方法：**
    - StatelessWidget：只有一个build方法，用于构建组件的UI。
    - StatefulWidget：有一个createState方法，用于创建与之关联的State对象，以及一个build方法，用于构建组件的UI。
6. **热重载：**
    - StatelessWidget：在开发过程中，热重载通常更快，因为它们不需要重新创建状态。
    - StatefulWidget：热重载可能会更复杂，因为状态的重新创建可能会导致状态丢失。
7. **重建机制：**
    - StatelessWidget：当父组件重建时，StatelessWidget也会重建。
    - StatefulWidget：可以通过AutomaticKeepAliveClientMixin和RepaintBoundary等技术来控制重建行为，以优化性能。

总结来说，StatelessWidget适用于静态内容，而StatefulWidget适用于需要管理状态的动态内容。选择使用哪种类型的组件取决于你的具体需求和组件的行为。