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
let operatorClicked = false

function operate(num1, opr, num2) {
    if(opr === '+') { return add(num1,num2)}
    if(opr === '-') { return subtract(num1,num2)}
    if(opr === '*') { return multiply(num1,num2)}
    if(opr === '/') { return divide(num1,num2)}
}

const numbers = document.querySelector('.numbers')
const operator = document.querySelector('.operator')
const equals = document.querySelector('.equals')
const display = document.querySelector('.display')

let displayValue = null
numbers.addEventListener('click', () => {
const pressedButton = event.target
displayValue = pressedButton.textContent

if(!operatorClicked) {
    num1 = parseFloat(displayValue)
} else {
    num2 = parseFloat(displayValue)
}
display = displayValue
operatorClicked = false
})

equals.addEventListener('click', () => {
    const result = operate(num1,opr,num2)
    display.innerHTML = result.toString();
})

operator.addEventListener('click', () => {
    const pressedOperator = event.target.textContent
    opr = pressedOperator
    operatorClicked = true
})

console.log(num1)