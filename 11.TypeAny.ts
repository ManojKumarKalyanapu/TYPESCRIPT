// TypeScript: any Type Examples

// 1. Basic usage of 'any'
let randomValue: any;

randomValue = 10; // number
console.log("Number:", randomValue);

randomValue = "Hello, world!"; // string
console.log("String:", randomValue);

randomValue = true; // boolean
console.log("Boolean:", randomValue);

randomValue = { x: 1, y: 2 }; // object
console.log("Object:", randomValue);

// 2. Using any in arrays
let mixedArray: any[] = [1, "two", true, { key: "value" }];
console.log("Mixed Array:", mixedArray);

// 3. Function with any parameter and return
function logAnything(value: any): any {
  console.log("Logging:", value);
  return value;
}

let resultAny = logAnything(["a", 1, null]);
console.log("Returned:", resultAny);

// 4. Bypassing type safety (⚠️ Dangerous!)
let unsafe: any = "TypeScript";
console.log("Length:", unsafe.length); // Works fine

unsafe = 42;
// Still calls .length but number doesn’t have length — no compile error!
console.log("Unsafe length (no error):", unsafe.length); // Runtime error if not checked

// 5. any vs unknown
let unknownValue: unknown = "safe";
let anyValue: any = "unsafe";

// Need type check for unknown
// console.log(unknownValue.length); // ❌ Error
if (typeof unknownValue === "string") {
  console.log("Safe length:", unknownValue.length); // ✅
}

// No checks needed for any
console.log("Any length:", anyValue.length); // ✅ but unsafe
