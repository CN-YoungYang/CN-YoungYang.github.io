# 静态 static

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

static 关键字用于定义类的静态成员，这些成员不属于类的任何特定实例，而是属于类本身

## 定义、使用
### static 定义
#### 声明
```dart
class People {
  static String name = 'YoungYang';
}
```
#### 调用
```dart
print(People.name);

YoungYang
```
### 函数内部访问
#### 声明
```dart
class People {
  static String name = 'YoungYang';
  void show() {
    print(name);
  }
}
```
#### 调用
```dart
People().show();

YoungYang
```


## 静态变量
静态变量是使用 static 关键字声明的类级别的变量。所有相同类的实例共享同一个静态变量的实例。  
静态变量可以通过外部直接访问,不需要将类实例化
```dart
class Point {
  int x;
  int y;
  static int _counter = 0;
  Point({this.x = 0, this.y = 0}) {
    _counter++;
  }
}
void main() {
  var p1 = new Point(x: 10, y: 20);
  var p2 = new Point(x: 100, y: 200);
  print(Point._counter); // 输出 2
}
```
在这个例子中，每次创建 Point 类的新实例时，_counter 都会增加 1。由于 _counter 是静态的，它通过类名 Point 来访问，而不是通过类的实例 
。


## 静态方法
静态方法也是使用 static 关键字声明的，它们属于类而不是类的任何特定实例。  
静态方法可以访问类的静态成员，但不能访问类的非静态成员。
实例化后的类也可以访问该静态变量。
```dart
class Point {
  int x;
  int y;
  static int _counter = 0;
  Point({this.x = 0, this.y = 0}) {
    _counter++;
  }
  static void resetCounter() {
    _counter = 0;
  }
}
void main() {
  var p1 = new Point(x: 10, y: 20);
  Point.resetCounter();
  print(Point._counter); // 输出 0
}
```
在这个例子中，resetCounter 方法是一个静态方法，可以通过类名 Point 直接调用，而不需要创建类的实例 
。

## 注意事项
- 静态成员不能访问非静态成员，因为非静态成员属于类的特定实例，而静态成员属于类本身。
- 非静态成员可以访问静态成员，因为静态成员是类级别的，所有实例都可以访问。
- 类中的常量需要使用 static const 声明，这样的常量在编译时就确定了值，并且不能被修改。

## 业务场景
使用 static 关键字可以方便地创建和管理类级别的变量和方法，使得代码更加模块化和易于维护。

```dart
/// 图片 assets
class AssetsImages {
  static const guiDaoJpg = 'assets/images/GuiDao.jpg';
  static const youngYangJpg = 'assets/images/YoungYang.jpg';
}
```