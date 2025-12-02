function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max); // here, Math.random()'s default value range -> (0 =< value < 1). Math.floor omits the round part after a number.
    
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else
        return "Scissor";
}

// let computer = getComputerChoice(3);
// document.getElementById("computer-message").textContent = "Computer clicked " + computer;


/////////////////////////////////////////////////////////////
function getHumanChoice(humanchoice) {
    // TODO: skipped prompt(), bcz, i want to add 3 different button.
    // sign = prompt();

    if (humanchoice === 0) {
        document.getElementById("human-message").textContent = "You clicked Rock";
    }
    else if (humanchoice === 1) {
        document.getElementById("human-message").textContent = "You clicked Paper";
    }
    else
        document.getElementById("human-message").textContent = "You clicked Scissor";

    let computer = getComputerChoice(3);
    document.getElementById("computer-message").textContent = "Computer clicked " + computer;

}







// function getHumanChoice() {
//     // let answer = parseInt(prompt("Enter a number:"));
//     const inputButton = document.querySelector("#inputButton");
//     const log = document.querySelector("#log");

//     inputButton.addEventListener("click", () => {
//         let sign = prompt("What's your sign?");

//         if (sign === null) {
//             log.innerText = "rock";
//         }
//         else if (sign.)
//     })
// }

/* Using ARRAY for getComputerChoice function:

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

how ARRAY's output works, it defined here-
choices[0] = "Rock"
choices[1] = "Paper"
choices[2] = "Scissor"

*/


