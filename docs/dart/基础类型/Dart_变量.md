# 变量

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)


## 弱类型

### var
如果没有初始值,则可以变成任何类型。  
一旦存在初始值,则类型确定,不能改变成其他类型
```dart
var a;
a = 'Yang';
a = 95;
a = true;
a = {'key': 'val123'};
a = ['abc'];
print(a);
// 输出结果['abc']
```
```dart
var a = 'Yang';
a = 95; // 类型不一致,会报错
```

### Object
动态任意类型,可以赋值任何类型  
编译阶段会被检查类型
```dart
Object a = 'Young';
a = 123;
a = [2222];
a.p(); // 编辑器会提示这里报错
```

### dynamic
动态任意类型,可以赋值任何类型  
编译阶段不检查检查类型
```dart
Object a = 'Young';
a = 123;
a = [2222];
a.p(); // 编辑器不会提示这里报错,运行的时候才会报错
```

## 强类型
声明后,类型被锁定,无法修改

| 类型 | 说明 |
| ---- | ---- |
| num | 数字 |
| int | 整型 |
| double | 浮点 |
| bool | 布尔 |
| String | 字符串 |
| StringBuffer | 字符串 buffer |
| DateTime | 时间日期 |
| Duration | 时间区间 |
| List | 列表 |
| Set | 无重复列表 |
| Map | kv容器 |
| enum | 枚举 |
| Queue | 队列 |

```dart
String a = 'YoungYang';
int i = 123;
double d = 0.12;
bool b = true;
DateTime dt = new DateTime.now();
List l = [a, i, d, b, dt];
Set s = [a, i, d, b, dt, a, i, d, b, dt];
Map m = {'Usrname':'YoungYang','Password':'passwd123'};
```

## 默认值
变量声明后默认都是 `null`  
现在有空安全,变量默认不可空  
如果需要为空则申明的时候加?
```dart
var a;
String? s;
print(a);
assert(a == null);
```
> `assert` 检查点函数，如果不符合条件直接抛出错误并终止程序进程