# 打包下载图片

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)

## 控制台版本
```javascript
(function(){
  // 创建一个<script>标签并设置其src属性为JSZip的CDN链接
  var script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js";

  // 将脚本添加到页面中
  document.body.appendChild(script);

  // 前置Url - 可为空
  const preUrl = "https://francinimarble.com/Portals/0/ThemePluginPro/uploads/2022/5/16/";

  // 文件URL
  let fileUrls = [];

  // 图片选取 - 自定义逻辑
  let itemTitle = $(".rgSelectedRow .dnnModuleDigitalAssetItemNameTemplate");
  for (let index = 0; index < itemTitle.length; index++) {
    const curUrl = itemTitle.eq(index).attr("title");
    fileUrls.push(preUrl + curUrl);
  }

  // 等待脚本加载完成
  script.onload = function() {

      // 用于从URL下载文件并将其添加到JSZip对象的函数
      async function downloadAndZipFiles(urls) {
        const zip = new JSZip();

        for (let url of urls) {
          console.log("正在下载:", url.split(preUrl)[1]);
          const response = await fetch(url);
          const blob = await response.blob();
          // 给文件在ZIP中设置一个名称
          const filename = url.split('/').pop();
          zip.file(filename, blob, { binary: true });
        }

        // 将JSZip对象转换为Blob
        const content = await zip.generateAsync({ type: 'blob' });

        // 创建下载链接并触发下载
        const downloadUrl = URL.createObjectURL(content);
        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.download = 'downloaded-files.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // 下载完成后撤销URL
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadUrl);
      }

      // 调用函数开始批量下载并打包ZIP
      downloadAndZipFiles(fileUrls);
  };

})();
```

## 页面版本
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>批量下载图片</title>
</head>
<body>

<!-- 图片链接列表 -->
<div>
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <!-- 添加更多图片链接 -->
</div>

<!-- 下载按钮 -->
<a href="#" id="downloadButton" download="images.zip">下载所有图片</a>

<!-- JavaScript 代码 -->
<script>
    document.getElementById('downloadButton').addEventListener('click', function() {
        var zip = new JSZip();

        // 图片链接列表
        var imageUrls = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            // 添加更多图片链接
        ];
        
        let arrPromise = [];
        // 遍历图片链接列表，将图片添加到 zip 文件中
        imageUrls.forEach(function(url, index) {
            var filename = 'image' + (index + 1) + '.jpg';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';

            let promise = new Promise(function(resolve, reject) {
                xhr.onload = function() {
                    zip.file(filename, xhr.response);
                    resolve();
                };
            });
            arrPromise.push(promise);

            xhr.open('GET', url);
            xhr.send();
        });

        Promise.all(arrPromise).then(function(){
            zip.generateAsync({ type: 'blob' }).then(function(content) {
                saveAs(content, 'images.zip');
            });
        });
    });
</script>

<!-- 引入 JSZip 和 FileSaver.js 库 -->
<script src="https://cdn.jsdelivr.net/npm/jszip/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/file-saver/dist/FileSaver.min.js"></script>

</body>
</html>

```