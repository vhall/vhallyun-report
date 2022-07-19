# 微吼云定制统一日志上报 JS-SDK

用于在 paas 各 js-sdk 中监控埋点

&nbsp;

## 使用

1、安装

```
 npm install @vhallyun/log-reporter
 or
 yarn add @vhallyun/log-reporter
```

2、引用方式

```
// es6方式
import VhyReporter from "@vhallyun/log-reporter"

// commonjs方式
const VhyReporter=require("@vhallyun/log-reporter")

// script标签引入
<script src="vhyreporter.js"></script>
```

3、初始化上报 sdk 基础数据

```js
VhyReporter.setConfig({
  // 上报url
  uploadUrl: ""
});

通常在此sdk加载后就可以设置。
本地开发时需要补全 public/test.html文件中的 uploadUrl 信息
```

4、埋点调用

```js
// 微吼云使用
VhyReporter.scout(code, content, options);

参数说明:
  code: 大数据提供的code码
  content: 上报内容，json对象
  options: 可选参数
   --- upMode: 'ajaxget'  上报方式，目前只支持ajaxget,也是默认值

```

## TODO

1、上报方式 img、ajaxpost 支持。  
2、批量上报支持。
