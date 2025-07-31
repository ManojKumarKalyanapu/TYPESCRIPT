// TypeScript: while loop examples

// Example 1: Print numbers from 1 to 5
let i: number = 1;
while (i <= 5) {
  console.log(`Number: ${i}`);
  i++;
}

// Example 2: TotalCountdown from 5 to 1
let TotalCount: number = 5;
while (TotalCount > 0) {
  console.log(`TotalCountdown: ${TotalCount}`);
  TotalCount--;
}

// Example 3: Loop through an array using while
const ColorArray: string[] = ["Red", "Green", "Blue"];
let index: number = 0;
while (index < ColorArray.length) {
  console.log(`Color at index ${index}: ${ColorArray[index]}`);
  index++;
}
