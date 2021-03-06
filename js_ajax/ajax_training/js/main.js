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

// send a request to get all departments
const departments = new XMLHttpRequest();
departments.open("GET", "http://localhost:3000/departments");

departments.onload = () =>
  console.log("departments: ", JSON.parse(departments.responseText));

departments.send();

// Sending a request with jquery ajax
const fetchDataButton = document.querySelector("#fetch-data");

if (false) {
  fetchDataButton.addEventListener("click", () => {
    $.ajax({
      url: "http://localhost:3000/students",
      success: (responseData, responseStatus, xhrAjaxRequest) => {
        console.info("Data: ", responseData);
      }
    });
  });

  // Fetch data using 'fetch'
  // fetchDataButton.addEventListener("click", () => {
  //   fetch("http://localhost:3000/departments")
  //     .then(res => res.json())
  //     .then(res => console.info(res));
  // });

  fetchDataButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/departments");
    const jsonData = await response.json();
    console.info("Data: ", jsonData);
  });

  // Axios
  fetchDataButton.addEventListener("click", async () => {
    const response = await axios.get("http://localhost:3000/students");
    console.log("Data: ", response.data);
  });
}
// use superagent to send a request to get all departments
fetchDataButton.addEventListener("click", () => {
  superagent
    .get("http://localhost:3000/departments")
    .then(res => console.log(JSON.parse(res.text)));
});
