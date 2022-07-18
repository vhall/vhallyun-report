const path = require("path");
const webpack = require("webpack");
const { version } = require("./package.json");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `vhyreport-${version}.js`,
    libraryTarget: "umd", // 采用UMD(universal module definition)格式打包
    library: "VhyReport", // 导出库名
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        include: [resolve("src")],
        exclude: /(node_modules|bower_components)/,
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
