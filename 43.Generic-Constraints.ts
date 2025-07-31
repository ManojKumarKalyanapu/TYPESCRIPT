// ----------------------------------------------
// 📘 Topic: TypeScript Generic Constraints
// ----------------------------------------------

/**
 * ✅ What are Generic Constraints?
 * Constraints restrict the kinds of types that can be used as a generic parameter.
 * This helps ensure that the generic type has specific properties or behavior.
 *
 * Syntax: <T extends ConstraintType>
 */

// ----------------------------------
// 🔹 Example 1: Constraining to an Interface
// ----------------------------------

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log("Length is:", item.length);
}

logLength("Hello"); // ✅ String has a length
logLength([1, 2, 3]); // ✅ Array has a length
logLength({ length: 10 }); // ✅ Object with length
// logLength(123);            // ❌ Error: number doesn't have a 'length' property

// ----------------------------------
// 🔹 Example 2: Constraining to Object Keys
// ----------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const userConstraints = {
  name: "Alice",
  age: 30,
};

let usernameConstraint = getProperty(userConstraints, "name"); // ✅ OK
// let invalidKey = getProperty(user, "email"); // ❌ Error: 'email' is not a key of userConstraints

console.log(usernameConstraint); // Alice

// ----------------------------------
// 🔹 Example 3: Using Constraint in a Class
// ----------------------------------

interface Printable {
  print(): void;
}

class Printer<T extends Printable> {
  printItem(item: T) {
    item.print();
  }
}

class Invoice {
  print() {
    console.log("Printing invoice...");
  }
}

const invoice = new Invoice();
const printer = new Printer<Invoice>();
printer.printItem(invoice); // Printing invoice...

// ----------------------------------
// ✅ Summary:
// - Generic constraints restrict what types can be used in generics.
// - Use `extends` keyword to define the constraint.
// - This makes your functions/classes safer and more predictable.
