// TypeScript: unknown Type Examples

// 1. Basic declaration
let UnknownValue: unknown;

UnknownValue = "Hello";
UnknownValue = 123;
UnknownValue = true;
UnknownValue = { key: "UnknownValue" };

// 2. Cannot directly assign unknown to other types without checking
// let str: string = UnknownValue; // ❌ Error: Type 'unknown' is not assignable to type 'string'

// 3. Type narrowing with typeof
if (typeof UnknownValue === "string") {
  console.log("String UnknownValue:", UnknownValue.toUpperCase());
} else if (typeof UnknownValue === "number") {
  console.log("Number UnknownValue:", UnknownValue.toFixed(2));
} else if (typeof UnknownValue === "boolean") {
  console.log("Boolean UnknownValue:", UnknownValue ? "Yes" : "No");
} else if (typeof UnknownValue === "object" && UnknownValue !== null) {
  console.log("Object UnknownValue:", JSON.stringify(UnknownValue));
} else {
  console.log("Unknown type");
}

// 4. Using unknown in functions
function safeParseJSON(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

let UnknownResult: unknown = safeParseJSON('{"x": 10, "y": 20}');

// Must check before accessing properties
if (
  typeof UnknownResult === "object" &&
  UnknownResult !== null &&
  "x" in UnknownResult &&
  "y" in UnknownResult
) {
  console.log("Parsed object has x and y:", UnknownResult);
}

// 5. Comparison: any vs unknown
let anyVal: any = "hello";
let unknownVal: unknown = "hello";

// Allowed with any (unsafe)
console.log(anyVal.toUpperCase()); // ✅

// Not allowed with unknown (safe)
// console.log(unknownVal.toUpperCase()); // ❌ Error

if (typeof unknownVal === "string") {
  console.log("Safe usage:", unknownVal.toUpperCase()); // ✅
}
