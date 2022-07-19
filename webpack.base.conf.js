/*
 * @Author: xinyuan.yang xinyuan.yang@vhall.com
 * @Date: 2022-07-18 17:21:25
 * @LastEditors: xinyuan.yang xinyuan.yang@vhall.com
 * @LastEditTime: 2022-07-19 14:09:04
 * @FilePath: /log-reporter/webpack.base.conf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const webpack = require("webpack");
const { version } = require("./package.json");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.js`,
    library: "VhyReporter", // 导出库名
    libraryTarget: "umd", // 采用UMD(universal module definition)格式打包
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        include: [resolve("src")],
        // exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  // 插件
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
    }),
  ],
};
