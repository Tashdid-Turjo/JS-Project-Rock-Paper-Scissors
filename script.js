// let humanScore, computerScore;
// humanScore = 0;
// computerScore = 0;


let computerchoice;
// !! Computer:
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

// !! Human:
function getHumanChoice(humanchoice) {
    // TODO: skipped prompt(), bcz, i want to add 3 different button.
    // sign = prompt();

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
            console.log("tie");
        }
        else if ((humanchoice === 0 && computerchoice === 2) ||
                (humanchoice === 1 && computerchoice === 0) ||
                (humanchoice === 2 && computerchoice === 1)) {

            console.log("Human wins");
        }
        else {
            console.log("computer wins");
        }
    }

    // calling WinLose function
    WinLose();

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