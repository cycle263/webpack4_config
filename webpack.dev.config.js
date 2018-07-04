const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[hash:5].js',
    chunkFilename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    hot: true,  // 热更新(HMR)不能和[chunkhash]同时使用
    historyApiFallback: true
  },
  optimization: {
    minimize: false,   // 不压缩代码，替代optimize.UglifyJsPlugin
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dev-manifest.json'),
    }),
    new HtmlWebpackPlugin({
      title: 'webpack4 入门教程',
      template: './indexDev.html',
      environment: env,
    }),
  ]
});