// Event Propagation
// .on method only works in bubbling phase
const { log } = console;
$(document).ready(() => {
  // Bubble phase
  // In bubbling, the event is bubbled or going up from inner most to the upper most
  // think of it as water bubbling and the bubbles are going up

  $("body").on("click", event => {
    event.preventDefault();
    log("Document was clicked!");
  });

  $(".events").on("click", event => {
    event.preventDefault();
    event.stopPropagation();
    log("events container was clicked!");
  });

  $(".event-bubbling-container").on("click", event => {
    event.preventDefault();
    log("event bubbling container was clicked!");
  });

  $("#event-bubbling-button").on("click", event => {
    event.preventDefault();
    event.stopPropagation();
    log("event bubbling button was clicked!");
  });
});
