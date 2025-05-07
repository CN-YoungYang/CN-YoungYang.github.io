# 样式管理

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)


## ThemeData 样式对象
- 定义
```dart
  factory ThemeData({
    // 全局配置
    AndroidOverscrollIndicator? androidOverscrollIndicator, // Android 滚动溢出指示器
    bool? applyElevationOverlayColor, // 是否应用海拔叠加颜色
    NoDefaultCupertinoThemeData? cupertinoOverrideTheme, // Cupertino 部件的替代主题
    InputDecorationTheme? inputDecorationTheme, // InputDecoration 的主题
    MaterialTapTargetSize? materialTapTargetSize, // Material 点击目标大小
    PageTransitionsTheme? pageTransitionsTheme, // 页面过渡效果主题
    TargetPlatform? platform, // 目标平台
    ScrollbarThemeData? scrollbarTheme, // 滚动条主题
    InteractiveInkFeatureFactory? splashFactory, // 墨水飞溅效果工厂
    VisualDensity? visualDensity, // 视觉密度
    bool? useMaterial3, // 是否使用 Material 3

    // 颜色管理
    ColorScheme? colorScheme, // 颜色方案
    Color? colorSchemeSeed, // 颜色方案种子
    Brightness? brightness, // 亮度
    MaterialColor? primarySwatch, // 主色
    Color? primaryColor, // 主颜色
    Color? primaryColorLight, // 主颜色（淡）
    Color? primaryColorDark, // 主颜色（深）
    Color? focusColor, // 焦点颜色
    Color? hoverColor, // 悬停颜色
    Color? shadowColor, // 阴影颜色
    Color? canvasColor, // 画布颜色
    Color? scaffoldBackgroundColor, // Scaffold 背景颜色
    Color? bottomAppBarColor, // 底部应用栏颜色
    Color? cardColor, // 卡片颜色
    Color? dividerColor, // 分割线颜色
    Color? highlightColor, // 高亮颜色
    Color? splashColor, // 飞溅颜色
    Color? selectedRowColor, // 选中行颜色
    Color? unselectedWidgetColor, // 未选中 Widget 颜色
    Color? disabledColor, // 禁用颜色
    Color? secondaryHeaderColor, // 二级标题颜色
    Color? backgroundColor, // 背景颜色
    Color? dialogBackgroundColor, // 对话框背景颜色
    Color? indicatorColor, // 指示器颜色
    Color? hintColor, // 提示颜色
    Color? errorColor, // 错误颜色
    Color? toggleableActiveColor, // 可切换的激活颜色

    // 字体和图标
    String? fontFamily, // 字体
    Typography? typography, // 印刷样式
    TextTheme? textTheme, // 文本主题
    TextTheme? primaryTextTheme, // 主文本主题
    IconThemeData? iconTheme, // 图标主题
    IconThemeData? primaryIconTheme, // 主图标主题

    // 各种组件样式
    AppBarTheme? appBarTheme, // 导航栏主题
    MaterialBannerThemeData? bannerTheme, // MaterialBanner 主题
    BottomAppBarTheme? bottomAppBarTheme, // 底部应用栏主题
    BottomNavigationBarThemeData? bottomNavigationBarTheme, // 底部导航栏主题
    BottomSheetThemeData? bottomSheetTheme, // 底部 Sheet 主题
    ButtonBarThemeData? buttonBarTheme, // 按钮栏主题
    ButtonThemeData? buttonTheme, // 按钮主题
    CardTheme? cardTheme, // 卡片主题
    CheckboxThemeData? checkboxTheme, // 复选框主题
    ChipThemeData? chipTheme, // 碎片主题
    DataTableThemeData? dataTableTheme, // 数据表格主题
    DialogTheme? dialogTheme, // 对话框主题
    DividerThemeData? dividerTheme, // 分割线主题
    DrawerThemeData? drawerTheme, // 抽屉主题
    ElevatedButtonThemeData? elevatedButtonTheme, // 凸起按钮主题
    FloatingActionButtonThemeData? floatingActionButtonTheme, // 悬浮按钮主题
    ListTileThemeData? listTileTheme, // 列表 Tile 主题
    NavigationBarThemeData? navigationBarTheme, // 导航栏主题
    NavigationRailThemeData? navigationRailTheme, // 导航 Rail 主题
    OutlinedButtonThemeData? outlinedButtonTheme, // 轮廓按钮主题
    PopupMenuThemeData? popupMenuTheme, // 弹出菜单主题
    ProgressIndicatorThemeData? progressIndicatorTheme, // 进度指示器主题
    RadioThemeData? radioTheme, // 单选按钮主题
    SliderThemeData? sliderTheme, // 滑块主题
    SnackBarThemeData? snackBarTheme, // SnackBar 主题
    SwitchThemeData? switchTheme, // 开关主题
    TabBarTheme? tabBarTheme, // 标签栏主题
    TextButtonThemeData? textButtonTheme, // 文本按钮主题
    TextSelectionThemeData? textSelectionTheme, // 文本选择主题
    TimePickerThemeData? timePickerTheme, // 时间选择器主题
    ToggleButtonsThemeData? toggleButtonsTheme, // 切换按钮主题
    TooltipThemeData? tooltipTheme, // 工具提示主题
```

