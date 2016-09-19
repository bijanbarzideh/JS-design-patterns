// Javascript closures are any function that contains an inner function,
// that references a variable in the parent function.
// The common implementation at MOD is to use the closure pattern to create
// a private, inaccessible variable environment.

// function Person(name){
//   var name = name;
// }
// var me = new Person("Rodrigo");
// this ^ would not work because at this time the var name is out of scope so no way to acces it
//

function Person(pName){
	var _name = pName;
// _name ,using the underscore is ment to show a private variable
	this.getName = function(){
		return _name;
	};
}

var me = new Person("rodrigo")


me.getName()
