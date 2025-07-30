// TypeScript: Tuple Examples

// 1. Basic tuple – fixed order and types
let personTuple: [string, number] = ["Alice", 30];
console.log("personTuple:", personTuple); // ["Alice", 30]

// 2. Accessing tuple values
console.log("Name:", personTuple[0]); // "Alice"
console.log("Age:", personTuple[1]); // 30

// 3. Tuple with different types
let mixedTuple: [number, boolean, string] = [101, true, "active"];
console.log("Mixed Tuple:", mixedTuple);

// 4. Updating tuple elements
personTuple[1] = 31;
console.log("Updated personTuple:", personTuple);

// 5. Tuple with optional elements
let optionalTuple: [string, number?] = ["Bob"];
console.log("Optional Tuple:", optionalTuple);

// 6. Tuple with rest elements
let rgb: [number, number, ...number[]] = [255, 0, 128, 64, 32];
console.log("RGB Tuple with Rest:", rgb);

// 7. Using tuples in function return
function getUserInfo(): [string, number] {
  return ["Charlie", 28];
}

let [usernameTuple, userAge] = getUserInfo();
console.log("usernameTuple:", usernameTuple);
console.log("User Age:", userAge);

// 8. Tuple with readonly
const coords: readonly [number, number] = [10, 20];
// coords[0] = 15; ❌ Error: Cannot assign to '0' because it is a read-only property
console.log("Coordinates (readonly):", coords);

// 9. Labeled tuple elements (TypeScript 4+)
type Point = [x: number, y: number];
const originTuple: Point = [0, 0];
console.log("originTuple:", originTuple);

// 10. Tuple array (array of fixed-type tuples)
let employees: [number, string][] = [
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"],
];
console.log("Employees:", employees);

// Looping through tuple array
employees.forEach(([id, name]) => {
  console.log(`ID: ${id}, Name: ${name}`);
});
