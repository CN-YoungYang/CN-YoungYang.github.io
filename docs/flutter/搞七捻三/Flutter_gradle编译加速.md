# gradle编译加速

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.59young.com](https://blog.59young.com)


- 打开文件 `build.gradle`

$ROOT_PATH/android/build.gradle

> `$ROOT_PATH` --- 项目路径

- 找到 buildscript 对象, 修改里面的代码


```groovy
// google()
// mavenCentral()
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/central' }
maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
```