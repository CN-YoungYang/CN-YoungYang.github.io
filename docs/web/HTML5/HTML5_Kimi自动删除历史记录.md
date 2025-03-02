# Kimi自动删除历史记录

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

```javascript
(function (deleteInterval) {
    const checkElement = (($) => {
        return (selector, timeout, callback, maxCount = 0, maxCallback = null) => {
            let checkCount = 0;
            const intervalId = setInterval(() => {
                if ($(selector)) {
                    clearInterval(intervalId);
                    callback($(selector));
                } else if (maxCount > 0 && ++checkCount > maxCount) {
                    clearInterval(intervalId);
                    if (typeof maxCallback === "function") {
                        maxCallback();
                    }
                }
            }, timeout * 1000);
            return intervalId;
        };
    })(window.$);

    /**
     * 自动删除历史记录的函数
     */
    function autoDeleteHistory() {
        checkElement('[class*="delBtn___"]', 1, function (el) {
            el.click();
            checkElement('.MuiDialog-container [class*="MuiButton-contained"]', 1, function (button) {
                    button.click();
                    setTimeout(autoDeleteHistory, deleteInterval * 1000);
            }, 10);
        },10);
    }

    // 启动自动删除历史记录
    autoDeleteHistory();
})(1);
```
