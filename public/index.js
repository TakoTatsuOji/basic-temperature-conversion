const swapIcon = document.querySelector('#swap-icon');
const userInput = document.querySelector('#user-input');
const calcBtn = document.querySelector('#calculate-btn');
const resultDisplay = document.querySelector('.display-result-card span');
const resultDisplayCont = document.querySelector('.display-result-card');
const unit1 = document.querySelector('#unit-1');
const unit2 = document.querySelector('#unit-2');
let conversionResult;

function calcCelsius(fahrenheit) {
    const result = (fahrenheit - 32) * (5 / 9);
    return result.toFixed(2);
}

function calcFahreheit(celsius) {
    const result = (celsius * (9 / 5)) + 32;
    return result.toFixed(2);
}

function calculate() {
    let input
    if (unit1.dataset.unit == 'C') {
        input = Number(userInput.value)
        console.log(input, userInput.value)
        conversionResult = calcFahreheit(input)
        temperatureUnitFahrenheit(conversionResult)
    } 
    else if (unit1.dataset.unit == 'F') {
        input = Number(userInput.value)
        conversionResult = calcCelsius(input)
        temperatureUnitCelsius(conversionResult)
    }
}

function temperatureUnitCelsius(result) {
    resultDisplayCont.classList.remove('hidden')
    resultDisplay.textContent = `${result}C°`
}

function temperatureUnitFahrenheit(result) {
    resultDisplayCont.classList.remove('hidden')
    resultDisplay.textContent = `${result}F°`
}


function conversionSwap() {
    if (unit1.dataset.unit == 'C') {
        unit1.dataset.unit = 'F'
        unit2.dataset.unit = 'C'

        unit1.innerHTML = "Fahrenheit&#40;F°&#41;"
        unit2.innerHTML = "Celsius&#40;C°&#41;"
    } else {
        unit1.dataset.unit = 'C'
        unit2.dataset.unit = 'F'

        unit1.innerHTML = "Celsius&#40;C°&#41;"
        unit2.innerHTML = "Fahrenheit&#40;F°&#41;"
    }
}

calcBtn.addEventListener('click', calculate)
swapIcon.addEventListener('click', conversionSwap)