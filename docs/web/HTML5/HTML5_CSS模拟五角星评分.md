# CSS模拟五角星评分

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 原理


## 演示
```html
<!DOCTYPE html>
<html>
<head>
<title>CSS模拟五角星评分</title>
<style type="text/css">
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .box{
        max-width: 500px;
        margin: 100px auto 0;
    }
    .box .item{
        margin-bottom: 20px;
    }
    .review-rating {
        --rating-size: 1em;
        --rating-spacing: .25em;
        --rating-position: calc(var(--rating-size) + var(--rating-spacing));
        --rating-img: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M50,5 67,32 98,40 77,64 80,96 50,84 20,96 23,64 2,40 33,32 50,5" stroke-width="4" stroke="%2300FF8C" fill="none" ></path></svg>');
        --rating-fill: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M50,5 67,32 98,40 77,64 80,96 50,84 20,96 23,64 2,40 33,32 50,5" stroke-width="4" stroke="%2300FF8C" fill="%2300FF8C" ></path></svg>');
        --rating: 0;
        background-image: var(--rating-img), var(--rating-img), var(--rating-img), var(--rating-img), var(--rating-img);
        background-size: var(--rating-size);
        background-position: 0 center, calc(var(--rating-position) * 1) center, calc(var(--rating-position) * 2) center, calc(var(--rating-position) * 3) center, calc(var(--rating-position) * 4) center;
        background-repeat: no-repeat;
        width: calc(var(--rating-size)*5 + var(--rating-spacing) * 4);
        height: var(--rating-size);
        cursor: auto;
    }
    .review-rating::before {
        content: "";
        background-image: var(--rating-fill), var(--rating-fill), var(--rating-fill), var(--rating-fill), var(--rating-fill);
        background-size: inherit;
        background-position: inherit;
        background-repeat: no-repeat;
        width: calc((var(--rating-size) + var(--rating-spacing)) * var(--rating));
        width: calc((var(--rating-size) + var(--rating-spacing))*(var(--rating) - rem(var(--rating), 1)) + var(--rating-size)* rem(var(--rating), 1));
        height: 100%;
        display: block;
    }
</style>
</head>

<body>
    <div class="box">
        <div class="item">
            <div class="review-rating" style="--rating: 0;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 1;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 2;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 3;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 4;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 5;"></div>
        </div>
        <div class="item">
            <div class="review-rating" style="--rating: 3.5;"></div>
        </div>
    </div>
</body>

</html>
```