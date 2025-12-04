let totalRounds = 0;    // how many rounds
let roundsPlayed = 0;   // how many clicks have happened (it's used to track -> totalRounds === roundsPlayed).

let tieScore = 0;
document.getElementById("Counter-message-tie").textContent = "Tie: " + tieScore;
let computerScore = 0;
document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
let humanScore = 0;
document.getElementById("Counter-message-human").textContent = "Human: " + humanScore;

let computerchoice;


// !! Restart Function:
function Restart() {
    location.reload();
}


// !! startGame Function:
function startGame() {
    totalRounds = Number(document.getElementById("rounds-input").value);    
        if (!totalRounds || totalRounds <= 0) {
            alert("Please enter a valid number of rounds.");
            totalRounds = 0;
            return;
        }

    // Reset counters in memory
    roundsPlayed = 0;
    tieScore = 0;
    computerScore = 0;
    humanScore = 0;
    
    // Reset counter texts on the page
    document.getElementById("Counter-message-tie").textContent = "Tie: " + tieScore;
    document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
    document.getElementById("Counter-message-human").textContent = "Human: " + humanScore;

    // Clear previous messages
    document.getElementById("computer-message").textContent = "";
    document.getElementById("human-message").textContent = "";
    document.getElementById("WinLose-message").textContent = "";
    document.getElementById("final-result").textContent = "";
}


// !! Computer Function:
function getComputerChoice(max) {
    computerchoice = Math.floor(Math.random() * max); // here, Math.random()'s default value range -> (0 =< value < 1). Math.floor omits the round part after a number.
    
    if (computerchoice === 0) {
        return "Rock";
    }
    else if (computerchoice === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

// TODO: put these two lines inside getHumanChoice function, so that, by clicking any of 3 buttons, both Computer & Human's result is showing.
// let computer = getComputerChoice(3);
// document.getElementById("computer-message").textContent = "Computer clicked " + computer;


// !! Human Function:
function getHumanChoice(humanchoice) {
    // Changing Start Game button -> Restart Game Button:
    document.getElementById("start-button").textContent = "Restart Game";
    document.getElementById("start-button").onclick = Restart;

    if (totalRounds === 0) {
    alert("Click Start Game first.");
    return;
    }

    if (roundsPlayed >= totalRounds) {
        alert("Game over. Click Start Game to start a new game.");
        return;
    }


    if (humanchoice === 0) {
        document.getElementById("human-message").textContent = "You clicked Rock";
    }
    else if (humanchoice === 1) {
        document.getElementById("human-message").textContent = "You clicked Paper";
    }
    else {
        document.getElementById("human-message").textContent = "You clicked Scissor";
    }

    let computer = getComputerChoice(3);
    document.getElementById("computer-message").textContent = "Computer clicked " + computer;

    // !! Win/Lose (Nested Function):
    function WinLose() {
        if (humanchoice === computerchoice) {
            document.getElementById("WinLose-message").textContent = "Tie";
            tieScore += 1;
            document.getElementById("Counter-message-tie").textContent = "Tie: " + tieScore;
        }
        else if ((humanchoice === 0 && computerchoice === 2) ||
                 (humanchoice === 1 && computerchoice === 0) ||
                 (humanchoice === 2 && computerchoice === 1)) {

            document.getElementById("WinLose-message").textContent = "Human wins";
            humanScore += 1;
            document.getElementById("Counter-message-human").textContent = "Human: " + humanScore;
        }
        else {
            document.getElementById("WinLose-message").textContent = "Computer wins";
            computerScore += 1;
            document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
        }
    }

    // calling WinLose function
    WinLose();

    roundsPlayed++;

    if (roundsPlayed === totalRounds) {
        let finalMsg;
        if (humanScore > computerScore) {
            finalMsg = "Final result: You win the game!";
        }
        else if (humanScore < computerScore) {
            finalMsg = "Final result: Computer wins the game!";
        }
        else {
            finalMsg = "Final result: It's a tie overall!";
        }
        
        document.getElementById("final-result").textContent = finalMsg;

        // Changing Restart Game button -> Start Game Button:
        const btn = document.getElementById("start-button");
        btn.textContent = "Start Game";
        btn.onclick = startGame;
    }

}





/* We can also use ARRAY for getComputerChoice function:

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

how ARRAY's output works, it defined here-
choices[0] = "Rock"
choices[1] = "Paper"
choices[2] = "Scissor"

*/