const prompt = require("prompt-sync")();

let inputNumber = prompt("Please, enter the number:");

function multiply(num1,num2){
    return num1 * num2;
}

function double(num){
    return multiply(num, 2);
}

function square(num){
    return multiply(num, num);
}

console.log(`Double value: ${double(inputNumber)}.`)
console.log(`Square: ${square(inputNumber)}.`)