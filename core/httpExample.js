var http = require('http'), qs = require('querystring');

function handleServer(req,resp){
  var formdata ;

  req.on('readable',function(){
    var r = req.read();
    console.log(r);
    if(typeof r == 'string'){
      formdata  += r;
    }else if(typeof r == 'object' && r instanceof Buffer ){
      formdata += r.toString("utf-8");
    }
  });

  req.on('end', function(){
    var out;
    if(!formdata){
        console.log('noform data');
    }else{
        var obj = qs.parse(formdata);
        out = 'I got formdata' + (JSON.stringify(obj));
    }
    resp.end(out);
  });

}

var s = http.createServer(handleServer);
s.listen(8080);
