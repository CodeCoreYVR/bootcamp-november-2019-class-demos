// function declaration
// function bark(str) {
//   return `barks ${str}`;
// }

// arrow function (ES6) (ECMAScript 2015)
const bark = (str) => {
  return `barks ${str}`;
}

// if a arrow function only has one expression in the body, we can omit `{}` and the return keyword

const bark2 = (str) => `barks ${str}`;

// if a arrow function only has one argument, we can omit the parenthesis `()`

const bark3 = str => `barks ${str}`;

// To Arrow: Turn the following functions to arrow functions.

// function add(a, b) {
//   return a + b;
//  }
 
//  function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
//  }

//  add to arrow
const add = (a, b) => a + b;

// flip to arrow

//  function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
//  }
const sub = (a, b) => a - b;
const flip = fn => (a, b) => fn(b, a);

// V function to arrow

// function V(x) {
//   return function(y) {
//     return function(z) {
//       return z(x)(y);
//     };
//   };
//  }

const v = x => y => z => z(x)(y);
