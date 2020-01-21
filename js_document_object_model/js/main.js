const toxicTim = document.querySelector("#toxic-tim");
const teamSalmonSelector = ".team.salmon";

const teamSalmon = document.querySelector(teamSalmonSelector);
const lastDoggoTeamSalmon = teamSalmon.querySelector(".doggo:last-child");

const allDoggoFighters = document.querySelectorAll(".doggo.fighter");
const divs = document.querySelectorAll("div");

const bumbleBertha = document.getElementById("bumble-bertha");

// Exercise: Picking Doggos

// 1. Select MoneyBags Michael & Larry The Lion
const moneyBagsAndLarry = document.querySelectorAll(
  "#larry-the-lion, #moneybags-michael"
);
// 2. Select all team teal doggos but first
const allTeamTealDoggosButFirst = document.querySelectorAll(
  ".team.teal .doggo:not(:first-child)"
);
// 3. Select the second doggo in every team
const secondDoggos = document.querySelectorAll(
  ".team .roster .doggo:nth-child(2)"
);

// Looping through an HTML collection
// for (let doggo of allDoggoFighters) {
//     console.log(doggo);
// }
// allDoggoFighters.forEach(doggo => console.log(doggo));

const inbreadDog = document.querySelector("#inbread-dog");
inbreadDog.nextElementSibling; // gets Larry The Lion which is next sibling to in bread doggo
inbreadDog.previousElementSibling; // return null brcause, there are no previous siblings

teamSalmon.children[1]; // div.roster
teamSalmon.children[1].children; // roster children

document.querySelector(".team.salmon .roster").children;

document
  .querySelector(".team.salmon .roster")
  .children.namedItem("nina-the-ninja");

toxicTim.parentElement; // roster
toxicTim.parentElement.parentElement; // team salmon
toxicTim.parentElement.parentElement.parentElement; // teams

document.querySelector("html").firstElementChild; // returns the first child to HTML

document.querySelector("html").lastElementChild; // returns the last child to HTML Document

// Match
toxicTim.matches("h1"); // false
toxicTim.matches("#toxic-tim"); // true
toxicTim.matches("div"); // true
toxicTim.matches(".doggo.fighter"); // true
toxicTim.matches(".dsalfkjsalkf"); // false

// closest
// <node>.closest('css-selector');

// so the above 👆 searches for all the ancestors of (beginning with itself)
// for the first node that matches the line, if no matching ancestor node, then returns
// null. It can be thought as reverse .querySelector(...)

toxicTim.closest("div"); // <div id="toxic-tim" class="doggo fighter">...</div>
toxicTim.closest(".team"); // <div class="team salmon">...</div>

// Styling nodes with javascript
toxicTim.style.border = "10px solid black";
toxicTim.style.borderRadius = "20px";

// styling all the divs in our document
// divs.forEach(div => div.style.border = "10px solid brown")

// styling elements using bracket notation []
toxicTim.style["background-color"] = "maroon";

getComputedStyle(toxicTim); // to get the actual computed style of a node

// Changing the content of nodes
// There are 4 properties that we use to change DOM content they are:
// .innerHTML, .innerText, .outerHTML, .outerText

teamSalmon.innerHTML; // that will return the innerHTML of teamSalmon node
teamSalmon.innerText; // returns all of the content within the HTML tags

// The versions with .outer are nearly the same, except they include the node itself as well

// Updating IDs & Classes
toxicTim.id; // #toxic-tim
toxicTim.classList; //  ["doggo", "fighter", value: "doggo fighter"]
toxicTim.className; // "doggo fighter"
toxicTim.href; // undefined because, toxicTim doesn't have 'href' attribute

// changing (updating) attributes
// toxicTim.id = 'what-so-ever';

document.querySelectorAll("label")[0].classList.add("selected"); // this will add selected class to the classlist of first label

toxicTim.classList.add("dead"); // adding "dead" class to the list of toxicTim's classes
toxicTim.classList.remove("dead"); // remove "dead" class from toxicTim's classes

// adding multiple classes
toxicTim.classList.add("first", "second");

// remove multiple classes
toxicTim.classList.remove("first", "second");

// getAttribute, setAttribute
toxicTim.getAttribute("class"); // that will return toxicTim class attribute
// toxicTim.setAttribute("class", "dead"); // that sets toxicTim class to dead

// removing attributes
// toxicTim.removeAttribute("class"); // that will remove toxicTim's class attribute
