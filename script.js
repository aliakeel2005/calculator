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

let num1 = ''
let num2 = ''
let opr = null
let displayValue = ''
function operate(num1, opr, num2) {
    if(opr === '+') { return add(num1,num2)}
    if(opr === '-') { return subtract(num1,num2)}
    if(opr === '*') { return multiply(num1,num2)}
    if(opr === '/') { return divide(num1,num2)}
}

const numbers = document.querySelector('.numbers')
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const equals = document.querySelector('#equals')

numbers.addEventListener('click', () => {
if(!displayValue.includes("+" || "-" || "/" || "*")) {
 num1 += event.target.textContent 
 displayValue = num1} 
 else {
    num2 += event.target.textContent
    displayValue = num2}
    console.log('num1:', num1)
    console.log("num2:", num2)
    console.log("displayValue:", displayValue)})      

 equals.addEventListener('click', () => {
    parsedOne = parseFloat(num1); parsedTwo = parseFloat(num2);
    display.innerHTML = operate(num1,opr,num2)})

    

 console.log(operator.textContent)