/* eslint no-console:"off" */
const { resolve } = require('path');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const webpack = require('webpack');
module.exports = env => {
	const { ifProd, ifNotProd } = getIfUtils(env);
	const config = {
		context: resolve('src'),
		entry: {
			app: './bootstrap.js'
		},
		output: {
			filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
			path: resolve('public'),
			pathinfo: ifNotProd(),
			publicPath: '/'
		},
		devtool: ifProd('source-map', 'eval'),
		module: {
			loaders: removeEmpty([
				ifNotProd({
					enforce:  "pre",
					test:  /\.js$/,
					exclude:  /node_modules/,
					use:  {
						loader:  'eslint-loader',
						options:  {
							fix: true
						}
					}
				}),
				{ test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				}
			])
		},
		plugins: removeEmpty([
			new ProgressBarPlugin(),
			new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
			new HtmlWebpackPlugin({
				template: './index.html'
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': ifProd(JSON.stringify('production'))
			}),
			ifProd(new UglifyJSPlugin({
				sourceMap:true
			}))
		]),
		devServer: {
			proxy: {
				"/api/*": "http://localhost:3000"
			},
			historyApiFallback: true
		}
	};
	return config;
};