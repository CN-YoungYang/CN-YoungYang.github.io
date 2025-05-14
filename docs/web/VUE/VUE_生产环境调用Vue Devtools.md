# VUE_生产环境调用Vue Devtools

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

```js
function init() {
  var node;
  var running = false;
  try {
    const walker = document.createTreeWalker(document.body, 1);
    while ((node = walker.nextNode())) {
      const vm = node.__vue_app__;
      if (vm) {
        // Vue3 项目
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.push({
          app: vm,
          version: vm.version,
          types: {
            Comment: Symbol('Comment'),
            Fragment: Symbol('Fragment'),
            Static: Symbol('Static'),
            Text: Symbol('Text'),
          },
        });
        if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
          window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', vm);
          running = true;
        }
        break;
      } else if (node.__vue__) {
        // Vue2 项目
        const Vue = node.__vue__.$options._base;
        if (!Vue.config.devtools) {
          Vue.config.devtools = true;
          if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
            running = true;
          }
        }
        break;
      }
    }
  } catch (err) {
    console.error(err);
  }
  if (running) {
    console.log('%c==> 已开启 vue devtools (可能需要重启 Chrome 开发者工具)', 'color: green;');
  } else {
    console.log('%c==> 未检测到 Vue 项目或未检测到 Vue devtools', 'color: red;');
  }
}
init();
```