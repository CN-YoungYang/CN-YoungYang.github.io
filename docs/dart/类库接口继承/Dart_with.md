# with 多继承

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

Dart 提供了 with 关键字来实现类似于多继承的功能。with 关键字允许你将一个或多个混入([mixin](https://dart.cn/language/mixins/))应用到类定义中，从而为类添加额外的方法和属性。

混入是一种特殊类型的类，它只包含方法和属性的声明，没有构造函数和实例变量的实现。混入不能被实例化，只能被其他类使用 with 关键字组合。

## 多继承 with
```dart
// 定义手机
mixin Phone{
    void call(){
        print('这是手机');
    }
}

// 定义安卓
mixin Android{
    void playStore(){
        print('谷歌应用商店');
    }
}

// 定义苹果
mixin Ios{
    void appleStore(){
        print('苹果应用商店');
    }
}

// with 混入
class XiaoMi with Phone, Android, Ios {}

void main(List<String> args) {
    var p = XiaoMi();
    p.call();
    p.playStore();
    p.appleStore();
}

这是手机
谷歌应用商店
苹果应用商店
```
> 采用 `with ... , .... , ...` 方式 mixin 入多个类功能

## 函数重名冲突
```dart
// 定义手机
mixin Phone{
    void call(){
        print('这是手机');
    }
}

// 定义安卓
mixin Android{
    void call(){
        print('这是安卓手机');
    }
}

// 定义苹果
mixin Ios{
    void call(){
        print('这是苹果手机');
    }
}

// with 混入
class XiaoMi with Phone, Android, Ios {}

void main(List<String> args) {
    var p = XiaoMi();
    p.call();
}

这是苹果手机
```
> 可以发现后面的覆盖了前面的内容


## mixin不能有构造函数
```dart
// 定义手机
mixin Phone{
    // 此处报错
    Phone();
}

// with 混入
class XiaoMi with Phone {}

void main(List<String> args) {
    var p = XiaoMi();
}

Mixins can't declare constructors.
```
> mixin 中不能定义 constructor(构造函数)

## mixin on 限定条件
```dart
// 定义手机
mixin Phone{
    void call(){
        print('这是手机');
    }
}

// 定义Android 用 on 限定是 Phone
mixin Android on Phone{
    void playStore(){
        print('谷歌应用商店');
    }

    @override
    void call(){
        print('这是安卓手机');
    }
}

// with 混入时候，必须先 Phone 才行
class XiaoMi with Phone, Android {}

void main(List<String> args) {
    var p = XiaoMi();
    p.call();
    p.playStore();
}

这是安卓手机
谷歌应用商店


// 错误的混入
class XiaoMi with Android {}

'Android' can't be mixed onto 'Object' because 'Object' doesn't implement 'Phone'.
Try extending the class 'Android'.
```
