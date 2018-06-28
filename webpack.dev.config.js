const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config");
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
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./vendors-manifest.json'),
    }),
  ]
});