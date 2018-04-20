const path = require('path');
const baseConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const env = process.env.WEBPACK_ENV;
console.log('environment: ', env);

module.exports = merge(baseConfig, {
	mode: env,
	devServer: {
		contentBase: path.resolve(__dirname)
	},
	devtool: 'source-map',	// map模式
	plugins: [
		new CleanWebpackPlugin('dist')
	]
});