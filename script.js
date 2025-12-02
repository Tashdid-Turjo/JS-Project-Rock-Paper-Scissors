function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max);
    
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else
        return "Scissor";
}

console.log(getComputerChoice(3));

function getHumanChoice(max) {
    const humanchoice = 0 + max;

    if (humanchoice === 0) {
        return "Rock";
    }
    else if (humanchoice === 1) {
        return "Paper";
    }
    else if (humanchoice === 2) {
        return "Scissor";
    }
    else
        return "Value should be 0 or 1 or 2";
}

console.log(getHumanChoice(3));







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


