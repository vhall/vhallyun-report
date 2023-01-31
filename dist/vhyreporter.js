/*!
 * VhyReporter v1.1.7
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    // 启用上报
    enable: true,
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
    // 追加上报时间（ms）
    reportTime: true
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
  var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
  var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  var concat = Function.bind.call(Function.call, Array.prototype.concat);
  var keys = Reflect.ownKeys;
  function Util() {}

  /**
   * 转换参数类型
   * eg. paramType(123)==='Number'
   * @param {*} param
   * @returns
   */
  Util.prototype.paramType = function (param) {
    return Object.prototype.toString.call(param).replace("[object ", "").replace("]", "");
  };

  /**
   * 检测url是否http(s),或 // 开头的链接
   * @param {*} url
   * @returns
   */
  Util.prototype.checkURL = function (url) {
    return /^(http(s)?:)?\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url);
  };

  /**
   * 判断是否非空json对象
   * @param {*} obj
   * @returns
   */
  Util.prototype.isJson = function (obj) {
    return _typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
  };

  /**
   * 判断是否非空json字符串
   */
  Util.prototype.isJsonString = function (str) {
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
  };
  Util.prototype.ArrayToObj = function (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = "";
    }
    return obj;
  };
  Util.prototype.keyValueToObje = function (key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
  };
  Util.prototype.toObj = function (param1, param2) {
    var obj = {};
    if (this.paramType(param1) === "String") {
      obj = this.keyValueToObje(param1, param2);
      return obj;
    }
    if (this.paramType(param1) === "Array") {
      obj = this.ArrayToObj(param1);
      return obj;
    }
    if (this.paramType(param1) === "Object") {
      return param1;
    }
    return obj;
  };
  Util.prototype.arrayUnique = function (arr) {
    var tmpArr = [];
    var hash = {}; // hash为hash表
    for (var i = 0; i < arr.length; i++) {
      if (!hash[arr[i]]) {
        // 如果hash表中没有当前项
        hash[arr[i]] = true; // 存入hash表
        tmpArr.push(arr[i]); // 存入临时数组
      }
    }

    return tmpArr;
  };
  Util.prototype.objMerge = function (parentObj, part) {
    if (this.paramType(parentObj) !== "Object" || this.paramType(part) !== "Object") {
      return parentObj;
    }
    var obj = {};
    for (var key in parentObj) {
      obj[key] = parentObj[key];
    }
    for (var partKey in part) {
      var partValue = part[partKey];
      var objValue = obj[partKey];
      var partValueType = this.paramType(partValue);
      var objValueType = this.paramType(objValue);
      if (objValue && objValueType === "Object" && partValueType === "Object") {
        obj[partKey] = this.objMerge(objValue, partValue);
      } else if (objValueType === "Array" && partValueType === "Array") {
        obj[partKey] = this.arrayMergeUnique(objValue, partValue);
      } else if (partValueType === "Function" && objValueType === "Function") {
        obj[partKey] = this.compose(objValue, partValue);
      } else {
        obj[partKey] = partValue;
      }
    }
    return obj;
  };
  Util.prototype.compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };
  Util.prototype.arrayMergeUnique = function (arr1, arr2) {
    arr1.push.apply(arr1, arr2);
    return this.arrayUnique(arr1);
  };
  Util.prototype.b64EncodeUnicode = function (str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  };
  Util.prototype.valuesOfObje = function (obj) {
    if (!Object.values) {
      return reduce(keys(obj), function (v, k) {
        return concat(v, typeof k === "string" && isEnumerable(obj, k) ? [obj[k]] : []);
      }, []);
    }
    return Object.values(obj);
  };
  module.exports = new Util();
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

  var store = new Map();
  module.exports = store;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  var _require = __webpack_require__(4),
    UPMODE_OPS = _require.UPMODE_OPS,
    getReportOptions = _require.getReportOptions,
    transporter = _require.transporter,
    upLog = _require.upLog;
  var Util = __webpack_require__(1);
  var storage = __webpack_require__(2);
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
          // 设置是启用还是禁用
          if (typeof option.enable === "boolean") {
            baseConfig.enable = option.enable;
          }

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
    }, {
      key: "version",
      get: function get() {
        return "1.1.7";
      }
      // 获取上报方式
    }, {
      key: "baseConfig",
      get: function get() {
        return baseConfig;
      }

      /**
       * 设置是启用还是禁用
       * @param {*} b  true: 启用； false: 禁用
       */
    }, {
      key: "setEnabled",
      value: function setEnabled(b) {
        baseConfig.enable = !!b;
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
        // 不启用
        if (!baseConfig.enable) return;
        try {
          // 上报方式
          var params = getReportOptions(options === null || options === void 0 ? void 0 : options.upMode);
          if (params.errCode) {
            baseConfig.__debug && console.error("uploadUrl invalid");
            return;
          }
          // 组织数据
          params.data = {
            k: code,
            id: "".concat(baseConfig.idprefix).concat(Date.now()),
            token: transporter(content, code)
          };
          // 执行上报
          upLog(params);
        } catch (e) {}
      }

      /**
       * 注册多个通用属性
       */
    }, {
      key: "registerSuperProperties",
      value: function registerSuperProperties(key, value, callback) {
        if (Util.paramType(key) === "Object" && Util.paramType(value) === "Function") {
          callback = value;
          value = "";
        } else if (Util.paramType(key) === "String" && Util.paramType(value) === "Function") {
          value = value.call(value);
        }
        var obj = Util.toObj(key, value);
        for (var itemKey in obj) {
          if (Util.paramType(obj[itemKey]) === "Function") {
            obj[itemKey] = obj[itemKey].call(obj[itemKey]);
          }
        }
        var vhallSuper = storage.get("VHALLSUPER") || {};
        var saveVhallSuper = Util.objMerge(vhallSuper, obj);
        storage.set("VHALLSUPER", saveVhallSuper);
        Util.paramType(callback) === "Function" && callback.call(callback);
      }
    }, {
      key: "getSuperProperties",
      value: function getSuperProperties(callback) {
        return storage.get("VHALLSUPER") || {};
      }
    }, {
      key: "clearSuperProperties",
      value: function clearSuperProperties(callback) {
        storage["delete"]("VHALLSUPER");
      }
    }]);
    return VhallYunReport;
  }();
  module.exports = new VhallYunReport();
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

  var baseConfig = __webpack_require__(0);
  var Util = __webpack_require__(1);
  var LogAjax = __webpack_require__(5);
  var storage = __webpack_require__(2);

  // 这里可以补充更多的上报处理方式
  var UPMODE = {
    AJAXGET: "ajaxget"
  };

  // 上报支持的方式集合
  var UPMODE_OPS = Util.valuesOfObje(UPMODE);

  // 内容转换
  function transporter(content, k) {
    if (Util.isJsonString(content)) {
      content = JSON.parse(content);
    }
    if (!Util.isJson(content)) {
      content = undefined;
      baseConfig.__debug && console.warn("report content invalid");
    }

    // 获取通用属性
    var vhallSuper = storage.get("VHALLSUPER") || {};
    // 合并通用属性
    content = Util.objMerge(vhallSuper, content);
    if (Object.getOwnPropertyNames(content).length === 0) {
      content = undefined;
    }

    // 补充上报时间
    if (content && baseConfig.reportTime) {
      content.reportTime = Date.now();
    }
    baseConfig.__debug && console.log("send k: ", k, "; content:", content);
    return content ? Util.b64EncodeUnicode(JSON.stringify(content)) : content;
  }

  // 将字符串或二进制值转换成Base64编码字符串
  function doBtoa(content) {
    var token = "";
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
    var mode = upMode && UPMODE_OPS.includes(upMode) ? upMode : baseConfig.upMode;
    var url = mode === UPMODE.AJAXGET ? baseConfig.uploadUrl : undefined;
    if (!url) {
      return {
        errCode: 410
      };
    }
    if (!Util.checkURL(url)) {
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
    transporter: transporter,
    doBtoa: doBtoa,
    getReportOptions: getReportOptions,
    upLog: upLog
  };
});

/***/ }),
/* 5 */
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

  var Util = __webpack_require__(1);
  var baseConfig = __webpack_require__(0);
  function getJSON(data) {
    if (Util.paramType(data) === "String") {
      if (data.indexOf("\n") > -1) {
        data = data.replace(/[\r\n]/g, "");
      }
      try {
        return JSON.parse(data);
      } catch (e) {}
      return {
        code: 200
      };
    } else if (Util.paramType(data) === "Object") {
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
    var xhr = new GetHttpObj();
    // xhr.setRequestHeader("reqt",+new Date())
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
      xhr.open(_this.type, _this.url, true);
      // xhr.setRequestHeader("Content-Type","multipart/form-data")
      try {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      } catch (e) {}

      //  xhr超时设置
      var timeNum = baseConfig.sendDataTimeout;
      if (_this.type === "GET") {
        timeNum = baseConfig.getDataTimeout;
        xhr.send(null);
      } else {
        xhr.send(_this.data);
      }
      if (Util.paramType(timeNum) === "Number") {
        if (Util.paramType(xhr.timeout) === "Number") {
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