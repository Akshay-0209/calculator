const { add, subtract, multiply, divide } = require('./calculator');

describe('calculator', () => {
  describe('add', () => {
    test('adds positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds negatives', () => {
      expect(add(-2, -3)).toBe(-5);
    });
    test('adds floats', () => {
      expect(add(1.1, 2.2)).toBeCloseTo(3.3);
    });
    test('throws on NaN', () => {
      expect(() => add(NaN, 1)).toThrow();
      expect(() => add(1, NaN)).toThrow();
    });
    test('throws on Infinity', () => {
      expect(() => add(Infinity, 2)).toThrow();
      expect(() => add(2, -Infinity)).toThrow();
    });
  });

  describe('subtract', () => {
    test('subtracts numbers', () => {
      expect(subtract(5, 2)).toBe(3);
    });
    test('subtracts negatives', () => {
      expect(subtract(-2, -3)).toBe(1);
    });
    test('subtracts floats', () => {
      expect(subtract(2.2, 1.1)).toBeCloseTo(1.1);
    });
    test('throws on NaN', () => {
      expect(() => subtract(NaN, 1)).toThrow();
      expect(() => subtract(1, NaN)).toThrow();
    });
    test('throws on Infinity', () => {
      expect(() => subtract(Infinity, 2)).toThrow();
      expect(() => subtract(2, -Infinity)).toThrow();
    });
  });

  describe('multiply', () => {
    test('multiplies numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });
    test('multiplies negatives', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
    test('multiplies floats', () => {
      expect(multiply(1.5, 2)).toBeCloseTo(3);
    });
    test('throws on NaN', () => {
      expect(() => multiply(NaN, 1)).toThrow();
      expect(() => multiply(1, NaN)).toThrow();
    });
    test('throws on Infinity', () => {
      expect(() => multiply(Infinity, 2)).toThrow();
      expect(() => multiply(2, -Infinity)).toThrow();
    });
  });

  describe('divide', () => {
    test('divides numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });
    test('divides negatives', () => {
      expect(divide(-6, -3)).toBe(2);
    });
    test('divides floats', () => {
      expect(divide(5.25, 2.5)).toBeCloseTo(2.1);
    });
    test('throws on NaN', () => {
      expect(() => divide(NaN, 1)).toThrow();
      expect(() => divide(1, NaN)).toThrow();
    });
    test('throws on Infinity', () => {
      expect(() => divide(Infinity, 2)).toThrow();
      expect(() => divide(2, -Infinity)).toThrow();
    });
    test('throws on divide by zero', () => {
      expect(() => divide(5, 0)).toThrow(/zero/);
    });
  });
});
