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

