const fs = require('fs');

// console.log(process.argv);

const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
    const fileContents = data.toString();
    // console.log(fileContents);
    const lineArray = fileContents.split('\n');
    lineArray.forEach((line, index) => {
        console.log(`${index + 1} | ${line}`);
    });
});