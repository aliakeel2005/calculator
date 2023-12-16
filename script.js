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
let operator = null
let displayValue = ''
function operate(num1, opr, num2) {
    if(opr === '+') { return add(num1,num2)}
    if(opr === '-') { return subtract(num1,num2)}
    if(opr === '*') { return multiply(num1,num2)}
    if(opr === '/') { return divide(num1,num2)}
}

const numbers = document.querySelector('.numbers')
// const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('#clear')
const display = document.querySelector('.display')
const equals = document.querySelector('#equals')


operators = ["+", "-", "/", "*"]

numbers.addEventListener('click', () => {
if(!operators.some(oper => displayValue.includes(oper))) {
 num1 += event.target.textContent 
 displayValue += event.target.textContent
display.textContent = displayValue} 
 else {
    num2 += event.target.textContent
    displayValue += event.target.textContent
display.textContent = displayValue}
    console.log('num1:', num1)
    console.log("num2:", num2)
    console.log("displayValue:", displayValue)
   
for(const char of displayValue) {if(char === "+" || char === "-" || char === "/" || char === "*") {
    console.log(char)
 operator = char
break;}}
})      

clear.addEventListener('click', () => {
    displayValue = ''
    num1 = ''
    num2 = ''
    display.textContent = ''
})

 equals.addEventListener('click', () => {
    parsedOne = parseFloat(num1); parsedTwo = parseFloat(num2);
    display.innerHTML = operate(parsedOne,operator,parsedTwo)})

    

 /* current issue: displayValue not indexing correct and full number*/
 