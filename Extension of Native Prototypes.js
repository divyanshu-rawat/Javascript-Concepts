// One mis-feature that is often used is to extend Object.prototype or one of the other built in prototypes.

// This technique is called monkey patching and breaks encapsulation.
// While used by popular frameworks such as Prototype, there is still no good reason for cluttering built-in types with additional non-standard functionality.



// To check whether an object has a property defined on itself and not somewhere on its prototype chain,
 // it is necessary to use the hasOwnProperty method which all objects inherit from Object.prototype.


 // Poisoning Object.prototype


Object.prototype.bar = 1;

var foo = {goo: 'wow !'};

foo.bar; // 1

// console.log(foo.bar);

// 'bar' in foo; // true

// console.log('bar' in foo);

foo.hasOwnProperty('bar'); // false

foo.hasOwnProperty('goo'); // true


// JavaScript does not protect the property name hasOwnProperty.
// thus, if the possibility exists that an object might have a property with this name, it is necessary to use an external hasOwnProperty to get correct results.

var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

// console.log(foo.hasOwnProperty('bar'));

// Workaround #1

// Use another Object's hasOwnProperty and call it with 'this' set to foo

({}).hasOwnProperty.call(foo, 'bar'); // true

// Workaround #2

Object.prototype.hasOwnProperty.call(foo,'bar'); //true



// Using hasOwnProperty is the only reliable method to check for the existence of a property on an object.
// It is recommended that hasOwnProperty be used in many cases when iterating over object properties as described in the section on for in loops.


// Poisoning Object.prototype
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
    // console.log(i); // prints both bar and moo !
}


// Since it is not possible to change the behavior of the for in loop itself, it is necessary to filter out the unwanted properties inside the loop body.
// In ECMAScript 3 and older, this is done using the hasOwnProperty method of Object.prototype.




// Using hasOwnProperty for Filtering

// still the foo from above

for(var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i);
    }
}


// It is recommended to always use hasOwnProperty in ECMAScript 3 or lower, as well as in library code. Assumptions should never be made in these 
// environments about whether the native prototypes have been extended or not. Since ECMAScript 5, Object.defineProperty makes it possible to define 
// non-enumerable properties and to omit hasOwnProperty in application code.
