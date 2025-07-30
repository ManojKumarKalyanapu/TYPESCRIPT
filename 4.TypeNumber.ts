// TypeScript Number and BigInt Types

// 1. Integer (number)
let Numage: number = 30;
console.log("Age:", Numage);

// 2. Floating-point (number)
let price: number = 99.99;
console.log("Price:", price);

// 3. Special number values
let notANumber: number = NaN;
let infinityValue: number = Infinity;

console.log("NaN example:", notANumber);
console.log("Infinity example:", infinityValue);

// 4. Binary, Octal, Hex
let binary: number = 0b1010; // 10 in binary
let octal: number = 0o744; // 484 in octal
let hex: number = 0x1a3f; // 6719 in hexadecimal

console.log("Binary:", binary);
console.log("Octal:", octal);
console.log("Hex:", hex);

// 5. BigInt (requires ES2020 target)
let bigNumValue: bigint = 1234567890123456789012345678901234567890n;
let anotherBigValue = BigInt("987654321987654321987654321987654321");

console.log("BigInt:", bigNumValue);
console.log("Another BigInt:", anotherBigValue);

// Arithmetic with BigInt
let bigSum = bigNumValue + anotherBigValue;
console.log("BigInt Sum:", bigSum);

// Note: You cannot mix `number` and `bigint` in arithmetic
// let invalid = bigValue + age; // ❌ Error: Cannot mix BigInt and other types
