# 常量

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

常量有两种 `final` 和 `const`

## 相同点

### 声明类型可以省略
```dart
final String a = 'Young';
final a = 'Young';

const String a = 'Young';
const a = 'Young';
```

### 赋值后无法修改
```dart
final a = 'Young';
a = "Yang"; // 报错

const a = 'Young';
a = 'Yang';  // 报错
```

### 不能使用var去申明
var会推导变量的类型,不是数据类型
```dart
final var a = 'Young'; // 报错

const var a = 'Young'; // 报错
```

## 不同点

### 赋值的时候不同
final 运行时赋值、可以先声明后赋值,只能被赋值一次  
const 编译时赋值、声明的同时就要赋值,只能被赋值一次
```dart
final dt = DateTime.now(); //正常

final dt  // 正常
dt = DateTime.now(); //正常 

const dt  // 报错
const dt = DateTime.now(); // 报错
const dt = "2024-10-10"; // 正常
```

### 不可变性可传递
final 值可以修改  
const 值不能修改
```dart
final List ls = [11, 22, 33];
ls[1] = 44;  // 正常

const List ls = [11, 22, 33];
ls[1] = 44;  // 报错
```

### 内存中重复创建
final 不存在内存复用
const 存在内存复用
```dart
final a1 = [11 , 22];
final a2 = [11 , 22];
print(identical(a1, a2));  // 显示flase

const a1 = [11 , 22];
const a2 = [11 , 22];
print(identical(a1, a2));  // 显示true
```
> `identical` 通过比较两个引用的是否是同一个对象判断是否相等

### 使用场景
#### final 成员变量初始
```dart
class PlaceholdWidget extends StatelessWidget {

  final String? assetImagePath;

  const PlaceholdWidget({
    Key? key,
    this.assetImagePath,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ...
  }
}
```
#### const 全局参数
```dart
// 本地存储key
static const storageFirstOpen = 'first_open';
static const storageLanguageCode = 'language_code';
static const storageThemeCode = 'theme_code';
static const storageToken = 'token';
static const storageProfile = 'profile';
```