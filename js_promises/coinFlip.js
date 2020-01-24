function throwCoin() {
  return new Promise((res, rej) => {
    const seconds = [1,2,3,4];
    const face = [1,0][Math.floor(Math.random() * 2)]; // random whole number between 0 - 1
    const randomTime = seconds[Math.floor(Math.random() * 4)] * 1000; // random whole number between 1000-4000
    if (randomTime > 3000) { // if the coin was thrown too high we reject the promise with an error
      setTimeout(() => {
        rej(new Error('thrown too high'));
      }, randomTime);
    } else { // resolve with the value of the coin
      setTimeout(() => {
        if (face) { // if face is 1... Javascript considers the number 0 to be false, and any other number to be true
          res('heads');
        } else {
          res('tails');
        }
      }, randomTime)
    }
  })
}

// Using Promises (our promisified function throwCoin)
// You can use a instance of a promise, it looks like any other javascript object.

// an instance of a promise has two methods... .then() and .catch()
// .then() accepts a callback function with 1 argument. It will invoke that callback function if the promise resolves to a good value (resolves)
// .catch() accepts a callback function with 1 argument. It will invoke that callback if the promise resolves to a bad value (rejects)

throwCoin().then(faceValue => { // faceValue is determined by what the arguemnt of `res` within the promise definition 
  if(faceValue === 'heads') {
    console.log('everybody drinks');
  } else {
    console.log('one person drinks');
  }
}).catch(err => { // err in the .catch is determined by what the argument of `rej` within the promise definition
  console.log('they drinks everything');
})