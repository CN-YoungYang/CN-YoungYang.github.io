# 获取文件格式并判断格式是否正确

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 思路
- 分离最后一个“.”，然后取后面的字符串，取得文件后缀名
- 后缀名进行比对

## 代码
如果要进行文件类型判断， str.toLowerCase() 后在进行比对，避免大小写问题
### 方法1
```javascript
// 获取文件字符串
var file = $("input[name='file']").val();
// 获取最后一个'.'的角标
var point = file.lastIndexOf(".");
// 抽取字符串
var type = file.substr(point);
```

### 方法2
```javascript
// 获取文件字符串
var file = $("input[name='file']").val();
// 抽取文件名字
var filename = file.replace(/.*(\/|\\)/, "");
// 抽取文件信息
var fileExt = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
// 抽取文件类型
var fileType = fileExt[0];
```

## 场景
```javascript
/**
 * 判断是否是图片文件
 */
function isPicFile(fileType) {
    // 后缀名转换为小写
    var fileType = fileType.toLowerCase();
    // 创建格式数组
    var suppotFile = new Array();
    // 存储格式类型
    suppotFile[0] = "jpg";
    suppotFile[1] = "gif";
    suppotFile[2] = "bmp";
    suppotFile[3] = "png";
    suppotFile[4] = "jpeg";
    //判断fileType是否存在数组里面
    for ( var i = 0; i < suppotFile.length; i++) {
        if (suppotFile[i] == fileType) {
            return true;
        }
    }
    //如果不存在返回 false
    alert("文件类型不合法,只能是jpg、gif、bmp、png、jpeg、png类型！");
    return false;
}

var file = $("input[name='file']").val();
var filename = file.replace(/.*(\/|\\)/, "");
var fileExt = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
var fileType = fileExt[0];
isPicFile(fileType);
```