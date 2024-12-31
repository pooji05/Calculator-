let result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearScreen() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}