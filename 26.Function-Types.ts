// Function type declaration
type addTypeFn = (a: number, b: number) => number;

// Implementing the function using the type
const addType: addTypeFn = (x, y) => x + y;

console.log("addTypeition:", addType(5, 3)); // Output: addTypeition: 8

// Another example: greetTypeing function type
type greetTypeFn = (name: string) => string;

const greetType: greetTypeFn = (name) => `Hello, ${name}!`;

console.log(greetType("Manoj")); // Output: Hello, Manoj!

// Interface
interface MultiplyTypeFuncFn {
  (a: number, b: number): number;
}

const MultiplyTypeFunc: MultiplyTypeFuncFn = (a, b) => a * b;

console.log("Product:", MultiplyTypeFunc(4, 6)); // Output: Product: 24
