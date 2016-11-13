var fs   = require('fs');
readFileModule = function readFile(album_name,callback){
  console.log(album_name);
    fs.readdir('../album/'+album_name+'/', function(error, content){
      var file_name = [];
      (function iterator_function(i){

          if(i >= content.length){
              callback(error,file_name);
              return;
          }
          fs.stat('../album/'+album_name+'/'+ content[i], function(error, stats){
              if(error != null){
                callback(error);
                return;
              }

              if(stats.isFile())
                file_name.push(content[i]);
              else
                console.log(content[i] + " is not a file");
              iterator_function(i + 1);

          });

      })(0);
    });
}
module.exports = readFileModule;
