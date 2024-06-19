function getValues() {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  return [number1, number2];
}

function add() {
  let [number1, number2] = getValues();
  let sum = number1 + number2;
  document.getElementById("result").textContent = sum;
}

function sub() {
  let [number1, number2] = getValues();
  let difference = number1 - number2;
  document.getElementById("result").textContent = difference;
}

function mul() {
  let [number1, number2] = getValues();
  let product = number1 * number2;
  document.getElementById("result").textContent = product;
}

function div() {
  let [number1, number2] = getValues();
  if (number2 !== 0) {
    let quotient = number1 / number2;
    document.getElementById("result").textContent = quotient;
  } else {
    alert(
      "Division by zero is not allowed. Please enter a non-zero value for the second number."
    );
  }
}
