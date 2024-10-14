# 函数 function

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 定义
```dart
/// 正常写法
int add1(int x){
    return x + 1;
}

/// 箭头函数
int add2(int x) => x + 2;

void main(List<String> args) {
    print(add1(0));
    print(add2(0));
}

1
2
```

## 可选参数
```dart
/// 可选参数
void main(List<String> args) {
    // 可选参数
    String add1(int x, [int? y, int? z]) {
        return 'x: $x, y: $y, z: $z';
    }

    print(add1(1));  // x: 1, y: null, z: null
    print(add1(1,2));  // x: 1, y: 2, z: null
    print(add1(1,2,3));  // x: 1, y: 2, z: 3

    // 可选参数 默认值
    String add2(int x, [int y = 10, int z = 100]) {
        return 'x: $x, y: $y, z: $z';
    }

    print(add2(1));  // x: 1, y: 10, z: 100
    print(add2(1,11));  // x: 1, y: 11, z: 100
    print(add2(1,11,111));  // x: 1, y: 11, z: 111
}
```

## 命名参数
```dart
/// 命名参数
void main(List<String> args) {
    // 命名参数
    String add1(int x, {int? y, int? z}) {
        return 'x: $x, y: $y, z: $z';
    }

    print(add1( 1 ));  // x: 1, y: null, z: null
    print(add1( 1, y:2 ));  // x: 1, y: 2, z: null
    print(add1( 1, y:2, z:3 ));  // x: 1, y: 2, z: 3

    // 命名参数 默认值
    String add2(int x, {int y = 10, int z = 100}) {
        return 'x: $x, y: $y, z: $z';
    }

    print(add2( 1 ));  // x: 1, y: 10, z: 100
    print(add2( 1, y:11 ));  // x: 1, y: 11, z: 100
    print(add2( 1, y:11, z:111 ));  // x: 1, y: 11, z: 111
}
```
## 作用域
```dart
bool topLevel = true;

/// 作用域
void main(List<String> args) {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      print(topLevel);
      print(insideMain);
      print(insideFunction);
      print(insideNestedFunction);
    }

    nestedFunction();

    // assert(insideNestedFunction); 调用insideNestedFunction会报错, 因为作用域不同
  }

  myFunction();
}
```
## Function 返回函数对象
```dart
void main(List<String> args) {
    Function makeAdd(int x) {
      return (int y) => x + y;
    }

    //调用
    Function add = makeAdd(1); 
    print(add(5));   // 6 - 相当于 makeAdd(1)(5) 即  (int y) => 1 + y;
}
```
## 匿名函数
```dart
void main(List<String> args) {
    /*
     * 下面代码定义了只有一个参数 item 且没有参数类型的匿名方法。
     * List 中的每个元素都会调用这个函数，打印元素位置和值的字符串
     */
    const list = ['apples', 'bananas', 'oranges'];
    list.forEach((item) {
        print('${list.indexOf(item)}: $item');
    });


    // 箭头函数 如果只有一个表达式
    list.forEach((item) => print('${list.indexOf(item)}: $item'));

    0: apples
    1: bananas
    2: oranges
    
    0: apples
    1: bananas
    2: oranges
}
```