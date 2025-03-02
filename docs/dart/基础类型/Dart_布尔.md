# 布尔

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## bool
### 声明
只有两个对象是布尔类型: true 和 false  
这两个对象也都是编译时的常量

[bool class](https://api.dartlang.org/stable/2.17.1/dart-core/bool-class.html)

```dart
bool a;
print(a);
```

### 判断
只有布尔类型才能参与判断
```dart
String name = 'ducafecat';
if( name ) {  // 报错,因为不是布尔类型
    print('this is name');
}
```

### assert断言
验证布尔条件是否为真。如果条件为假，则断言失败，并抛出一个AssertionError异常。
```dart
var name = '';
assert(name.isEmpty);  // 正常运行
assert(name.isNotEmpty);  // 抛出异常
```
> 断言只在检查模式下运行有效，如果在生产模式 运行，则断言不会执行。

## 逻辑运算符
### `&&` 逻辑与
都为真则是真
```dart
bool a = true;
bool b = true;
bool c = false;
bool d = false;
print('${a&&b} ${b&&c} ${c&&d}');  // 输出 true false false
```

### `||` 逻辑或
有一个真就是真
```dart
bool a = true;
bool b = true;
bool c = false;
bool d = false;
print('${a||b} ${b||c} ${c||d}');  // 输出 true true false
```

### `!` 逻辑非
反转真假
```dart
bool a = true;
bool b = false;
print('${!a} ${!b}');  // 输出 false true
```

## 关系运算符
### `==` 等于
```dart
if( "String" == "String" ) {
    print("两个字符串相等");
}
```

### `!=` 不等于
```dart
if( "张三" != "李四" ) {
    print("张三不等于李四");
}
```

### `>` 大于
```dart
if( 2 > 1 ) {
    print("2大于1");
}
```

### `>=` 大于等于
```dart
if( 2 >= 2 ) {
    print("2大于等于2");
}
```

### `<` 小于
```dart
if( 1 < 2 ) {
    print("1小于2");
}
```

### `<=` 小于等于
```dart
if( 2 <= 2 ) {
    print("2小于等于2");
}
```