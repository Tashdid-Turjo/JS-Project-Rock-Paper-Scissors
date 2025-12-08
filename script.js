let totalRounds = 0;    // how many rounds
let roundsPlayed = 0;   // how many clicks have happened (it's used to track -> totalRounds === roundsPlayed).

let tieScore = 0;
document.getElementById("Counter-message-tie").textContent = "Tie: " + tieScore;
let computerScore = 0;
document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
let humanScore = 0;
document.getElementById("Counter-message-human").textContent = "Human: " + humanScore;

let computerchoice;


// !! Restart(Basically- Reload) Function:
function Restart() {
    location.reload();
}

 
// !! resetStartButton Function:
// TODO: This function helps to solve- Switch "Restart Game" button back to "Start Game" when rounds input changes. It also omit everything like who won, scores etc.
function resetStartButton() {
    // Reset counters in memory
    totalRounds = 0;
    roundsPlayed = 0;
    tieScore = 0;
    humanScore = 0;
    computerScore = 0;

    // Reset counter texts on the page
    document.getElementById("Counter-message-tie").textContent = "Tie   : " + tieScore;
    document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
    document.getElementById("Counter-message-human").textContent = "Human  : " + humanScore;

    // Clear previous messages
    document.getElementById("computer-message").textContent = "";
    document.getElementById("human-message").textContent = "";
    document.getElementById("WinLose-message").textContent = "";
    document.getElementById("final-result").textContent = "";
    document.getElementById("instruction-message").textContent = "";

    // for making the button back to "Start Game"
    const btn2 = document.getElementById("start-button");
    btn2.textContent = "Start Game";
    btn2.onclick = startGame;
}


// !! Shortcut buttons:
document.addEventListener("keydown", function(event) {
    // TODO: "/" shortcut button:
    if (event.key === "/") {
        event.preventDefault();     // stops typing "/" in the input
        document.getElementById("rounds-input").focus();
    }
    // TODO: "enter" shortcut button:    
    if (event.key === "Enter") {
        document.getElementById("start-button").click();
    }

    // TODO: "alt + r/p/s" shorcut button:
        if (event.altKey) {
            if (event.key === 'r' || event.key === 'R') {
                getHumanChoice(0);
                // event.preventDefault();                      // No needed.
                // console.log("alt + r/R pressed");            // To see in the console.
                // document.getElementById("rock-btn").click(); // This doesn't work.
            }
            else if (event.key === 'p' || event.key === 'P') {
                getHumanChoice(1);
                // event.preventDefault();
                // console.log("alt + p/P pressed");
                // document.getElementById("paper-btn").click();
            }
            else if (event.key === 's' || event.key === 'S') {
                getHumanChoice(2);
                // event.preventDefault();
                // console.log("alt + s/S pressed");
                // document.getElementById("scissor-btn").click();
            }
        }
});


// !! startGame Function:
function startGame() {
    totalRounds = Number(document.getElementById("rounds-input").value);    
    
    if (!totalRounds || totalRounds <= 0) {
        alert("Please enter a valid number of rounds.");
        totalRounds = 0;
        return;
    }

    // TODO: Weapon-message
    document.getElementById("instruction-message").textContent = "⚔️ Now choose your weapon!";


    // TODO: Fade-out animation after clicking "Start Game button". N.B: "fade-out" doesn't need to add in the html part.
    const btn = document.getElementById("start-button");
    
    // 1. fade out
    btn.classList.remove("fade-in");
    btn.classList.add("fade-out");

    // !! setTimeout Function (Nested Function):
    setTimeout(() => {
    // 2. change text after fade-out completes
    btn.textContent = "🎮 GAME ACTIVE";
    btn.disabled = true;    // button won't be clickable.

    // TODO: Omitted the "Game Active" button to work as restart.
    // btn.onclick = Restart;

    // 3. fade in the new button
    btn.classList.remove("fade-out");
    btn.classList.add("fade-in");

}, 400); // must match fadeOut duration

    // (DOESN'T WORK) This makes the Start button completely disappear from the page.
    // document.getElementById("start-button").classList.add("hidden");
       
    // Reset counters in memory
    roundsPlayed = 0;
    tieScore = 0;
    computerScore = 0;
    humanScore = 0;
    
    // (DOESN'T WORK) To show it again later
    // document.getElementById("start-button").classList.remove("hidden");
 
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
    // 1) First: make sure game is started:
    if (totalRounds === 0) {
        alert("Click Start Game first.");
        return;
    }

    // 2) Then: stop playing if rounds are already finished:
    if (roundsPlayed >= totalRounds) {
        alert("Game over. Click Start Game to start a new game.");
        return;
    }

    // TODO: No need to put it here, as i putted it inside StartGame Function.
    // // 3) NOW it’s safe to convert Start → Restart (game is actually running):
    // const btn = document.getElementById("start-button");
    // if(btn.textContent === "Start Game") {
    //     btn.textContent = "🎮 GAME ACTIVE";
    //     btn.onclick = Restart;
    // }

    // Shows human's choice:
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
            document.getElementById("WinLose-message").textContent = "This round Tied";
            tieScore += 1;
            document.getElementById("Counter-message-tie").textContent = "Tie: " + tieScore;
        }
        else if ((humanchoice === 0 && computerchoice === 2) ||
                 (humanchoice === 1 && computerchoice === 0) ||
                 (humanchoice === 2 && computerchoice === 1)) {

            document.getElementById("WinLose-message").textContent = "Human wins this round";
            humanScore += 1;
            document.getElementById("Counter-message-human").textContent = "Human: " + humanScore;
        }
        else {
            document.getElementById("WinLose-message").textContent = "Computer wins this round";
            computerScore += 1;
            document.getElementById("Counter-message-computer").textContent = "Computer: " + computerScore;
        }
    }

    // calling WinLose function
    WinLose();

    roundsPlayed++;

    // Final Result:
    if (roundsPlayed === totalRounds) {
        let finalMsg;
        const finalBox = document.querySelector(".final");

        // Removes previous color classes
        finalBox.classList.remove("win", "lose", "tie");

        if (humanScore > computerScore) {
            finalMsg = "Final result: You win the game!";
            // Adds different colors for different conditions:
            finalBox.classList.add("win");
        }
        else if (humanScore < computerScore) {
            finalMsg = "Final result: Computer wins the game!";
            // Adds different colors for different conditions:
            finalBox.classList.add("lose");
        }
        else {
            finalMsg = "Final result: It's a tie overall!";
            // Adds different colors for different conditions:
            finalBox.classList.add("tie");
        }

        document.getElementById("final-result").textContent = finalMsg;
        // After showing the Final Result, the weapon message will be disappeared.
        document.getElementById("instruction-message").textContent = "";

        // TODO: Changing "Game Active" button(which was unclickable) -> "Start Game" Button(will be clickable):
        const btn = document.getElementById("start-button");
        btn.textContent = "Start Game";
        btn.disabled = false;
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