# 列表 List

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


## 初始
List 是一个有序列表
```
List l = [1,2,3];

print(l);

[1, 2, 3]
```

## 声明
### 自动
```
List<int> l = [];

l..add(1)
..add(2)
..add(3);

print(l);

[1, 2, 3]
```
### 定长
```
List l = List<int>.filled(3, 0);
l[0] = 1;
l[1] = 2;
l[2] = 3;
// l[3] = 4; 运行时报错,编译前不会提示错误

print(l);

[1, 2, 3]
```

### 生成数据
```
List l = List.generate(10, (index) => index * index);

print(l);

[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## 常用属性
| 名称 | 说明 |
| ---- | ---- |
| isEmpty | 是否为空 |
| isNotEmpty | 是否不为空 |
| first | 第一个 |
| last | 最后一个 |
| length | 长度 |
| reversed | 反转 |
```
List l = List.generate(10, (index) => index + 1);

print("List: ${l}");
print("isEmpty: ${l.isEmpty}");
print("isNotEmpty: ${l.isNotEmpty}");
print("first: ${l.first}");
print("last: ${l.lastOrNull}");
print("length: ${l.length}");
print("reversed: ${l.reversed}");  // 返回的是一个迭代器(Iterator), 可用 toList() 方法转换成List 

List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
isEmpty: false
isNotEmpty: true
first: 1
last: 10
length: 10
reversed: (10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
```

## 方法
| 名称 | 说明 |
| ---- | ---- |
| add | 添加 |
| addAll | 添加多个 |
| insert | 插入 |
| insertAll | 插入多个 |
| indexOf | 查询 |
| indexWhere | 按条件查询 |
| remove | 删除 |
| removeAt | 按位置删除 |
| fillRange | 按区间填充 |
| getRange | 按区间获取 |
| shuffle | 洗牌 |
| sort | 排序 |
| sublist | 创建子列表 |

> 在 Dart 的标准库中，List 类型提供了 sublist() 方法，而 getRange() 方法则更多地用于 Iterable 类型，尽管对于 List 来说，getRange() 也是可用的。

## 常用方法
### 添加
```
List<int> l = [];
l..add(1)
 ..addAll([2, 3, 4, 5]);
print("add: ${l}");

l..insert(5, 6)
 ..insertAll(6, [7, 8]);
print("insert: ${l}");

add: [1, 2, 3, 4, 5]
insert: [1, 2, 3, 4, 5, 6, 7, 8]
```
### 查询
```
List l = List.generate(10, (index) => index * 2);

print(l);
print("值等于4的索引: ${l.indexOf(4)}");
print("第一个值大于9的索引: ${l.indexWhere((it) => it > 9)}" );

[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
值等于4的索引: 2
第一个值大于9的索引: 5
```
### 删除
```
List<int> l = [6, 1, 2, 3, 4, 5, 6, 6];

l.remove(6);
print(l);
l.removeAt(5);
print(l);

[1, 2, 3, 4, 5, 6, 6]
[1, 2, 3, 4, 5, 6]
```

### Range
```
List<int> l = [6, 1, 2, 3, 4, 5, 6, 6];

l.fillRange(0, 3, 9);  // 按区间填充

print(l);
print(l.getRange(0, 5));  // 按区间获取

[9, 9, 9, 3, 4, 5, 6, 6]
(9, 9, 9, 3, 4)
```

### 洗牌
```
List<int> l = [6, 1, 2, 3, 4, 5, 6, 6];

l.shuffle();
print(l);
l.shuffle();
print(l);

[2, 5, 4, 6, 6, 3, 1, 6]
[6, 4, 6, 5, 2, 3, 6, 1]
```
### 排序
#### 数字
```
List<int> l = [6, 1, 2, 3, 4, 5, 6, 6];

l.sort();
print(l);

[1, 2, 3, 4, 5, 6, 6, 6]
```

#### 日期
```
List<DateTime> dtList = [];
dtList.addAll([
  DateTime.now(),
  DateTime.now().add(new Duration(days: -12)),
  DateTime.now().add(new Duration(days: -2))
  ]);

print(dtList);

dtList.sort((a, b) => a.compareTo(b));

print(dtList);

[2024-10-13 16:01:36.275228, 2024-10-01 16:01:36.275228, 2024-10-11 16:01:36.276225]
[2024-10-01 16:01:36.275228, 2024-10-11 16:01:36.276225, 2024-10-13 16:01:36.275228]
```
### 复制子列表
```
List<int> l = [6, 1, 2, 3, 4, 5, 6, 6];

List<int> l2 = l.sublist(1,4);
print(l2);

[1, 2, 3]
```

## 操作符
| 名称 | 说明 |
| ---- | ---- |
| `=` | 赋值 |
| `+` | 连接 |
| `[]` | 取值 |
### `=` 赋值
```
List<int> l = [1,2,3];

print(l);

[1,2,3]
```
### `+` 连接
```
List<int> l1 = [1,2,3];
List<int> l2 = [4,5,6];

print("${l1 + l2}");

[1, 2, 3, 4, 5, 6]
```
### `[]` 取值
```
List<int> l = [1,2,3];

print(l[0]);

1
```