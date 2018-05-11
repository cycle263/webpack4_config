const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
	mode: env,
	devtool: 'source-map',	// map模式
	plugins: [
		new CleanWebpackPlugin('dist'),
		new webpack.DllReferencePlugin({
			manifest: require('./vendors-manifest.json'),
		}),
	]
});