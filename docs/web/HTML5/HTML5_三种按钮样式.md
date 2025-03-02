# 三种按钮样式

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## 下划线动画按钮
- 利用伪类生成2道下划线
- 利用下划线的z-index不同,改变两个伪类的宽度,从而形成视觉上的进度条
- 在hover时候,分别给当前动画开始前显示颜色的伪类一个动画延迟, 避免出现空缺
```css
body .custom-Button-01 {
    position: relative;
    display: inline-block;
}
body .custom-Button-01::before,
body .custom-Button-01::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 3px;
    border-radius: 3px;
    background-color: currentColor;
}
body .custom-Button-01::before {
    width: 0;
    color: red;
    transition: width 0s cubic-bezier(0.420, 0.000, 1.000, 1.000) 0.3s;
}
body .custom-Button-01::after {
    width: 100%;
    color: #071e22;
    transition: width 0.3s cubic-bezier(0.420, 0.000, 1.000, 1.000);
}
body .custom-Button-01:hover::before {
    width: 100%;
    transition: width 0.3s cubic-bezier(0.420, 0.000, 1.000, 1.000);
    z-index: 1;
}
body .custom-Button-01:hover::after {
    width: 0;
    transition: width 0s cubic-bezier(0.420, 0.000, 1.000, 1.000) 0.3s;
    z-index: 0;
}
```

## 渐变按钮
- 将渐变背景 颜色1 > 颜色2 改为 颜色1 > 颜色2 > 颜色1
- 将背景的宽度改为 200%
- 此时修改前的背景色和修改后的背景色是一样的
- 修改背景的定位属性,即可产生动画
```css
body .custom-Button-02 {
    --color1: #314755;
    --color2: #26a0da;
}
body .custom-Button-02 {
    display: block;
    padding: 15px 45px;
    color: #fff;
    background-image: linear-gradient(to right, var(--color1) 0%, var(--color2) 51%, var(--color1) 100%);
    background-size: 200% auto;
    border-radius: 10px;
    box-shadow: 0 0 20px #eee;
    text-align: center;
    text-transform: uppercase;
    transition: .5s;
}
body .custom-Button-02:hover {
    color: #fff;
    background-position: right center;
    text-decoration: none;
}
```

## 旋转按钮
- 利用 transform 修改按钮的角度
- 利用 writing-mode 修改文字排版
```css
body .custom-Button-03 {
    position: fixed;
    top: 50%;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    padding: 30px 20px;
    color: #fff !important;
    font-size: 20px;
    line-height: 1;
    font-weight: 500;
    background-color: var(--accent-color4);
    border-radius: 0px 8px 8px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.13);
    writing-mode: tb-rl;
    transform: rotateX(180deg) rotateY(-180deg) translateX(0px);
    transition: color ease-in 300ms, background-color ease-in 300ms;
}
body .custom-Button-03:hover {
    background-color: var(--accent-color);
}
```

## 演示
<iframe width="100%" height="500" src="//jsrun.net/EGtKp/embedded/all/light" allowfullscreen="allowfullscreen" frameborder="0"></iframe>