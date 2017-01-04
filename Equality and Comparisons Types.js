

// JavaScript has two different ways of comparing the values of objects for equality.

// The Equality Operator

// The equality operator consists of two equal signs: ==

// JavaScript features weak typing. This means that the equality operator coerces types in order to compare them.

//  ""           ==   "0"           // false
//  0            ==   ""            // true
//  0            ==   "0"           // true
//  false        ==   "false"       // false
//  false        ==   "0"           // true
//  false        ==   undefined     // false
//  false        ==   null          // false
//  null         ==   undefined     // true
//  " \t\r\n"    ==   0             // true

// The above table shows the results of the type coercion, and it is the main reason why the use of == is widely regarded as bad practice. It introduces 
// hard-totrack-down bugs due to its complicated conversion rules.

// Additionally, there is also a performance impact when type coercion is in play; for example, a string has to be converted to a number before it can be 
// compared to another number.


// The Strict Equality Operator

// The strict equality operator consists of three equal signs: ===.

// It works like the normal equality operator, except that strict equality operator does not perform type coercion between its operands.

// ""           ===   "0"           // false
// 0            ===   ""            // false
// 0            ===   "0"           // false
// false        ===   "false"       // false
// false        ===   "0"           // false
// false        ===   undefined     // false
// false        ===   null          // false
// null         ===   undefined     // false
// " \t\r\n"    ===   0             // false

// The above results are a lot clearer and allow for early breakage of code. This hardens code to a certain degree and also gives performance improvements in
// case the operands are of different types.


// The above results are a lot clearer and allow for early breakage of code. This hardens code to a certain degree and also gives performance improvements in
// case the operands are of different types.


// Comparing Objects

// While both == and === are called equality operators, they behave differently when at least one of their operands is an Object.

// {} === {};                   // false
// new String('foo') === 'foo'; // false
// new Number(10) === 10;       // false
// var foo = {};
// foo === foo;                 // true


// Here, both operators compare for identity and not equality; that is, they will compare for the same instance of the object, much like is in Python and 
// pointer comparison in C.


// In Conclusion

// It is highly recommended to only use the strict equality operator. In cases where types need to be coerced, it should be done explicitly and not left to 
// the language's complicated coercion rules.



// The instanceof Operator

// The instanceof operator compares the constructors of its two operands. It is only useful when comparing custom made objects. Used on built-in types, it 
// is nearly as useless as the typeof operator.

// Comparing Custom Objects

function Foo() {}
function Bar() {}

Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// This just sets Bar.prototype to the function object Foo,
// but not to an actual instance of Foo

Bar.prototype = Foo;

// new Bar() instanceof Foo; // false

// Using instanceof with Native Types

// new String('foo') instanceof String; // true
// new String('foo') instanceof Object; // true

// 'foo' instanceof String; // false
// 'foo' instanceof Object; // false


// One important thing to note here is that instanceof does not work on objects that originate from different JavaScript contexts (e.g. different documents 
// in  a web browser), since their constructors will not be the exact same object.

// In Conclusion

// The instanceof operator should only be used when dealing with custom made objects that originate from the same JavaScript context. Just like the typeof 
// operator, every other use of it should be avoided.





