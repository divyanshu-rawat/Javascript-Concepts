// One of JavaScript's most powerful features is the availability of closures.

// With closures, scopes always keep access to the outer scope, in which they were defined. Since the only scoping that JavaScript has is function scope,    
// all functions, by default, act as closures.
 
// Emulating private variables

function Counter(start) {
    var count = start;

    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    }
}

var foo = Counter(4);


// console.log(foo);

// Here, Counter returns two closures: the function increment as well as the function get.
// Both of these functions keep a reference to the scope of Counter and, therefore, always keep access to the count variable that was defined in that scope.

foo.increment();
foo.get(); // 5

// console.log(foo.get());


// Why Private Variables Work

// Since it is not possible to reference or assign scopes in JavaScript, there is no way of accessing the variable count from the outside. The only way to 
// interact with it is via the two closures.


// var foo = new Counter(4);
// foo.hack = function() {
//     count = 1337;
// };


// The above code will not change the variable count in the scope of Counter, since foo.hack was not defined in that scope. It will instead create - or override the global variable count.


// Closures Inside Loops

// One often made mistake is to use closures inside of loops, as if they were copying the value of the loop's index variable.


for(var i = 0; i < 9; i++) {
    setTimeout(function() {
        // console.log(i);  // It will print 10  9 times.
    }, 1000);
}

// The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.


// The anonymous function keeps a reference to i. At the time console.log gets called,the for loop has already finished,and the value of i has been set to 10.

// In order to get the desired behavior, it is necessary to create a copy of the value of i.



// Avoiding the Reference Problem

// In order to copy the value of the loop's index variable, it is best to use an anonymous wrapper.

for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            // console.log(e);  
        }, 1000);
    })(i);
}

// The anonymous outer function gets called immediately with i as its first argument and will receive a copy of the value of i as its parameter e.

// The anonymous function that gets passed to setTimeout now has a reference to e, whose value does not get changed by the loop.


// There is another possible way of achieving this, which is to return a function from the anonymous wrapper that will then have the same behavior as the 
// code above.

for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            // console.log(e);
        }
    })(i), 1000)
}


for(var i = 0; i < 10; i++) {
    setTimeout(function(e) {
        // console.log(e);  
    }, 1000, i);
}


// Some legacy JS environments (Internet Explorer 9 & below) do not support this.

// There's yet another way to accomplish this by using .bind, which can bind a this context and arguments to function. It behaves identically to the code 
// above

for(var i = 0; i < 10; i++) {
    // setTimeout(console.log.bind(console, i), 1000);
}





//  To better Understand CLosure let's take an example !

// A Counter Dilemma

// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

// You could use a global variable, and a function to increase the counter:

// var counter = 0;

// function add() {
//     counter += 1;
// }

// add();
// add();
// add();

// the counter is now equal to 3

// The counter should only be changed by the add() function.

// The problem is, that any script on the page can change the counter, without calling add().

// If I declare the counter inside the function, nobody will be able to change it without calling add():

// function add() {
//     var counter = 0;
//     counter += 1;
// }

// add();
// add();
// add();

// the counter should now be 3, but it does not work !

// It did not work! Every time I call the add() function, the counter is set to 1.

// A JavaScript inner function can solve this.

// JavaScript Nested Functions
// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them.

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

// In this example, the inner function plus() has access to the counter variable in the parent function:

function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}


// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.

// We need a closure.

// JavaScript Closures
// Remember self-invoking functions? What does this function do?

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add);

add();
add();
console.log(add());

// Example Explained
// The variable add is assigned the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// A closure is a function having access to the parent scope, even after the parent function has closed.
























