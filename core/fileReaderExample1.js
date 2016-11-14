var fs = require('fs'),
assync = require('async');


function asyncFileReader(path, callback){
  fs.open(path,'r',function(error,fh){
    if(error){
      callback(error);
      return;
    }
    fs.fstat(fh, function(err,stats){
      if(err){
        callback(err);
        return;
      }
      if(stats.isFile()){
        var b = new Buffer(10000);
        fs.read(fh, b , 0, 10000, null, function(error, br, buf){
          if(error){
            callback(error);
            return;
          }
          fs.close(fh, function(error){
            if(error){
              calback(error);
              return;
            }
            callback(null, b.toString('utf8', 0 ,br));
          });
        });
      }else{
        callback(new Error('is not a file'));
        return;
      }
    });
  })
};


asyncFileReader("../resources/file1.txt",function(error, content){
  if(error){
    console.log('Error Message'+ error.message);
  }

  console.log("File Content: \n" + content );

});
