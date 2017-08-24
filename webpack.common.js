/* eslint no-console:"off" */
const { resolve } = require('path');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: resolve('src'),
	entry: {
		app: ['babel-polyfill','./bootstrap.js']
	},
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};