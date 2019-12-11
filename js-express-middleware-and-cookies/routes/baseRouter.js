const express = require("express");
const router = express.Router();

// Create a route for the root "/" path
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // a week in milliseconds

router.get("/", (req, res) => {
  const cookieValue = "My new cookie";
  res.cookie("myCookie", cookieValue, {
    maxAge: COOKIE_MAX_AGE
  });

  res.render("welcome");
});

// sign_in page route
router.get("/sign_in", (req, res) => {
  res.render("signInPage");
});

// sign_in post route
router.post("/sign_in", (req, res) => {
  // const username = req.body.username;
  const { username } = req.body;
  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  res.redirect("/");
});

// Sign Out route

router.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

// recieves at least 2 arguments:
// 1) PATH of the resource
// 2) A callback: the callback has two parameters
//   a) request: Represents a HTTP Request
//   b) response: Represents a HTTP Response

// Route to handle GET "/hello_world"
router.get("/hello_world", (request, response) => {
  // console.log("requestObject: ", request);
  // response.render() is used to render out a view, it accepts 3 arguments:
  // 1) the path to the view starting from the configured directory, in this case it's "/views"
  // 2) locals object
  // 3) callback <-- usually you don't use this third argument
  response.render("hello_world");
});

// Make a route to handle GET "/survey"
router.get("/survey", (req, res) => {
  res.render("survey");
});

// Handler for GET "/submit"
router.get("/submit", (req, res) => {
  // console.log(req.query);
  res.render("submit", {
    query: req.query,
    subHeading: "thank you!"
  });
});

module.exports = router;
