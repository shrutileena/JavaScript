function sum(a, b){
    return a + b

}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a / b
}

function sub(a, b){
    return a - b
}

let userInput = prompt("What operation to perform? (sum, sub, mul, div)")
let firstNumber = Number(prompt("Enter first number"))
let secondNumber = Number(prompt("Enter second number"))

if(userInput == 'sum' || userInput == 'Sum' || userInput == 'SUM'){
    console.log(sum(firstNumber, secondNumber))
} else if(userInput == 'sub' || userInput == 'Sub' || userInput == 'SUB'){
    console.log(sub(firstNumber, secondNumber))
} else if(userInput == 'mul' || userInput == 'Mul' || userInput == 'MUL'){
    console.log(mul(firstNumber, secondNumber))
} else if(userInput == 'div' || userInput == 'Div' || userInput == 'DIV'){
    console.log(div(firstNumber, secondNumber))
} else{
    console.log("Invalid Input")
}
