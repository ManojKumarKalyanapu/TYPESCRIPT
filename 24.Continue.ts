// Example 1: Using continue in a for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping iteration at i =", i);
    continue;
  }
  console.log("i =", i);
}

// Example 2: Using continue in a while loop
let ContinueCount = 0;
while (ContinueCount < 5) {
  ContinueCount++;
  if (ContinueCount === 2) {
    console.log("Skipping ContinueCount =", ContinueCount);
    continue;
  }
  console.log("ContinueCount =", ContinueCount);
}
