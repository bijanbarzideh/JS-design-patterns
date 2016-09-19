// Singleton
// A singleton is an object that will only ever have one instance.  In javascript, this can be forced or implied.  You’ve probably written singletons and haven’t even known it!


// insure an object only has one instance and has a global point of access to it

var Singleton;

(function() {
  var instance;

  window.Singleton = function () {
    // return the instance if we already have one
    if (instance) {
      return instance;
    }

    instance = this;

    this.title = “hello”;

    // functionality
    this.foo = function() {
      return 'bar';
    };
  };
})();

var s1 = new Singleton(); //The same as...
var s2 = new Singleton(); //This!
