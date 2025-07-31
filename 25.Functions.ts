// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

console.log("Sum:", add(5, 3)); // Output: Sum: 8

// Function with default parameter
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Manoj")); // Output: Hello, Manoj!

// Function with optional parameter
function fullNameFunc(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(fullNameFunc("John")); // Output: John
console.log(fullNameFunc("John", "Doe")); // Output: John Doe

// Function with rest parameters
function multiplyFunc(factor: number, ...nums: number[]): number[] {
  return nums.map((n) => n * factor);
}

console.log(multiplyFunc(2, 1, 2, 3)); // Output: [2, 4, 6]
