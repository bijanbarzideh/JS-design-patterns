// Singleton
// A singleton is an object that will only ever have one instance.  In javascript, this can be forced or implied.  You’ve probably written singletons and haven’t even known it!


// insure an object only has one instance and has a global point of access to it
// Singleton ----------------------------------------------------------
// most common
var hondaSingleton = {
  make: 'Honda',
  model: 'Civic',
  color: 'Red';
  sayCar: function(){
    console.log("I own a " + make + " " + model ".")
  }
};


var Singleton;

(function(){
  var instance;

  window.Singleton = function(){
    if(instance){
      return instance;
    }
    instance = this;

    this.make = make;
    this.model = model;
    this.color = color;
  };

  window.Singleton.prototype.sayCar = function(){
    console.log("I own a " + this.make + " " + this.model ".")
  };


};)()
