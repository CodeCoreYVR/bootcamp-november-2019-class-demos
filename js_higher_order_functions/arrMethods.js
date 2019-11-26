// Array.forEach
// executers a function on every element of an array

// Parameters
// 1) callback
  // a) the current element being operated on
  // b) the index of the current element
  // b) the original array .forEach was called on

const arr = [1,2,3,4,5];
// arr.forEach((element, index, orignalArr) => {
//   console.log(element, index, orignalArr);
// });

// de-construct forEach
// write a function forEach that accepts 2 parameters
// 1) array being operated on
// 2) the callback

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(arr, (element, index, arr) => {
  console.log(element, index, arr);
})

// Array.map
// will execute a callback on every element of the array.
// it will return a new array with the results of executing the callback.

const numbers = ["a", "b", "c", "d", "e"];
// const newArr = numbers.map((element, index, arr) => {
//   return element.repeat(index);
// });
// console.log(newArr)

// re-create the .map method
function map(arr, callback) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(callback(arr[i], i, arr));
  }
  return returnArr;
}

const r = map(numbers, (element, index, arr) => {
  return element.repeat(index);
});
console.log(r);