// classical prototypal
// var human = {
//   species:"human",
//   saySpecies:function(){
//     console.log(this.species)
//   },
//   sayName: function(){
//     console.log(this.name)
//   }
// };
//
// var musician = Object.create(human);
// musican.playInstrument = function (){
//   console.log("plays..." + this.instrument);
// }
//
// var will = Object.create(musican);
// will.name="Will"
var human = {
  species:"human",
  create: function(name){     //only IE8 and newr
    var instance = Object.create(this);
    instance.name = name;
    return instance;
  },
  saySpecies:function(){
    console.log(this.species)
  },
  sayName: function(){
    console.log(this.name)
  }
};

var musician = Object.create(human);
musician.playInstrument = function (){
  console.log("plays..." + this.instrument);
}

var will = human.create("Will");
