var express = require('express'),
app = express();

app.get('/getFirstExpress', function(req,resp){
    resp.send('Hello venkatesan Kannan');
});

app.listen(8080,function(){
  console.log("app is listerning on port 8080");
});
