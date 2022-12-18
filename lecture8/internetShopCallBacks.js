const prompt = require("prompt-sync")();

let sneakersList = {
    Nike: 2000,
    Adidas: 3000,
    Puma: 1500,
    Balenciaga: 4000
};

let internetShop = {};

let input;
let currentUser;
let totalPrice = 0;

function shopping(input, shoppingFlow) {
    if (input !== '5') {
        input = prompt('Welcome to the SnEaKeRs shop. ' +
            '\n1. Enter "1" whether you want to login.' +
            '\n2. Enter "2" whether you want to add sneakers to your basket.' +
            '\n3. Enter "3" whether you want to check your basket. ' +
            '\n4. Enter "4" whether you want to buy items you chose.' +
            '\n5. Enter "5" whether you want to Exit:')
        shoppingFlow(input);
        shopping(input, shoppingFlow);
    } else
        console.log("Thank you for choosing our shop. See you next time!")
}

function shoppingFlow(input) {
    switch (Number(input)) {
        case 1:
            login();
            break;
        case 2:
            addingSneakers();
            break;
        case 3:
            showBasketItemsAndPrice();
            break;
        case 4:
            buyingSneakers();
            break;
    }
}

function login() {
    input = prompt("Please enter your username: ");

    internetShop[currentUser] = {};
    currentUser = internetShop[currentUser];
    console.log(`You were logged in as ${input}`);
}

function addingSneakers() {
    input = prompt("Please enter the model of Sneakers you wanna add: ");

    if (input === 'Nike') {
        currentUser.Nike = sneakersList[String(input)];
        totalPrice += currentUser.Nike;
    } else if (input === 'Adidas') {
        currentUser.Adidas = sneakersList[String(input)];
        totalPrice += currentUser.Adidas;
    } else if (input === 'Puma') {
        currentUser.Puma = sneakersList[String(input)];
        totalPrice += currentUser.Puma;
    } else if (input === 'Balenciaga') {
        currentUser.Balenciaga = sneakersList[String(input)];
        totalPrice += currentUser.Balenciaga;
    } else
        console.log("We are so sorry. There is no such sneakers in our shop right now. " +
            "\nPlease choose from the existing list: [Nike, Adidas, Puma, Balenciaga].")
}

function showBasketItemsAndPrice() {
    console.log('Your basket');
    console.log(currentUser);
    console.log(`Total price: ${totalPrice}`);
}

function buyingSneakers() {
    let currentSum = 0;
    let currentPriceList = Object.values(currentUser);

    for (let i = 0; i < currentPriceList.length; i++) {
        currentSum += currentPriceList[i];
    }

    totalPrice -= currentSum;
    console.log('Thank you for choosing our shop. See you next time!');
}

console.log(shopping(input, shoppingFlow));


