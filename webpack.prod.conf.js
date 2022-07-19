/*
 * @Author: xinyuan.yang xinyuan.yang@vhall.com
 * @Date: 2022-07-18 17:21:25
 * @LastEditors: xinyuan.yang xinyuan.yang@vhall.com
 * @LastEditTime: 2022-07-19 14:08:56
 * @FilePath: /log-reporter/webpack.prod.conf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const { version } = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");
const sharedConfig = require("./webpack.base.conf");

const buildConf = Object.assign({}, sharedConfig, {
  mode: "production",
  optimization: {
    minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       compress: {
    //         drop_console: true,
    //       },
    //     },
    //   }),
    // ],
  },
});

module.exports = buildConf;
