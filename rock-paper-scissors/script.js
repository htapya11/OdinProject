function getComputerChoice(){

    let num = Math.random();

    if (num > 2/3){
        return "rock"
    } else if (num > 1/3){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){

    let choice = prompt("What's your choice?");
    return choice.toLowerCase();
}



function playGame(){

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++){
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        if (humanChoice == computerChoice){
            console.log("Tie");
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win");
            humanScore++;
        } else {
            console.log("You lose");
            computerScore++;
        }
    }

}

playGame();