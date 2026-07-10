// src/calculator.js
let errorState = false;

function isValidNumber(n) {
  return typeof n === 'number' && isFinite(n);
}

function assertNotInError() {
  if (errorState) throw new Error('Calculator in error state');
}

function add(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  return a + b;
}

function subtract(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  return a - b;
}

function multiply(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  return a * b;
}

function divide(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  if (b === 0) {
    errorState = true;
    throw new Error('Divide by zero');
  }
  return a / b;
}

function clearError() {
  errorState = false;
}

function isError() {
  return errorState;
}

module.exports = { add, subtract, multiply, divide, clearError, isError };