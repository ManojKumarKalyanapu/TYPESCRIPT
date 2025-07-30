// TypeScript: void Type Example

// 1. Function with void return type
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// This function prints to console but doesn't return anything
greet("Manoj");

// 2. Another example: log an error
function logError(errorMsg: string): void {
  console.error(`Error: ${errorMsg}`);
}

logError("Something went wrong");

// 3. Variables with type void (rare and not recommended)
let unusable: void;

// Only `undefined` can be assigned
unusable = undefined; // ✅
// unusable = null; // ❌ (unless `--strictNullChecks` is off)

console.log("Unusable variable:", unusable);

// 4. Function used as a callback with void
function processUserInput(callback: () => void) {
  callback();
}

processUserInput(() => {
  console.log("User input processed.");
});
