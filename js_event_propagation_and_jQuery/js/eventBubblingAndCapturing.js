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

  // Event capturing
  const captureButton = document.querySelector("#event-capturing-button");
  const eventCapturingContainer = document.querySelector(
    ".event-capturing-container"
  );
  const eventsContainer = document.querySelector(".events");
  const documentBody = document.querySelector("body");

  // Note: to activiate capturing phase we need
  // to pass 'true' argument to addEventListener function

  captureButton.addEventListener(
    "click",
    event => {
      console.log("event capturing button was clicked!");
    },
    true
  );
  eventCapturingContainer.addEventListener(
    "click",
    event => {
      console.log("capturing button container was clicked!");
    },
    true
  );

  eventsContainer.addEventListener(
    "click",
    event => {
      console.log("events container was clicked!");
    },
    true
  );

  documentBody.addEventListener(
    "click",
    event => {
      console.log("Document was clicked!");
    },
    true
  );
});
