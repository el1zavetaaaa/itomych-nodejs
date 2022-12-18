const prompt = require("prompt-sync")();

let points = Number(0);
let inputNum;

function randomNumbers(inputNum, addingPoints) {

    if (inputNum !== 'Exit') {
        inputNum = prompt("Please, enter the number in the interim from 1 to 6." +
            " Or enter 'Exit' whether you want to quit the game:");
        addingPoints(inputNum);
        randomNumbers(inputNum, addingPoints);
        return `Your total score is ${points}.`;
    }

}

function addingPoints(inputNum) {
    let randomNum = Math.floor(Math.random() * (6 - 1) + 1);

    if (randomNum === Number(inputNum)) {
        points += 2;
    } else if (randomNum === (inputNum + 1) || randomNum === (inputNum - 1)) {
        points += 1;
    } else {
        points += 0;
    }

}

console.log(randomNumbers(inputNum, addingPoints));