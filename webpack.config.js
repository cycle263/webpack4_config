const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
	output: {
		filename: '[name].[chunkhash:5].js',
		chunkFilename: '[name].[chunkhash:5].js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: env,
	devtool: 'source-map',	// map模式
	plugins: [
		new CleanWebpackPlugin('dist'),
		new webpack.DllReferencePlugin({
			manifest: require('./vendors-manifest.json'),
		}),
	]
});