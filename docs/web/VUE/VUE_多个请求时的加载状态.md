# 多个请求时的加载状态

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

```js
/** Start: Loading */
const allLoading = reactive({
    delData: false,
    getTicketDashboard: false
});
const loading = ref(false);
const loadingTime = ref(new Date().getTime());
watch(() => allLoading, () => {
    loading.value = true;
    loadingTime.value = new Date().getTime();
    debounceLoadingAnimation();
},{ deep: true });
function LoadingAnimation(){
    setTimeout(() => {
        loading.value = Object.values(allLoading).some(value => value === true);
    }, Math.max(500 - ((new Date().getTime()) - loadingTime.value) / 1000), 0)
}
const debounceLoadingAnimation = debounce(LoadingAnimation,100);
/** Start: Loading */
```