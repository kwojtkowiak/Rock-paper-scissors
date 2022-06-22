//Some starting stuff
const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
console.log(computerSelection);
let playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");

//Works fine
function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

function inputCheck(playerSelection) {
    
let text = playerSelection.toLowerCase(); 
while (text !== "rock" && text !== "paper" && text !== "scissors" ) {
 alert("Input is invalid!");
 playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");
 }
alert("Your choice has been made. Proceeding...");
}

console.log(inputCheck(playerSelection));

//This one works fine
function singleRound(playerSelection, computerSelection) {
inputCheck(playerSelection);
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

console.log(singleRound(playerSelection, computerSelection))

//WIP
function game() {
    for (let i = 0; i<5; i++) {
        singleRound(playerSelection, computerSelection);
    }
}