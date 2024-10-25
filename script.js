let firstOperand = 0;
let secondOperand = 0;
let operator = "";

let displayValue = 0;

const displayElement = document.getElementById("display-element");

const numberButtons = document.querySelectorAll(".number-button");

add = (firstOperand, secondOperand) => firstOperand + secondOperand;
subtract = (firstOperand, secondOperand) => firstOperand - secondOperand;
multiply = (firstOperand, secondOperand) => firstOperand * secondOperand;
divide = (firstOperand, secondOperand) => firstOperand / secondOperand;

operate = (firstOperand, secondOperand, operator) => {
  if (operator == "+") return add(firstOperand, secondOperand);
  else if (operator == "-") return subtract(firstOperand, secondOperand);
  else if (operator == "*") return multiply(firstOperand, secondOperand);
  else if (operator == "/") return divide(firstOperand, secondOperand);
};

populateDisplay = (itemToDisplay) => {
  displayElement.innerText = itemToDisplay;
};

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    displayValue = numberButton.textContent;
    displayElement.innerText = displayValue;
  });
});
