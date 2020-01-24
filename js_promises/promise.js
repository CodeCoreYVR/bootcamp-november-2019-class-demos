// A Promise is a new syntatical way to handle asynchronous actions
// A Promise is a special object built into JavaScript after ECMAscript2015
// It represents the eventual completion or failure of a asynchronous operation

// Promise constructor

const DELAY = 2000;
const THREE_SECONDS = 3000;

const pinkyPromise = new Promise((resolve, reject) => {
  // resolve is a function used to return a good value
  // reject is a function used to return a bad value
  if (4000 > THREE_SECONDS) {
    reject("You took too long ):");
  }
  setTimeout(() => {
    resolve("Thank you for keeping your promise.")
  }, DELAY)
});

pinkyPromise.then(() => console.log(pinkyPromise));