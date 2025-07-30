// TypeScript Boolean Type Examples

// 1. Basic boolean declaration
let isLogin: boolean = true;
let isAdminIn: boolean = false;

console.log("Is Logged In:", isLogin);
console.log("Is Admin:", isAdminIn);

// 2. Boolean from comparison expressions
let BoolAge: number = 25;
let isAdult: boolean = BoolAge >= 18;
console.log("Is Adult:", isAdult); // true

let hasPermission: boolean = isLogin && isAdminIn;
console.log("Has Permission:", hasPermission); // false

// 3. Using boolean in if-else statements
if (isLogin) {
  console.log("Welcome, user!");
} else {
  console.log("Please log in.");
}

// 4. Toggling a boolean BoolValue
let darkMode: boolean = false;
console.log("Dark mode:", darkMode);
darkMode = !darkMode;
console.log("Dark mode after toggle:", darkMode);

// 5. Using Boolean constructor (not recommended for logic)
let BoolValue = Boolean("some BoolValue"); // true
console.log("Boolean from string:", BoolValue);

let emptyBoolValue = Boolean(""); // false
console.log("Boolean from empty string:", emptyBoolValue);

// 6. Falsy BoolValues in JS that become false when cast to boolean
let falsyBoolValues = [false, 0, "", null, undefined, NaN];
falsyBoolValues.forEach((val, i) => {
  console.log(`Falsy[${i}]:`, Boolean(val));
});

// 7. Function returning a boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}
console.log("Is 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));

// 8. Boolean as flags
let emailSent: boolean = false;

function sendEmail() {
  if (!emailSent) {
    console.log("Sending email...");
    emailSent = true;
  } else {
    console.log("Email already sent.");
  }
}

sendEmail(); // First time
sendEmail(); // Second time
