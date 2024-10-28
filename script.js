let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSORS = document.querySelector("#scissors");
let getHumanChoice = "";
let getCompChoice = "";

 ROCK.addEventListener("click", ()=>{
    getHumanChoice = "rock";
    getCompChoice = getComputerChoice();
    playRound(getHumanChoice,getCompChoice);
    console.log(getHumanChoice);
 });

 PAPER.addEventListener("click", ()=>{
    getHumanChoice = "paper";
    getCompChoice = getComputerChoice();
    playRound(getHumanChoice,getCompChoice);
    console.log(getHumanChoice);
 });

SCISSORS.addEventListener("click", ()=>{
    getHumanChoice = "scissors";
    getCompChoice = getComputerChoice();
    playRound(getHumanChoice,getCompChoice);
    console.log(getHumanChoice);
 });



function getComputerChoice(){
   let choice = parseInt(Math.random()*10) % 3;

   switch(choice){
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    default:
        return "";
   }
}





function playRound(humanChoice, computerChoice){
   let hChoice = humanChoice.toLowerCase();
   let cChoice = computerChoice.toLowerCase();
    if (hChoice === "rock" && cChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice  === "scissors" && cChoice === "paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice === "paper" && cChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice  === "scissors" && cChoice=== "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice  === "paper" && cChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice  === "rock" && cChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
        roundNumber += 1;
        // playGame();
    }else if(hChoice === cChoice){
        console.log("Its a tie!");
        roundNumber += 1;
        // playGame();
    }else{
        console.log("Enter a valid input");
        // playGame();
    }
   
}



// function playGame(){
   
//     if (roundNumber < 5){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }else{
//         console.log("Game Over. \nYour Score: "+ humanScore + "\nComputer Score: " + computerScore);
//     }
//     if (computerScore > humanScore){
//         console.log("Computer Wins!");
//     }else if(computerScore < humanScore){
//         console.log("You Win!");
//     }else{
//         console.log("It's a draw!");
//     }
// }
// playGame();
