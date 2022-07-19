const path = require("path");
const webpack = require("webpack");
const { version } = require("./package.json");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `vhyreporter.js`,
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
