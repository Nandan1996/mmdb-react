const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
let config = require('../webpack.config.js');
module.exports = function*(app){
    config = config({dev:true});
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    yield null;
    app.get('*',function(req,res){
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../public/index.html')));
        res.end();
    });
}