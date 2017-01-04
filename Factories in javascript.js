// In order to be able to omit the new keyword, the constructor function has to explicitly return a value.

function Robot() {

    var color = 'gray';

    return {
        getColor: function() {
            return color;
        }
    }

}

Robot.prototype.sayHello = function(argument){
	console.log('Hey !');
};



// console.log(new Robot());

var instance_1 = Robot();


// instance_1.sayHello(); // keep in mind that this will raise error !

// console.log(instance_1.getColor()); // this will work !


// console.log(Robot());

// It should also be noted that the call new Robot() does not affect the prototype of the returned object.

// While the prototype will be set on the newly created object, Robot never returns that new object.

// both calls to Robot return the same thing, a newly created object that has a property called getColor, which is a Closure.

// Creating New Objects via Factories !

// It is often recommended to not use new because forgetting its use may lead to bugs.

// In order to create a new object, one should rather use a factory and construct a new object inside of that factory.


// In order to create a new object, one should rather use a factory and construct a new object inside of that factory.






function CarFactory() {

    var car = {};

    car.owner = 'nobody';

    var milesPerGallon = 2;

    car.setOwner = function(newOwner) {
        this.owner = newOwner;
    }

    car.getMPG = function() {
        return milesPerGallon;
    }

    return car;
}


// While the above is robust against a missing new keyword and certainly makes the use of private variables easier, it comes with some downsides.

// Points to be Noted !

// It uses more memory since the created objects do not share the methods on a prototype.
// In order to inherit, the factory needs to copy all the methods from another object or put that object on the prototype of the new object.
// Dropping the prototype chain just because of a left out new keyword is contrary to the spirit of the language.


In Conclusion

// While omitting the new keyword might lead to bugs, it is certainly not a reason to drop the use of prototypes altogether.
// In the end it comes down to  which solution is better suited for the needs of the application.
// It is especially important to choose a specific style of object creation and use it consistently.






