calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      break;
  }
};

const operand1Element = document.getElementById("operand1");
const operand2Element = document.getElementById("operand2");

const buttons = document.querySelectorAll(".button");
const equalsBtn = document.getElementById("equals-btn");

const resultDiv = document.getElementById("result");

const resultsH1 = document.createElement("h1");

operand1 = 0;
operand2 = 0;
operator = "";

buttons.forEach((button) => {
  if (button.value != "=")
    button.addEventListener("click", () => {
      operator = button.value;
      // console.log(operator);
    });
});

equalsBtn.addEventListener("click", () => {
  operand1 = parseFloat(operand1Element.value);
  operand2 = parseFloat(operand2Element.value);
  result = calculate(operand1, operand2, operator);
  resultsH1.innerText = result;
  resultDiv.appendChild(resultsH1);
});
