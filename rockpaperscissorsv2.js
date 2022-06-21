const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
const playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");

function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

function singleRound(playerSelection, computerSelection) {
let input = playerSelection.toLowerCase();
let pcinput = computerSelection.toLowerCase();
if (input === "rock" && pcinput === "paper") {
    return result = console.log("You lose! Paper beats Rock.")
}
else if (input === "paper" && pcinput === "scissors") {
    return result = console.log("You lose! Scissors beats Paper.")
}
else if (input === "scissors" && pcinput === "rock") {
    return result = console.log("You lose! Rock beats Scissors.")
}
else if (input === pcinput) {
    return result = console.log("It's a draw!")
}
else {
    return result = console.log("You win!")
}
}