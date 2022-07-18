# 微吼云定制统一日志上报 SDK

> 用于在 paas 各 js-sdk 中监控埋点

## 命令

1. 安装依赖

```shell
  yarn install
```

2. 本地开发运行

```shell
yarn start
或者 yarn dev

```

3. 构建发布

```shell
yarn build:saas-live

## 生成的文件在release目录下

```

&nbsp;

## 使用

1、引入该 sdk 文件

2、初始化上报 sdk 基础数据

```js
window.VhyReport.setConfig({
  // 上报url
  uploadUrl: ""
});

通常在此sdk加载后就可以设置。
```

3、埋点调用

```js
// 微吼云使用
window.VhyReport.scout(code, content, opitons);

参数说明:
  code: 大数据提供的code码
  content: 上报内容，json对象
  opitons: 可选参数
   --- upMode: ajaxget  上报方式，目前只支持ajaxget

```
