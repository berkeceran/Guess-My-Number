"use strict";
/*
document.querySelector(".message").textContent = "berke beeee";
document.querySelector(".score").textContent = 17;

console.log(document.querySelector(".message").textContent);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Please give a number";
  } // when player win
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You are correct !!!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } // when number is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Please give a lower number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  } // when number is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        " Please give a higher number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
