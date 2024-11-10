# 空安全 null safe

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

- 减少数据异常错误
- 提高程序性能

## null
### 默认不可空
```dart
String title = 'Blog';
```

### type? 可空
```dart
String? title = null;
```

### value! 值保证不为空
```dart
String? title = 'Blog';
String newTitle = title!;
```
> value为空的话, 编译时不报错, 运行时报错

### value?. 不为空才执行
```dart
String? title = 'Blog';
bool isEmpty = title?.isEmpty();
```

### value?? 为空才执行
```dart
String? title = 'Blog';
bool isEmpty = title?? "Articles";
```

## late
`late` 延迟加载修饰符
```dart
// 声明一个不可空的变量，并在声明后初始化
late String description;

// 加上 late 后就可以不用构造函数的时候初始化了
class lateTest {
    late final test;
    lateTest();
}

void main(List<String> args) {
    description = 'Feijoada!';

    var lt = new lateTest();
}
```

## 泛型
### List
| 类型 | 集合是否可空 | 数据项是否可空 |
| ---- | ---- | ---- |
| List<String> | no | no |
| List<String>? | yes | no |
| List<String?> | no | yes |
| List<String?>? | yes | yes |

### Map
| 类型 | 集合是否可空 | 数据项是否可空 |
| ---- | ---- | ---- |
| Map<String, int> | no | no* |
| Map<String, int>? | yes | no* |
| Map<String, int?> | no | yes |
| Map<String, int?>? | yes | yes |
> `*` 可能返回空