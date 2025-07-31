// ---------------------------------------------------
// 📘 Topic: TypeScript Modules
// ---------------------------------------------------

/**
 * ✅ What is a Module?
 * In TypeScript (and JavaScript), a module is a file that exports and/or imports values
 * (variables, functions, classes, interfaces, etc.).
 *
 * TypeScript uses **ES Modules (ESM)** syntax: `export` and `import`
 *
 * Benefits:
 * - Code organization
 * - Reusability
 * - Avoids global namespace pollution
 *
 * To use modules, ensure `"module": "esnext"` or `"commonjs"` is set in `tsconfig.json`.
 *
 * Example folder structure:
 * ├── math.ts
 * ├── message.ts
 * └── main.ts
 */

// ---------------------------------------------------
// 📁 math.ts
// ---------------------------------------------------

// Exporting variables, functions, classes
export const PI = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}

export class Calculator {
  multiply(x: number, y: number): number {
    return x * y;
  }
}
