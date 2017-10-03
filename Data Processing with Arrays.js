// Data Processing with Arrays

// Arrays in JavaScript are extemely flexible compared to arrays in a compiled
// language like C. This lets JavaScript get away with a lot of expressive,
// concise functional expressions that would normally take a for loop or two.

// Sure you can achieve all of this by writing traditional loops, but writing
// out the whole loop results in longer code which is harder to understand and
// higher chances of introducing bugs.

// Some of these features may only be available in newer versions of Javascript
// such as ES5 and ES6. These are pretty much stardard as of 2017 inside all
// major browsers, but in case they are not supported, there are backward
// compatible implementations called polyfills that enable the usage of these
// functions in older versions of JavaScript.

// You should already be familiar with the basics of arrays and be familiar
// in creating and iterating through them and you should also be familiar with
// clojures. Check out "Array Iteration and Properties.js" and also check out
// "Clojures and References.js" before continuing.

// It's recommended to check out the documentation of these functions before 
// using them in production environment, but this tutorial should offer a very
// good idea of what is possible.

// First we declare some data which will be used in the examples. These 
// examples are meant to be fairly average cases.

var people = ["Will", "Alex", "Chalie", "Ray", "Max"]; 
var numbers = [2, 3, 5, 7, 11, 13, 17, 19];
var points = [{ x: 3, y: 9 }, { x: -2, y: 13 }, { x: 4, y: 2 }];


// 1. Processing items

// Let's say you want to change something on each item in an array. Or maybe
// you want to do something with each item separately. You can do this easily
// using the forEach() function

// this expression says hi to everyone

people.forEach(person => console.log('Hi ' + person + "!"));

// similarly one could create an html element and display it in the browser
// let's make a function that can render a person using HTML DOM

function renderPerson(person){
	var h2 = document.createElement('ul'); // create h2 HTML element
	h2.textContent = 'Hi ' + person + "!"; // set text content for element
	document.getElementById('list-of-people').appendChild(h2); // show it
}

// Using this function we can render each person on screen inside the element
// which has the id #list-of-people by passing it to map

people.forEach(renderPerson);

// Another use case is modifying the items inside the array. In the following
// example we'll caculate the distance from origin for each point, and store
// it in the point for future use.

points.forEach(p => p.distance = Math.sqrt(p.x * p.x + p.y * p.y));

// After this if we print out points using console.log(points) we should see 
// that a new field was added to each point like this:
// 0: {x: 3, y: 9, distance: 9.486832980505138}
// 1: {x: -2, y: 13, distance: 13.152946437965905}
// 2: {x: 4, y: 2, distance: 4.47213595499958}


// 2. Transforming Data

// Using the map() function we can create a new array which contains a
// a transformed version of the previous data. This is very nice because
// in many cases we don't want to modify the original structure.

// The map() function is very similar to forEach(), but unlike forEach()
// map() will return an array with all the return values for each processed
// item from the original array. It's easier to use than explain.

var numbersSquared = numbers.map(n => n * n);

// That's it, numberSquared will contain all numbers, squared and you can
// check that the original, it will be the same array, unmodified.

// But the function passed to map does not need to return same data type,
// let's say we want to create accounts for each person in people.

var accounts = people.map(person => {
	return {
		name: person,
		email: person + '@domain.com'
	}
});

// The expression above would create a new account for each person, like this:
// 0: {name: "Will", email: "Will@domain.com"}
// 1: {name: "Alex", email: "Alex@domain.com"}
// 2: {name: "Chalie", email: "Chalie@domain.com"}
// 3: {name: "Ray", email: "Ray@domain.com"}
// 4: {name: "Max", email: "Max@domain.com"}

// A classic transformation is to go from Cartesian coordinate system to
// a polar coordinate system

var polarPoints = points.map(point => {
	return {
		angle: Math.atan2(point.y, point.x),
		length: Math.sqrt(point.x * point.x + point.y * point.y)
	}
})

// The transformation above would result in the following structure
// 0: {angle: 1.2490457723982544, length: 9.486832980505138}
// 1: {angle: 1.7234456551901618, length: 13.152946437965905}
// 2: {angle: 0.4636476090008061, length: 4.47213595499958}

