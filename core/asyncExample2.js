
setTimeout(function(){
  console.log("prints after 3 secs");
},200);

var temp = 100000000, intersection = [];

function  compute_Intersection(callback){
compute();
function compute(){
  while(temp > 0){
    temp--;
    if(temp % 10000 == 0){
      intersection.push(temp);
      break;
    }

  }

  if(temp > 0){
    console.log(temp + "===>" + intersection.length);
    setImmediate(compute);
  }else{
    callback(intersection.length);
  }

}

}


compute_Intersection(function(val){
  console.log(val);
});
