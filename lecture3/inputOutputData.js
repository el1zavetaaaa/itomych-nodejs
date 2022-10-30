const prompt = require("prompt-sync")();

let inputNumber = prompt("Please, enter the number in the interim from 10 to 99:");

function getParsedTwoDigitNumber(inputNumber) {

    if (Number(inputNumber) >= 10 && Number(inputNumber) <= 99) {

        console.log(`Oh, so your number is ${String(inputNumber).slice(0, 1)} ${String(inputNumber).slice(1, 2)}`);

    } else {

        console.log('\nYou have entered the wrong number.');
        inputNumber = prompt("Please, enter the number in the interim from 10 to 99:");
        getParsedTwoDigitNumber(inputNumber);

    }
}

getParsedTwoDigitNumber(inputNumber);
