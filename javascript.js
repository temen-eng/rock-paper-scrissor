// Get a random number from Math.random.
// If that number is between 0 and 0.33, return rock.
// If that number is between 0.33 and 0.66, return paper.
// If that number is between 0.66 and 1, return scissor.

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) { 
    return "paper";
  } else {
    return "scissors";
  }
}

// Ask human for imput.

function getHumanChoice() {
    return prompt("What's your input?");
}

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;

// Run the game until someone reaches a score of 5.

function playGame() {
    let round = 1;
    while ((humanScore < 5) && (computerScore <5)) {
        console.log("Round: " + round);
        round = round + 1;
        
        // Run a new round of the game.
        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            if (humanChoice == computerChoice) {
                return console.log("Tie!");
            } else if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore = humanScore + 1;
                return console.log("Rock wins!");
            } else if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore = humanScore + 1;
                return console.log("Paper wins!");
            } else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore = humanScore + 1;
                return console.log("Scissors wins!");
            } else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore = computerScore + 1;
                return console.log("Scissors wins!");
            } else if (humanChoice == "scissors" && computerChoice == "rock") {
                computerScore = computerScore + 1;
                return console.log("Rock wins!");
            } else if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore = computerScore + 1;
                return console.log("Paper wins!");
            }
        }

        // Show the status so that we can track what is happening.
        const humanSelection = getHumanChoice();
        console.log("Human selection: " + humanSelection);

        const computerSelection = getComputerChoice();
        console.log("Computer selection: " + computerSelection);

        playRound(humanSelection, computerSelection);

        console.log("Humans score: " + humanScore);
        console.log("Computer score: " + computerScore);
        }
    
    // Show a message to inform who the winner is.
    let winner = (humanScore == 5)  ? 'The winner is the human!' : 'The computer wins!';
    return winner;
}

console.log(playGame());
