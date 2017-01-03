
// Suppose I have two constructor function:

// Extending Person Class !

// Every JavaScript object has a prototype. The prototype is also an object.

// All JavaScript objects inherit their properties and methods from their prototype.

// All JavaScript objects inherit the properties and methods from their prototype.

// Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype


var Person = function(x,y) {

  this.firstname = x;
  this.lastname = y;

}

var Man = function() {

	// console.log('I am constructor !');
}

Man.prototype = new Person('alex','billy');



// Note: Simply using Bar.prototype = Foo.prototype will result in both objects sharing the same prototype.

// Therefore, changes to either object's 
// prototype will affect the prototype of the other as well, which in most cases is not the desired effect

// When method gets called on an instance of Bar, this will now refer to that very instance.





Man.prototype.test = function () {

	console.log('testing Man');

	this.sayHello = "Hello !";

	console.log(this.sayHello);
}

Man.prototype.constructor = Man;

var x = new Man();

console.log(x.firstname);

// console.log('firstname: ' + x.firstname + ', lastname: ' + x.lastname);

// 1) when a property of x is accessed,it will search it in Man.prototype.

// 2) If not find, It should find it in Man.prototype.__prop__.

// So, Here I have Linked the Man.prototype.__prop__  to Person.prototype.

// Alternative Approach !


function Persona() {}

Persona.prototype.test = "testing Persona";

function Magneto() {}

// The purpose of inherit is to create an object from a function whose prototype is that of the given super class (without explicitly using new),
// which is exactly what it does.

function inherit(superClass) {

    function F() {}
    F.prototype = superClass.prototype;
    return new F;

}

Magneto.prototype = inherit(Persona);

Magneto.prototype.testing = function () {
	console.log('testing Magento !');
}


var magneto_instance = new Magneto();

// console.log(magneto_instance.testing());






