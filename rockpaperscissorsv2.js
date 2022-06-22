//Some starting stuff
const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
console.log(computerSelection);
const playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");

//Works fine
function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

// // //Does not check after first incorrect input
// function inputCheck(playerSelection) {
// let text = playerSelection.toLowerCase();
//    if (text === "rock" || text === "paper" || text === "scissors") {
// alert("Your choice has been made. Proceeding...");
// }
// else {
// alert("That's not a valid choice!");
// text = prompt("What do you choose? Rock, paper or scissors?", "Rock");
// inputCheck(text);
// }
// }


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