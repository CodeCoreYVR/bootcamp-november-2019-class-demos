// JS: Events & The Loop

// Events
const toxicTeam = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <selected-node>.addEventListener

teamSalmon.addEventListener("click", event => {
  //   console.log("=========");
  //   console.log("team salmon was click");
  // The 'event' object contains a host of useful information
  //  about triggered event
  // including (but not limited to) the position of the cursor,
  // which modfier was held at the time (e.g. shift, alt, cmd, etc),
  // which node was clicked, at what datetime the event was triggered etc...
  //   console.log(event.type); // returns the type of event e.g. click, dblClick ...
  // The target property refers to the node that originally triggered the event.
  // In this case of a 'click' eventm that is the node where the cursor was located
  // at the time fo the click. It will always be a descendant of the currentTarget
  // node, Or the currentTarget node.
  //   console.log(event.target);
  // In this case, it is always going to be 'teamSalmon'
  //   console.log(event.currentTarget);
});

toxicTeam.addEventListener("click", event => {
  //   console.log("Toxic was clicked!");
  const { target, currentTarget, clientX, clientY } = event;
  console.log("target: ", target);
  console.log("currentTarget: ", currentTarget);
  console.log(`Cursor Position: ${clientX}, ${clientY}`);

  // this will refer to Window because we are using arrow function above
  console.log("this: ", this);
});

const printMessage = element => {
  console.log("element: ", element);
  console.log("Printing a message ...");
};

document.addEventListener("click", () => {
  //   console.log("clicked the document!");
});

// Exercise: Clicking Titles
const doggoTitles = document.querySelectorAll(".doggo.fighter h1");
doggoTitles.forEach(title => {
  title.addEventListener("click", event => {
    const { currentTarget } = event;
    // const currentTarget = event.currentTarget;
    console.log(`${currentTarget.innerText} clicked`);
  });
});

// since we don't any paragraphs, querySelector will return null
const p = document.querySelector("p");

// p is not an instace of node because, it is null
if (p instanceof Node) {
  p.addEventListener("click", () => console.log("paragraph was clicked!"));
}

// function Guest(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Guest.prototype.printMethod = function() {
//   console.log(`${this.name} is ${this.age} years old`);
// };

/*
function c() {
    console.log('c');
    setTimeout(function getLname() {
        console.log("Sulaiman")
    }, 0);
}

function b() {
    console.log('b');
    setTimeout(function getFname() {
        console.log('Hindreen');
    }, 0);
    c();
}

function a() {
    console.log('a');
    b();
}

a();
*/
const doggos = document.querySelectorAll(".doggo.fighter");
doggos.forEach(doggo => {
  doggo.addEventListener("click", event => {
    const clickedDoggo = event.currentTarget;
    const parentNode = clickedDoggo.parentElement;
    // const parentNode = clickedDoggo.closest(".roster");
    parentNode.append(clickedDoggo);
  });
});
