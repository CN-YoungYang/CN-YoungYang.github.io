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
  {
    title: "注释函数表达式",
    collapsable: true,
    children: [
      "./注释函数表达式/Dart_注释.md",
      "./注释函数表达式/Dart_函数.md",
      "./注释函数表达式/Dart_操作符.md",
      "./注释函数表达式/Dart_流程控制.md",
      "./注释函数表达式/Dart_错误处理.md"
    ],
  },
  {
    title: "类库接口继承",
    collapsable: true,
    children: [
      "./类库接口继承/Dart_class.md",
      "./类库接口继承/Dart_get set.md",
      "./类库接口继承/Dart_static.md",
      "./类库接口继承/Dart_abstract.md",
      "./类库接口继承/Dart_interface.md",
      "./类库接口继承/Dart_extends.md",
      "./类库接口继承/Dart_with.md",
      "./类库接口继承/Dart_factory.md",
      "./类库接口继承/Dart_lib.md"
    ],
  },
];