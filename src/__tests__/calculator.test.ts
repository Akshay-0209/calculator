import { add, subtract, multiply, divide } from '../calculator';

describe('Calculator Module', () => {
  describe('add', () => {
    it('adds positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    it('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
    it('adds floats', () => {
      expect(add(2.5, 0.1)).toBeCloseTo(2.6);
    });
    it('adds large numbers', () => {
      expect(add(1e10, 1e10)).toBe(2e10);
    });
  });

  describe('subtract', () => {
    it('subtracts positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    it('subtracts negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
    it('subtracts floats', () => {
      expect(subtract(2.5, 0.1)).toBeCloseTo(2.4);
    });
    it('subtracts large numbers', () => {
      expect(subtract(1e10, 1e9)).toBe(9e9);
    });
  });

  describe('multiply', () => {
    it('multiplies positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });
    it('multiplies negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
    it('multiplies floats', () => {
      expect(multiply(2.5, 0.2)).toBeCloseTo(0.5);
    });
    it('multiplies large numbers', () => {
      expect(multiply(1e5, 1e5)).toBe(1e10);
    });
  });

  describe('divide', () => {
    it('divides positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });
    it('divides negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });
    it('divides floats', () => {
      expect(divide(0.3, 0.1)).toBeCloseTo(3);
    });
    it('divides large numbers', () => {
      expect(divide(1e10, 1e5)).toBe(1e5);
    });
    it('throws on divide by zero', () => {
      expect(() => divide(2, 0)).toThrow('Cannot divide by zero');
    });
  });
});
