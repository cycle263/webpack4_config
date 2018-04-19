const path = require('path');
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname)
  }
});
