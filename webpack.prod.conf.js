const path = require("path");
const { version } = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");
const sharedConfig = require("./webpack.base.conf");

const buildConf = Object.assign({}, sharedConfig, {
  output: {
    path: path.resolve(__dirname, "release"),
    filename: `vhyreport-${version}.min.js`,
  },
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
