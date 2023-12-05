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
let displayValue = null
function operate(num1, opr, num2) {
    if(opr === '+') { return add(num1,num2)}
    if(opr === '-') { return subtract(num1,num2)}
    if(opr === '*') { return multiply(num1,num2)}
    if(opr === '/') { return divide(num1,num2)}
}

const buttons = document.querySelector('.buttons')
const equals = document.querySelector('.equals')
buttons.addEventListener('click', () => { 
    const pressedButton = event.target
    const buttonValue = pressedButton.textContent
    if(Number.isInteger(parseInt(buttonValue))){
   if(displayValue === null) {num1 = buttonValue}
   else {num2 = buttonValue}
displayValue = buttonValue }
else {opr = buttonValue}})


console.log(num1)
console.log(num2)