// JavaScript has a different concept of what the special name this refers to than most other programming languages.
 // There are exactly five different ways in which the value of this can be bound in the language.


// When using this in global scope, it will simply refer to the global object.

// console.log(this); //{}



// Calling a Method

// test.foo(); 

// In this example, this will refer to test.


// Calling a Constructor

// new foo(); 

// A function call that is preceded by the new keyword acts as a constructor. Inside the function, this will refer to a newly created Object.


// Explicit Setting of this

function foo(a,b,c) {
	
	this.a = a;
	this.b = b;
	this.c = c;

	console.log(this.a,this.b,this.c);
}

var test ={

	my_func:function () {
		console.log('define function just like that !');
	}
};

//  foo.call(test, 1,2,3); // 1 2 3
//  foo.apply(test, [1, 2, 3]); // 1 2 3

 // When using the call or apply methods of Function.prototype,
 // the value of this inside the called function gets explicitly set to the first argument of the corresponding function call.

// Common Pitfalls

// While most of these cases make sense, the first can be considered another mis-design of the language because it never has any practical use.


// Note: this cannot be used to refer to the object inside of an Object literal. So var 

   obj = {me: this}
 
// will not result in me referring to obj, since this only  gets bound by one of the five listed cases.


test.key  = function () {
	
	console.log('divyanshu');
}

// test.key();
// test.my_func();



var boo = {};

boo.key = 'divyanshu';

boo.method = function () {
	
	function test(){

		// A common misconception is that this inside of test refers to boo; while in fact, it does not.

		console.log(this);
	};

	test();
}

// boo.method(); // it actualy refers to global onject !


// In order to gain access to poo from within test, you can create a local variable inside of method that refers to Foo.

var poo = {key:'divyanshu'};


poo.method = function() {
    var self = this;
    function test() {

        // Use self instead of this here
        console.log(self);
    }

    test();
}

//poo.method(); // { key: 'divyanshu', method: [Function] }



//  self is just a normal variable name, but it is commonly used for the reference to an outer this.
 // In combination with closures, it can also be used to pass this values around.

 // As of ECMAScript 5 you can use the bind method combined with an anonymous function to achieve the same result.

var too = {};

too.method = function() {
    var test = function() {
        
        // this now refers to too

        console.log(this);

    }.bind(this);

    test();
}

// too.method(); //{ method: [Function] }

var aliasing = too.method;

// Another thing that does not work in JavaScript is function aliasing, which is assigning a method to a variable.

aliasing();   // refer to global object !

// Due to the first case, aliasing now acts like a plain function call; therefore, this inside it will no longer refer to someObject.









