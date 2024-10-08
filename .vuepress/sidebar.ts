import {SidebarConfig4Multiple} from "vuepress/config";

import webSideBar from "./sidebars/webSideBar";
import dartSideBar from "./sidebars/dartSideBar";
import flutterSideBar from "./sidebars/flutterSideBar";

// @ts-ignore
export default {
    "/docs/web/": webSideBar,
    "/docs/dart/": dartSideBar,
    "/docs/flutter/": flutterSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
