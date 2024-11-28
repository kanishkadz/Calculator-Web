let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function performOperation(operator) {
  display.value += ` ${operator} `;
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/ /g, ''));
  } catch (error) {
    alert('Invalid input');
    clearDisplay();
  }
}
