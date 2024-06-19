function getValues() {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  return [number1, number2];
}

function isEmptyInput(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers");
    return true;
  }
  return false;
}

function add() {
  let [number1, number2] = getValues();
  if (isEmptyInput(number1, number2)) return;

  let sum = number1 + number2;
  document.getElementById("result").textContent = sum;
}

function sub() {
  let [number1, number2] = getValues();
  if (isEmptyInput(number1, number2)) return;

  let sub = number1 - number2;
  document.getElementById("result").textContent = sub;
}

function mul() {
  let [number1, number2] = getValues();
  if (isEmptyInput(number1, number2)) return;

  let mul = number1 * number2;
  document.getElementById("result").textContent = mul;
}

function div() {
  let [number1, number2] = getValues();
  if (isEmptyInput(number1, number2)) return;

  if (number2 === 0) {
    alert(
      "Division by zero is not allowed. Please enter a non-zero value for the second number."
    );
    document.getElementById("num2").value = "";
    return;
  }

  let div = number1 / number2;
  document.getElementById("result").textContent = div;
}

function clr() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
}
