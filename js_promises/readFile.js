const fs = require('fs');

fs.readFile('./delay.js', {encoding: 'utf8'}, (err, data) => {
  console.log(data);
  fs.readFile(
    fs.readFile()
  )
});

function readFile(path, obj) {
  return new Promise((res, rej) => {
    fs.readFile(path, obj, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    })
  })
}

readFile('./delay.js', {encoding: 'utf8'})
  .then(data => readFile())
  .then(data => readFile())
  .then(data => reasFile())
  .catch(err => console.log(err));