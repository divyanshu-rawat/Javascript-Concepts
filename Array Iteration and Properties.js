



// Because the for in loop enumerates all the properties that are on the prototype chain and because the only way to exclude those properties is to use 
// hasOwnProperty, it is already up to twenty times slower than a normal for loop.


// In order to achieve the best performance when iterating over arrays, it is best to use the classic for loop.

var list = [1, 2, 3, 4, 5];

for(var i = 0, l = list.length; i < l; i++) {
    console.log(list[i]);
}



// The length Property

// While the getter of the length property simply returns the number of elements that are contained in the array, the setter can be used to truncate the 
// array.

var arr = [1, 2, 3, 4, 5, 6];
arr.length = 3;
arr; // [1, 2, 3]

arr.length = 6;
arr.push(4);
arr; // [1, 2, 3, undefined, undefined, undefined, 4]

// Assigning a smaller length truncates the array. Increasing it creates a sparse array.



// In Conclusion

// For the best performance, it is recommended to always use the plain for loop and cache the length property. The use of for in on an array is a sign of 
// badly written code that is prone to bugs and bad performance.


// The Array Constructor

// Since the Array constructor is ambiguous in how it deals with its parameters, it is highly recommended to use the array literal - [] notation - when 
// creating new arrays.

[1, 2, 3]; // Result: [1, 2, 3]
new Array(1, 2, 3); // Result: [1, 2, 3]

[3]; // Result: [3]
new Array(3); // Result: []
new Array('3') // Result: ['3']


// In cases when there is only one argument passed to the Array constructor and when that argument is a Number, the constructor will return a new sparse 
// array  with the length property set to the value of the argument. It should be noted that only the length property of the new array will be set this way; 
// the actual indexes of the array will not be initialized.


