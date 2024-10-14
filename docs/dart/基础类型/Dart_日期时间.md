# 日期时间

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

[DateTime class](https://api.dart.dev/stable/3.5.3/dart-core/DateTime-class.html) 和 [Duration class](https://api.dart.dev/stable/3.5.3/dart-core/Duration-class.html)

## 当前时间
```dart
DateTime D = new DateTime.now();

print(D);  // 当前时间

2024-10-12 16:10:34.935247
```

## 指定时间
```dart
DateTime D = new DateTime(2022,10,28,8,30);

print(D);  // 指定时间

2022-10-28 08:30:00.000
```

## 指定UTC时间
```dart
DateTime D = new DateTime.utc(2022,10,28,8,30);

print(D);  // 指定UTC时间

2022-10-28 08:30:00.000Z
```

## 解析时间
```dart
DateTime D1 = DateTime.parse('2018-10-10 09:30:30Z');
DateTime D2 = DateTime.parse('2018-10-10 09:30:30+0800');

print(D1);  // UTC 时区
print(D2);  // 国际标准ISO

2018-10-10 09:30:30.000Z
2018-10-10 01:30:30.000Z
```

## 时间增减量
```dart
DateTime D = new DateTime.now();

print(D);
print(D.add(new Duration(minutes: 5)));
print(D.add(new Duration(minutes: -5)));

2024-10-12 16:10:34.948547
2024-10-12 16:15:34.948547
2024-10-12 16:05:34.948547
```

## 比较时间
```dart
DateTime D1 = new DateTime(2018, 10, 1);
DateTime D2 = new DateTime(2018, 10, 31);

print('2018-10-1 在 2018-10-31之前:' + D1.isBefore(D2).toString());
print('2018-10-1 在 2018-10-31之前:' + D1.isAfter(D2).toString());
print('2018-10-1 和 2018-10-31相同:' + D1.isAtSameMomentAs(D2));

2018-10-1 在 2018-10-31之前:true
2018-10-1 在 2018-10-31之后:false
2018-10-1 和 2018-10-31相同:false
```

## 时间差
```dart
DateTime D1 = new DateTime(2022, 10, 1);
DateTime D2 = new DateTime(2022, 10, 28);
Duration DF = D1.difference(D2);

print('2022-10-1 距离 2022-10-28:' + DF.inDays.toString() + '天');
print('2022-10-1 距离 2022-10-28:' + DF.inHours.toString() + '小时');

2022-10-1 距离 2022-10-31:-30天
2022-10-1 距离 2022-10-31:-720小时
```

## 时间戳
```dart
DateTime D = new DateTime.now();

print(D.millisecondsSinceEpoch);
print(D.microsecondsSinceEpoch);

1728721661611
1728721661611133
```