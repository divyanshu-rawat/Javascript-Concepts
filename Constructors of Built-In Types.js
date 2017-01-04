// The constructors of the built in types like Number and String behave differently when being used with the new keyword and without it.


// new Number(10) === 10;     // False, Object and Number
// Number(10) === 10;         // True, Number and Number
// new Number(10) + 0 === 10; // True, due to implicit conversion



// Using a built-in type like Number as a constructor will create a new Number object, but leaving out the new keyword will make the Number function behave 
// like a converter.

// In addition, passing literals or non-object values will result in even more type coercion.

// The best option is to cast to one of the three possible types explicitly.


// Casting to a String

console.log('' + 10 === '10'); // true


// By prepending an empty string, a value can easily be cast to a string.

// Casting to a Number

console.log(+'10' === 10); // true




// Casting to a Boolean

// By using the not operator twice, a value can be converted to a boolean.

// !!'foo';   // true
// !!'';      // false
// !!'0';     // true
// !!'1';     // true
// !!'-1'     // true
// !!{};      // true
// !!true;    // true



