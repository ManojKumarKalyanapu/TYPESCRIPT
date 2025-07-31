// Function overload signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Function implementation
function combine(a: any, b: any): any {
  return a + b;
}

// Usage
const result1 = combine(10, 20); // number + number = 30
const result2 = combine("Hello, ", "Manoj"); // string + string = Hello, Manoj

console.log("Number Result:", result1);
console.log("String Result:", result2);

function parseInput(input: string): string[];
function parseInput(input: string[]): string[];

function parseInput(input: string | string[]): string[] {
  if (typeof input === "string") {
    return input.split(",");
  }
  return input;
}

console.log(parseInput("a,b,c")); // ["a", "b", "c"]
console.log(parseInput(["x", "y"])); // ["x", "y"]
