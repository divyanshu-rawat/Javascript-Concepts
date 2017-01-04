// The language also defines a global variable that has the value of undefined; this variable is also called undefined. However, this variable is neither a 
// constant nor a keyword of the language. This means that its value can be easily overwritten.


// ES5 Note: undefined in ECMAScript 5 is no longer writable in strict mode, but its name can still be shadowed by for example a function with the name 
// undefined.


// Here are some examples of when the value undefined is returned:

// Accessing the (unmodified) global variable undefined.

// Accessing a declared but not yet initialized variable.

// Implicit returns of functions due to missing return statements.

// return statements that do not explicitly return anything.

// Lookups of non-existent properties.

// Function parameters that do not have any explicit value passed.

// Anything that has been set to the value of undefined.

// Any expression in the form of void(expression)



// Since the global variable undefined only holds a copy of the actual value of undefined, assigning a new value to it does not change the value of the type 
// undefined.

// Still, in order to compare something against the value of undefined, it is necessary to retrieve the value of undefined first.

// To protect code against a possible overwritten undefined variable, a common technique used is to add an additional parameter to an anonymous wrapper that 
// gets no argument passed to it.

var undefined = 123;
(function(something, foo, undefined) {

	console.log(undefined);

    // undefined in the local scope does 
    // now again refer to the value `undefined`

})('Hello World', 42);

console.log(undefined);

// Another way to achieve the same effect would be to use a declaration inside the wrapper.

// var undefined = 123;
// (function(something, foo) {
//     var undefined;
//     ]

// })('Hello World', 42);

// The only difference here is that this version results in 4 more bytes being used in case it is minified, and there is no other var statement inside the 
// anonymous wrapper.


// Uses of null

// While undefined in the context of the JavaScript language is mostly used in the sense of a traditional null, the actual null (both a literal and a type) 
// is  more or less just another data type.

// It is used in some JavaScript internals (like declaring the end of the prototype chain by setting Foo.prototype = null), but in almost all cases, it can 
// be replaced by undefined.

// Automatic Semicolon Insertion

// Although JavaScript has C style syntax, it does not enforce the use of semicolons in the source code, so it is possible to omit them.

// JavaScript is not a semicolon-less language. In fact, it needs the semicolons in order to understand the source code. Therefore, the JavaScript parser 
// automatically inserts them whenever it encounters a parse error due to a missing semicolon.

var foo = function() {

	console.log('semicolon missing !')

} // parse error, semicolon expected

foo()

// Insertion happens, and the parser tries again.

var foo = function() {

}; // no error, parser continues

foo()

// The automatic insertion of semicolon is considered to be one of biggest design flaws in the language because it can change the behavior of code.

// The parser drastically changed the behavior of the code above. In certain cases, it does the wrong thing.

// Leading Parenthesis

// In case of a leading parenthesis, the parser will not insert a semicolon.

// log('testing!')

(options.list || []).forEach(function(i) {})

// This code gets transformed into one line.

// log('testing!')(options.list || []).forEach(function(i) {})

// Chances are very high that log does not return a function; therefore, the above will yield a TypeError stating that undefined is not a function.


// It is highly recommended to never omit semicolons. It is also recommended that braces be kept on the same line as their corresponding statements and to 
// never omit them for single-line if / else statements. These measures will not only improve the consistency of the code, but they will also prevent the 
// JavaScript parser from changing code behavior.