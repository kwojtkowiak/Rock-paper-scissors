const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
const playerSelection = inputCheck(prompt("What do you choose? Rock, paper or scissors?", "Rock"));

function inputCheck(playerSelection) {
if (playerSelection.toLowerCase() == "rock" || "paper" || "scissors") {
    alert("Your choice has been made. Proceeding...");
  }
else {
    greeting = "That's not a valid choice!";
  }
inputCheck(playerSelection)
}

function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

function singleRound(playerSelection, computerSelection) {
    if 
    else {
        alert("Ayy lmao, it's not a valid option")
    }
}