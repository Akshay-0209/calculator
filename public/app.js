const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const errorDiv = document.getElementById('error');

let current = '';
let errorTimeout;

function setError(msg) {
  errorDiv.textContent = msg;
  clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() => errorDiv.textContent = '', 2300);
}

buttons.forEach(btn => {
  if (btn.dataset.value) {
    btn.addEventListener('click', () => {
      current += btn.dataset.value;
      display.value = current;
    });
  }
});

clear.addEventListener('click', () => {
  current = '';
  display.value = '';
  errorDiv.textContent = '';
});

equals.addEventListener('click', () => {
  try {
    // eslint-disable-next-line no-eval
    let result = eval(current);
    if (typeof result !== 'number' || !isFinite(result)) {
      setError('Invalid calculation');
      return;
    }
    display.value = result;
    current = result.toString();
  } catch (err) {
    setError('Error');
  }
});
