import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

//task 1

let button=document.createElement('button')
button.textContent='show population'
button.onclick=displayPopulation
document.body.appendChild(button)

//createListOfFruits(fruits);

//.filter((fruit) => fruit.length > 5)

//mini task

const x = document.querySelector("#clickMe");
const y = document.querySelector("#hovering");

x.addEventListener("click", respondClick);
y.addEventListener("mouseover", respondMouseOver);
y.addEventListener("mouseout", respondMouseOut);

function respondMouseOver() {
  document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
}

function respondMouseOut() {
  document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
}

function respondClick() {
  document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
}

//Task 3 

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber)

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random()
}

document
 .querySelector("#remove-handler-button")
 .addEventListener("click", removeHandler);

function removeHandler() {
 document.querySelector("#remove-handler")
 .removeEventListener("mousemove", randomNumber);
} 