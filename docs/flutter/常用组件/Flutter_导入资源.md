# 导入资源

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 加入资源
- 创建 assets 目录

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_导入资源/image-20220620221000595.webp =300x)
> 在根目录下创建assets，然后按资源类型分别创建目录

- 编辑`pubspec.yaml`

```yaml
# The following section is specific to Flutter.
flutter:
    ...

  # To add assets to your application, add an assets section, like this:
  assets:
    - assets/images/
    - assets/svgs/
    - assets/json/
```
> 如果你想整个目录导入可以这样`- assets/images/`
> <br><br>
> 只是导入指定图片`- assets/images/abc.png`

- 读取资源
```dart
File.json(
  'assets/json/app.json',
  ...
)
```
> 路径是从assets开始，指定文件位置

## 图片的处理
Flutter中使用3倍图(3x images)的主要原因是为了适配不同分辨率的设备，特别是高分辨率的显示屏。

### 1. 首先下载插件 <Flutter GetX Generator - 猫哥>

[https://marketplace.visualstudio.com/items?itemName=ducafecat.getx-template](https://marketplace.visualstudio.com/items?itemName=ducafecat.getx-template)

### 2. 根据 x3 图片自动生成 x1 x2 图片

- 将准备好的图片放入到`3.0x`目录下  
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_导入资源/20220302165624.webp =300x)

- 右键点击菜单 `Assets: Images x1 x2 Generate`  
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_导入资源/20220302165708.webp =300x)

- 成功生成了 2.0x 文件夹，和 1x 的图片  
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_导入资源/20220302165742.webp =300x)

- 成功生成了 资源索引文件 - files.txt 文件  
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_导入资源/image-20220620223752854.webp =700x)

### 创建你自己的资源 dart 文件
- 利用files.txt的内容创建 资源dart文件
```dart
/// 图片资源
class AssetsImages {
  static const logoPng = 'assets/images/logo.png';
  static const welcomePng = 'assets/images/welcome.png';
  static const iconFavouritePng = 'assets/images/icon_favourite.png';
  static const iconOffersPng = 'assets/images/icon_offers.png';
  static const iconLockPng = 'assets/images/icon_lock.png';
  static const iconOrderPng = 'assets/images/icon_order.png';
  static const iconMapPng = 'assets/images/icon_map.png';
  static const iconPaymentPng = 'assets/images/icon_payment.png';
  static const iconUserPng = 'assets/images/icon_user.png';
}
```

- 读取图片
```dart
...
  Image.asset(
    AssetsImages.iconUserPng,
    ...
  ),
```

> 直接用你的 AssetsImages 管理，这样不会应拼写错误造成错误。