// -----------------------------
// 📘 Topic: Interfaces in TypeScript
// -----------------------------

/**
 * Interfaces define a **contract** that specifies the structure an object or class must follow.
 * They define properties, methods, and their types — but no actual implementation.
 *
 * Use the `interface` keyword to declare one.
 */

// ✅ Basic object interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// ✅ Using the interface
const userInterface: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, I am ${this.name}.`);
  },
};

userInterface.greet(); // Hello, I am Alice.

// ✅ Interface in classes
interface Animal {
  name: string;
  makeSound(): void;
}

class DogClass implements Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const d = new DogClass("Buddy");
d.makeSound(); // Buddy says Woof!

// ✅ Optional and readonly properties
interface ProductClass {
  readonly id: number;
  name: string;
  description?: string; // optional
}

const p1: ProductClass = {
  id: 101,
  name: "Laptop",
};

// ❌ p1.id = 200; // Error: Cannot assign to 'id' because it is a read-only property

// ✅ Function types using interfaces
interface MathOperation {
  (a: number, b: number): number;
}

const addInterface: MathOperation = (x, y) => x + y;
console.log("addInterface:", addInterface(5, 10)); // 15

// ✅ Extending interfaces (inheritance)
interface ShapeInterface {
  color: string;
}

interface MyCircle extends ShapeInterface {
  radiusNum: number;
}

const myCircle: MyCircle = {
  color: "red",
  radiusNum: 10,
};

// -----------------------------
// ✅ Summary:
// -----------------------------
// - Interfaces define the structure (ShapeInterface) of objects, classes, or functions.
// - Use `implements` to apply an interface to a class.
// - Supports optional (`?`) and readonly (`readonly`) properties.
// - Can be extended using `extends` for reusable structure.
// - Helps with code consistency, type safety, and better tooling.
