// Constructors

// Constructors in JavaScript are yet again different from many other languages. Any function call that is preceded by the new keyword acts as a constructor.

// Inside the constructor - the called function - the value of this refers to a newly created object. 
// The prototype of this new object is set to the prototype of the function object that was invoked as the constructor.
// Inside the constructor - the called function - the value of this refers to a newly created object. The prototype of this new object is set to the 

// prototype of the function object that was invoked as the constructor.

// If the function that was called has no explicit return statement, then it implicitly returns the value of this - the new object.


function Person(name) {
    this.name = name;
}

Person.prototype.logName = function() {
    console.log(this.name);
};

var sean = new Person('sean parker !');

sean.logName();

// The above calls Person as constructor and sets the prototype of the newly created object to Person.prototype.


function Car() {

    return 'ford';
    // In case of an explicit return statement, the function returns the value specified by that statement, but only if the return value is an Object.
}

console.log(new Car());

// a new object, not 'ford'

function Car() {

    return 'ford';
}


new Car(); // a new object, not 'ford'




function Persona() {
    
    this.someValue = 2;

    return {
        name: 'Charles'
    
    };

}

new Persona(); // the returned object ({name:'Charles'}), not including someValue

console.log(new Persona());


// When the new keyword is omitted, the function will not return a new object.

function Pirate() {
    this.hasEyePatch = true; // gets set on the global object!
}
var somePirate = Pirate(); // somePirate is undefined

console.log(Pirate());




