# 类 class

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

类是面向对象编程的核心概念，它允许你创建自定义类型以及封装数据和功能。

## 定义、使用
```dart
class Point{

}
/// 定义和使用
void main(List<String> args) {
    var p = new Point();
    print( p );
}
```

## 构造函数
```dart
class Point{
    num x,y;

    // 构造函数
    Point(this.x,this.y);

    @override
    String toString(){
        return '覆盖toString方法:${x},${y}';
    }
}

/// 定义和使用
void main(List<String> args) {
    var p = new Point(10,20);

    print(p.x);
    print(p.y);
    print(p.toString());
}

10
20
覆盖toString方法:10,20
```

## 初始化列表
```dart
class Point{
    num x,y;
    Map origin1, origin2;

    Point(this.x,this.y)
      : origin1 = {'x': x, 'y': y},
        origin2 = {'x': x + 10, 'y': y + 10};
}

/// 定义和使用
void main(List<String> args) {
    // : 是个标识符, : 后面的由内部处理
    // 先赋值x,y。
    // 然后在根据x,y 给 origin1, origin2 赋值
    var p = new Point(10,20);

    print(p.x);
    print(p.y);
    print(p.origin1);
    print(p.origin2);
}

10
20
{x: 10, y: 20}
{x: 20, y: 30}
```

## 命名构造函数
```dart
class Point {
  num x, y;
  Map origin1, origin2;

  // 命名构造函数
  Point.fromJson(Map json)
      : x = json['x'],
        y = json['y'],
        origin1 = {'x': json['x'], 'y': json['y']},
        origin2 = {'x': json['x'] + 10, 'y': json['y'] + 10};
}

/// 定义和使用
void main(List<String> args) {

    // 将 json传入class, 然后内部处理赋值
    var p = new Point.fromJson({"x": 1, "y": 2});

    print(p.x);
    print(p.y);
    print(p.origin1);
    print(p.origin2);
}

1
2
{x: 1, y: 2}
{x: 11, y: 12}
```

## 重定向构造函数
```dart
class Point {
  num x, y;
  Map origin1, origin2;

  Point(this.x, this.y)
      : origin1 = {'x': x, 'y': y},
        origin2 = {'x': x + 10, 'y': y + 10};

  // 重定向构造函数
  Point.fromJson(Map json) : this(json['x'], json['y']);
}

/// 定义和使用
void main(List<String> args) {

    // 将 json由fromJson方法传入class
    // 然后将json解析后的值传入构造函数 -- 这里 this 是指向 class 内部的 Point
    // x,y获值
    // 然后在根据x,y 给 origin1, origin2 赋值
    var p = new Point.fromJson({"x": 1, "y": 2});

    print(p.x);
    print(p.y);
    print(p.origin1);
    print(p.origin2);
}

1
2
{x: 1, y: 2}
{x: 11, y: 12}
```

## callable
```dart
/// 如果 Dart 类实现了 call() 函数则可以当做方法来调用。
class IOSPhone {
  call(String num) {
    print('phone number is $num');
  }
}

main(List<String> args) {
  // dart 中可以使用对象后跟括号，表示调用该对象的 call 方法
  var phone = new IOSPhone();
  phone('911');
}

phone number is 911
```