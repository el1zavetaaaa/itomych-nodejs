const prompt = require("prompt-sync")();

let inputNumbers = prompt("Please, enter 2 Roman Numerals (M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1) using add operation (example: X+V):");

function convertRomanToInt(inputNumber){
    let translations = new Map();

    translations.set("I", 1);
    translations.set("V", 5);
    translations.set("X", 10);
    translations.set("L", 50);
    translations.set("C", 100);
    translations.set("D", 500);
    translations.set("M", 1000);

    let number = 0;

    inputNumber = String(inputNumber)
        .replace("IV", "IIII")
        .replace("IX", "VIIII")
        .replace("XL", "XXXX")
        .replace("XC", "LXXXX")
        .replace("CD", "CCCC")
        .replace("CM", "DCCCC");

    for (let char of String(inputNumber)) {
        number += translations.get(char);
    }

    return number;
}

function convertIntToRoman(inputNumber){
    let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

    let thousands = ["", "M", "MM"];

    return thousands[Math.floor(inputNumber/1000)] +
           hundreds [Math.floor(inputNumber % 1000 / 100)] +
           tens [Math.floor(inputNumber % 100 / 10)] +
           units [Math.floor(inputNumber % 10)];
}

firstNumber = convertRomanToInt(inputNumbers.substring(0, inputNumbers.indexOf('+')));

secondNumber  = convertRomanToInt(inputNumbers.substring(inputNumbers.indexOf('+') + 1));

summ = firstNumber + secondNumber

console.log("The summ is:", convertIntToRoman(summ))
