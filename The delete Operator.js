// The delete Operator

// In short, it's impossible to delete global variables, functions and some other stuff in JavaScript which have a DontDelete attribute set.

// Global code and Function code

// When a variable or a function is defined in a global or a function scope it is a property of either the Activation object or the Global object.
// Such  properties have a set of attributes, one of which is DontDelete.
// Variable and function declarations in global and function code always create properties 
// with DontDelete, and therefore cannot be deleted.


// global variable:
var a = 1; // DontDelete is set

// delete a; // false

// console.log(a);

// normal function:
function foo() {} // DontDelete is set

// delete f; // false

typeof foo; // "function"

// reassigning doesn't help:

// explicitly set property:

var obj = {x: 1};
obj.y = 2;

delete obj.x; // true
delete obj.y; // true

console.log(obj.x); // undefined

console.log(obj.y) // undefined


// Host objects

// The behaviour of delete operator can be unpredictable for hosted objects. Due to the specification, host objects are allowed to implement any kind of
// behavior.

// In conclusion

// The delete operator often has unexpected behaviour and can only be safely used to delete explicitly set properties on normal objects.