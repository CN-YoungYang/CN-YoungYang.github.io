# 接口 interface

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


Dart 没有接口

[https://dart.dev/samples#interfaces-and-abstract-classes](https://dart.dev/samples#interfaces-and-abstract-classes)


在 Dart 语言中, 接口(Interface)是一种定义类之间合约的方式.  
不同于一些其他编程语言, Dart 并没有 interface 关键字.  
相反, 所有的类都隐式地定义了一个接口.  
这意味着任何类都可以被实现(implemented)作为接口.  
在 Dart 中, 通常使用抽象类(abstract class)来定义接口, 然后通过 implements 关键字来实现这个接口.


## 接口方式使用
**在实现接口时, 需要为接口中的所有方法提供实现.**
- 定义抽象类-人
```dart
abstract class IPerson {
  String name;
  int age;

  IPerson(this.name, this.age);

  String info() {
    return 'Name: $name, Age: $age';
  }
}
```
> 接口用途的抽象类 请用字母 `I` 开头 , 如 `IPhone`

- 定义老师
```dart
class Teacher implements IPerson {
  @override
  String name;

  @override
  int age;

  Teacher(this.name, this.age);

  @override
  String info() {
    return 'Teacher -> Name: $name, Age: $age';
  }
}
```

- 定义学生
```dart
class Student implements IPerson {
  @override
  int age;

  @override
  String name;

  Student(this.name, this.age);

  @override
  String info() {
    return 'Student -> Name: $name, Age: $age';
  }
}
```

- 定义打印信息方法
```dart
void makePersonInfo(IPerson user) => print(user.info());
```

- 实例化
```dart
void main(List<String> args) {
  var t = Teacher('YoungYang', 25);
  makePersonInfo(t);

  var s = Student('SoYang', 18);
  makePersonInfo(s);
}

Teacher -> Name: YoungYang, Age: 25
Student -> Name: SoYang, Age: 18
```

## 履行多接口
- 定义学校抽象类
```dart
abstract class ISchool {
  int grade;

  ISchool(this.grade);

  String schoolInfo() {
    return 'Grade: $grade';
  }
}
```

- 学生 多接口
```dart
class Student implements IPerson, ISchool {
  @override
  int age;

  @override
  String name;

  @override
  int grade;

  Student(this.name, this.age, this.grade);

  @override
  String info() {
    return 'Student -> Name: $name, Age: $age';
  }

  @override
  String schoolInfo() {
    return 'School -> Name: $name, Age: $age, Grade: $grade';
  }
}
```

- 定义打印信息的方法
```dart
void makePersonInfo(IPerson user) => print(user.info());
void makeSchoolInfo(ISchool user) => print(user.schoolInfo());
```

- 实例化
```dart
void main(List<String> args) {
  var t = Teacher('YoungYang', 25);
  makePersonInfo(t);

  var s = Student('SoYang', 18, 5);
  makePersonInfo(s);
  makeSchoolInfo(s);
}

Teacher -> Name: YoungYang, Age: 25
Student -> Name: SoYang, Age: 18
School -> Name: SoYang, Age: 18, Grade: 5
```

## 从一个普通类履行接口
```dart
class Phone {
  void startup() {
    print('开机');
  }

  void shutdown() {
    print('关机');
  }
}

class AndroidPhone implements Phone {
  @override
  void startup() {
    print('AndroidPhone 开机');
  }

  @override
  void shutdown() {
    print('AndroidPhone 关机');
  }
}

void main() {
  var p = AndroidPhone();
  p.startup();
  p.shutdown();
}
```

> Dart 可以从一个普通的类履行接口, 但是通常使用抽象类(abstract class)来定义接口