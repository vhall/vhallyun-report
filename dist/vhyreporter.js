/*!
 * VhyReporter v1.0.8
 * For log tracking
 * Copyright vhall
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VhyReporter"] = factory();
	else
		root["VhyReporter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

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
    idprefix: ""
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  /**
   * Created by yangxy on 2021/12/06.
   * 通用工具模块
   */

  /**
   * 转换参数类型
   * eg. paramType(123)==='Number'
   * @param {*} param
   * @returns
   */
  function paramType(param) {
    return Object.prototype.toString.call(param).replace("[object ", "").replace("]", "");
  }
  /**
   * 检测url是否http(s)链接
   * @param {*} url
   * @returns
   */


  function checkURL(url) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url);
  }
  /**
   * 判断是否非空json对象
   * @param {*} obj
   * @returns
   */


  function isJson(obj) {
    return _typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
  }
  /**
   * 判断是否非空json字符串
   */


  function isJsonString(str) {
    if (typeof str == "string") {
      try {
        if (_typeof(JSON.parse(str)) == "object") {
          return true;
        }
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  module.exports = {
    paramType: paramType,
    checkURL: checkURL,
    isJson: isJson,
    isJsonString: isJsonString
  };
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var _require = __webpack_require__(3),
      UPMODE_OPS = _require.UPMODE_OPS,
      getReportOptions = _require.getReportOptions,
      doBtoa = _require.doBtoa,
      upLog = _require.upLog;

  var baseConfig = __webpack_require__(0);

  var VhallYunReport = /*#__PURE__*/function () {
    function VhallYunReport() {
      _classCallCheck(this, VhallYunReport);

      return this;
    }
    /**
     * 设置配置信息,有需要可以补充
     */


    _createClass(VhallYunReport, [{
      key: "setConfig",
      value: function setConfig(option) {
        if (option) {
          // 设置基本url
          if (option.uploadUrl) {
            baseConfig.uploadUrl = option.uploadUrl;
          } // 设置id前缀


          if (option.idprefix) {
            baseConfig.idprefix = option.idprefix;
          } // 设置上报模式


          if (UPMODE_OPS.includes(option.upMode)) {
            baseConfig.upMode = option.upMode;
          }

          if (option.__debug) {
            baseConfig.__debug = 1;
          }
        }

        return this;
      } // 版本号

    }, {
      key: "version",
      get: function get() {
        return "1.0.8";
      } // 获取上报方式

    }, {
      key: "baseConfig",
      get: function get() {
        return baseConfig;
      }
      /**
       * vhall基础平台sdk定制使用
       * @param {*} code
       * @param {*} data
       * @param {*} options
       */

    }, {
      key: "scout",
      value: function scout(code, content, options) {
        // 上报方式
        var params = getReportOptions(options === null || options === void 0 ? void 0 : options.upMode);

        if (params.errCode) {
          baseConfig.__debug && console.error("uploadUrl invalid");
          return;
        } // 加密token


        var token = "";

        if (content) {
          var _token = doBtoa(content);

          if (!_token) {
            baseConfig.__debug && console.warn("report content invalid");
            return;
          }
        } // 组织数据


        params.data = {
          k: code,
          id: "".concat(baseConfig.idprefix).concat(Date.now()),
          token: token
        };
        upLog(params);
      }
    }]);

    return VhallYunReport;
  }();

  module.exports = new VhallYunReport();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var baseConfig = __webpack_require__(0);

  var util = __webpack_require__(1);

  var LogAjax = __webpack_require__(4); // 这里可以补充更多的上报处理方式


  var UPMODE = {
    AJAXGET: "ajaxget"
  }; // 上报支持的方式集合

  var UPMODE_OPS = Object.values(UPMODE); // 将字符串或二进制值转换成Base64编码字符串

  function doBtoa(content) {
    var token = "";

    if (util.isJsonString(content)) {
      token = window.btoa(content);
    } else if (util.isJson(content)) {
      token = window.btoa(JSON.stringify(content));
    }

    return token;
  }
  /**
   * 获取真实的上报选项
   * @param {*} upMode
   */


  function getReportOptions(upMode) {
    var mode = upMode && UPMODE_OPS.includes(upMode) ? upMode : baseConfig.upMode;
    var url = mode === UPMODE.AJAXGET ? baseConfig.uploadUrl : undefined;

    if (!url) {
      return {
        errCode: 410
      };
    }

    if (!util.checkURL(url)) {
      return {
        errCode: 411
      };
    }

    return {
      mode: mode,
      url: url
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
    UPMODE_OPS: UPMODE_OPS,
    doBtoa: doBtoa,
    getReportOptions: getReportOptions,
    upLog: upLog
  };
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var util = __webpack_require__(1);

  var baseConfig = __webpack_require__(0);

  function getJSON(data) {
    if (util.paramType(data) === "String") {
      if (data.indexOf("\n") > -1) {
        data = data.replace(/[\r\n]/g, "");
      }

      try {
        return JSON.parse(data);
      } catch (e) {}

      return {
        code: 200
      };
    } else if (util.paramType(data) === "Object") {
      return data;
    } else {
      return {
        code: 200
      };
    }
  }

  function GetHttpObj() {
    var httpobj = null;

    if (window.XDomainRequest) {
      return new window.XDomainRequest();
    }

    if (window.XMLHttpRequest) {
      httpobj = new window.XMLHttpRequest();
    } else {
      try {
        httpobj = new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        try {
          httpobj = new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (e1) {
          httpobj = new window.XMLHttpRequest();
        }
      }
    }

    return httpobj;
  }

  function xmlhttp(_this) {
    var sendStatus = false;
    var xhr = new GetHttpObj(); // xhr.setRequestHeader("reqt",+new Date())
    // xhr.setRequestHeader("reqv",1)

    xhr.onload = function () {
      if (sendStatus) return;
      sendStatus = true;

      _this.success(getJSON(xhr.responseText), xhr);
    };

    xhr.onerror = function () {
      if (sendStatus) return;
      sendStatus = true;

      _this.error(getJSON(xhr.responseText), xhr);
    };

    xhr.onreadystatechange = function (xhr, _this) {
      return function () {
        if (xhr.readyState === 4) {
          // try {
          //   if (
          //     xhr.getAllResponseHeaders().indexOf("Date") > -1 ||
          //     xhr.getAllResponseHeaders().indexOf("date") > -1
          //   ) {
          //     var time = +new Date();
          //     var date =
          //       xhr.getResponseHeader("Date") || xhr.getResponseHeader("date");
          //     if (date && baseConfig.base.allowTimeCheck === true) {
          //       Storage.setLocal("VHALLYUNSERVERTIME", +new Date(date) - time);
          //     } else {
          //       Storage.setLocal("VHALLYUNSERVERTIME", 0);
          //     }
          //   }
          // } catch (e) {}
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            if (sendStatus) return;
            sendStatus = true;

            _this.success(getJSON(xhr.responseText), xhr);
          } else {
            if (sendStatus) return;
            sendStatus = true;

            _this.error();
          }

          xhr.onreadystatechange = null;
          xhr.onload = null;
        }
      };
    }(xhr, _this);

    try {
      xhr.open(_this.type, _this.url, true); // xhr.setRequestHeader("Content-Type","multipart/form-data")

      try {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      } catch (e) {} //  xhr超时设置


      var timeNum = baseConfig.sendDataTimeout;

      if (_this.type === "GET") {
        timeNum = baseConfig.getDataTimeout;
        xhr.send(null);
      } else {
        xhr.send(_this.data);
      }

      if (util.paramType(timeNum) === "Number") {
        if (util.paramType(xhr.timeout) === "Number") {
          xhr.timeout = timeNum;
        } else {
          var timeCallback = function (xhr) {
            return function () {
              xhr.abort();
            };
          }(xhr);

          setTimeout(timeCallback, timeNum);
        }
      }
    } catch (e) {}
  }

  function ajax() {
    this.url = "";
    this.data = "";
    this.type = "GET";

    this.success = function () {};

    this.error = function () {};
  }

  ajax.prototype.get = function (option) {
    var param = [];

    for (var key in option.data) {
      param.push(key + "=" + encodeURIComponent(option.data[key]));
    }

    var url = option.url.indexOf("?") > -1 ? option.url + "&" + param.join("&") : option.url + "?" + param.join("&");
    this.url = url;
    this.data = option.data;
    this.type = "GET";

    this.success = option.success || function () {};

    this.error = option.error || function () {};

    xmlhttp(this);
  };

  ajax.prototype.post = function (option) {
    this.url = option.url;
    this.data = option.data;
    this.type = "POST";

    this.success = option.success || function () {};

    this.error = option.error || function () {};

    xmlhttp(this);
  };

  module.exports = ajax;
});

/***/ })
/******/ ]);
});