var express = require('express');
var bp = require('body-parser');
var main = require('./routes/main.js');

var app = express();
// app.use(express.static('../public'));
app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}); 
main.init(app);
app.get('/api/test',function(req,res){
    res.json({a:10,b:20});
})
app.listen(3000,function onStart(){
    console.log("Node server started...");
});
