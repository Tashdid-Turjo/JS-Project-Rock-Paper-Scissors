function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max); // here, Math.random()'s default value range -> (0 =< value < 1)
    
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else
        return "Scissor";
}

// console.log(getComputerChoice(3));
let computer = getComputerChoice(3);
document.getElementById("message").textContent = "Computer clicked " + computer;


function getHumanChoice(humanchoice) {
    // TODO: skipped prompt(), bcz, i want to add 3 different button.
    // sign = prompt();

    // const humanchoice = 0 + max;

    if (humanchoice === 0) {
        document.getElementById("message").textContent = "You clicked Rock";
        // console.log("You clicked Rock");
    }
    else if (humanchoice === 1) {
        document.getElementById("message").textContent = "You clicked Paper";
        // console.log("You clicked Paper");
    }
    else if (humanchoice === 2) {
        document.getElementById("message").textContent = "You clicked Scissor";
        // console.log("You clicked Scissor");
    }
    else
        return "Value should be 0 or 1 or 2";
}

// console.log(getHumanChoice(3));







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


