// Module
// The module pattern in javascript is a way of creating objects to be used.
// There are many advanced topics having to do with the module pattern, but
// the most basic is referred to as ‘revealer’.  With the revealer pattern,
// you’re returning (or revealing) properties or
// functions that interact with private, unaccessible properties or functions.

/**
 * simple module pattern with private variable
 */
var Store = (function() {
  var _sales = [{transactionId:'1234', amount:'12.34'}];

  function _privateMethod() {
    // ...
  };

  var publicMethod = function() {
    return “purchased”;
  };

  // public interface
  return {
    getSales: function() {
      return _sales;
    },
    purchase: publicMethod
  };
})();


console.log(Store);
console.log(Store.getSales());
console.log(Store.purchase());
console.log(Store._privateMethod()); // not a function
