# 字符串

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


## String
### 字符串赋值
单双引号,目前影响的是转义
```dart
String str1 = "Young \' Yang1";
String str2 = 'Young \" Yang2';

print(str1);  // Young ' Yang1
print(str2);  // Young " Yang2
```

### 字符串模板
将一个字符串变量/表达式嵌入到另一个字符串内
```dart
String str1 = "Young";
String Str2 = "Yang";
int x = 1;
int y = 2;

print("我是$str1 $Str2, 我知道 $x + $y = ${x+y} ");
// 我是Young Yang, 我知道 1 + 2 = 3
```

### 字符串拼接
#### `+` 加号拼接
```dart
String str = "Young" + " Yang";
// Young Yang
```
#### ` `空格拼接
必须是两个字符串 不能是变量
```dart
String str = "Young" " Yang";
// Young Yang
```

### 多行字符串
使用`'''`或者`"""`包裹起来
```dart
String str = '''Young
    Yang
HaHa~
''';

print(str);

Young
    Yang
HaHa~
```

### raw字符串
使用`r`创建原始raw字符串-转义字符等特殊字符会输出出来，而不会自动被转义
```dart
String str1 = 'Young \" Yang';
String str2 = r'Young \" Yang';

print(str1);  // Young " Yang
print(str2);  // Young \" Yang
```


## 常用的字符串方法
### 判断字符串是否为空
`isEmpty` 和 `isNotEmpty`
```dart
String Str = "YoungYang";

print(Str.isEmpty);  // false
print(Str.isNotEmpty);  // true
```

### 字符串搜索
```dart
String Str = 'My Name Is YoungYang~';

print(Str.contains('YoungYang')); // true
print(Str.startsWith('My'));  // true
print(Str.endsWith('Yang'));  // false
print(Str.indexOf('Y'));  // 11
print(Str.lastIndexOf('Y'));  // 16
```

### 字符串转换
```dart
print(int.parse('3'));  // 3
print(double.parse('3.1415926'));  // 3.1415926
print(33.toString());  // 33
print(3.34.toString());  // 3.34
print(3.12345.toStringAsFixed(3));  // 3.123
```


### `substring` 提取字符串
String substring(int start, [int? end]);  
字符串截取的范围是 [start，end)，也就是含头不含尾  
当只传了 start 参数时，表示从 start 索引处截取到字符串末尾
```dart
String Str = 'My Name Is YoungYang~';

print( Str.substring(0,5) );   // My Na
print( Str.substring(11) );    // YoungYang~
```

### `split` 分割字符串
#### 字符串
```dart
String Str = 'My Name Is YoungYang~';

print( Str.split(' ') );   // [My, Name, Is, YoungYang~]
print( Str.split(' ').length );  // 4
print( Str.split(' ')[3] );  // YoungYang~
```
#### 正则表达式
```dart
String Str = "abba";

print(Str.split(new RegExp(r"b*")));  // [a, a]
```

### 大小写转换
`toLowerCase` 和 `toUpperCase`
```dart
String Str = 'My Name Is YoungYang~';

print( Str.toLowerCase() );  // my name is youngyang~
print( Str.toUpperCase() );  // MY NAME IS YOUNGYANG~
```

### 字符串替换
```dart
String Str = 'My Name Is YoungYang~';

print(Str.replaceAll("Y","S"));  // 全部替换符合条件的
print(Str.replaceFirst("Y","S"));  // 替换第一个符合条件的
print(Str.replaceFirst("Y","S",3));  // 从index=3开始 替换第一个符合条件的
print(Str.replaceRange(0, 7, "HaHa"));  // 索引范围替换

My Name Is SoungSang~
My Name Is SoungYang~
My Name Is SoungYang~
HaHa Is YoungYang~
```

### 去除空格
```dart
String Str = '   My Name Is YoungYang~   ';

print(Str.trim());         // 两端
print(Str.trimLeft());     // 左侧
print(Str.trimRight());    // 右侧

My Name Is YoungYang~
My Name Is YoungYang~   
   My Name Is YoungYang~
```


### 补齐长度
`padLeft` 和 `padRight`
```dart
String Str = 'YoungYang';

print(Str.padLeft(16));
print(Str.padLeft(16,"~"));
print(Str.padRight(16));
print(Str.padRight(16,"~"));

       YoungYang
~~~~~~~YoungYang
YoungYang       
YoungYang~~~~~~~
```

### `compareTo` 字符串先后比较
```dart
print( '2020'.compareTo('2022'));  // -1
print( '2021'.compareTo('2021'));  // 0
print( '2020-10-28'.compareTo('2020-10-20'));  // 1
```

### 字符串创建
```dart
StringBuffer sb = new StringBuffer();
sb..write('My ')
..write('Name')
..write(' Is ')
..writeAll(['Young', 'Yang', '!!!']);

print(sb.toString());
print("字符串缓冲区的哈希码: ${sb.hashCode.toString()}");
print("字符串缓冲区是否为空: ${sb.isEmpty.toString()}");
print("字符串缓冲区是否不为空: ${sb.isNotEmpty.toString()}");
print("返回字符串缓冲区累积内容的长度: ${sb.length.toString()}");
print("返回对象运行时的类型: ${sb.runtimeType}");
sb.clear(); // 清除字符串缓冲区
print("清除字符串缓冲区后是否为空: ${sb.isEmpty.toString()}");

My Name Is YoungYang!!!
字符串缓冲区的哈希码: 86634717
字符串缓冲区是否为空: false
字符串缓冲区是否不为空: true
返回字符串缓冲区累积内容的长度: 23
返回对象运行时的类型: StringBuffer
清除字符串缓冲区后是否为空: true
```