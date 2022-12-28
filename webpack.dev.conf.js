const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const sharedConfig = require("./webpack.base.conf");

const buildConf = Object.assign({}, sharedConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    open: true,
    openPage: "test.html",
    host: "localhost",
    inline: true,
    hot: true,
    port: 9095,
  },
});

buildConf.plugins.push(
  new htmlWebpackPlugin({
    template: path.join(__dirname, "public", "test.html"),
    filename: "test.html",
    inject: false,
  })
);

module.exports = buildConf;
