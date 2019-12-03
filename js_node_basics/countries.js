const countries = [
    "Taiwan",
    "Brazil",
    "Canada",
    "Australia",
    "Iran",
    "Philippines",
    "Afganistan",
    "India",
    "Yemen",
    "South Korea"
];

// Assign a value to `module.exports` to make it available
// to other JavaScript files in your node project. Having
// a `module.exports` line makes this 'module'
module.exports = countries;

// To access the countries array from another file, we use the 
// "require" function:
// `const countries = require("<path-to-countries>");