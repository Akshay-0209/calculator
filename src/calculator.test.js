const calc = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds positive numbers', () => expect(calc.add(2, 3)).toBe(5));
    test('adds negatives', () => expect(calc.add(-2, -3)).toBe(-5));
    test('adds floats', () => expect(calc.add(1.5, 2.2)).toBeCloseTo(3.7));
    test('throws on NaN', () => expect(() => calc.add(NaN, 2)).toThrow());
    test('throws on Infinity', () => expect(() => calc.add(Infinity, 2)).toThrow());
  });

  describe('subtract', () => {
    test('subtracts positive numbers', () => expect(calc.subtract(5, 2)).toBe(3));
    test('subtracts negatives', () => expect(calc.subtract(-2, -3)).toBe(1));
    test('subtracts floats', () => expect(calc.subtract(3.2, 2.1)).toBeCloseTo(1.1));
    test('throws on NaN', () => expect(() => calc.subtract(2, NaN)).toThrow());
    test('throws on Infinity', () => expect(() => calc.subtract(2, Infinity)).toThrow());
  });

  describe('multiply', () => {
    test('multiplies positive numbers', () => expect(calc.multiply(2, 3)).toBe(6));
    test('multiplies negatives', () => expect(calc.multiply(-2, 3)).toBe(-6));
    test('multiplies floats', () => expect(calc.multiply(2.5, 2)).toBeCloseTo(5));
    test('throws on NaN', () => expect(() => calc.multiply(NaN, 2)).toThrow());
    test('throws on Infinity', () => expect(() => calc.multiply(Infinity, 2)).toThrow());
  });

  describe('divide', () => {
    test('divides positive numbers', () => expect(calc.divide(4, 2)).toBe(2));
    test('divides negatives', () => expect(calc.divide(-6, 3)).toBe(-2));
    test('divides floats', () => expect(calc.divide(4.4, 2)).toBeCloseTo(2.2));
    test('throws on divide by zero', () => expect(() => calc.divide(4, 0)).toThrow('Divide by zero'));
    test('throws on NaN', () => expect(() => calc.divide(NaN, 2)).toThrow());
    test('throws on Infinity', () => expect(() => calc.divide(Infinity, 2)).toThrow());
  });
});
