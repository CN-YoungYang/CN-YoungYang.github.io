# 工厂函数 factory

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

使用 `factory` 关键字标识类的构造函数将会令该构造函数变为工厂构造函数

当你使用 `factory` 关键词时，你能控制在使用构造函数时，并不总是创建一个新的该类的对象，比如它可能会从缓存中返回一个已有的实例，或者是返回子类的实例。


- 工厂构造函数不需要每次构建新的实例，且不会自动生成实例,而是通过代码来决定返回的实例对象
- 工厂构造函数类似于 static 静态成员，无法访问 this 指针


## 减少重复实例对象
避免创建过多的重复实例，如果已创建该实例，则从缓存中拿出来。
```dart
class Phone {
    int _number;
    Phone(this._number);

    factory Phone.fromJson(Map<String, dynamic> json) =>
        Phone(json['number'] as int);

    // 如果不用工厂函数，就要用类静态方法，这样会有多余的实例对象
    // static fromJson(Map<String, dynamic> json) =>
    //     Phone(json['number'] as int);
        
    void call() {
        print('Calling $_number...');
    }
    }

    void main() {
    var p = Phone.fromJson({"number": 911});
    p.call();
}

Calling 911...
```
> 如果不用工厂函数，就要用类静态方法，这样会有多余的实例对象

## 单例模式
单例模式是一种确保一个类只有一个实例，并提供一个全局访问点来获取这个实例的设计模式。

- Dart 的单例模式实现通常使用私有构造函数和工厂构造函数。
- 单例模式确保了全局只有一个实例，但也要谨慎使用，因为它可能会导致代码难以测试和维护。
- 在多线程环境中，需要额外的同步机制来确保线程安全。

### 懒汉式单例（Lazy Singleton）
这种模式下，实例在第一次被需要时创建。
```dart
class Singleton {
  static Singleton? _instance;

  Singleton._internal() {}

  factory Singleton() {
    _instance ??= Singleton._internal();
    return _instance!;
  }
}

void main() {
    var p1 = Singleton();
    var p2 = Singleton();
    print(identical(p1, p2));
}

true
```

### 饿汉式单例（Eager Singleton）
这种模式下，实例在类加载时立即创建。
```dart
class Singleton {
  static final Singleton _instance = Singleton._internal();

  Singleton._internal();

  factory Singleton() {
    return _instance;
  }
}

void main() {
    var p1 = Singleton();
    var p2 = Singleton();
    print(identical(p1, p2));
}

true
```

### 单例模式与全局访问点
有时候，我们希望有一个全局的访问点来获取单例实例
```dart
class Singleton {
  static final Singleton _instance = Singleton._internal();

  Singleton._internal();

  factory Singleton() {
    return _instance;
  }

  static final Singleton instance = Singleton();
}

void main() {
    var p1 = Singleton();
    var p2 = Singleton();
    print(identical(p1, p2));
    print(identical(p1, Singleton.instance));
}

true
true
```

## 调用子类
调用子类的构造函数,这是一种常见的设计模式. 可以让抽象类同时可被实例化
```dart
abstract class Phone{
    void call();

    // factory定义工厂函数
    factory Phone(String type){
        switch (type){
            case "android":
                return Android();
            case "ios":
                return Ios();
            default:
                throw "The '$type' is not an animal";
        }
    }
}

class Android implements Phone{
    @override
    void call(){
        print('Android Calling...');
    }
}

class Ios implements Phone{
    @override
    void call(){
        print('Ios Calling...');
    }
}

// 工厂构造函数不需要每次构建新的实例，且不会自动生成实例,而是通过代码来决定返回的实例对象
// 工厂构造函数类似于 static 静态成员，无法访问 this 指针
void main(List<String> args) {
    var android = Phone('android');
    var ios = Phone('ios');
    android.call();
    ios.call();
}

Android Calling...
Ios Calling...
```