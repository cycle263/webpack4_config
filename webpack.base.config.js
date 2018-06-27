// webpack init
const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json'); // 引入package.json
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.WEBPACK_ENV;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    vendors: Object.keys(pkg.dependencies)
  },
  output: {
    filename: '[name].[chunkhash:5].js',
    chunkFilename: '[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: env,
  performance: {
    hints: false 	// 关闭warning日志信息
  },
  resolve: {
    alias: {
      imagesPath: path.resolve(__dirname, "src/assets/images/")
    }
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
    new HtmlWebpackPlugin({
      title: 'webpack4 入门教程',
      template: './index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /node_modules\//,
          name: 'vendors'
        }
      }
    },
    minimize: false   // 压缩代码，替代optimize.UglifyJsPlugin
  }
};