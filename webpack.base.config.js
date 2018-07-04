// webpack init
const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json'); // 引入package.json
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.WEBPACK_ENV;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  performance: {
    hints: false 	// 关闭warning日志信息
  },
  stats: {  // 打包日志信息
    entrypoints: false,
    children: false,
    modules: false,
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
          name: './images/[name].[hash:5].[ext]'
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
      'process.env.WEBPACK_ENV': JSON.stringify(env || 'production'),
      'VERSION': pkg.version
    }),
    new webpack.HashedModuleIdsPlugin(),  // 根据模块的相对路径生成一个四位数的hash作为模块id
  ],
};