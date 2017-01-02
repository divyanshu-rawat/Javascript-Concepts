

// Object Usage and Properties

// Everything in JavaScript acts like an object, with the only two exceptions being null and undefined.



// Everything in JavaScript acts like an object, with the only two exceptions being 'null' and 'undefined' .


// The toString() method returns a boolean value as a string.

// Consider an Example !

// console.log(true.toString());

// console.log([1, 2, 3].toString());

function Foo(){}

Foo.bar = 1;

Foo.myfunc = function () {
	console.log('my Function !');
}

// console.log(Foo.bar);

Foo.myfunc();


// A common misconception is that number literals cannot be used as objects.
// That is because a flaw in JavaScript's parser tries to parse the dot notation on a number as a floating point literal.

// 2.toString(); // this will raise an  SyntaxError !!

// There are a couple of workarounds that can be used to make number literals act as objects too.

// 2..toString(); // the second point is correctly recognized
// 2 .toString(); // note the space left to the dot
// (2).toString(); // 2 is evaluated first 

console.log(2..toString());