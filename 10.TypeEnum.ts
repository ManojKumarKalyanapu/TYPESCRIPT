// TypeScript: Enum Examples

// 1. Numeric enum (default values start from 0)
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log("Numeric Enum:", Direction);
console.log("Direction.Up =", Direction.Up); // 0
console.log("Direction.Right =", Direction.Right); // 3

// 2. Numeric enum with custom starting value
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
console.log("Status Code:", StatusCode.NotFound); // 404

// 3. String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
console.log("Color.Green =", Color.Green); // "GREEN"

// 4. Heterogeneous enum (not recommended in most cases)
enum Mixed {
  No = 0,
  Yes = "YES",
}
console.log("Mixed.Yes =", Mixed.Yes); // "YES"

// 5. Using enums in a function
function getDirectionName(direction: Direction): string {
  return Direction[direction];
}
console.log("Direction name for 2 =", getDirectionName(2)); // "Left"

// 6. Reverse mapping (only works for numeric enums)
console.log("Direction[0] =", Direction[0]); // "Up"

// 7. Enum in conditional checks
function checkStatus(status: StatusCode): void {
  if (status === StatusCode.OK) {
    console.log("Everything is OK!");
  } else {
    console.log("Error occurred. Status:", status);
  }
}
checkStatus(StatusCode.BadRequest); // Error occurred. Status: 400

// 8. Const enum (inlined at compile time)
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let shirtSize = Size.Medium;
console.log("Shirt Size =", shirtSize); // 2
