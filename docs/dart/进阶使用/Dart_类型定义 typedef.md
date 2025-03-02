# 类型定义 typedef

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

`typedef` 是一种定义函数类型别名的语法糖。它允许你为函数创建一个更简洁的名称，这样可以在代码中更清晰地表达函数的预期类型。

- 显示这个函数的输入输出
- 简化常用函数、类型定义
- `typedef` 给某一种特定的函数类型起了一个名字, 可以认为是一个类型的别名。
- 自己定义了一种数据类型, 不过这种数据类型是函数类型, 按照这种类型实例化后的对象, 就会具备类型检查

## typedef 定义使用
- 采用 `typedef`
```dart
// 可以理解为 MyPrint 是 void Function(String val)的别名
typedef MyPrint = void Function(String val);

class PrintClass {
  MyPrint print;
  PrintClass(this.print);
}

main() {
  PrintClass coll = PrintClass((String val) => print(val));
  coll.print('hello world');
}

hello world
```

- 未采用 `typedef`
```dart
class PrintClass {
  void Function(String val) print;
  PrintClass(this.print);
}

main() {
  PrintClass coll = PrintClass((String val) => print(val));
  coll.print('hello world');
}

hello world
```

## 简化常用类型定义
```dart
typedef MapStringAny = Map<String, dynamic>;
typedef MapAnyString = Map<dynamic, String>;
typedef MapStringString = Map<String, String>;
typedef MapStringDouble = Map<String, double>;
typedef MapDoubleString = Map<double, String>;
typedef MapDoubleDouble = Map<double, double>;
typedef MapIntInt = Map<int, int>;
typedef MapIntDouble = Map<int, double>;

typedef ListString = List<String>;
typedef ListInt = List<int>;
typedef ListDouble = List<double>;
typedef ListAny = List<dynamic>;

// typedef 给某一种特定的函数类型起了一个名字, 可以认为是一个类型的别名。
void main(List<String> args) {
    ListString p = [];
    p.add('a');
    p.add('b');
    p.add('c');

    print(p);

    MapStringAny m = {};
    m['a'] = 1;
    m['b'] = 2;
    m['c'] = 3;

    print(m);
}

[a, b, c]
{a: 1, b: 2, c: 3}
```