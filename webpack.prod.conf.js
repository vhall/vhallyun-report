const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const sharedConfig = require("./webpack.base.conf");
const { version } = require("./package.json");

const buildConf = Object.assign({}, sharedConfig, {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /min/, //入口文件带有min的才压缩
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  },
});
buildConf.plugins.push(
  new webpack.BannerPlugin({
    banner: `VhyReporter v${version}\r\nFor log tracking\r\nCopyright vhall`,
  })
);

module.exports = buildConf;
