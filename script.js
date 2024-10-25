let firstOperand = 0;
let secondOperand = 0;
let operator = "";

let displayValue = "";

const displayElement = document.getElementById("display-element");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculateButton = document.getElementById("calculate-button");
const clearButton = document.getElementById("clear-button");

add = () => firstOperand + secondOperand;
subtract = () => firstOperand - secondOperand;
multiply = () => firstOperand * secondOperand;
divide = () => {
  if (secondOperand == 0) {
    alert("Nice try!!");
    return null;
  }
  return firstOperand / secondOperand;
};

operate = () => {
  if (operator == "+") return add();
  else if (operator == "-") return subtract();
  else if (operator == "*") return multiply();
  else if (operator == "/") return divide();
};

populateDisplay = (itemToDisplay) => {
  displayElement.innerText = itemToDisplay;
};

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    displayValue += numberButton.value;
    populateDisplay(displayValue);
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    if (operator) {
      secondOperand = parseInt(displayValue);
      displayValue = operate();
      populateDisplay(displayValue);
    }
    operator = operatorButton.value;
    firstOperand = parseInt(displayValue);
    displayValue = "";
  });
});

calculateButton.addEventListener("click", () => {
  secondOperand = parseInt(displayValue);
  displayValue = operate();
  populateDisplay(displayValue);
  secondOperand = 0;
});

clearButton.addEventListener("click", () => {
  firstOperand = 0;
  secondOperand = 0;
  operator = "";
  displayValue = "";
  populateDisplay(displayValue);
});
