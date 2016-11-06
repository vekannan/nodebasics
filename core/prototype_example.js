function shape(){

}

shape.prototype.x = 0;
shape.prototype.y = 0;

shape.prototype.move = function(x,y){
  this.x = x;
  this.y = y;
}

shape.prototype.distatnce_from_origin = function(){
  return Math.sqrt(this.x*this.x + this.y*this.y);
}

shape.prototype.area = function(){
  throws.exception();
}

var s = new shape();
s.move(10,10);
console.log(s.distatnce_from_origin());

function square(){

}

square.prototype = new shape();
square.prototype._prototype = shape.prototype;

square.prototype._width = 0;

square.prototype.area = function(){
  return this._width*this._width;
}

var sq = new square();
sq._width = 10;
sq.move(20,20);
console.log(sq.distatnce_from_origin());
console.log(sq.area());


function rectangle(){

}

rectangle.prototype = new square();
rectangle.prototype._prototype = square.prototype;

rectangle._height = 0;

rectangle.prototype.area = function(){
  return this._width*this._height;
}


var re = new rectangle();
re._width = 10;
re._height = 20;
re.move(20,20);
console.log(re.area());
