document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let current = '0';
  let operator = null;
  let operand = null;
  let justEvaluated = false;

  function updateDisplay() {
    display.value = current;
  }

  function clearAll() {
    current = '0';
    operator = null;
    operand = null;
    justEvaluated = false;
    updateDisplay();
  }

  function backspace() {
    if (justEvaluated) return;
    if (current.length > 1) {
      current = current.slice(0, -1);
    } else {
      current = '0';
    }
    updateDisplay();
  }

  function inputNumber(num) {
    if (justEvaluated) {
      current = num === '.' ? '0.' : num;
      justEvaluated = false;
    } else if (num === '.') {
      if (!current.includes('.')) {
        current += '.';
      }
    } else {
      if (current === '0') {
        current = num;
      } else {
        current += num;
      }
    }
    updateDisplay();
  }

  function setOperator(op) {
    if (operator && !justEvaluated) {
      evaluate();
    }
    operand = current;
    operator = op;
    justEvaluated = false;
    current = '0';
  }

  function evaluate() {
    if (!operator || operand === null) return;
    let result;
    const a = parseFloat(operand);
    const b = parseFloat(current);
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '×':
        result = a * b;
        break;
      case '÷':
        if (b === 0) {
          current = 'Error';
          updateDisplay();
          operator = null;
          operand = null;
          justEvaluated = true;
          return;
        }
        result = a / b;
        break;
      default:
        return;
    }
    current = String(Number.isFinite(result) ? result : 'Error');
    operator = null;
    operand = null;
    justEvaluated = true;
    updateDisplay();
  }

  document.querySelectorAll('[data-number]').forEach(btn => {
    btn.addEventListener('click', () => {
      inputNumber(btn.textContent);
    });
  });
  document.querySelector('[data-action="clear"]').addEventListener('click', clearAll);
  document.querySelector('[data-action="backspace"]').addEventListener('click', backspace);
  document.querySelector('[data-action="add"]').addEventListener('click', () => setOperator('+'));
  document.querySelector('[data-action="subtract"]').addEventListener('click', () => setOperator('-'));
  document.querySelector('[data-action="multiply"]').addEventListener('click', () => setOperator('×'));
  document.querySelector('[data-action="divide"]').addEventListener('click', () => setOperator('÷'));
  document.querySelector('[data-action="equals"]').addEventListener('click', evaluate);

  // Allow keyboard support
  document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
      inputNumber(e.key);
    } else if (e.key === '+') {
      setOperator('+');
    } else if (e.key === '-') {
      setOperator('-');
    } else if (e.key === '*' || e.key === 'x') {
      setOperator('×');
    } else if (e.key === '/') {
      setOperator('÷');
    } else if (e.key === '=' || e.key === 'Enter') {
      evaluate();
    } else if (e.key === 'Backspace') {
      backspace();
    } else if (e.key === 'Escape') {
      clearAll();
    }
  });

  updateDisplay();
});