- 我们在 MaterialApp.theme 中初始

lib/main.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_application_write_docs/pages/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Quick Start',
      
      // 样式
      theme: ThemeData(
        // 主题颜色
        primarySwatch: Colors.brown,
        // appBar颜色
        appBarTheme: ThemeData.light().appBarTheme.copyWith(
              backgroundColor: Colors.green,
              foregroundColor: Colors.white,
            ),
        // 按钮颜色
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            onPrimary: Colors.white,
            primary: Colors.amber,
          ),
        ),
      ),

      // page
      home: const ThemePage(),

      // 关闭 debug 标签
      debugShowCheckedModeBanner: false,
    );
  }
}
```
lib/pages/theme.dart
```dart
import 'package:flutter/material.dart';

class ThemePage extends StatelessWidget {
  const ThemePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ThemePage'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {},
          child: const Text('Theme'),
        ),
      ),
    );
  }
}
```
输出
![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_样式管理/1.webp)

## Color 与 MaterialColor
- Color 颜色

[https://api.flutter.dev/flutter/material/Colors-class.html](https://api.flutter.dev/flutter/material/Colors-class.html)

如设计稿的颜色是 `#40c254`, 转换成 16 进制颜色
```dart
// 字符串转 Color
Color stringToColor(String source) {
  return Color(int.parse(source, radix: 16) | 0xFF000000);
}

Color c = stringToColor("40c254");
```

- MaterialColor 色彩表

[https://api.flutter.dev/flutter/material/MaterialColor-class.html](https://api.flutter.dev/flutter/material/MaterialColor-class.html)

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_样式管理/2.webp)

```dart
// 字符串转 MaterialColor
MaterialColor stringToMaterialColor(String source) {
  Color color = stringToColor(source);

  List<double> strengths = <double>[.05];
  Map<int, Color> swatch = <int, Color>{};
  final int r = color.red, g = color.green, b = color.blue;

  for (int i = 1; i < 10; i++) {
    strengths.add(0.1 * i);
  }
  for (var strength in strengths) {
    final double ds = 0.5 - strength;
    swatch[(strength * 1000).round()] = Color.fromRGBO(
      r + ((ds < 0 ? r : (255 - r)) * ds).round(),
      g + ((ds < 0 ? g : (255 - g)) * ds).round(),
      b + ((ds < 0 ? b : (255 - b)) * ds).round(),
      1,
    );
  }
  return MaterialColor(color.value, swatch);
}

MaterialColor mc = stringToColor("40c254");
```

- 代码
```dart
import 'package:flutter/material.dart';

// 字符串转 Color
Color stringToColor(String source) {
  return Color(int.parse(source, radix: 16) | 0xFF000000);
}

// 字符串转 MaterialColor
MaterialColor stringToMaterialColor(String source) {
  Color color = stringToColor(source);

  List<double> strengths = <double>[.05];
  Map<int, Color> swatch = <int, Color>{};
  final int r = color.red, g = color.green, b = color.blue;

  for (int i = 1; i < 10; i++) {
    strengths.add(0.1 * i);
  }
  for (var strength in strengths) {
    final double ds = 0.5 - strength;
    swatch[(strength * 1000).round()] = Color.fromRGBO(
      r + ((ds < 0 ? r : (255 - r)) * ds).round(),
      g + ((ds < 0 ? g : (255 - g)) * ds).round(),
      b + ((ds < 0 ? b : (255 - b)) * ds).round(),
      1,
    );
  }
  return MaterialColor(color.value, swatch);
}

class ColorPage extends StatelessWidget {
  const ColorPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var c = stringToColor("FFB822");
    var mc = stringToMaterialColor("5C78FF");

    return Scaffold(
      body: SizedBox.expand(
        child: Column(
          children: [
            // Color
            Container(
              color: c,
              height: 50,
            ),

            // MaterialColor
            for (var i = 1; i < 10; i++)
              Container(
                color: mc[i * 100],
                height: 50,
              ),
          ],
        ),
      ),
    );
  }
}
```

- 输出

![Image](https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/常用组件/Flutter_样式管理/3.webp)