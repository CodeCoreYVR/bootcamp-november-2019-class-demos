// Strings just represent text in javsacript

// decaring strings

// 1) double quotes
"hello world"

// 2) single quotes
'hello world'

// 3) backticks
`hello world`

// String concatenation
// adding strings together
"Hello " + "World" // "Hello World"
"a" + "b" + "c" // "abc"

// Try 
55 + "world"

// this returns "55world"
// this is because javascript is loosley typed. It converts 55 to a string, then concatenates these strings together

// String interpolation

// If you're using backticks (``) to define a string... you can use string interpolation.

// String interpolation allows us to write expressions in strings that will evaluate.

`${1 + 1 + 1} rings...` // "3 rings"
`${3 * 3} for ${"Mortals"} men...`

// .length
// used to get the length of a string.
"Dark Lord".length 
"".length // 0
20.length // this will give us an error because .length is only available to strings. Not numbers.

// Accessing Index

// Indexes are positions within a thing.

// if we wanted to get a character at a specfic index of a string
// we can use the square bracket notation with the numbered index we want.
"dark throne"[0] // d
"dark throne"[3] // k
"dark throne"[4] // empty space
"dark throne"[50] // undefined

// undefined
// everytime we try to access something that does not exist javascript will return the base type `undefined`

// converting strings to numbers

"500"

// parseInt()
// use to convert strings to numbers
parseInt("500");

// if we want to parse a float we must use parseFloat()
parseInt("3.14"); // 3
parseFloat("3.14"); // 3.14

