var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.json({"message" : "myfirst express code"});
});

app.get('/home',function(req,res){
  res.json({"message" : "myfirst express code at home "});
});

app.listen(process.env.port || 8080);
