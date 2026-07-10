(function() {
  // Calculator logic
  const display = document.getElementById('display');
  let current = '0', operator = null, operand = null, resetNext = false, error = false;

  function setDisplay(val) {
    display.textContent = val;
  }

  function clear() {
    current = '0';
    operator = null;
    operand = null;
    resetNext = false;
    error = false;
    setDisplay(current);
  }

  function backspace() {
    if (error) return;
    if (resetNext) return;
    if (current.length > 1) {
      current = current.slice(0, -1);
    } else {
      current = '0';
    }
    setDisplay(current);
  }

  function inputNumber(num) {
    if (error) return;
    if (resetNext) {
      current = num;
      resetNext = false;
    } else {
      if (current === '0') current = num;
      else current += num;
    }
    setDisplay(current);
  }

  function inputDecimal() {
    if (error) return;
    if (resetNext) {
      current = '0.';
      resetNext = false;
    } else if (!current.includes('.')) {
      current += '.';
    }
    setDisplay(current);
  }

  function inputOperator(op) {
    if (error) return;
    if (operator && !resetNext) {
      compute();
      if (error) return;
    }
    operand = parseFloat(current);
    operator = op;
    resetNext = true;
  }

  function compute() {
    if (error) return;
    if (operator && operand != null) {
      let result;
      const currVal = parseFloat(current);
      try {
        switch (operator) {
          case '+': result = window.calculator.add(operand, currVal); break;
          case '-': result = window.calculator.subtract(operand, currVal); break;
          case '×': result = window.calculator.multiply(operand, currVal); break;
          case '÷': result = window.calculator.divide(operand, currVal); break;
        }
        if (!isFinite(result)) throw new Error('Error');
        current = result.toString();
        setDisplay(current);
        operator = null;
        operand = null;
        resetNext = true;
      } catch (e) {
        setDisplay('Error');
        current = '0';
        operator = null;
        operand = null;
        resetNext = true;
        error = true;
      }
    }
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (btn.dataset.number !== undefined) {
        inputNumber(btn.dataset.number);
      } else if (btn.dataset.action) {
        switch (btn.dataset.action) {
          case 'clear': clear(); break;
          case 'backspace': backspace(); break;
          case 'decimal': inputDecimal(); break;
          case 'add': inputOperator('+'); break;
          case 'subtract': inputOperator('-'); break;
          case 'multiply': inputOperator('×'); break;
          case 'divide': inputOperator('÷'); break;
          case 'equals': compute(); break;
        }
      }
    });
  });

  // Simple calculator library for client
  window.calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => {
      if (b === 0) throw new Error('Error');
      return a / b;
    }
  };
})();