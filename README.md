# Calculator

A Node.js/TypeScript calculator project for Akshay-0209.

## Description

This repository is a starter template for a calculator application using Node.js and TypeScript.

## Calculator Module

The calculator module provides basic arithmetic operations. Import functions from `src/calculator` and use as shown below:

```typescript
import { add, subtract, multiply, divide } from 'src/calculator';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 6)); // 24
console.log(divide(10, 2)); // 5

// Divide by zero throws an error
try {
  divide(10, 0);
} catch (e) {
  console.error(e.message); // "Cannot divide by zero"
}
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app or tests as you develop

## License

MIT
