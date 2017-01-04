// Hoisting is JavaScript's default behavior of moving declarations to the top.

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.


x = 5; // Assign 5 to x

console.log(x);

var x; // Declare x


// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current  
// function).

// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.



// bar(); // will not work because  JavaScript Initializations are Not Hoisted #raise error !

var bar = function  () {}; 



var someValue = 42;

test();  // it will not raise error because JavaScript  hoists declarations

function test(data) {
    if (false) {
        goo = 1;

    } else {
        var goo = 2;
    }
    for(var i = 0; i < 100; i++) {
        
    }
}


// The above code gets transformed before execution starts. JavaScript moves the var statements, as well as function declarations,
// to the top of the nearest surrounding scope.

// Without knowledge of hoisting, one might suspect the code below would raise a ReferenceError.

// check whether SomeImportantThing has been initialized


if (!SomeImportantThing) {
    var SomeImportantThing = {};
    console.log(SomeImportantThing);
}


// But of course, this works due to the fact that the var statement is being moved to the top of the global scope.


// Name Resolution Order

// All scopes in JavaScript, including the global scope, have the special name this, defined in them, which refers to the current object.

// Function scopes also have the name arguments, defined in them, which contains the arguments that were passed to the function.

// For example, when trying to access a variable named foo inside the scope of a function, JavaScript will look up the name in the following order:



// 1 -  case there is a var foo statement in the current scope, use that.
// 2 - If one of the function parameters is named foo, use that.
// 3 - If the function itself is called foo, use that.
// 4 - Go to the next outer scope, and start with #1 again.

