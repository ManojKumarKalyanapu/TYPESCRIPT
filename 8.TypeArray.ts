// TypeScript: Array Type Examples

// 1. Basic array of numbers
let numbers: number[] = [10, 20, 30];
console.log("Numbers:", numbers);

// 2. Array of strings
let arrayFruits: string[] = ["apple", "banana", "cherry"];
console.log("arrayFruits:", arrayFruits);

// 3. Generic array syntax
let arrayScore: Array<number> = [95, 85, 75];
console.log("arrayScore:", arrayScore);

// 4. Array of objects
type arrayProduct = {
  id: number;
  name: string;
};

let arrayProducts: arrayProduct[] = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Notebook" },
];

console.log("arrayProducts:", arrayProducts);

// 5. Array methods

// push – add to end
arrayFruits.push("date");
console.log("After push:", arrayFruits);

// pop – remove from end
const lastFruit = arrayFruits.pop();
console.log("Popped:", lastFruit);

// shift – remove from start
const firstFruit = arrayFruits.shift();
console.log("Shifted:", firstFruit);

// unshift – add to start
arrayFruits.unshift("mango");
console.log("After unshift:", arrayFruits);

// indexOf – find index
console.log("Index of 'banana':", arrayFruits.indexOf("banana"));

// includes – check existence
console.log("Includes 'apple':", arrayFruits.includes("apple"));

// map – transform elements
const doubleNumbers = numbers.map((n) => n * 2);
console.log("Doubled numbers:", doubleNumbers);

// filter – filter elements
const higharrayScore = arrayScore.filter((s) => s > 80);
console.log("High arrayScore:", higharrayScore);

// reduce – sum of array
const total = numbers.reduce((sum, val) => sum + val, 0);
console.log("Sum of numbers:", total);

// 6. Mixed-type array (not recommended, but possible)
let mixed: (string | number | boolean)[] = ["text", 123, true];
console.log("Mixed array:", mixed);

// 7. Tuple (fixed-length array with types)
let arrayTuple: [string, number] = ["Alice", 25];
console.log("User tuple:", arrayTuple);

// 8. Readonly array
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error: Cannot modify readonly array

// 9. Spread operator
let extended = [...numbers, 100, 200];
console.log("Extended numbers:", extended);

// 10. Array destructuring
let [a, b, ...rest] = extended;
console.log("a:", a, "b:", b, "rest:", rest);
