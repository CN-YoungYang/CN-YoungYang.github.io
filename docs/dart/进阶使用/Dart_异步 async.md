# 异步 async

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

`Future` 是 Dart 中表示异步操作的对象。它代表了一个将来的值或错误。

`async` 关键字用于声明一个异步函数，这意味着该函数会返回一个 `Future`。

`await` 关键字用于等待一个 `Future` 完成，它只能在 `async` 函数内部使用。

## 异步回调
```dart
import 'package:dio/dio.dart';

void main() {
  Dio dio = Dio();
  dio.get("https://blog.59young.com/").then((response) {
    print(response.data);
  });
}

<!DOCTYPE html> ...
```
> `then` 的方式异步回调

## 异步等待 await
```dart
import 'package:dio/dio.dart';

void main() async {
  Dio dio = Dio();
  Response<String> response = await dio.get("https://blog.59young.com/");
  print(response.data);
}

<!DOCTYPE html> ...
```
> `async` 关键字用于声明一个异步函数  
> `await` 关键字用于等待一个 `Future` 完成  
> `Future` 是 Dart 中表示异步操作的对象。

## 异步返回值
```dart
import 'package:dio/dio.dart';

Future<String?> getUrl(String url) async {
  Dio dio = Dio();
  Response<String> response = await dio.get(url);
  return response.data;
}

void main() async {
  var content = await getUrl('https://blog.59young.com/');
  print(content);
}

<!DOCTYPE html> ...
```
> 定义 `Future<T>` 返回对象