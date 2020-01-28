// AJAX - Asynchronous Javascript and XML

// AJAX is a set of techniques to fetch data
// from a server asynchronously without
// interfering with the display and behavior
// of existing page
// What that means is, our page loads while,
// in the background the 'AJAX' fetches data
// from a server and make it available for our use

// What is JSON?
// JSON - JavaScript Object Notation is the most common
// way of storing and working with data in javascript.
// It all contains two main things, which are objects and arrays
// which we already know about the only difference here is that
// JSON object keys need to be wrapped in double quotes
// and we access them same way we've learned for javascript objects
// and arrays

// The browsers has a built-in tool called "XMLHttpRequest"
// and this tool will do all the heavy lifting for us, with it,
// we establish a connection with the 'url' that we want to send to
// or receive from

// to use it, we need to create an instance of it

const students = new XMLHttpRequest();
students.open("GET", "http://localhost:3000/students");
// open method accepts two arguments,
// the first to specify wether we want to send data
// or receive data using HTTP verbs ('GET', 'POST', 'PATCH', 'DELETE', etc...)
// and the second argument is simply just the URL

students.onload = () => {
  console.log("Students: ", JSON.parse(students.responseText)[0]);
};

// Up to here, we defined our request and finally we need to send it
students.send();
