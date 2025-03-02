# 库 lib

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 导入核心库
```dart
import 'dart:io';

void main() {
  var f = new File('README.md');
  var content = f.readAsStringSync();
  print(content);
}

# Dart 语言学习示例
```

## 导入第三方库
1. 编写根目录下面的`pubspec.yaml`文件
```yaml
dependencies:
  dio: ^4.0.6
```

2. 执行拉取包命令
```shell
$ dart pub get
```

3.程序套用
```dart
import 'package:dio/dio.dart';

void main() async {
  Dio dio = Dio();
  Response<String> response =
      await dio.get("https://wpapi.ducafecat.tech/products/categories");
  print(response.data);
}

[{"id":34,"name":"Bag","slug":"bag","parent":0,"description":" ......
```

## 导入自己的 git 仓库
1. 编写根目录下面的`pubspec.yaml`文件
```yaml
dependencies:
  uuid:
    git:
      url: https://github.com/Daegalus/dart-uuid
      ref: master
```

2. 执行拉取包命令
```shell
$ dart pub get
```
> 从 master 分支拉取

## 导入类文件
- phone.dart 
```dart
class Phone {
  void call() {
    print('Phone is calling...');
  }
}

class Android {
  void playStore() {
    print('Google play store');
  }

  void call() {
    print('Android phone is calling...');
  }
}

class Ios {
  void appleStore() {
    print('Apply store');
  }

  void call() {
    print('Ios phone is calling...');
  }
}
```

- hello.dart
```dart
class Hello {
    void call() {
        print('Hello Dart');
    }
}
```
`dev_pubspec` 是 `dev_pubspec.yaml` 里面的`name`字段 
```dart
import 'package:dev_pubspec/phone.dart';  // phone.dart的路径是在lib文件夹里面
import 'hello.dart';  // hello.dart的路径是相对当前文件

void main() {
    var p = Phone();
    p.call();

    var h = Hello();
    h.call();
}
```

## 前缀&别名
`as` 关键字可以为`package`增加一个`前缀&别名`
```dart
import 'package:dart_learn/phone.dart' as pp;

void main() {
  var p = pp.Android();
  p.call();
  p.playStore();
}

Android phone is calling...
Google play store
```

## 筛选包内容
```dart
import 'package:dart_learn/phone.dart' show Ios;

void main() {
  var p = Ios();
  p.call();
  p.appleStore();
}

Ios phone is calling...
Apply store
```
> `hide` 筛掉某几个包 `show` 只使用某几个包

## 延迟载入
`deferred` 关键字表明这个 `package` 是延迟加载
```dart
import 'package:dart_learn/phone.dart' deferred as pp;

Future<void> main() async {
  await pp.loadLibrary();
  var p = pp.Android();
  p.call();
  p.playStore();
}

Android phone is calling...
Google play store
```
> `loadLibrary()` 方式在需要的时候载入包 可提高程序启动速度 用在不常使用的功能 用在载入时间过长的包