/**
 * Created by yangxy on 2021/12/06.
 * 通用工具模块
 */

function Util() {}

/**
 * 转换参数类型
 * eg. paramType(123)==='Number'
 * @param {*} param
 * @returns
 */
Util.prototype.paramType = function (param) {
  return Object.prototype.toString
    .call(param)
    .replace("[object ", "")
    .replace("]", "");
};

/**
 * 检测url是否http(s)链接
 * @param {*} url
 * @returns
 */
Util.prototype.checkURL = function (url) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url);
};

/**
 * 判断是否非空json对象
 * @param {*} obj
 * @returns
 */
Util.prototype.isJson = function (obj) {
  return (
    typeof obj == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
    !obj.length
  );
};

/**
 * 判断是否非空json字符串
 */
Util.prototype.isJsonString = function (str) {
  if (typeof str == "string") {
    try {
      if (typeof JSON.parse(str) == "object") {
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
  if (
    this.paramType(parentObj) !== "Object" ||
    this.paramType(part) !== "Object"
  ) {
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
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    })
  );
};

module.exports = new Util();
