// function declaration/statement
// function add(a, b) {
//   return a + b;
// };

// function expression
const add = function(a, b) {
  return a + b;
}

// to invoke a function you append parenthesis `()`
add(5, 5); // 10;

// if you were to reference this function without invoking you get the function definition
add; // [function: add]

// Functions are first-class citizens
// this means they have the same behaviour as the rest of the base types in the language
// functions behave like strings, numbers, arrays, objects
// this means you can the pass function defintion into other functions as a argument

// just a noraml that returns "hi"
function sayHi() {
  return "Hi";
}

// accepts a parameter `fn` which we expect to be a function definition
function fnAccepter(fn) {
  // logs the return of `fn`
  console.log(fn());
}

fnAccepter(sayHi); // this works
fnAccepter(sayHi()); // tries to invoke "Hi"()

// fnReturner

function fnReturner() {
  return add;
}

fnReturner(); // [Function:add];
