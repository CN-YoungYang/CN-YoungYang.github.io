# 集合 Map

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)


key value 形式的集合，也叫键值对。  
key 是唯一的

## 声明
### 松散
```dart
Map Map1 = {};
Map1['web'] = 'https://github.com/CN-YoungYang';
Map1['type'] = 'Github';

Map Map2 = Map();
Map2['web'] = 'https://gitee.com/SoYang95';
Map2['type'] = 'Gitee';

print(Map1);
print(Map2);

{web: https://github.com/CN-YoungYang, type: Github}
{web: https://gitee.com/SoYang95, type: Gitee}
```
### 强类型
`泛型`限定key和value的类型, 输入不符合的类型则会报错
```dart
Map Map1 = <String, String>{};
Map1['web'] = 'https://github.com/CN-YoungYang';
Map1['type'] = 'Github';

Map Map2 = Map<String, String>();
Map2['web'] = 'https://gitee.com/SoYang95';
Map2['type'] = 'Gitee';

print(Map1);
print(Map2);

{web: https://github.com/CN-YoungYang, type: Github}
{web: https://gitee.com/SoYang95, type: Gitee}
```
## 常用属性
| 名称 | 说明 |
| ---- | ---- |
| isEmpty | 是否为空 |
| isNotEmpty | 是否不为空 |
| keys | key集合 |
| values | value集合 |
| length | 长度 |
| entries | k,v集合 |
keys,values,entries 返回的都是`Iterable`类型
```dart
Map a = {'name': 'YoungYang', 'web': 'blog.59young.com'};

print(a.isEmpty);
print(a.isNotEmpty);
print(a.keys);
print(a.values);
print(a.length);
print(a.entries);

false
true
(name, web)
(YoungYang, blog.59young.com)
2
(MapEntry(name: YoungYang), MapEntry(web: blog.59young.com))
```
## 常用方法
| 名称 | 说明 |
| ---- | ---- |
| addAll | 新增 |
| addEntries | 接入 `MapEntry` |
| containsKey | 查询是否存在 `key` |
| containsValue | 查询是否存在 `value` |
| clear | 清空 |
| remove | 按 `key` 删除 |
| removeWhere | 按条件删除 |
| update | 更新数据 |
| updateAll | 批量更新数据 |
### `addAll` 新增
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};

m.addAll({'Age': 18, 'Sex': '男'});

{name: YoungYang, web: blog.59young.com, Age: 18, Sex: 男}
```
### `addEntries` 接入 `MapEntry`
```dart
Map m1 = {'name': 'YoungYang', 'web': 'blog.59young.com'};
Map m2 = {'Age': 18, 'Sex': '男'};
m1.addEntries(m2.entries);

print(m1);

{name: YoungYang, web: blog.59young.com, Age: 18, Sex: 男}
```
### `containsKey` 查询是否存在 `key`
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};

print( m.containsKey('name') );

true
```
### `containsValue` 查询是否存在 `value`
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};

print( m.containsValue('name') );

true
```
### `clear` 清空
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m.clear();

print( m );

{}
```
### `remove` 按 `key` 删除
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m.remove('web');

print( m );

{name: YoungYang}
```
### `removeWhere` 按条件删除
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m.removeWhere(((key, value) => value == 'blog.59young.com'));

print( m );

{name: YoungYang}
```
### `update` 更新数据
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m.update('name',((value) => '阳九五'));

print( m );

{name: 阳九五, web: blog.59young.com}
```
### `updateAll` 批量更新数据
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m.updateAll((key, value) => value.toUpperCase());

print( m );

{name: YOUNGYANG, web: BLOG.59YOUNG.COM}
```
## 操作符
| 名称 | 说明 |
| ---- | ---- |
| `=` | 赋值 |
| `[]` | 取key值 |
| `[]=` | 赋key值 |
### `=` 赋值
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m = {'description': 'Hello Dart'};

print( m );

{description: Hello Dart}
```
### `[]` 取key值
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};

print( m['name'] );

YoungYang
```
### `[]=` 服赋key值
```dart
Map m = {'name': 'YoungYang', 'web': 'blog.59young.com'};
m['name'] = '阳九五';

print( m );

{name: 阳九五, web: blog.59young.com}
```
