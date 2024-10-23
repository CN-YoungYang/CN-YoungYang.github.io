# 抽象 abstract

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

abstract 关键字用于定义抽象类和抽象成员（方法、属性、运算符等）。

抽象类是不能被实例化的类，它通常用作基类，为派生类提供模板。抽象类可以包含抽象成员，也可以包含具体实现的成员。

## 定义
普通类前加 abstract 就是抽象类
```dart
abstract class Person {
    String name = 'Young Yang';
    void printName() {
        print(name);
    }
}
```

## 不能直接 new 实例化
```dart
var p = Person();
p.printName();

Abstract classes can't be instantiated.
Try creating an instance of a concrete subtype.
```

## 继承方式使用
定义
```dart
class Father extends Person {

}

class Student extends Person {
    void printName(){
        print('Student: $name');
    }
}
```
实例
```dart
var F = Father();
F.printName();

var S = Student();
S.printName();

Young Yang
Student: Young Yang
```

## 接口方式使用
定义
```dart
class Teacher implements Person {
    @override
    String name;

    Teacher(this.name);

    @override
    void printName() {
        print('Teacher: $name');
    }
}
```
实例
```dart
var T = Teacher("Yang Yang");
T.printName();

Teacher: Yang Yang
```

## 继承和接口的区别
- 如果要复用抽象类里面的方法，并且要用抽象方法约束子类的话，就用extends继承抽象类。
- 如果只是把抽象类当做标准的话，就用implements实现抽象类。