// recurisve function to add all elements of an array;

const numbers = [1,2,3,4,5];
function sum(arr) {
  // termination case: when arr.length is 0
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
console.log(sum(numbers));

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 24;

function iterativeFactorial(n) {
  let product = 1;
  for (let i = n; i >= 1; i--) {
    product = product * i;
  }
  return product
}
console.log(iterativeFactorial(4));