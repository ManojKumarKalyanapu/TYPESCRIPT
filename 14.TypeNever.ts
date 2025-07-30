// TypeScript: never Type Example

// 1. Function that always throws an error → never returns
function throwError(message: string): never {
  throw new Error(message);
}

// Uncomment below to test
// throwError("Something went wrong!");

// 2. Function with infinite loop → never returns
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Looping forever...");
//   }
// }

// Uncomment below to test
// infiniteLoop();

// 3. Exhaustiveness check using never in switch-case
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 1 * 1;
    case "square":
      return 1 * 1;
    case "triangle":
      return 0.5 * 1 * 1;
    default:
      // Exhaustive type checking
      const _exhaustiveCheck: never = shape; // Error if new type is added to Shape
      return _exhaustiveCheck;
  }
}

console.log(getArea("square"));
