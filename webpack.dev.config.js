const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname),
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./vendors-manifest.json'),
    }),
  ]
});