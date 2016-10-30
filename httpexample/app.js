var http = require('http');

//create server

var server = http.createServer(function(req,resp){
  resp.writeHead(200,{"content-type":"text/plain"});
  resp.end('Hello World');
});

server.listen(8080);
