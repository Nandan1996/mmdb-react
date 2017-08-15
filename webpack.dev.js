/* eslint no-console:"off" */
const { resolve } = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
module.exports = merge(common,{
	output: {
		filename: 'bundle.[name].js',
		path: resolve('public'),
		pathinfo: true,
		publicPath: '/'
	},
	devtool: 'eval',
	module: {
		loaders: [
			{
				enforce:  "pre",
				test:  /\.js$/,
				exclude:  /node_modules/,
				use:  {
					loader:  'eslint-loader',
					options:  {
						fix: true
					}
				}
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.[name].css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('devlopment')
		}),
	],
});
