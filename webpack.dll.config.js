const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json'); // 引入package.json
const env = process.env.WEBPACK_ENV;

module.exports = {
  entry: {
    dev: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, './static'),
    filename: '[name].dll.[chunkhash:5].js',
    library: '[name]_lib_[chunkhash:5]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_lib_[chunkhash:5]',
      context: __dirname
    }),
    new CleanWebpackPlugin('./static'),
    new AssetsPlugin({
      filename: './static/webpack.assets.js',
      processOutput: assets => `window.WEBPACK_ASSETS = ${JSON.stringify(assets)}`
    })
  ],
  optimization: {
    minimize: true
  }
};