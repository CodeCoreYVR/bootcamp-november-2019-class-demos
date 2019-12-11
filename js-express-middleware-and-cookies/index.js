const express = require("express");
const logger = require("morgan");
const path = require("path");

// invoking express will return a express "app" object
const app = express();

const PORT = 3000;
const DOMAIN = "localhost";

// app.set accepts 2 arguments:
// 1) a configuration key: this is a string of the configuration that you want to set
// 2) the value you want the config to be
app.set("view engine", "ejs"); // telling express to use ejs as the view engine

// We need to set the views directory
app.set("views", "views"); // tell express to look for views inside of a directory called views

// Static Assets
// Use `path.join` to combine string arguments into directory paths
// For example:
// path.join('/', 'users', 'hindreen'); // => '/users/hindreen'

// `__dirname` is a global variable available anywhere in any application
// that is run by Node that returns the full directory path beginning from
// root (i.e. '/') to the location of the file where `__dirname` is used.
// console.log("__dirname: ", __dirname);
// console.log(path.join(__dirname, "public"));

// The static assets middleware will take all the files and directories
// at a specified path and serve them publically with their own URL.
app.use(express.static(path.join(__dirname, "public")));
// The above line 👆 connects our 'public' directory to express
// so that it can serve the browser those images, css files, browser-side (client-side)
// javascript files, etc

// Initialize morgan
app.use(logger("dev"));

// recieves at least 2 arguments:
// 1) PATH of the resource
// 2) A callback: the callback has two parameters
//   a) request: Represents a HTTP Request
//   b) response: Represents a HTTP Response

// Route to handle GET "/hello_world"
app.get("/hello_world", (request, response) => {
  // response.render() is used to render out a view, it accepts 3 arguments:
  // 1) the path to the view starting from the configured directory, in this case it's "/views"
  // 2) locals object
  // 3) callback <-- usually you don't use this third argument
  response.render("hello_world");
});

// Make a route to handle GET "/survey"
app.get("/survey", (req, res) => {
  res.render("survey");
});

// Handler for GET "/submit"
app.get("/submit", (req, res) => {
  console.log(req.query);
  res.render("submit", {
    query: req.query,
    subHeading: "thank you!"
  });
});

// app.listen is used to start your express server. It tells express to start listening for requests at a given url

// app.listen accepts 3 arguments
// 1) PORT
// 2) DOMAIN
// 3) Callback
app.listen(PORT, DOMAIN, () => {
  console.log(`Express listening on ${DOMAIN}:${PORT}`);
});
