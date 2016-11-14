var fs = require('fs'),
async = require('async');


exports.amFileReader = function asyncModuleFileReader(path, callback){
  var f;
  async.waterfall([
    function(cb){
      fs.open(path,'r',cb);
    },

    function(handle, cb){
      f = handle;
      fs.fstat(handle,cb);
    },

    function(stats ,cb){

      if(stats.isFile()){
        var bytes_read = -1;
        var b = new Buffer(10000);
        var content = '';
        // var b = new Buffer(10000);
        // fs.read(f, b , 0, 10000, null,cb);
        async.whilst(
          function(){
            return bytes_read != 0;
          },
          function(cb){
            fs.read(f, b, 0, 10000, null , function(err, br, buffer){
                if(err){
                  cb(err);
                  return;
                }
                bytes_read = br;
                if(br > 0)
                  content += b.toString('utf8', 0, br);
                cb(null);
            });
          },
          function(err, results){
              cb(err, content);
          }
        );
      } else {
        calback(new Error('is not a file'));
      }
    },

    function(file_content, cb){
      fs.close(f, function(error){
        if(error){
          calback(error);
        }else{
          callback(null, file_content);
        }
      });
    }
  ],function(error,results){
      calback(error,results);
  });
};
