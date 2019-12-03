// This loads the "fs" code module of Node.
// It's used to perform operation on the file system.
const fs = require('fs');

// React contents of a directory
// 'fs.readdir' is similar to the 'ls' command for node
fs.readdir("./", (err, data) => {
    // The arguments for this callback are in order:
    // - An error if something goes wrong when the function
    // was executed
    // - The data returned by executing the function.
    // In this case, an array of strings of all file names
    // in the directory
    if (err) {
        console.error(err);
    }

    console.log("Contents of ./");
    console.log(data);

    fs.writeFile("dirList.txt", data.join("\n"), function (err) {
        if (err) {
            console.log("Could not write to file");
            console.error(err);
            return;
        }
        console.log("Directory list saved to a file!");
    })
})