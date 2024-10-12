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
    collapsable: false,
    children: [
      "./基础类型/变量.md",
      "./基础类型/常量.md",
      "./基础类型/数值.md",
      "./基础类型/布尔.md",
      "./基础类型/字符串.md",
    ],
  },
];
