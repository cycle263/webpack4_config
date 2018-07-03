// 完整的开发环境配置，因为router原因不可在本地跑
const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json'); // 引入package.json
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.WEBPACK_ENV;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  performance: {
    hints: false 	// 关闭warning日志信息
  },
  resolve: {
    alias: {
      imagesPath: path.resolve(__dirname, "src/assets/images/")
    }
  },
  output: {
    filename: '[name].[chunkhash:5].js',
    chunkFilename: '[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: env,
  devtool: 'source-map',	// map模式
  optimization: {

    minimize: false   // 压缩代码，替代optimize.UglifyJsPlugin
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'es2017']
      }
    }, {
      test: /\.(less|css)$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'less-loader'],
        fallback: 'style-loader'
      })
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[hash:5].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name]-style.[hash:5].css'),
    new webpack.BannerPlugin({
      banner:
        "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file] -- by Cycle"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'VERSION': pkg.version
    }),
    new webpack.HashedModuleIdsPlugin(),  // 根据模块的相对路径生成一个四位数的hash作为模块id
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'webpack4 入门教程',
      template: './index.html',
      environment: env,
    }),
  ],
};