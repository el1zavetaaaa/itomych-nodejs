const prompt = require("prompt-sync")();

let inputNum1 = Number(prompt("Please, enter the 1st number:"));
let inputNum2 = Number(prompt("Please, enter the 2nd number:"));

function createBase(num1){
    return function (num2){
        return num1 + num2;
    }
}

let addNum = createBase(inputNum1)
console.log(addNum(inputNum2))