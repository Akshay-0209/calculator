# Calculator

A Node.js/TypeScript calculator project for Akshay-0209.

## Description

This repository is a starter template for a calculator application using Node.js and TypeScript.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app or tests as you develop

## Calculator Module

The calculator module provides basic arithmetic operations. All functions are written in TypeScript and exported from `src/calculator.ts`.

### Functions

#### `add(a: number, b: number): number`
Returns the sum of `a` and `b`.

**Example:**
```ts
import { add } from './src/calculator';
console.log(add(2, 3)); // 5
```

#### `subtract(a: number, b: number): number`
Returns the difference of `a` and `b`.

**Example:**
```ts
import { subtract } from './src/calculator';
console.log(subtract(5, 3)); // 2
```

#### `multiply(a: number, b: number): number`
Returns the product of `a` and `b`.

**Example:**
```ts
import { multiply } from './src/calculator';
console.log(multiply(4, 3)); // 12
```

#### `divide(a: number, b: number): number`
Returns the result of dividing `a` by `b`.
Throws an error if `b` is 0.

**Example:**
```ts
import { divide } from './src/calculator';
console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // Error: Cannot divide by zero
```

## License

MIT
