const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json'); // 引入package.json
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = {
  entry: {
    vendors: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, './static'),
    filename: '[name].dll.js',
    library: '[name]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_lib',
      context: __dirname
    })
  ],
  optimization: {
    minimize: true
  }
};