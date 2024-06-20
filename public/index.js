const swapIcon = document.querySelector('#swap-icon');
const userInput = document.querySelector('#user-input');
const calcBtn = document.querySelector('#calculate-btn');
const resultDisplay = document.querySelector('.display-result-card span');
let conversionResult = 0;

function calcCelsius(fahrenheit) {
    const result = (fahrenheit - 32) * (5 / 9);
    return result;
}

function calcFahreheit(celsius) {
    const result = (celsius * (9 / 5)) + 32;
    return result;
}