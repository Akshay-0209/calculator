import { add, subtract, multiply, divide } from '../calculator';

describe('Calculator Module', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(3, 7)).toBe(10);
    });
    it('adds positive and negative numbers', () => {
      expect(add(-4, 6)).toBe(2);
    });
    it('adds two negative numbers', () => {
      expect(add(-3, -5)).toBe(-8);
    });
    it('adds floating point numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
    it('adds large numbers', () => {
      expect(add(1e10, 1e10)).toBe(2e10);
    });
  });

  describe('subtract', () => {
    it('subtracts two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });
    it('subtracts positive and negative numbers', () => {
      expect(subtract(-4, 6)).toBe(-10);
    });
    it('subtracts two negative numbers', () => {
      expect(subtract(-3, -5)).toBe(2);
    });
    it('subtracts floating point numbers', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
    it('subtracts large numbers', () => {
      expect(subtract(2e10, 1e10)).toBe(1e10);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(3, 7)).toBe(21);
    });
    it('multiplies positive and negative numbers', () => {
      expect(multiply(-4, 6)).toBe(-24);
    });
    it('multiplies two negative numbers', () => {
      expect(multiply(-3, -5)).toBe(15);
    });
    it('multiplies floating point numbers', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
    it('multiplies large numbers', () => {
      expect(multiply(1e5, 1e5)).toBe(1e10);
    });
  });

  describe('divide', () => {
    it('divides two positive numbers', () => {
      expect(divide(21, 7)).toBe(3);
    });
    it('divides positive and negative numbers', () => {
      expect(divide(-24, 6)).toBe(-4);
    });
    it('divides two negative numbers', () => {
      expect(divide(-15, -5)).toBe(3);
    });
    it('divides floating point numbers', () => {
      expect(divide(0.3, 0.1)).toBeCloseTo(3);
    });
    it('divides large numbers', () => {
      expect(divide(1e10, 1e5)).toBe(1e5);
    });
    it('throws on divide by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
