const { UPMODE_OPS, getReportOptions, doBtoa, upLog } = require("./upload");

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
    // 上报方式
    const params = getReportOptions(options?.upMode);
    if (params.errCode) {
      baseConfig.__debug && console.error("uploadUrl invalid");
      return;
    }
    // 加密token
    let token = "";
    if (content) {
      const token = doBtoa(content);
      if (!token) {
        baseConfig.__debug && console.warn("report content invalid");
        return;
      }
    }

    // 组织数据
    params.data = {
      k: code,
      id: `${baseConfig.idprefix}${Date.now()}`,
      token,
    };
    upLog(params);
  }
}

module.exports = new VhallYunReport();
