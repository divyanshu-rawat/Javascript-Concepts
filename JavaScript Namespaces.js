// Namespaces
// 
// A common problem associated with having only one global namespace is the likelihood of running into problems where variable names clash.
// In JavaScript, this problem can easily be avoided with the help of anonymous wrappers.

(function() {
    // a self contained "namespace"

  

}) (); // execute the function immediately


// Unnamed functions are considered expressions; so in order to be callable, they must first be evaluated.


( // evaluate the function inside the parentheses
function() {}
) // and return the function object
() // call the result of the evaluation


// There are other ways to evaluate and directly call the function expression which, while different in syntax, behave the same way.

// A few other styles for directly invoking the 

// !function(){}()
// +function(){}()
// (function(){}());

// and so on...


// It is recommended to always use an anonymous wrapper to encapsulate code in its own namespace.
// This does not only protect code against name clashes, but it also allows for better modularization of programs.
// Additionally, the use of global variables is considered bad practice. 
// Any use of them indicates badly written code that is prone to errors and hard to maintain.

