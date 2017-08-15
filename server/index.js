var express = require('express');
var bp = require('body-parser');
var path = require('path');
var main = require('./routes/main.js');
var devSever = require('./devSever.js');

var isProduction = process.env.NODE_ENV === 'production';
var publicPath = path.resolve(__dirname,'../public');
var app = express();

if(!isProduction){
    devSever(app);
}
else{
    app.use(express.static(publicPath));
}
app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}); 
main.init(app);
if(isProduction){
    app.get('*',function(req,res){
        res.sendfile(path.resolve(publicPath,'index.html'));
    })
}
else{
    app.get('*',function(req,res){
        res.redirect('/');
    })
}
app.listen(3000,function onStart(){
    console.log("Node server started on 3000");
});