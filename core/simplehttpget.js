var http = require('http'),
    fs   = require('fs'),
  //  url  = require('url');
    file_dir_module = require('./readDir'),
    read_file_module = require('./readFile');
    console.log(module);
    console.log(file_dir_module);

  function handle_request(req,resp){
      if(req.url == '/album'){
        album_Request_Handler(req,resp);
      }else if((req.url.substr(7,13) == 'album1')){
        album_File_Request_Handler(req,resp);
      }else{
        resp.writeHead(503,{'content-type':'application/json'});
        resp.end(JSON.stringify({'error':'invalid URL'}));
      }
  }

  function album_Request_Handler(req, resp){
      console.log('request method is ' + req.method + ' and req URL is ' + req.url);
      file_dir_module(function(error,content){
        if(error != null){
          resp.writeHead(503,{'content-type':'application/json'});
          resp.end(JSON.stringify({'error':'file error','errorMessage':''+error.message+''}));
        }else{
          resp.writeHead(200,{'content-type':'application/json'});
          resp.end(JSON.stringify({'error':null,'content':{content}}));
        }
      });
  }


  function album_File_Request_Handler(req, resp){
      console.log('request method is ' + req.method + ' and req URL is ' + req.url);
      read_file_module(req.url.substr(7,13),function(error,content){
        if(error != null){
          resp.writeHead(503,{'content-type':'application/json'});
          resp.end(JSON.stringify({'error':'file error','errorMessage':''+error.message+''}));
        }else{
          resp.writeHead(200,{'content-type':'application/json'});
          resp.end(JSON.stringify({'error':null,'content':{content}}));
        }
      });
  }
  var server = http.createServer(handle_request);
  server.listen(8080);
