// TypeScript: do...while loop examples

// Example 1: Print numbers from 1 to 5
let num: number = 1;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num <= 5);

// Example 2: Ask for password (simulated)
let enteredPassword: string;
let correctPassword: string = "typescript";

do {
  // Simulate user input
  enteredPassword = "typescript"; // Replace with prompt() in real apps
  console.log(`Entered Password: ${enteredPassword}`);
} while (enteredPassword !== correctPassword);

console.log("Access granted");

// Example 3: Execute once even if the condition is false
let DoValue: number = 10;
do {
  console.log(`This will run even though DoValue > 5: DoValue = ${DoValue}`);
  DoValue++;
} while (DoValue < 5);
