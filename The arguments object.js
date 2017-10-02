
// The arguments Object

// Every function scope in JavaScript can access the special variable arguments. This variable holds a list of all the arguments that were passed to the
// function.

var x = 2,y = 4;

function arguments(x,y){

  // console.log(arguments); 
  // console.log(Array.prototype.slice.call(arguments));

  // Because this conversion is slow, it is not recommended to use it in performance-critical sections of code.
};

arguments(x,y);

// The arguments object is not an Array. While it has some of the semantics of an array - namely the length property - it does not inherit from 
// Array.prototype and is in fact an Object.

// Due to this, it is not possible to use standard array methods like push, pop or slice on arguments. While iteration with a plain for loop works just fine
// it is necessary to convert it to a real Array in order to use the standard Array methods on it.

function baz(c, d) {
  console.log(arguments); // { 0: 1, 1: 2 }
  for(var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); // 1, 2
  }

  args.forEach(arg => console.log(arg)); // TypeErrror
}

baz(1, 2);

// Converting to an Array

// The code below will return a new Array containing all the elements of the arguments object. You then have access to all typical 
// Array methods. 

function baz(c, d) {
  var args = [].slice.call(arguments);
  console.log(args); // [1, 2]
  args.forEach(arg => console.log(arg)); // 1, 2
}

baz(1, 2); 

// Passing Arguments

// The following is the recommended way of passing arguments from one function to another.

function foo() {

    bar.apply(null, arguments);
}

foo(x,y);


function bar(a, b) {
    
    // console.log(arguments);
}




// Formal Parameters and Arguments Indices

// The arguments object creates getter and setter functions for both its properties, as well as the function's formal parameters.

// As a result, changing the value of a formal parameter will also change the value of the corresponding property on the arguments object, and the other way
// around.

function boo(a, b, c) {

  console.log(arguments);

    arguments[0] = 2;

    console.log(arguments);

}

boo(1, 2, 3);










