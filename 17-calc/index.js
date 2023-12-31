"use-strict";

const operand1 = document.querySelectorAll(".operand")[0];
const operand2 = document.querySelectorAll(".operand")[1];
const resultSection = document.querySelector(".calc__result span");
const operations = document.querySelector(".calc__buttons");

operations.addEventListener("click", (e) => {
  if (e.target.className === "operator_btn") {
    const operator = e.target.innerText;
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);

    if (isNaN(num1) || isNaN(num2)) {
      resultSection.textContent = "Неверный ввод";
      return;
    }

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Ошибка";
        break;
    }

    resultSection.innerText = result;
  }
});
