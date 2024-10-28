let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSORS = document.querySelector("#scissors");
const display = document.querySelector(".display");
const gameOverDisplay = document.querySelector(".gameOver");
let getHumanChoice = "";
let getComputerChoice = "";


//Action of Button When Clicked

 ROCK.addEventListener("click", ()=>{
    getHumanChoice = "rock";
    getComputerChoice = computerChoice();
    play();
 });

 PAPER.addEventListener("click", ()=>{
    getHumanChoice = "paper";
    getComputerChoice = computerChoice();
    play();
    // console.log(getHumanChoice);
 });

SCISSORS.addEventListener("click", ()=>{
    getHumanChoice = "scissors";
    getComputerChoice = computerChoice();
    play();
    // console.log(getHumanChoice);
 });
 
 //CHECK IF SCORE OF ANY PLAYER IS UP TO 5 POINTS TO DISPLAY THE GAME OVER SCREEN
 function play(){
  
        if (humanScore === 5 || computerScore === 5){
            gameOverDisplay.textContent = "";
            const gameOverTitle = document.createElement("h1");
            gameOverTitle.textContent = "GAME OVER!";
            const winner = document.createElement("h3");
            const message = document.createElement("p");
            const space = document.createElement("br");
            const scoreTextHuman = document.createElement("span");
            const scoreTextComputer = document.createElement("span");
            const scoreHuman = document.createElement("span");
            const scoreComputer = document.createElement("span");
            scoreHuman.textContent = humanScore;
            scoreHuman.style.fontSize = "20px";
            scoreHuman.style.color = "green";
            scoreHuman.style.fontStyle = "bold";
            scoreComputer.textContent = computerScore;
            scoreComputer.style.fontSize = "20px";
            scoreComputer.style.color = "green";
            scoreComputer.style.fontStyle = "bold";
            scoreTextHuman.textContent = "Your score: ";
            scoreTextComputer.textContent = "Computer score: ";
            gameOverTitle.style.color ="red";
            message.appendChild(scoreTextHuman);
            message.appendChild(scoreHuman);
            message.appendChild(space);
            message.appendChild(scoreTextComputer);
            message.appendChild(scoreComputer);
            gameOverDisplay.appendChild(gameOverTitle);
            gameOverDisplay.appendChild(message);

            //Announcing overall winner
            if (humanScore > computerScore){
                winner.textContent = "You Won!";
                gameOverDisplay.appendChild(winner);
            }else if(humanScore < computerScore){
                winner.textContent = "You Lose!";
                gameOverDisplay.appendChild(winner);
            }else{
                winner.textContent = "it's a tie!";
                gameOverDisplay.appendChild(winner);
            }

        }else{
            playRound(getHumanChoice,getComputerChoice);
        }
    
 }


 //COMPUTER'S SELECTION
function computerChoice(){
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




//MESSAGES GIVEN BY CHOICES TAKEN BY PLAYER AND ADDITION OF MARKS WHERE NECESSARY
function playRound(humanChoice, computerChoice){
   let hChoice = humanChoice.toLowerCase();
   let cChoice = computerChoice.toLowerCase();
        display.textContent = "";
        if (hChoice === "rock" && cChoice === "scissors"){
            const selection = document.createElement("h2");
           
            selection.textContent = getHumanChoice.toUpperCase();
            // selection.style.backgroundColor = "green";
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You Win! Rock beats Scissors";
            display.appendChild(para);
            humanScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice  === "scissors" && cChoice === "paper"){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You Win! Scissors beats Paper";
            display.appendChild(para);
          
            humanScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice === "paper" && cChoice === "rock"){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You Win! Paper beats Rock";
            display.appendChild(para);
            // console.log("You Win! Paper beats Rock");
            humanScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice  === "scissors" && cChoice=== "rock"){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You lose! Rock beats Scissors";
            display.appendChild(para);
            // console.log("You lose! Rock beats Scissors");
            computerScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice  === "paper" && cChoice === "scissors"){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You lose! Scissors beats Paper";
            display.appendChild(para);
            // console.log("You lose! Scissors beats Paper");
            computerScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice  === "rock" && cChoice === "paper"){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "You lose! Paper beats Rock";
            display.appendChild(para);
            // console.log("You lose! Paper beats Rock");
            computerScore += 1;
            roundNumber += 1;
            // playGame();
        }else if(hChoice === cChoice){
            const selection = document.createElement("h2");
            selection.textContent = getHumanChoice.toUpperCase();
            selection.style.color = "green";
            display.appendChild(selection);
            const para = document.createElement("p");
            para.textContent = "Its a tie!";
            display.appendChild(para);
            // console.log("Its a tie!");
            roundNumber += 1;
            // playGame();
        }else{
           
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
