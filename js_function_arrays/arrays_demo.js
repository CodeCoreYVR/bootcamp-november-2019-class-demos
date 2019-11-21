// let fruit1= 'orrange';
// let fruit2= 'apple';
// let fruit3= 'banana';

// Arrays

// Create arrays with square brackets where each
// value inside is seperated by a comma
const arr = [1,2,3,4,5] // undefined
arr // [ 1, 2, 3, 4, 5 ]

// Get the size array with the length property like
// strings
arr.length // 5
[].length // 0

// Read values from arrays by their position or index.
// Indexes begin at 0.
arr[0] // 1
arr[2] // 3

// To get last value, use the length of the arr. minus 1
arr[arr.length - 1] // 5
arr[10] // undefined


const arr=["a","b","c","d", 1,2,3]
// for (let i=0;i < arr.length; i++ ){
//     console.log(`index: ${i} value:${arr[i]}`);   
// }

for(let value of arr){
    console.log(`value ${value}`);
    
}





// Arrays are built with object which means that we can
// create key value pairs with their [] notation, but
// we should avoid doing this. This means that indexes
// are actually object keys.
arr['myKey'] = "hello" // 'hello'
arr // [ 1, 2, 3, 4, 5, myKey: 'hello' ]

// Use .concat() to combine arrays into new array
// without changing the original array
const a = [ 1, 2, 3, 4, 5 ]
a.concat(['a', 'b', 'c']) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5 ]

// If you must change the original variable, you
// can re-assign like this
a = a.concat(['a', 'b', 'c']) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]

a.concat(1) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 1 ]
a.concat(9,8,7,6) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 9, 8, 7, 6 ]

// Use .slice to create new array from
// a part of another array.

a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
// The first argument is the index of where
// to start keeping values.
a.slice(5) // [ 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]

// The second argument is the index of where to
// stop keeping values. If not given, it's
// to the end of the array (the last index).
a.slice(0, 5) // [ 1, 2, 3, 4, 5 ]
a.slice(5, 6) // [ 'a' ]

// If a value is given as a negative number, then
// slice will act in reverse (beginning from the end)
a.slice(-1) // [ 'c' ]
a.slice(-3) // [ 'a', 'b', 'c' ]
a.slice(-3, -2) // [ 'a' ]


// You can bracket notation with assignment to add
// or replace values in an array as you with
// objects

a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a[0] = 3 // replaces the first value of a
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c' ]

a[a.length] // undefined
a[a.length] = 90 // Adds 90 as value at the end of the array
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 90 ]

// The recommended to add values to the end of
// array is with .push()

a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c' ]
a.push("My Value") // 9
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value' ]
a.push({a: 1}) // 10
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value', { a: 1 } ]

// To add values add the beginning of an array, use
// .unshift()
const b = []
b.unshift(1) // 1

// You can add multiple values at a time. This also works
// with .push()
b.unshift(4, 5, 6) // 4
b // [ 4, 5, 6, 1 ]

// Use .pop() to remove and return the last value
// of an array. This changes the original array (a mutation).
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value', { a: 1 } ]
a.pop() // { a: 1 }
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value' ]
a.pop() // 'My Value'
a.pop() // 'c'
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b' ]

a.pop(2) // This doesn't anything different.
// You can only .pop() one value at a time
a // [ 10, 10, 3, 2, 3, 4, 5, 'a' ]

// Use .shift() like .pop() to remove and return
// the first element of an array.
a // [ 10, 10, 3, 2, 3, 4, 5, 'a' ]
a.shift() // 10
a.shift() // 10
a.shift() // 3
a // [ 2, 3, 4, 5, 'a' ]

// To check if a value is an array use,
// Array.isArray(...)

Array.isArray(1) // false
Array.isArray({}) // false
Array.isArray([]) // true
Array.isArray(a) // true

// To create strings from arrays, use .toString()
// or .join(...) with a string as an argument

a // [ 2, 3, 4, 5, 'a' ]
a.toString() // '2,3,4,5,a'

// With join, you can decided how the values from
// are joined together
a.join() // '2,3,4,5,a'
a.join(" ") // '2 3 4 5 a'
a.join(" | ") // '2 | 3 | 4 | 5 | a'
a.join("\n") // '2\n3\n4\n5\na'

// To test if value is inside and array or not,
// use .includes(...) with a value as an argument

a // [ 2, 3, 4, 5, 'a' ]
// It returns `true` when the value present
a.includes('a') // true
// `false` otherwise
a.includes('b') // false
