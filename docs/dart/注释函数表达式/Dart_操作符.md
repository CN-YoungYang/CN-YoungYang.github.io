# 操作符 expr

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

| 描述 | 操作符 |
| ---- | ---- |
| 后缀操作 | `expr++` `expr--` `expr()` `expr[]` `expr.` `expr?.` |
| 前缀操作 | `-expr` `!expr` `~expr` `++expr` `--expr` |
| 乘除 | `*` `/` `%` `~/` |
| 加减 | `+` `-` |
| 位移 | `<<` `>>` |
| 按位与 | `&` |
| 按位异或 | `^` |
| 按位或 | `|` |
| 类型操作 | `>=` `>` `<=` `<` `as` `is` `is!` |
| 相等 | `==` `!=` |
| 逻辑与,或,非 | `&&` `||` `!` |
| 是为为空 | `??` |
| 三目运算 | `expr1 ? expr2 : expr3` |
| 级联 | `..` |
| 赋值 | `=` `*=` `/=` `~/=` `%=` `+=` `-=` `<<=` `>>=` `&=` `^=` `|=` `??=` |

> 优先级顺序 `上面左边` 优先级高于 `右边下面`

## 算术操作符
```dart
num a = 5;
num b = 2;

print('a + b = ${a+b}');
print('a - b = ${a-b}');
print('-a = ${-a}');
print('a * b = ${a*b}');
print('a / b = ${a/b}');
print('a ~/ b = ${a~/b}');
print('a % b = ${a%b}');

a + b = 7
a - b = 3
-a = -5
a * b = 10
a / b = 2.5
a ~/ b = 2
a % b = 1
```
## 相等相关的操作符
返回值是布尔值
```dart
num a = 5;
num b = 2;

print( 'a == b 是 ${a == b}');
print( 'a != b 是 ${a != b}');
print( 'a > b 是 ${a > b}');
print( 'a >= b 是 ${a >= b}');
print( 'a < b 是 ${a < b}');
print( 'a <= b 是 ${a <= b}');

a == b 是 false
a != b 是 true
a > b 是 true
a >= b 是 true
a < b 是 false
a <= b 是 false
```

## 类型判定操作符
| 操作符 | 解释 |
| ---- | ---- |
| as | 类型转换 |
| is | 如果对象是指定的类型返回 True |
| is! | 如果对象不是指定的类型返回 True |
```dart
int a = 123;
String b = 'ducafecat';
String c = 'abc';

// as 先检测 变量类型是不是，然后再调用的一种简写
print( (a as Object).runtimeType );  // int
print( b is String );  // true
print( c is! String ); // false
```

## 条件表达式
### condition ? expr1 : expr2
如果 condition 是 true，执行 expr1 (并返回执行的结果)； 否则执行 expr2 并返回其结果。
```dart
bool isFinish = true;
String txtVal = isFinish ? 'yes' : 'no';

print(txtVal);  // yes
```

### expr1 ?? expr2
如果 expr1 是 non-null，返回其值； 否则执行 expr2 并返回其结果。
```dart
bool? isFinish;
// isFinish = isFinish ?? false;    与下面等价
isFinish ??= false;

print(isFinish);  // false
```

## 位和移位操作符
[位运算](../基础类型/Dart_数值.md#位运算)

## 级联操作符
`..` 可以在同一个对象上 连续调用多个函数以及访问成员变量。
```dart
StringBuffer sb = StringBuffer();
sb
..write('Hello')
..write(' Word')
..write('\n')
..writeln('Young')
..writeln('Yang');

print(sb);

Hello Word
Young
Yang
```
## 其他操作符
| 操作符 | 解释 |
| ---- | ---- |
| `()` | 使用方法 代表调用一个方法 |
| `[]` | 访问 List 访问 list 中特定位置的元素 |
| `.` | 访问 Member 访问元素，例如 foo.bar 代表访问 foo 的 bar 成员 |
| `?.` | 条件成员访问 和 . 类似，但是左边的操作对象不能为 null，例如 foo?.bar 如果 foo 为 null 则返回 null，否则返回 bar 成员 |
```dart
StringBuffer Str = new StringBuffer();
Str.write('YoungYang');
print( Str.toString()[0] );  // Y
print( Str.length  );  // 9 

Map Map1 = {'Name': 'Yang', 'Web': 'www.59young.com'};
// 有报错,但是不影响执行
print(Map1?.length);  // 2
```
