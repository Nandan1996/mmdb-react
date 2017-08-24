/* eslint no-console:"off" */
const { resolve } = require('path');
const common = require('./webpack.common.js');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');
module.exports = merge(common,{
	output: {
		filename: 'bundle.[name].[chunkhash].js',
		path: resolve('public'),
		publicPath: '/'
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('styles.[name].[chunkhash].css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
});