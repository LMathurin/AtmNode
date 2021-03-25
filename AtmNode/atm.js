"use strict";

let prompt = require("prompt-sync")();
let account = require("./account");

function validateUserPin() {
    console.log('Please enter your PIN to access your account\n');
    let enteredPin = Number(prompt());
    if (enteredPin === account.pin) {
        console.log("Welcome!\n----");
    } else if (enteredPin !== account.pin) {
        console.log('--> Wrong PIN');
        return validateUserPin();
    }
}