const {
  UPMODE_OPS,
  getReportOptions,
  transporter,
  upLog,
} = require("./upload");
const Util = require("./tools/util");
const storage = require("./storage");
const baseConfig = require("./base-config");

class VhallYunReport {
  constructor() {
    return this;
  }

  /**
   * 设置配置信息,有需要可以补充
   */
  setConfig(option) {
    if (option) {
      // 设置基本url
      if (option.uploadUrl) {
        baseConfig.uploadUrl = option.uploadUrl;
      }

      // 设置id前缀
      if (option.idprefix) {
        baseConfig.idprefix = option.idprefix;
      }

      // 设置上报模式
      if (UPMODE_OPS.includes(option.upMode)) {
        baseConfig.upMode = option.upMode;
      }

      if (option.__debug) {
        baseConfig.__debug = 1;
      }
    }

    return this;
  }

  // 版本号
  get version() {
    return VERSION;
  }
  // 获取上报方式
  get baseConfig() {
    return baseConfig;
  }

  /**
   * vhall基础平台sdk定制使用
   * @param {*} code
   * @param {*} data
   * @param {*} options
   */
  scout(code, content, options) {
    try {
      // 上报方式
      const params = getReportOptions(options?.upMode);
      if (params.errCode) {
        baseConfig.__debug && console.error("uploadUrl invalid");
        return;
      }

      // 组织数据
      params.data = {
        k: code,
        id: `${baseConfig.idprefix}${Date.now()}`,
        token: transporter(content), // 加密token
      };
      // 执行上报
      upLog(params);
    } catch (e) {}
  }

  /**
   * 注册多个通用属性
   */
  registerSuperProperties(key, value, callback) {
    if (
      Util.paramType(key) === "Object" &&
      Util.paramType(value) === "Function"
    ) {
      callback = value;
      value = "";
    } else if (
      Util.paramType(key) === "String" &&
      Util.paramType(value) === "Function"
    ) {
      value = value.call(value);
    }
    var obj = Util.toObj(key, value);
    for (var itemKey in obj) {
      if (Util.paramType(obj[itemKey]) === "Function") {
        obj[itemKey] = obj[itemKey].call(obj[itemKey]);
      }
    }

    const vhallSuper = storage.get("VHALLSUPER") || {};
    const saveVhallSuper = Util.objMerge(vhallSuper, obj);
    storage.set("VHALLSUPER", saveVhallSuper);

    Util.paramType(callback) === "Function" && callback.call(callback);
  }

  getSuperProperties(callback) {
    return storage.get("VHALLSUPER") || {};
  }

  clearSuperProperties(callback) {
    storage.delete("VHALLSUPER");
  }
}

module.exports = new VhallYunReport();
