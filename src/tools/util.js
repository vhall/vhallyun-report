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
  return Object.prototype.toString
    .call(param)
    .replace("[object ", "")
    .replace("]", "");
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
  return (
    typeof obj == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
    !obj.length
  );
}

/**
 * 判断是否非空json字符串
 */
function isJsonString(str) {
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
}

module.exports = {
  paramType,
  checkURL,
  isJson,
  isJsonString,
};
