# 数值

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 数值类型

### int
整数类型,其取值通常位于-253和253之间  
[int class](https://api.dart.dev/stable/2.17.1/dart-core/int-class.html)
```dart
int a = 123;
```

### double
64-bit (双精度) 浮点数  
[double class](https://api.dartlang.org/stable/2.17.1/dart-core/double-class.html)
```dart
double a = 1.1;
```

### num
int 和 double 都是 num 的子类  
[num class](https://api.dartlang.org/stable/2.17.1/dart-core/num-class.html)
```dart
num a = 1;
num b = 1.1;
```

## 十进制、十六进制
```dart
int a = 1001;  // 十进制
int b = 0xf;  // 十六进制 - 15
String toTen = b.toRadixString(10);  // 将十六进制转换为十进制

print(toTen);  // 输出 15
```

## 科学计数法
```dart
num a = 2e3;
print(a);  // 输出 2000
```

## 数值转换
字符串转数字
```dart
int a = int.parse("123");
double b = double.parse('1.223');

print('$a, $b');  // 输出 123, 1.223
```

数字转字符串
```dart
String a = 123.toString();
String b = 1.223.toString();

print('$a, $b');  // 输出 123, 1.223
```

double -> int
```dart
double a = 1.8;
int b = a.toInt();

print(b);  // 输出 1
```

## 位运算
[二进码十进数 8421 码](https://zh.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E7%A2%BC%E5%8D%81%E9%80%B2%E6%95%B8)

### & 位与运算
同时为1才是1
```dart
二进制      十进制
1 0 1 0     10
0 0 1 0     2
--------
0 0 1 0     2

var a = 10;
var b = 2;
print(a & b); // 输出 2
```

### | 位或运算
有一个1就是1
```dart
二进制      十进制
1 0 1 0     10
0 0 1 0     2
--------
1 0 1 0     10

var a = 10;
var b = 2;
print(a | b); // 输出 10
```

### ~ 位非运算
二进制数逐位进行逻辑非运算
```dart
0 1 0 0 1       最高位代表正负 0非负数,1负数
0 0 1 1 0       补码
1 1 0 0 1       取反
1 1 0 1 0       加1
--------
1 1 0 1 0       -10

print(~9); // 输出 -10
```

### ^ 异或
不相同的才出 1
```dart
1 0 1 0     10
0 0 1 0     2
--------
1 0 0 0     8

print(10 ^ 2); // 输出 8
```
计算机中可以用来取反色

### << 左移运算符
进制向左移N位数
```dart
0 0 0 1          1 二进制
0 0 1 0          左移一位 2
0 1 0 0          左移二位 4
1 0 0 0          左移三位 8

print( 1 << 1 );  // 输出2
print( 1 << 2 );  // 输出4
print( 1 << 3 );  // 输出8
```

### >> 右移运算符
进制向左移N位数
```dart
1 0 0 0          8 二进制
0 1 0 0          右移一位 4
0 0 1 0          右移两位 2
0 0 0 1          右移三位 1

print( 8 >> 1 );  // 输出8
print( 8 >> 2 );  // 输出4
print( 8 >> 3 );  // 输出2
```