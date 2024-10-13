export default [
  "",
  // 下面这个写法未成功,需要研究
  // {
  //   title: "基础类型",
  //   path: './测试文章1.md'
  //   collapsable: false,
  // },
  {
    title: "基础类型",
    collapsable: true,
    children: [
      "./基础类型/Dart_变量.md",
      "./基础类型/Dart_常量.md",
      "./基础类型/Dart_数值.md",
      "./基础类型/Dart_布尔.md",
      "./基础类型/Dart_字符串.md",
      "./基础类型/Dart_日期时间.md"
    ],
  },
  {
    title: "集合枚举",
    collapsable: true,
    children: [
      "./集合枚举/Dart_列表 List.md",
      "./集合枚举/Dart_集合 Map.md",
      "./集合枚举/Dart_集合 Set.md",
      "./集合枚举/Dart_枚举 enum.md"
    ],
  },
];
