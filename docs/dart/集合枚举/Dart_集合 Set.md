# 集合 Set

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


`Set` 是一种集合类型，用于存储一组唯一的元素。

## 声明
### 松散
```
// Set Set1 = new Set();
// Set Set1 = Set();
Set Set1 = {};
Set1
  ..add('So')
  ..add('Young')
  ..add('Yang')
  ..addAll({'Young', 'Yang'})
  ..addAll(['Young', 'Yang']);

print(Set1);

{So, Young, Yang}
```
### 强类型
`泛型`限定值类型, 输入不符合的类型则会报错
```
// Set Set1 = new Set<String>();
// Set Set1 = Set<String>();
Set Set1 = <String>{};
Set1
  ..add('So')
  ..add('Young')
  ..add('Yang')
  ..addAll(<String>{'Young', 'Yang'})
  ..addAll(<String>['Young', 'Yang']);

print(Set1);

{So, Young, Yang}
```
## 常用属性
| 名称 | 说明 |
| ---- | ---- |
| isEmpty | 是否为空 |
| isNotEmpty | 是否不为空 |
| first | 第一个 |
| last | 最后一个 |
| length | 个数 |

```
Set Set1 = {'Html', 'Css', 'javascript', 'C#', 'Dart'};

print('是否为空: ${Set1.isEmpty}');
print('是否不为空: ${Set1.isNotEmpty}');
print('个数: ${Set1.length}');
print('第一个: ${Set1.first}');
print('最后一个: ${Set1.last}');

是否为空: false
是否不为空: true
个数: 5
第一个: Html
最后一个: Dart
```
## 常用方法
| 名称 | 说明 |
| ---- | ---- |
| add | 新增 |
| addAll | 新增多个 |
| contains | 查询单个 |
| containsAll | 查询多个 |
| difference | 差集 |
| intersection | 交集 |
| union | 并集 |
| lookup | 按对象查询到返回对象 |
| remove | 删除单个 |
| removeAll | 删除多个 |
| clear | 清空 |
| firstWhere | 按条件正向查询 |
| lastWhere | 按条件反向查询 |
| removeWhere | 按条件删除 |
| retainAll | 保留指定的 |
| retainWhere | 按条件保留 |
### 添加
```
Set Set1 = new Set();
Set1..add('dart')
  ..addAll(['dart', 'c#', 'j#', 'e#']);
print(Set1);

{dart, c#, j#, e#}
```
### 查询
```
Set Set1 = <String>{"js", "node", "dart", "css", "html", "macos", "docker", "git"};

print('单个查询: ${Set1.contains('dart')}');
print('多个查询: ${Set1.containsAll(['dart', 'swift'])}');

单个查询: true
多个查询: false
```
### 差集 & 交集 & 并集
```
Set Set1 = <String>{"js", "node", "dart", "css", "html", "macos", "docker", "git"};
Set Set2 = <String>{"linux", "docker", "git", "go", "python", "sql", "node", "js", "aws"};

print('差集: ${Set1.difference(Set2)}');
print('交集: ${Set1.intersection(Set2)}');
print('并集: ${Set1.union(Set2)}');

差集: {dart, css, html, macos}
交集: {js, node, docker, git}
并集: {js, node, dart, css, html, macos, docker, git, linux, go, python, sql, aws}
```
### 查询对象并返回
按对象查询到返回对象-没有则返回null
```
Set Set1 = <String>{"js", "node", "dart", "css", "html", "macos", "docker", "git"};
Set Set2 = <String>{"linux", "docker", "git", "go", "python", "sql", "node", "js", "aws"};

print(Set1.lookup('dart'));
print(Set2.lookup('dart'));

dart
null
```
### 条件查询
```
Set Set1 = <String>{"Young", "Yang", "HanYang"};

print('按条件查询,返回多个值: ${Set1.where((element) => element.length <= 5 )}' );
print('按条件正向查询,返回一个值: ${Set1.firstWhere((element) => element == 'HanYang')}' );
print('按条件反向查询,返回一个值: ${Set1.lastWhere((element) => element == 'HanYang')}' );

按条件查询,返回多个值: (Young, Yang)
按条件正向查询,返回一个值: HanYang
按条件反向查询,返回一个值: HanYang
```
### 删除
```
Set Set1 = <String>{"js", "node", "dart", "css", "html", "macos", "docker", "git"};

Set1.remove("git");
print("删除单个: ${Set1}");

// Set1.removeAll({'docker','macos'});
Set1.removeAll(['docker','macos']);
print("删除多个: ${Set1}");

Set1.removeWhere((element) {
    return element.length == 4;
});
print("按条件删除: ${Set1}");

Set1.clear();
print("清空: ${Set1}");

删除单个: {js, node, dart, css, html, macos, docker}
删除多个: {js, node, dart, css, html}
按条件删除: {js, css}
清空: {}
```
### 保留
```
Set Set1 = <String>{"js", "node", "dart", "css", "html", "macos", "docker", "git"};

Set1.retainWhere((element){
    return element.length == 4;
});
print('按条件保留: $Set1');

// Set1.retainAll({'js','dart'});
Set1.retainAll(['js','dart']);
print('只保留指定的: $Set1');

按条件保留: {node, dart, html}
只保留指定的: {dart}
```

## 操作符
| 名称 | 说明 |
| ---- | ---- |
| `=` | 赋值 |
```
Set Set1 = {'Html', 'Css', 'javascript', 'C#', 'Dart'};
Set1 = {'HTML'};

print(Set1);

{HTML}
```

## 使用场景
### 列表去重
```
List ls = ['dart', 'java', 'c#', 'c#', 'Html', 'Html', 'dart', 'java'];
Set Set1 = new Set();
Set1.addAll(ls);

print('去重: $Set1');
print('转列表: ${Set1.toList()}');

去重: {dart, java, c#, Html}
转列表: [dart, java, c#, Html]
```