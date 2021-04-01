"use strict";

const prompt = require('prompt-sync')();
const runAtm = require('./index');
const account = require('./account');

let balance = account.balance;


function validatePin(); {
    console.log("Please enter in your four digit PIN:");
    let userPin = prompt();
    let userPin = parseInt(userPin);

    if(userPin === account.userPin) {
        console.log("Please chose an option, 1. Check balance 2. Withdraw 3. Deposit");
    } else {
        console.log("Your input is invalid. Please try again!");
        validatePin();
    }
}


function getBalance() {
    console.log("Your current balance is: $" + balance);
    runAtm.mainMenu;
}

function withdraw(); {
    console.log('Please enter an amount you would like to withdraw today?\n');
    let withdrawAmount = prompt();
    let withdrawAmount = parseFloat(withdrawAmount);

    if(isNaN(withdrawAmount) || withdrawAmount === "") {
        console.log("That is not a valid input, Please enter a valid amount?");
        runAtm.withdraw;
    } else {
        balance -= withdrawAmount;
        runAtm.getBalance;
    }
}

balance -= parseFloat(amount);
console.log("Your new balance is : $" + balance.toFixed(2));
  return balance;



function deposit() {
    console.log("Please enter in the amount you would you like to deposit?");
    let depositAmount = prompt();
    let depositAmount = parseFloat(depositAmount);

    if(isNaN(depositAmount) || depositAmount === "") {
        console.log("Invalid! Please enter a number!");
        runAtm.deposit;
    } else {
        balance += depositAmount;
        runAtm.getBalance;
    }
}


function error() {
    console.log("Invalid! Accepted values are numbers 1 through 3.");
    runAtm.mainMenu;
}

function mainMenu() {
    console.log("Welcome, Select a choice:\n 1) Balance\n 2) Deposit\n 3) Withdraw\n ");
    let userInput = prompt();
    let userInputChoice = parseInt(userInput);

    if(userInputChoice === 1) {
        getBalance();
    } else if (userInputChoice === 2) {
        deposit();
    } else if (userInputChoice === 3) {
        withdraw();
    } else {
        error();
    }
}



module.exports.mainMenu = mainMenu();
module.exports.validatePin = validatePin();
