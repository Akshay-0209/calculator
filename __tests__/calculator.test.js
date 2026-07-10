const { add, subtract, multiply, divide } = require('../src/calculator');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('adds negatives', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  test('adds positive and negative', () => {
    expect(add(4, -1)).toBe(3);
  });
  test('adds floats', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test('throws on NaN', () => {
    expect(() => add(NaN, 2)).toThrow();
  });
  test('throws on Infinity', () => {
    expect(() => add(Infinity, 2)).toThrow();
  });
});

describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });
  test('subtracts negatives', () => {
    expect(subtract(-5, -2)).toBe(-3);
  });
  test('subtracts floats', () => {
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
  });
  test('throws on NaN', () => {
    expect(() => subtract(NaN, 2)).toThrow();
  });
  test('throws on Infinity', () => {
    expect(() => subtract(Infinity, 2)).toThrow();
  });
});

describe('multiply', () => {
  test('multiplies numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
  test('multiplies negatives', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
  test('multiplies floats', () => {
    expect(multiply(0.2, 0.3)).toBeCloseTo(0.06);
  });
  test('throws on NaN', () => {
    expect(() => multiply(NaN, 2)).toThrow();
  });
  test('throws on Infinity', () => {
    expect(() => multiply(Infinity, 2)).toThrow();
  });
});

describe('divide', () => {
  test('divides numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });
  test('divides negatives', () => {
    expect(divide(-6, 2)).toBe(-3);
  });
  test('divides floats', () => {
    expect(divide(0.3, 0.1)).toBeCloseTo(3);
  });
  test('throws on divide by zero', () => {
    expect(() => divide(1, 0)).toThrow(/zero/);
  });
  test('throws on NaN', () => {
    expect(() => divide(NaN, 2)).toThrow();
  });
  test('throws on Infinity', () => {
    expect(() => divide(Infinity, 2)).toThrow();
  });
});