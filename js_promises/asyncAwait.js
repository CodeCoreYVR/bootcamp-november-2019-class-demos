// Async Await is new syntax for handling promises
const delay = require('./delay');

async function doSomething() {
  try {
    const blue = await delay(1000, "green");
    console.log(blue);
    const brown = await delay(1000, "brown");
    console.log(brown);
  } catch (error) {
    console.log(error);
  }
}

doSomething();