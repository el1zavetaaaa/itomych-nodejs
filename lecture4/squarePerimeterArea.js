const prompt = require("prompt-sync")();

let inputNumber = prompt("Please, enter the length of the square side [1;1000]:");

function getSquarePerimeterAndArea(sideLength){
    if (sideLength <= 0 || sideLength >= 1000)
    {
        console.log("You have entered the wrong value!");
    }

    let perimeter = 4 * sideLength;
    let area = Math.pow(sideLength, 2);

    console.log(`Perimeter of the square is: ${perimeter},
    \nArea of the square is: ${area}`);
}

getSquarePerimeterAndArea(inputNumber);