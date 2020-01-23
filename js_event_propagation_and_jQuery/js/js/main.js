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
