// TypeScript: if...else Example

let IfAge: number = 20;

if (IfAge >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Example 2: Nested if...else

let score: number = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Example 3: Checking user role
let role: string = "admin";

if (role === "admin") {
  console.log("You have full access.");
} else if (role === "editor") {
  console.log("You can edit content.");
} else if (role === "viewer") {
  console.log("You can view content.");
} else {
  console.log("Role not recognized.");
}
