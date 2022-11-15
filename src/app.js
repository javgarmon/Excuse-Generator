/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseMeBut();
  });
};

let excuseMeBut = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let answer1 = who[Math.floor(Math.random() * who.length)];
  let answer2 = what[Math.floor(Math.random() * what.length)];
  let answer3 = when[Math.floor(Math.random() * when.length)];
  return answer1 + " " + answer2 + " " + answer3;
};
