// 1. Type Annotation for Variables
let username: string = "Manoj";
let newage: number = 25;
let isAdmin: boolean = false;

// 2. Type Annotation in Function Parameters
function greet(name: string): void {
  console.log("Hello, " + name);
}
greet("Alice");

// 3. Type Annotation for Function Return Values
function add(a: number, b: number): number {
  return a + b;
}
let sum: number = add(10, 20);
console.log("Sum:", sum);

// 4. Type Annotation with Arrays
let fruits: string[] = ["apple", "banana", "mango"];
let marks: number[] = [85, 90, 95];

console.log("Fruits:", fruits);
console.log("Marks:", marks);

// 5. Type Annotation with Objects
let Annoatationuser: { name: string; age: number; isVerified: boolean } = {
  name: "John",
  age: 30,
  isVerified: true,
};

console.log("User:", Annoatationuser);

// 6. Type Annotation with Arrow Functions
const multiply = (x: number, y: number): number => {
  return x * y;
};

console.log("Multiply:", multiply(4, 5));
