// JS: jQuery

// Selecting Nodes

// The $ function from jQuery could be thought of like the following:
//  const $ = (query) => document.querySelectorAll(query);
// To be clear, that is not how it is implemented, but it will
// return a collection of jQuery nodes similar to how
// document.querySelectorAll returns a collection of HTML Nodes

// $('css-selector')
// It returns a list of nodes (jQuery list) that contains all
// of the nodes that match the 'css-selector'

// select the 2nd button
$("#button-2");
// select all anchor tags
$("li a");
// select the small grey cicle shape
$(".small.grey.circle.shape");
// count the number of blue circles
$(".blue.circle.shape").length;

// Demo: Attributes, Classes & Removal
// Set href attribute of all links in the page to 'http://nyan.cat'
$("li a").attr("href", "http://nyan.cat");
// Remove the blue class from all shapes and replace it with the red class
$(".blue.shape")
  .removeClass("blue")
  .addClass("red");

// Exercise: Practice
// Set the class attribute of all anchors to highlight with attr method
$("a").attr("class", "highlight");
// Replace all circle classes with the diamond class
$(".circle.shape")
  .removeClass("circle")
  .addClass("diamond");
// Remove all shapes in the purple & green container
$("#purple-container .shape, #green-container .shape").remove();
$("#purple-container, #green-container")
  .find(".shape")
  .remove();

// Iterating over a jQuery collection
$(".shape").first();
$(".shape").last();
// get a node at a specific index
$(".shape").eq(2);
$(".shape").eq(3);

// This method returns a jQuery wrapped object so that we can still use
// all jquery methods on it as opposed to:
$(".shape")[0];

// Demo: html, children, and parent
// Get html of the reset button
$("#reset").html();
// Try to get html of all links
$("li a").map((index, link) => $(link).html());
// Change reset button to read "Launch Doggos!"
$("#reset").html("Lauch Doggos!");

// Exercise: practice
// Replace content of all 'td's with 'yass'
$("td").html("yass");
// Select parents of all td tags
$("td").parent();

// Demo: Creating Nodes, append, and prepend
// 1. create a small blue diamond with $
const smallBlueDiamond = $('<div class="small blue diamond shape"></div>');
// 2. append small blue diamonds to all containers
$(".container").append(smallBlueDiamond);
// 3. prepend a new link 'http://nyan.cat' to the link list
$("ul").prepend('<li><a href="http://nyan.cat">Nyan Cat</a></li>');

// Exercise: Practice
// 1. Create a div with the 'container' class.
const container = $('<div class="container"></div>');
// 2. Prepend it to the first section tag in the body.
$("body section")
  .first()
  .prepend(container);
// 3. Append a 'small black circle' to the container.
$(container).append('<div class="small black circle shape"></div>');

// document.addEventListener('DOMContentLoaded') is equivallent to:
// $(document).ready()
$(document).ready(function() {
  // console.log("everything is loaded to the page and DOM is ready");
  $(".blue.circle").on("mouseenter", event => {
    console.log("blue circle: go away!");
  });

  $(".blue.circle").on("mouseleave", event => {
    console.log("blue circle: good bye!");
  });

  $("#button-1").on("click", event => {
    $(".shape").remove();
  });
});
