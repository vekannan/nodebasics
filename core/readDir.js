var fs   = require('fs');
readDirModule = function readDir(callback){
    fs.readdir('../album', function(error, content){

      var file_dir = [];
      (function iterator_function(i){

          if(i >= content.length){
              callback(error,file_dir);
              return;
          }
          fs.stat('../album/' + content[i] , function(error, stats){
              if(error != null){
                callback(error);
                return;
              }

              if(stats.isDirectory())
                file_dir.push(content[i]);
              else
                console.log(content[i] + " is not a directory");
              iterator_function(i + 1);

          });

      })(0);
    });
};

module.exports = readDirModule;
