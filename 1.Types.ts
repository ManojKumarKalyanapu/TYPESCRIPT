// 1.Permitive Types
let firstName: string = "John";
let age: number = 30;
let isLoggedIn: boolean = true;
let bigValue: bigint = 12345678901234567890n;
let uniqueId: symbol = Symbol("id");
let nothing: null = null;
let notDefined: undefined = undefined;
console.log(
  firstName,
  age,
  isLoggedIn,
  bigValue,
  uniqueId,
  nothing,
  notDefined
);

// 2. Object (Non-Primitive) Types
// Object
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};

// Array
let scores: number[] = [90, 80, 70];

// Tuple
let userTuple: [string, number] = ["Bob", 45];

// Function
function greet(name: string): string {
  return "Hello, " + name;
}

// Class
class Person {
  constructor(public name: string, public age: number) {}
}

// Interface
interface Car {
  brand: string;
  year: number;
}

const myCar: Car = {
  brand: "Toyota",
  year: 2022,
};

// 3. Special and advance types

// 1. any - disables type checking (use sparingly)
let anything: any = 10;
anything = "Hello";
anything = true;
console.log("Any type:", anything);

// 2. unknown - requires type checking before use
let value: unknown = "TypeScript";
if (typeof value === "string") {
  console.log("Unknown type after check:", value.toUpperCase());
}

// 3. never - function that never returns
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Something went wrong!"); // Uncomment to test

// 4. void - function with no return
function logMessage(msg: string): void {
  console.log("Void function:", msg);
}
logMessage("Hello from void function");

// 5. literal type - specific allowed values only
let direction: "left" | "right" | "center";
direction = "left"; // ✅
// direction = "up"; // ❌ Error: not allowed

console.log("Direction literal type:", direction);

// 6. union type - variable can hold multiple types
let id: number | string;
id = 101;
console.log("Union (number):", id);
id = "A101";
console.log("Union (string):", id);

// 7. intersection type - combines multiple types
type TypePerson = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = TypePerson & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 1234,
};

console.log("Intersection type:", staffMember);

// 8. enum - named constants
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

let currentStatus: Status = Status.Success;
console.log("Enum value:", currentStatus);
