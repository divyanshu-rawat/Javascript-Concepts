
// Good Read
// Functions in JavaScript are first class objects. That means they can be passed around like any other value. One common use of this feature is to pass an 
// anonymous function as a callback to another, possibly an asynchronous function.


// The above function gets hoisted before the execution of the program starts; thus, it is available everywhere in the scope it was defined, even if called 
// before the actual definition in the source.

// foo(); // Works because foo was created before this code runs

// function foo() {

// 	console.log('yup !');
// }


console.log(foo);

// foo(); // this raises a TypeError

var foo = function() {

	// return true;
};

// But since assignments only happen at runtime, the value of foo will default to undefined before the corresponding code is executed.






// Named Function Expression

// Another special case is the assignment of named functions.

var foo = function bar() {

    bar(); // Works
}

// bar(); // ReferenceError


// Here, bar is not available in the outer scope, since the function only gets assigned to foo; however, inside of bar, it is available.
// This is due to how name resolution in JavaScript works, the name of the function is always made available in the local scope of the function itself.





