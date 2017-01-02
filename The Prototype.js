// JavaScript does not feature a classical inheritance model; instead, it uses a prototypal one.

// While this is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model is in fact more powerful than the classic model.
// It is, for example, fairly trivial to build a classic model on top of a prototypal model, while the other way around is a far more difficult task

// JavaScript is the only widely used language that features prototypal inheritance, so it can take time to adjust to the differences between the two models.
// The first major difference is that inheritance in JavaScript uses prototype chains.

// The keyword (this), which refers to the current object, lets you work with properties from within the class. 

function Foo() {

    console.log('Instance Created !!');
}

Foo.prototype = {
    sayWelcome: function(argument) { console.log('Welcome ' + argument )},
    sayGoodbye:function (argument) {
    	console.log('Goodbye ' + argument);
    }
};

Foo.prototype.sayHello = function(argument){

	console.log('Hi! ' + argument);
};

Foo.prototype.test = "divyanshu";



// boo.sayHello('Alex');
// boo.sayWelcome('Brian'); // Welcome Brain
// boo.sayGoodbye('Brian'); // Goodbye Brian 

// The first major difference is that inheritance in JavaScript uses prototype chain.

function Bar() {}

Bar.prototype = new Foo();

Bar.prototype.hey = 'Hello !';

Bar.prototype.testing = function () {

	console.log('testing Man');

}

var Bar_instance = new Bar();
// Bar_instance.sayWelcome('Bucky');

console.log(Bar_instance.hey);
console.log(Bar_instance.test);
console.log(Bar_instance.testing());


// In the code above, the object Bar_instance will inherit from both Bar.prototype and Foo.prototype; hence, it will have access to the function method that 
// was defined on Foo. It will also have access to the property value of the one Foo instance that is its prototype. It is important to note that new Bar() 
// does not create a new Foo instance, but reuses the one assigned to its prototype; thus, all Bar instances will share the same value property.



// When accessing the properties of an object, JavaScript will traverse the prototype chain upwards until it finds a property with the requested name.

// If it reaches the top of the chain - namely Object.prototype - and still hasn't found the specified property, it will return the value undefined instead.



// All JavaScript objects inherit the properties and methods from their prototype.

// Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.

// Objects created with new Date() inherit the Date.prototype.

// The Object.prototype is on the top of the prototype chain.