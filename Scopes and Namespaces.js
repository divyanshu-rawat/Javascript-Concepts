// Although JavaScript deals fine with the syntax of two matching curly braces for blocks,
// it does not support block scope; hence, all that is left in the language is function scope.


function test() { // a scope

    for(var i = 0; i < 10; i++) { // not a scope
        // count
    }
    console.log(i); // 10
}


// There are also no distinct namespaces in JavaScript, which means that everything gets defined in one globally shared namespace.

// Each time a variable is referenced, JavaScript will traverse upwards through all the scopes until it finds it.

// In the case that it reaches the global scope and still has not found the requested name, it will raise a ReferenceError.

// The Bane of Global Variables

// script A
// foo = '42';

// script B

var foo = '42'

// The above two scripts do not have the same effect.
// Script A defines a variable called foo in the global scope, and script B defines a foo in the current scope.


function test() {
    // local scope
   foo = 21; //  Leaving out the var statement inside the function test will override the value of foo.
}

test();


//  While this might not seem like a big deal at first, having thousands of lines of JavaScript and not using var will introduce horrible,
//  hard-to-track-down bugs.


// console.log(foo);

// global scope
var items = [/* some list */];

for(var i = 0; i < 10; i++) {
    subLoop();
}

function subLoop() {
    // scope of subLoop
    for(i = 0; i < 10; i++) { 
        // missing var statement
        // do amazing stuff!
    }
}

// The outer loop will terminate after the first call to subLoop, since subLoop overwrites the global value of i.
// Using a var for the second for loop would have easily avoided this error.
// The var statement should never be left out unless the desired effect is to affect the outer scope.


// Local Variables

// The only source for local variables in JavaScript are function parameters and variables declared via the var statement.

// global scope


var foo = 1;
var bar = 2;
var j = 2;

function testing(j) {
    // local scope of the function test
    j = 5;

    console.log(j);

    var foo = 3;
    bar = 4;
}


console.log(j);

testing(10);

// While foo and i are local variables inside the scope of the function test, the assignment of bar will override the global variable with the same name.







