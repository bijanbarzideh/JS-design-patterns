// Prototype
var Car = function(make, model, color){
  this.make = make;
  this.model = model;
  this.color = color;
};

Car.prototype.sayCar = function(){
  console.log("I own a " + this.make + " " + this.model ".")
};

var honda = new Car("honda", "civic", "red");
