// loud function
function loud(fn, logFn) {
  logFn(`Calling: ${fn.name}`);
  const fnReturn = fn();
  logFn(`Called: ${fn.name}`);
  return fnReturn;
}

const sayHi = () => "hi";

loud(sayHi, console.log);

