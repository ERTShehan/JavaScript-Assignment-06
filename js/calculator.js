let display = document.getElementById("display");
let expression = "";
let currentInput = "";
function enterNumber(num) {
    currentInput += num;
    display.innerText = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    expression += currentInput + op;
    currentInput = ""; 
    display.innerText = ""; 
}

function calculate() {
    if (currentInput === "") return;

    expression += currentInput;
    try {
        let result = eval(expression);
        display.innerText = result;
        expression = "";
        currentInput = "";
    } catch (error) {
        display.innerText = "Error";
        expression = "";
        currentInput = "";
    }
}

function clearDisplay() {
    display.innerText = "";
    expression = "";
    currentInput = "";
}