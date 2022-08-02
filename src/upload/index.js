const baseConfig = require("../base-config");
const Util = require("../tools/util");
const LogAjax = require("./ajax");
const storage = require("../storage");

// 这里可以补充更多的上报处理方式
const UPMODE = {
  AJAXGET: "ajaxget",
};

// 上报支持的方式集合
const UPMODE_OPS = Util.valuesOfObje(UPMODE);

// 内容转换
function transporter(content) {
  if (Util.isJsonString(content)) {
    content = JSON.parse(content);
  }
  if (!Util.isJson(content)) {
    content = undefined;
    baseConfig.__debug && console.warn("report content invalid");
  }

  // 获取通用属性
  const vhallSuper = storage.get("VHALLSUPER") || {};
  // 合并通用属性
  content = Util.objMerge(vhallSuper, content);
  if (Object.getOwnPropertyNames(content).length === 0) {
    content = undefined;
  }
  baseConfig.__debug && console.log("send content: ", content);

  return content ? Util.b64EncodeUnicode(JSON.stringify(content)) : content;
}

// 将字符串或二进制值转换成Base64编码字符串
function doBtoa(content) {
  let token = "";
  if (Util.isJsonString(content)) {
    token = window.btoa(content);
  } else if (Util.isJson(content)) {
    token = window.btoa(JSON.stringify(content));
  }
  return token;
}

/**
 * 获取真实的上报选项
 * @param {*} upMode
 */
function getReportOptions(upMode) {
  let mode = upMode && UPMODE_OPS.includes(upMode) ? upMode : baseConfig.upMode;
  const url = mode === UPMODE.AJAXGET ? baseConfig.uploadUrl : undefined;
  if (!url) {
    return {
      errCode: 410,
    };
  }
  if (!Util.checkURL(url)) {
    return {
      errCode: 411,
    };
  }
  return {
    mode,
    url,
  };
}

/**
 * 统一上报方法
 */
function upLog(log) {
  // log.success = function (res,xhr) {
  //   baseConfig.__debug && console.log("report success.");
  // };
  // log.error = function () {
  //   baseConfig.__debug && console.error("report faild:", ex);
  // };
  if (log.mode === UPMODE.AJAXGET) {
    new LogAjax().get(log);
    return;
  }
  new LogAjax().get(log);
}

module.exports = {
  UPMODE_OPS,
  transporter,
  doBtoa,
  getReportOptions,
  upLog,
};
