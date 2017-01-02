
// Lesson 2
// Objects in JavaScript can also be used as Hashmaps; they mainly consist of named properties mapping to values.

// Using an object literal - {} notation - it is possible to create a plain object.
// This new object inherits from Object.prototype and does not have own properties defined.


var foo = {}; // a new empty object

// a new object with a 'test' property with value 12

var bar = {test: 12};

// console.log(bar.test]); 

// Accessing Properties

// The properties of an object can be accessed in two ways, via either the dot notation or the square bracket notation.

var foo = {name: 'kitten'}
foo.name; // kitten
foo['name']; // kitten

var get = 'name';

foo[get]; // kitten

// foo.1234; // SyntaxError

foo['1234']; // works ofcourse it is undefined but it will not raise an Error !

// console.log(foo['1234']);

// The notations work almost identically, with the only difference being that the square bracket notation allows for dynamic setting
// of properties and the use of property names that would otherwise lead to a syntax error.

// Deleting Properties

// The only way to remove a property from an object is to use the delete operator;
// setting the property to undefined or null only removes the value associated with the property, but not the key.

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

obj.bar = undefined;

obj.foo = null;

delete obj.baz;

for(var x in obj)
{
	if(obj.hasOwnProperty(x))
	{
		// console.log(obj[x]);	
	}
}

// The above outputs both bar undefined and foo null - only baz was removed and is therefore missing from the output.

// Notation of Keys

var test = {
    case: 'I am a keyword, so I must be notated as a string',
    delete: 'I am a keyword, so me too' // raises SyntaxError
};

// Object properties can be both notated as plain characters and as strings. 
// Due to another mis-design in JavaScript's parser, the above will throw a SyntaxError prior to ECMAScript 5.

// This error arises from the fact that delete is a keyword; therefore,
// it must be notated as a string literal to ensure that it will be correctly interpreted by older JavaScript engines.



// console.log(test); // Here it will not give Error! the above will throw a SyntaxError prior to ECMAScript 5. 

