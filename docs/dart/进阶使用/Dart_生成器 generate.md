# 生成器 generate

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

生成器是一种特殊的函数，它可以惰性地生成一系列值。

## 同步生成器
同步生成器使用`sync*`关键字标记，返回一个`Iterable`对象。在同步生成器中，使用`yield`关键字来产生一系列的值。每次调用`yield`时，函数会暂停，并将值返回给迭代器的下一个消费者，然后当迭代器请求下一个值时，函数会从上次`yield`的位置继续执行。
```dart
Iterable<int> naturalsTo(int n) sync* {
  print('start');
  int k = 0;
  while (k < n) {
    yield k++;
  }
  print('end');
}

main(List<String> args) {
  var it = naturalsTo(5).iterator;
  while (it.moveNext()) {
    print(it.current);
  }
}

start
0
1
2
3
4
end
```
> `yield` 会等待 `moveNext` 指令

## 异步生成器
异步生成器使用`async*`关键字标记，返回一个`Stream`对象。在异步生成器中，同样使用`yield`关键字来产生值，但是这些值是作为流的一部分异步产生的。异步生成器可以包含`await`表达式，以等待异步操作完成。
```dart
import 'dart:async';

Stream<int> asynchronousNaturalsTo(int n) async* {
  print('start');
  int k = 0;
  while (k < n) {
    yield k++;
  }
  print('end');
}

main(List<String> args) {
  // 流监听
  // asynchronousNaturalsTo(5).listen((onData) {
  //   print(onData);
  // });

  // 流监听 StreamSubscription 对象
  StreamSubscription subscription = asynchronousNaturalsTo(5).listen(null);
  subscription.onData((value) {
    print(value);
    // subscription.pause();
  });
}

start
0
1
2
3
4
end
```
> 以流的方式一次性推送  
> `StreamSubscription` 对象进行流监听控制

## 递归生成器
`yield*`关键字允许一个生成器委托另一个生成器来产生值，这可以用于同步和异步生成器。这使得代码更加简洁，并且可以递归地使用生成器。
```dart
Iterable<int> naturalsDownFrom(int n) sync* {
  print("Start");
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
  print("End");
}

main(List<String> args) {
  var it = naturalsDownFrom(2).iterator;
  while (it.moveNext()) {
    print(it.current);
  }
}

Start
2
Start
1
Start
End
End
End
```
> `yield*` 以指针的方式传递递归对象，而不是整个同步对象