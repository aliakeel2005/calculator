function add(num1,num2) {
    return num1 + num2
}

function subtract(num1,num2) {
    return num1 - num2
}

function multiply(num1,num2) {
    return num1 * num2
}

function divide(num1,num2) {
    return num1 / num2
}

let num1 = null
let num2 = null
let opr = null

function operate(num1, opr, num2) {
    if(opr === '+') { return add(num1,num2)}
    if(opr === '-') { return subtract(num1,num2)}
    if(opr === '*') { return multiply(num1,num2)}
    if(opr === '/') { return divide(num1,num2)}
}

const numbers = document.querySelector('.numbers')
let displayValue = null
numbers.addEventListener('click', () => { const pressedButton = event.target
    displayValue = pressedButton.textContent})
console.log(displayValue)