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
