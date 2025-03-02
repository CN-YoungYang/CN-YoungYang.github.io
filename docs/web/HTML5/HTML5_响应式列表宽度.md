# 响应式列表宽度

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

利用到的高级选择器

**:first-of-type**  
选择器匹配属于其父元素的特定类型的首个子元素的每个元素

**:nth-last-of-type(n)**  
选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素，从最后一个子元素开始计数

**element1 ~ element2**  
选择前面有 element1 元素的每个 element2 元素。


```html
/* 既是第一项又是最后一项 */
:first-of-type:last-of-type
```
```html
/* 既是第一项又是倒数第二项 */
:first-of-type:nth-last-of-type(2)
```
```html
/* 既是第一项又是倒数第n项 */
:first-of-type:nth-last-of-type(n)
```

实例: 小于4个则宽度平均分配,大于4个则宽度自适应
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```
```css
ul{
    display: block;
    width: 800px;
    margin: 100px auto;
    list-style: none;
}
li{
    display: inline-block;
}

/* 只有1项 */
li:first-of-type:last-of-type,
li:first-of-type:last-of-type ~ li{
    width: calc( 100% / 1 );
}
/* 只有2项 */
li:first-of-type:nth-last-of-type(2),
li:first-of-type:nth-last-of-type(2) ~ li{
    width: calc( 100% / 2 );
}
/* 只有3项 */
li:first-of-type:nth-last-of-type(3),
li:first-of-type:nth-last-of-type(3) ~ li{
    width: calc( 100% / 3 );
}
/* 只有4项 */
li:first-of-type:nth-last-of-type(4),
li:first-of-type:nth-last-of-type(4) ~ li{
    width: calc( 100% / 4 );
}
```
