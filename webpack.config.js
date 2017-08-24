const prodConfig = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');
const {getIfUtils} = require('webpack-config-utils');
module.exports = (env) =>{
	const {ifProd} = getIfUtils(env);
	return ifProd(prodConfig,devConfig);
};