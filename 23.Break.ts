// Example 1: Using break in a for loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking the loop at i =", i);
    break;
  }
  console.log("i =", i);
}

// Example 2: Using break in a while loop
let BreakCount = 0;
while (true) {
  if (BreakCount === 3) {
    console.log("Exiting infinite loop");
    break;
  }
  console.log("BreakCount =", BreakCount);
  BreakCount++;
}

// Example 3: Using break in a switch case
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "mango":
    console.log("Mango selected");
    break;
  default:
    console.log("Unknown fruit");
    break;
}
