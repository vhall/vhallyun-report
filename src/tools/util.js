/**
 * 通用工具模块
 * @param {*} param
 * @returns
 */
function paramType(param) {
  return Object.prototype.toString
    .call(param)
    .replace("[object ", "")
    .replace("]", "");
}
function checkURL(url) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url);
}

function isJson(obj) {
  return (
    typeof obj == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
    !obj.length
  );
}

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
