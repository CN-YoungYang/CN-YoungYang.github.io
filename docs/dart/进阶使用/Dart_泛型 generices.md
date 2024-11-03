# 泛型 generices

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

泛型在编译时提供类型安全, 这意味着你可以在编译时捕获类型错误, 而不是在运行时。

## 泛型使用
```dart
main(List<String> args) {
  var l = <String>[];
  l.add('aaa');
  l.add('bbb');
  l.add('ccc');
  print(l);

  var m = <int, String>{};
  m[1] = 'aaaa';
  m[2] = 'bbbb';
  m[3] = 'cccc';
  print(m);
}

[aaa, bbb, ccc]
{1: aaaa, 2: bbbb, 3: cccc}
```
> 容器对象，在创建对象时都可以定义泛型类型。

## 泛型函数
```dart
V addCache<K, V>(K key, V val) {
  print('$key -> $val');
  return val;
}

main(List<String> args) {
  var key = addCache('url', 'https://blog.59young.com/');
  print(key);
}

url -> https://blog.59young.com/
https://blog.59young.com/
```

## 构造函数泛型
```dart
class Phone<T> {
  final T name;
  Phone(this.name);
}

main(List<String> args) {
  var p = Phone<String>('YoungYang');
  print(p.name);
}

YoungYang
```
> 这是大多数情况下使用泛型的场景，在一个类的构造函数中

## 泛型限制
- 定义
```dart
class AndroidPhone {
  void startup() {
    print('Android Phone 开机');
  }
}

// 这个例子Phone只能传入AndroidPhone类
class Phone<T extends AndroidPhone> {
  final T mobile;
  Phone(this.mobile);
}
```
- 实例
```dart
main(List<String> args) {
  var ad = AndroidPhone();
  var p = Phone<AndroidPhone>(ad);
  p.mobile.startup();
}

Android Phone 开机
```
> 通过 extends 关键字 可以限定你可以泛型使用的类型