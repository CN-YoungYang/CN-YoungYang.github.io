# 继承 extends

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

`extends` 关键字用于实现类之间的继承关系. 使用 `extends`, 你可以创建一个新类, 它继承了另一个类的属性和方法. 这使得代码复用和扩展现有功能变得更加简单和直接.

## 实现继承
```dart
// 原始类
class Phone {
    void startup(){
        print("手机开机");
    }

    void shutdown(){
        print("手机关机");
    }
}

// 安卓手机继承手机
class AndroidPhone extends Phone{
    @override
    void startup(){
        print("安卓手机开机");
    }

}
void main(List<String> args) {
    var phone = AndroidPhone();
    phone.startup();
    phone.shutdown();
}

开机
关机
```

## 父类调用
```dart
// 原始类
class Phone {

    void Hello(){
        print('Hello Word');
    }

    void startup(){
        print("手机开机");
    }

    void shutdown(){
        print("手机关机");
    }
}

// 安卓手机继承手机
class AndroidPhone extends Phone{
    
    @override
    void startup(){
        // 调用父类的方法
        super.Hello();
        print("安卓手机开机");
    }

}

/// super 对象可以访问父类
void main(List<String> args) {
    var phone = AndroidPhone();
    phone.startup();
    phone.shutdown();
}

Hello Word
安卓手机开机
手机关机
```
> super 对象可以访问父类

## 调用父类构造
```dart
// 原始类
class Phone {
    int number;
    
    Phone(this.number);

    void Hello(){
        print('Hello ${number}');
    }

    void startup(){
        print("手机开机");
    }

    void shutdown(){
        print("手机关机");
    }
}

// 安卓手机继承手机
class AndroidPhone extends Phone{
    
    int code;

    // 调用父类的构造函数
    AndroidPhone(int number) :  code = number,
                                super(number * 2 );
    @override
    void startup(){
        print("输入号码: ${code}");
        super.Hello();
        print("安卓手机开机");
    }

}

/// 可调用父类的 构造函数
void main(List<String> args) {
    var phone = AndroidPhone(123321);
    phone.startup();
    phone.shutdown();
}

输入号码: 123321
Hello 246624
安卓手机开机
手机关机
```
> 可调用父类的 构造函数

## 重写超类函数
```dart
class Mobile {
    int number;
    Mobile(this.number);
}

class AndroidPhone extends Mobile {
    AndroidPhone(int number) : super(number);

    // 没有这个方法运行的函数
    @override
    void noSuchMethod(Invocation mirror) {
        print('被重写 noSuchMethod');
    }
}

/// 在重写的函数上加修饰符 @override
void main() {
    dynamic p = AndroidPhone(12345678);
    p.showNumber111();
}


被重写 noSuchMethod
```
> 在重写的函数上加修饰符 `@override`

## 继承抽象类的问题
```dart
abstract class IPhone {
  void startup() {
    print('开机');
  }

  // 下面方法推荐 用 接口方式 调用, 如果用继承方式它会报错,因为没有被实现
  void shutdown();
}

class AndroidPhone extends IPhone {
  @override
  void startup() {
    super.startup();
    print('AndroidPhone 开机');
  }

  @override
  void shutdown() {
    // shutdown方法未被实现,是一个抽象方法,执行会报错
    // super.shutdown();
    print('AndroidPhone 关机');
  }
}

void main() {
  var p = AndroidPhone();
  p.startup();
  p.shutdown();
}

开机
AndroidPhone 开机
AndroidPhone 关机
```
> 抽象类中只定义抽象函数，实例化访问会报错