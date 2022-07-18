# 微吼云定制统一日志上报 JS-SDK

> 用于在 paas 各 js-sdk 中监控埋点

&nbsp;

## 使用

1、引入该 sdk 文件

```
 npm install @vhallyun/log-reporter

 or

 npm add @vhallyun/log-reporter

```

2、初始化上报 sdk 基础数据

```js
window.VhyReporter.setConfig({
  // 上报url
  uploadUrl: ""
});

通常在此sdk加载后就可以设置。
本地开发时需要补全 public/test.html文件中的 uploadUrl 信息
```

3、埋点调用

```js
// 微吼云使用
window.VhyReporter.scout(code, content, options);

参数说明:
  code: 大数据提供的code码
  content: 上报内容，json对象
  options: 可选参数
   --- upMode: 'ajaxget'  上报方式，目前只支持ajaxget,也是默认值

```

## TODO

1、上报方式 img、ajaxpost 支持。  
2、批量上报支持。
