# 扩展 extension

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

扩展类 `extensions` 是一种为现有类添加新功能的方式，而无需修改原始类的定义。

## 定义扩展类
扩展类的基本语法
```dart
extension ExtensionName on BaseType {
  // 在这里定义新的方法和属性
}
```
- `ExtensionName` 是你为扩展类起的名字。
- `BaseType` 是你想要扩展的类的类型。

## 注意事项
1. **访问控制**：扩展类中的方法可以访问原始类的公共成员，但不能访问私有成员。
2. **泛型**：扩展类可以是泛型的，允许你为泛型类添加方法。
3. **构造函数**：扩展类不能添加构造函数。
4. **实现接口**：扩展类不能实现接口。
5. **多重继承**：Dart 通过接口和扩展类支持某种形式的多重继承。

扩展类是 Dart 语言中一个非常强大的特性，它允许开发者在不修改原始类的情况下增加新功能，使得代码更加模块化和可重用。

## 示例 扩展字符串
```dart
extension FileExtension on String {
  String get fileType {
    // 获取文件的扩展名
    final extension = this.split('.').last;
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'bmp':
        return 'Image';
      case 'txt':
        return 'Text';
      case 'doc':
      case 'docx':
        return 'Document';
      case 'pdf':
        return 'PDF';
      case 'mp3':
      case 'wav':
        return 'Audio';
      case 'mp4':
      case 'avi':
        return 'Video';
      default:
        return 'Unknown';
    }
  }
}

void main() {
  String imagePath = "example.jpg";
  String docPath = "example.docx";
  String unknownPath = "example.unknown";

  print(imagePath.fileType); // 输出: Image
  print(docPath.fileType); // 输出: Document
  print(unknownPath.fileType); // 输出: Unknown
}
```