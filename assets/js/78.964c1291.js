(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{374:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架"}},[s._v("#")]),s._v(" 脚手架")]),s._v(" "),t("blockquote",[t("p",[s._v("本文作者："),t("a",{attrs:{href:"https://github.com/CN-YoungYang",target:"_blank",rel:"noopener noreferrer"}},[s._v("阳九五"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("本站地址："),t("a",{attrs:{href:"https://blog.59young.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.59young.com"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),t("p",[s._v("Scaffold是一个页面布局脚手架，实现了基本的 Material 布局，继承自 StatefulWidget,是有状态组件。")]),s._v(" "),t("p",[s._v("它提供了Material Design布局结构的基本实现, 标题栏，主体内容，底部导航菜单或者侧滑抽屉菜单等等")]),s._v(" "),t("p",[s._v("对应 ios 的是 CupertinoPageScaffold")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://api.flutter.dev/flutter/material/Scaffold-class.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://api.flutter.dev/flutter/material/Scaffold-class.html"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://api.flutter.dev/flutter/cupertino/CupertinoPageScaffold-class.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://api.flutter.dev/flutter/cupertino/CupertinoPageScaffold-class.html"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Scaffold")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Key")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 菜单栏")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appBar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 中间主体内容部分")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬浮按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("floatingActionButton"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬浮按钮位置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("floatingActionButtonLocation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬浮按钮动画")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("floatingActionButtonAnimator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定在下方显示的按钮")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("persistentFooterButtons"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左侧 侧滑抽屉菜单")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("drawer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 右侧 侧滑抽屉菜单")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("endDrawer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 底部菜单")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bottomNavigationBar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 底部拉出菜单")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bottomSheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 背景色")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundColor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动适应底部padding")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resizeToAvoidBottomPadding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重新计算body布局空间大小，避免被遮挡")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resizeToAvoidBottomInset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否显示到底部，默认为true将显示到顶部状态栏")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("primary "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("drawerDragStartBehavior "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DragStartBehavior")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("down"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:flutter/gestures.dart'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:flutter/material.dart'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// class CupertinoPage extends StatelessWidget {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   const CupertinoPage({Key? key}) : super(key: key);")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   @override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   Widget build(BuildContext context) {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     return const CupertinoPageScaffold(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       navigationBar: CupertinoNavigationBar(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         middle: Text('我是标题'),")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       ),")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       child: Center(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         child: Text('我是内容'),")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       ),")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     );")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScaffoldPage")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StatelessWidget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScaffoldPage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token metadata function"}},[s._v("@override")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BuildContext")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Scaffold")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 菜单栏")]),s._v("\n      appBar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppBar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Material App Bar'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬浮按钮")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// floatingActionButton: FloatingActionButton(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   onPressed: () {},")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   child: const Icon(Icons.add_photo_alternate),")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ),")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬浮按钮位置")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定在下方显示的按钮")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// persistentFooterButtons: const [")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   Text('persistentFooterButtons1'),")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   Text('persistentFooterButtons2'),")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ],")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩顶部菜单空间")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// primary: true,")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左侧 侧滑抽屉菜单")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// drawer: const Drawer(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   child: Text('data'),")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ),")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 右侧 侧滑抽屉菜单")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// endDrawer: const Drawer(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   child: Text('data'),")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ),")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检测手势行为方式，与drawer配合使用 down 方式有卡顿，可以 start 方式")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// drawerDragStartBehavior: DragStartBehavior.start,")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 底部导航栏")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bottomNavigationBar: const Text('bottomNavigationBar'),")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 底部拉出菜单")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bottomSheet: const Text('bottomSheet'),")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 背景色")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// backgroundColor: Colors.amberAccent,")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动适应底部padding")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// resizeToAvoidBottomInset: true,")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正文")]),s._v("\n      body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Builder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        builder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BuildContext")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Center")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            child"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElevatedButton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n              onPressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 脚手架管理")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Scaffold.of(context).openDrawer();")]),s._v("\n\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用消息管理")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScaffoldMessenger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("showSnackBar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SnackBar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                  content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello!'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              child"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'showSnackBar'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"Image",width:"400","data-src":"https://raw.githubusercontent.com/CN-YoungYang/BlogAssets/refs/heads/master/docs/flutter/%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8/Flutter_%E8%84%9A%E6%89%8B%E6%9E%B6/image-20220619094948313.webp",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);