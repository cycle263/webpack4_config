const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json'); // 引入package.json
const baseConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;

module.exports = merge(baseConfig, {
	output: {
		filename: '[name].[chunkhash:5].js',
		chunkFilename: '[name].[chunkhash:5].js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: env,
	optimization: {
		minimize: true,   // 压缩代码，替代optimize.UglifyJsPlugin
		splitChunks: {
			chunks: "all",
		},
		runtimeChunk: {
			name: "manifest"	// webpack模块依赖的初始化代码和依赖关系的hash映射
		},
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new HtmlWebpackPlugin({
			title: 'webpack4 入门教程',
			template: './index.html',
			environment: env,
		}),
	]
});