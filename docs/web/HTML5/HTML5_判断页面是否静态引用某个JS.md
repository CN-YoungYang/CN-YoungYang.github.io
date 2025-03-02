# 判断页面是否静态引用某个JS

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 思路
- 获取所有的引用文件
- 名字进行对比

## 代码
```javascript
function isScriptLoaded(scriptName) {
  let scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    // 获取引用文件路径
    let fileSrc = scripts[i].src;
    // 去除查询参数
    let fileWithoutQuery = fileSrc.split('?')[0];
    // 抽取文件名字
    let filename = fileWithoutQuery.replace(/.*(\/|\\)/, "");
    // 文件名字 与 脚本名字 对比
    if (filename === scriptName) {
      return true;
    }
  }
  return false;
}

let scriptName = 'yourScript.js';
if (isScriptLoaded(scriptName)) {
  console.log('文件已加载');
} else {
  console.log('文件未加载');
}
```