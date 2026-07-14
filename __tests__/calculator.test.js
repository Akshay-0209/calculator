import { add, subtract, multiply, divide } from '../src/calculator';

describe('Calculator Module', () => {
  describe('add function', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('throws error for invalid inputs', () => {
      expect(() => add('a', 3)).toThrow('Invalid input: input must be a valid number');
      expect(() => add(2, NaN)).toThrow('Invalid input: input must be a valid number');
    });
  });

  describe('subtract function', () => {
    it('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('throws error for invalid inputs', () => {
      expect(() => subtract(5, 'b')).toThrow('Invalid input: input must be a valid number');
    });
  });

  describe('multiply function', () => {
    it('multiplies two numbers correctly', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('throws error for invalid inputs', () => {
      expect(() => multiply({}, 5)).toThrow('Invalid input: input must be a valid number');
    });
  });

  describe('divide function', () => {
    it('divides two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Divide by zero error');
    });

    it('throws error for invalid inputs', () => {
      expect(() => divide(10, 'a')).toThrow('Invalid input: input must be a valid number');
    });
  });
});
