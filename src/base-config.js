module.exports = {
  // 是否开启了调试模式
  __debug: 0,

  // 获取数据超时时间（get）
  getDataTimeout: 10000,

  // 上报数据超时时间（post）
  sendDataTimeout: 10000,

  //上报数据请求url
  uploadUrl: "",

  // 上报方式,目前只支持 ajaxget
  // 后面考虑扩展支持 img、ajaxpost、beancon等上报方式
  upMode: "ajaxget",

  // 自定义id前缀
  idprefix: "",
};
