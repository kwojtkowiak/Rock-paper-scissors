const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
const playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");

function inputCheck(playerSelection) {
let input = playerSelection.toLowerCase();
if (input === "rock" || input === "paper" || input === "scissors") {
    alert("Your choice has been made. Proceeding...");
  }
else {
    alert("That's not a valid choice!");
  }
}

function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

//function singleRound(playerSelection, computerSelection) {
 //   if 
  //  else {
  //  alert("Ayy lmao, it's not a valid option")
  //   } 
  //  }