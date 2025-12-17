# B站自动点赞

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)


```js
// ==UserScript==
// @name         B站自动点赞
// @namespace    https://blog.56321654.xyz
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var _wr = function(type) {
        var orig = history[type];
        return function() {
            var rv = orig.apply(this, arguments);
            var e = new Event(type);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _wr('pushState');
    history.replaceState = _wr('replaceState');
     

    let timeout = null;
    let debounce = function(func, wait = 2000, immediate = false) {
        // 清除定时器
        if (timeout !== null) clearTimeout(timeout);
        // 立即执行，此类情况一般用不到
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) typeof func === 'function' && func();
        } else {
            // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
            timeout = setTimeout(function() {
                typeof func === 'function' && func();
            }, wait);
        }
    }


    var currentURL = window.location.href;
    if (currentURL.indexOf("?") !== -1) {
        currentURL = currentURL.substring(0, currentURL.indexOf("?"));
    }

    let regex1 = /^(https?:\/\/)?(www\.)?bilibili\.com\/video\/[a-zA-Z0-9]+\//;
    let regex2 = /^(http?:\/\/)?(www\.)?bilibili\.com\/video\/[a-zA-Z0-9]+\//;

    if ( !(regex1.test(currentURL) || regex2.test(currentURL)) ){
        return;
    }

    function clickLike(){
        let curLike = document.querySelector(".video-like.video-toolbar-left-item");
        if (curLike) {
            if ( curLike.classList.contains('on') ) {
                console.log('已经点赞');
            } else {
                console.log('没有点赞,正在点赞');
                curLike.click();
            }
        }
    }

    let UserInterval = setInterval(function(){
        let userImg = document.querySelector(".bili-header .header-entry-mini .v-img");
        if (userImg) {

            debounce(clickLike);

            window.addEventListener('replaceState', function(e) {
                debounce(clickLike);
            });
            window.addEventListener('pushState', function(e) {
                debounce(clickLike);
            });
            
            clearInterval(UserInterval);
        }
    },100);
    
})();
```