// The map function can also be used with the join function to generate HTML
// really fast if you're in a hurry.

var html = '<ul>' + people.map(p => '<li>' + p + "</li>").join('\n') + '</ul>';

// The following string gets generated
// "<ul><li>Will</li>
// <li>Alex</li>
// <li>Chalie</li>
// <li>Ray</li>
// <li>Max</li></ul>"


// 3. Fitlering Data

// Using the filter method, you can quickly select the items you want.
// The following statement selects all the points that have a positive 
// x component. Filter does not change the original structure, it creates
// a new array just like map.

var positiveX = points.filter(point => point.x > 0)

// Executing will result in the following list
// 0: {x: 3, y: 9, distance: 9.486832980505138}
// 1: {x: 4, y: 2, distance: 4.47213595499958}


// Similarly you can fitler any type of item inside an array, the follwoing
// statement will select all people who have an 'e' in their name.

var peopleWithE = people.filter(person=>person.indexOf('e') !== -1);

// Executing will result in the following list of people
// (2) ["Alex", "Chalie"]	

// In case you're wondering how to remove items, the best practice is to use
// filter and create a new list. However if only a single item, you may
// use splice(), but please use filter instead


// 4. Sorting Data

// Arrays have a sort method which allows you to sort data. By default it will
// sort numbers or strings but for anything more complex than that, you'll
// need to provide a comparison function.

// Sorting will change the array instead of creating a new one so we'll use
// slice to create a copy of the data.

var sortedByX = points.slice().sort((a, b) => a.x - b.x);

// The folling list is the result. Note that dinstance is defined only if
// you ran the forEach function which creates it.
// 0: {x: -2, y: 13, distance: 13.152946437965905}
// 1: {x: 3, y: 9, distance: 9.486832980505138}
// 2: {x: 4, y: 2, distance: 4.47213595499958}

// The sort() method requires a comparison function which will return a number.
// The method is called with 2 items that need to be compared and the 
// comparison function is expected to return a negative number if first item
// comes before the second, 0 if the two items are equal and a positive number
// if the second item comes before the first one.

// The items can be sorted in reverse order by multiplying the result of the
// comparison by -1. 

// There is already a comparison function avaiable for strings.

var sortedPeople = people.slice().sort((a, b) => a.localeCompare(b))

// It's pretty common to compare by one property of an object and if they are
// equal then continue comparing with another. Please note that sort is not 
// stable in some implementation of JavaScript, for example in chrome


// 5. All at once!

// It's pretty common to use all of these functions at once! You can basically
// do something like LINQ in C# or SQL queries by chaining together these 
// function. If you do chain together then if possible it's recommended to
// filter first to have the most efficiency

// So let's create an account for all users who have the letter 'a' in their 
// name and sort the list by their name

var result = people.filter(person=>person.indexOf('a') !== -1)
	.map(person=> { return { name: person, email: person + '@mail.com' } })
	.sort((a, b) =>a.name.localeCompare(b.name));

// I've put each function call into a new line so that it's a bit more clear.
// Running the statement will create the folowing structure inside result
// 0: {name: "Chalie", email: "Chalie@mail.com"}
// 1: {name: "Max", email: "Max@mail.com"}
// 2: {name: "Ray", email: "Ray@mail.com"}


// 6. Aggregating data

// Sometimes it's important to create a sum, or to count some items. For
// this pupose we can use the reduce function

// The reduce function receives a function and an initial value cand calls 
// the function on each item to produce a new value.

var sum = numbers.reduce((number, sum) => sum + number, 0);

var product = numbers.reduce((number, product) => product * number, 1);


// 7. Searching through data

// Sometimes it's useful to search for an item. If the list is simple
// we can use index of, but for complex cases we to pass a function to 
// determine if the object matches our criteria

numbers.indexOf(7); // returns the index of 7, -1 if not found
points.find(point => point.x < 0); // returns the first pint with negative x
points.findIndex(point => point.x < 0); // same as above but returns an index


// And with that, we've pretty much covered the best practices for using 
// arrays when dealing with data.