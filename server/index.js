var express = require('express');
var bp = require('body-parser');
var path = require('path');
var opn = require('opn');
var main = require('./routes/main.js');
var devSever = require('./devSever.js');

var isProduction = process.env.NODE_ENV === 'production';
var publicPath = path.resolve(__dirname,'../public');
var app = express();
devSever = devSever(app);
if(!isProduction){
    devSever.next();
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
        res.sendFile(path.resolve(publicPath,'index.html'));
    })
}
else{
    devSever.next();
}
app.listen(3000,function onStart(){
    console.log("Node server started on 3000");
    opn('http://localhost:3000');
});