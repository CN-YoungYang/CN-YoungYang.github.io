# 枚举 enum

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


`enum` 是一种特殊的类, 是为了替代常量来定义一个更有语义的类型。  
成员本身是常量，并且它们是枚举类型的实例。  
每个枚举成员都是隐式地声明为 final 的，这意味着它们的值在初始化后不能被改变。

## 定义
```
// 定义颜色枚举值
enum ColorType{
  none,
  red,
  blue,
  green
}

/// 枚举
/// 
/// 枚举的作用,是为了替代常量来定义一个更有语义的类型
void main(List<String> args) {
  // 1 接收输入值 blue 字符串
  var input = 'blue';

  // 2 将输入值转换为 ColorType 枚举类型
  var color = ColorType.none;

  if (input == "red") {
    color = ColorType.red;
  } else if (input == "green") {
    color = ColorType.green;
  } else if (input == "blue") {
    color = ColorType.blue;
  }

  //枚举存在index属性,记录是枚举里面第一个常量
  print(color.index);

  // 3 switch 判断，打印输出
  switch (color) {
    case ColorType.red:
      print(ColorType.red);
      break;
    case ColorType.green:
      print(ColorType.green);
      break;
    case ColorType.blue:
      print(ColorType.blue);
      break;
    default:
      print(ColorType.none);
  }

}

2
ColorType.blue
```

## 使用场景
```
// 定义一个枚举来表示用户账户的状态
enum AccountStatus {
  active,
  disabled,
  pending
}

// 定义一个类来表示用户账户
class Account {
  String username;
  AccountStatus status;

  Account(this.username, this.status);

  // 方法来激活账户
  void activate() {
    status = AccountStatus.active;
    print('$username account is now active.');
  }

  // 方法来禁用账户
  void disable() {
    status = AccountStatus.disabled;
    print('$username account is now disabled.');
  }

  // 方法来设置账户为待审核状态
  void setPending() {
    status = AccountStatus.pending;
    print('$username account is now pending.');
  }

  // 方法来显示账户的当前状态
  void printStatus() {
    switch (status) {
      case AccountStatus.active:
        print('$username account is active.');
        break;
      case AccountStatus.disabled:
        print('$username account is disabled.');
        break;
      case AccountStatus.pending:
        print('$username account is pending.');
        break;
    }
  }
}

void main() {
  // 创建一个新的账户实例
  Account myAccount = Account('user123', AccountStatus.pending);

  // 打印账户的初始状态
  myAccount.printStatus();

  // 激活账户
  myAccount.activate();

  // 打印账户的状态
  myAccount.printStatus();

  // 禁用账户
  myAccount.disable();

  // 打印账户的状态
  myAccount.printStatus();

  // 将账户设置为待审核状态
  myAccount.setPending();

  // 打印账户的状态
  myAccount.printStatus();
}


user123 account is pending.
user123 account is now active.
user123 account is active.
user123 account is now disabled.
user123 account is disabled.
user123 account is now pending.
user123 account is pending.
```