const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const yourScore = document.getElementById('your-score');
const compScore = document.getElementById('comp-score');


let userChoice;  // global variable using let as this will change for each game
let computerChoice;
let result;

let userScore = 0;
let computerScore = 0;

yourScore.innerHTML = userScore;
compScore.innerHTML = computerScore;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const options = ['rock', 'scissors', 'paper'];
    computerChoice = options[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

//function getResult() {
//    if(computerChoice === userChoice) {
//        result = "It's a draw!";
//        userScore ++;
//        computerScore ++;
//    }
//
//    if((computerChoice === 'rock' && userChoice === "paper") || (computerChoice === 'paper' && userChoice === "scissors") || (computerChoice === 'scissors' && userChoice === "rock")) {
//        result = "You Win!";
//        userScore ++;
//    }
//
//    if((computerChoice === 'rock' && userChoice === "scissors") || (computerChoice === 'scissors' && userChoice === "paper") || (computerChoice === 'paper' && userChoice === "rock")) {
//        result = "You Lose!";
//        computerScore ++;
//    }
//
//    resultDisplay.innerHTML = result;
//    yourScore.innerHTML = userScore;
//    compScore.innerHTML = computerScore;
//}

function getResult() {
    switch (computerChoice + userChoice) {
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result = 'You Win!'
            userScore ++;
            break
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            result = 'You Lose!'
            computerScore ++;
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        result = 'Draw';
        userScore ++;
        computerScore ++;
    }

    resultDisplay.innerHTML = result;
    yourScore.innerHTML = userScore;
    compScore.innerHTML = computerScore;
}