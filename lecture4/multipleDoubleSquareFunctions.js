const prompt = require("prompt-sync")();

let inputNumbers = prompt("Please, enter 2 numbers,separated with commas (example: 2,4):");

function multiply(num1,num2){
    return num1 * num2;
}

function double(num_func){
    return num_func + num_func;
}

function square(num_func){
    return Math.pow(num_func, 2);
}

firstNumber = inputNumbers.split(',')[0]

secondNumber = inputNumbers.split(',')[1]

let multiply_result = multiply(firstNumber, secondNumber)

console.log(`Double value: ${double(multiply_result)}.`)
console.log(`Square: ${square(multiply_result)}.`)