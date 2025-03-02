# 类 get set

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

get 和 set 是用来定义属性的 getter 和 setter 方法的关键字。它们允许你控制对类的属性的访问和修改。  
使用 get 和 set 可以让你在读取或设置属性值时执行额外的逻辑，例如验证、计算或更新其他属性。

## Getter (get)
get 关键字用于定义一个属性的 getter 方法。getter 方法允许你控制如何获取属性的值。即使你的类中没有显式声明一个属性，你也可以通过 getter 方法来模拟它。
```dart
class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // 使用 get 来定义一个属性的 getter
  num get area => width * height;
}
```

## Setter (set)
set 关键字用于定义一个属性的 setter 方法。setter 方法允许你控制如何设置属性的值。你可以在设置属性值之前执行验证或其他逻辑。
```dart
class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  num get area => width * height;

  // 使用 set 来定义一个属性的 setter
  set width(num newWidth) {
    if (newWidth > 0) {
      width = newWidth;
    } else {
      throw Exception('Width must be greater than zero');
    }
  }
}
```

## 使用 get 和 set 的好处
- 封装：隐藏内部实现细节，只暴露必要的接口。
- 验证：在设置属性值之前进行验证。
- 计算属性：属性的值不是直接存储的，而是通过计算得到的。
- 懒加载：只有在需要时才计算属性的值，可以提高性能

## 实例
```dart
class People {
    // 定义一个 私有成员name
    String? _name;

    // 赋值 ,  People.name = 'Yang'
    set name(String value) => _name = value;

    // 取值, People.name
    String get name => 'people is $_name';
}

void main(List<String> args) {
    var p = People();
    p.name = 'YoungYang';
    print(p.name); 
}

people is YoungYang
```

## 业务场景
购物车
```dart
/// 商品数量
int get lineItemsCount => lineItems.length;

/// 运费
double get shipping => 0;

/// 折扣
double get discount =>
    lineCoupons.fold<double>(0, (double previousValue, CouponsModel element) {
        return previousValue + (double.parse(element.amount ?? "0"));
    });

/// 商品合计价格
double get totalItemsPrice =>
    lineItems.fold<double>(0, (double previousValue, LineItem element) {
        return previousValue + double.parse(element.total ?? "0");
    });
```
> 以前可能会写个方法 getXXX() 当然也适用于赋值操作

