function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet("Manoj")); // Hello, Manoj!
console.log(greet()); // Hello, Guest!

function MultiplyDefault(a: number, b: number = 2): number {
  return a * b;
}

console.log(MultiplyDefault(5)); // 10 (5 * 2)
console.log(MultiplyDefault(5, 4)); // 20
