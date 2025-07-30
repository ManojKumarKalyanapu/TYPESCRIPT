// Type Inference Examples in TypeScript
// Type Inference is when TypeScript automatically determines the type of a variable or expression based on the assigned value, without needing explicit type annotations.
// 1. Variable Type Inference
let message = "Hello, TypeScript"; // inferred as string
// message = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

let count = 10; // inferred as number
let isLogged = true; // inferred as boolean

console.log(message.toUpperCase());
console.log("Count:", count);
console.log("Is Logged In:", isLoggedIn);

// 2. Array Inference
let colors = ["red", "green", "blue"]; // inferred as string[]
colors.push("yellow");
// colors.push(123); // ❌ Error: number is not assignable to string

// 3. Object Inference
let person = {
  name: "Alice",
  age: 25,
}; // inferred as { name: string; age: number }

console.log(`${person.name} is ${person.age} years old.`);

// 4. Function Return Type Inference
function square(num: number) {
  return num * num; // return type inferred as number
}

let result = square(5);
console.log("Square:", result);

// 5. Contextual Typing (based on how a variable is used)
window.addEventListener("click", (e) => {
  console.log("Mouse clicked at:", e.clientX, e.clientY); // `e` is inferred as MouseEvent
});
