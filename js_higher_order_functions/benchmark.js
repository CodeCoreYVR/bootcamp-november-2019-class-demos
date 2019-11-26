function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function iterativeFactorial(n) {
  let product = 1;
  for (let i = n; i >= 1; i--) {
    product = product * i;
  }
  return product
}

// console.time and console.timeEnd to benchmark

console.time('recursion');
factorial(5000); //recursive
console.timeEnd('recursion');

console.time('iteration');
iterativeFactorial(5000);
console.timeEnd('iteration');