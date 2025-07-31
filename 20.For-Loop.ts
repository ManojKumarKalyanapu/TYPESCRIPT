// TypeScript: for loop example

// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// Example 2: Calculate the sumTotal of the first 5 natural numbers
let sumTotal: number = 0;
for (let i = 1; i <= 5; i++) {
  sumTotal += i;
}
console.log(`sumTotal of first 5 natural numbers: ${sumTotal}`);

// Example 3: Loop through an array
const TotalFruits: string[] = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < TotalFruits.length; i++) {
  console.log(`Fruit at index ${i}: ${TotalFruits[i]}`);
}
