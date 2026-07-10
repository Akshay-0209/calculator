let errorState = false;

function isValidNumber(n) {
  return typeof n === 'number' && isFinite(n);
}

function assertNotInError() {
  if (errorState) throw new Error('Calculator in error state');
}

function throwIfInvalidResult(result) {
  if (Number.isNaN(result) || !isFinite(result)) {
    throw new TypeError('Result is not a valid number');
  }
  return result;
}

function add(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  const result = a + b;
  return throwIfInvalidResult(result);
}

function subtract(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  const result = a - b;
  return throwIfInvalidResult(result);
}

function multiply(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  const result = a * b;
  return throwIfInvalidResult(result);
}

function divide(a, b) {
  assertNotInError();
  if (!isValidNumber(a) || !isValidNumber(b)) throw new TypeError('Invalid number input');
  if (b === 0) {
    errorState = true;
    throw new Error('Divide by zero');
  }
  const result = a / b;
  return throwIfInvalidResult(result);
}

function clearError() {
  errorState = false;
}

function isError() {
  return errorState;
}

module.exports = { add, subtract, multiply, divide, clearError, isError };
