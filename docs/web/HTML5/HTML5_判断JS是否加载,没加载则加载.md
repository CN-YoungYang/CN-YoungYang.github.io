# 判断JS是否加载,没加载则加载

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 思路
- 判断页面是否引用JS文件
- 监听 performance entry 变动
- 加载JS文件

## 代码
```javascript
function LoadingJS(Options = {}) {


    let PromiseJS = new Promise((resolve, reject) => {

        /**
        * 加载Css和Js文件
        * @param {String} url - 请求地址
        * @param {String} type - 请求类型
        * @return {Promise}
        */
        function addCssJsFile(url, type) {
            if (window.loadCssJs === undefined) {
                window.loadCssJs = {};
            }

            let promise = new Promise(function (resolve, reject) {
                let element = null;

                // 创建文件格式
                switch (type) {
                    case "css":
                        element = document.createElement('link');
                        element.type = 'text/css';
                        element.rel = 'stylesheet';
                        element.href = url;

                        break;
                    case "js":
                        element = document.createElement('script');
                        element.type = "text/javascript";
                        element.src = url;

                        break;
                    default:
                        break;
                }

                // 绑定加载完毕事件
                if (element.readyState) {  //IE
                    element.onreadystatechange = function () {
                        if (element.readyState == "loaded" || element.readyState == "complete") {
                            element.onreadystatechange = null;
                            resolve(this.response);
                        }
                    };
                } else {  //Others
                    element.onload = function () {
                        resolve(this.response);
                    };
                }

                // 创建文件
                if (!window.loadCssJs[url]) {
                    document.getElementsByTagName('head')[0].appendChild(element);
                }
            });


            let fixPromise = promise;
            if (!window.loadCssJs[url]) {
                window.loadCssJs[url] = promise;
            } else {
                fixPromise = window.loadCssJs[url];
            }
            return fixPromise;
        }

        // 监听 performance entry 变动
        function checkPerformanceEntries(scriptName) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.name.includes(scriptName) && entry.entryType === 'resource') {
                        setTimeout(function(){
                            console.log("Swiper loading complete.");
                            resolve("Swiper loading complete.");
                        },0)
                        observer.disconnect(); // 停止监听
                    }
                });
            });

            observer.observe({ entryTypes: ['resource'] });
        }

        // 判断页面是否引用JS文件
        function HtmlContainsScript(scriptName) {
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

        // 获取当前文件的路径
        function getCurrentFilePath(){
            let scriptUrl;
            try {
                throw new Error();
            } catch (e) {
                var stack = e.stack;
                // 堆栈信息的格式可能因浏览器而异，以下是一个常见的格式
                var scriptRegex = /(https?:\/\/[^\s]+?\/[^:\s]+):(\d+):(\d+)/;
                var matches = stack.match(scriptRegex);
                if (matches) {
                    scriptUrl = matches[1]; // 获取脚本的URL
                }
            }
            if (scriptUrl) {
                // 使用.replace()方法去掉URL末尾的文件名
                scriptUrl = scriptUrl.replace(/(.*\/)[^/]+/, '$1');
                // 或者使用.split()方法去掉URL末尾的文件名
                // scriptUrl = scriptUrl.split('/').slice(0, -1).join('/');
            }

            return scriptUrl;
        }

        let scriptName = 'swiper.min.js';
        if (HtmlContainsScript(scriptName)) {
            if (window.Swiper) {
                console.log("Swiper loading complete.");
                resolve("Swiper loading complete.");
            } else {
                console.log("Swiper is loading.");
                checkPerformanceEntries(scriptName);
            }
        } else {
            console.log('Swiper not loaded.');
            const scriptUrl = getCurrentFilePath();

            addCssJsFile(`${scriptUrl}../css/swiper-bundle.min.css`, 'css');
            addCssJsFile(`${scriptUrl}swiper-bundle.min.js`, 'js').then(function(){
                console.log("Swiper loading complete.");
                resolve("Swiper loading complete.");
            });
        }
    });

    return PromiseJS;
}



LoadingJS({
    scriptName: "swiper.min.js",
    cssFile: "vendor/swiper/swiper-bundle.min.css",
    jsFile: "vendor/swiper/swiper.min.js",
    jsMethodName: "Swiper",
    isRelativePath: false
});
```