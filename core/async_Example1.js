var fs = require("fs");

var fh;

fs.open("test.txt","r",function(f_loc_err, f_handle){
  if(f_loc_err == null){
    fh = f_handle;
    var b = new Buffer(100000);
    fs.read(fh,b,0,100000,null,function(f_hl_err,b_read){
        if(f_hl_err == null){
        console.log(b.toString("utf8",0,b_read));
        fs.close(fh);
      }else{
        console.log("failed to read the file due to "+ f_hl_err.message);
      }
    });
  }else{
    console.log("Sorry File not exist / read error bcs: "+ f_loc_err.message );
  }

});


// Try catch block in Async function

(function(){
  setTimeout(function(){
    try{
        throw new Error("error thrown");
    }catch(e){
      console.log(e.message + " and error cached"+ "in asyncronous style");
    }
  },2000);
})();
