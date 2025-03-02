# 流程控制 flow

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## if else
```dart
int count = 5;
if ( count > 5) {
    print('hello YoungYang');
}else if( count > 0 ){
    print('hello World');
}else{
    print('hello');
}

hello YoungYang
```

## for
```dart
for (var i = 0; i < 3; i++) {
    print(i);
}

0
1
2
```

## while
先判断后执行
```dart
int i = 0;
while( i<3 ) {
  print(i++);
}

0
1
2
```

## do while
先执行后判断
```dart
int i = 0;
do{
    print(i++);
}while( i<3 );

```

## switch case
```dart
int count = 0;
switch (count) {
    case 0:
        print('Yang');
        break;
    case 1:
        print('YangYang');
        break;
    default:
        print('not find');
};

Yang
```

## break
终止循环
```dart
int i = 0;
while( i<5 ) {
  print(i++);
  if( i == 3 ){
    break;
  }
}

0
1
2
```

## continue
跳过当前循环,直接进入到下一次循环
```dart
int i = 0;
while( i<5 ) {
  print(i++);
  if( i == 3 ){
    continue;
  }
}

0
1
2
4
```

## continue 指定位置
```dart
String command = "close";
switch (command) {
  case "open":
    print("open");
    break;
  case "close":
    print("close");
    continue doClear;
  case "close2":
    print("close2");
    continue doClear;

  doClear:
  case "doClose":
    print("doClose");
    break;

  default:
    print("other");
}


close
doClose
```