const path = require("path");
const webpack = require("webpack");
const { version } = require("./package.json");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  entry: {
    vhyreporter: "./src/index.js",
    "vhyreporter.min": "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "VhyReporter", // 导出库名
    libraryTarget: "umd", // 采用UMD(universal module definition)格式打包
    globalObject: "this",
  },
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        include: [resolve("src")],
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
