// -----------------------------
// 📘 Introduction to TypeScript Generics
// -----------------------------

/**
 * ✅ What are Generics?
 * Generics allow you to create reusable components, functions, and classes that can work with a variety of data types,
 * while still maintaining type safety.
 *
 * Instead of using `any`, generics provide a way to capture the type the user provides and work with it.
 *
 * Syntax: function <T>(arg: T): T {}
 */

// --------------------------------
// 🔹 Example 1: Generic Function
// --------------------------------

function identity<T>(arg: T): T {
  return arg;
}

// Usage
let numResult = identity<number>(42); // T = number
let strResult = identity<string>("Hello"); // T = string

console.log(numResult); // 42
console.log(strResult); // Hello

// --------------------------------
// 🔹 Example 2: Generic Function with Arrays
// --------------------------------

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let firstNum = getFirstElement<number>([10, 20, 30]);
let firstStr = getFirstElement<string>(["a", "b", "c"]);

console.log(firstNum); // 10
console.log(firstStr); // a

// --------------------------------
// 🔹 Example 3: Generic Interface
// --------------------------------

interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 123 };
let stringBox: Box<string> = { value: "TypeScript" };

console.log(numberBox.value); // 123
console.log(stringBox.value); // TypeScript

// --------------------------------
// 🔹 Example 4: Generic Class
// --------------------------------

class GenericContainer<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

const numContainer = new GenericContainer<number>();
numContainer.addItem(1);
numContainer.addItem(2);

console.log(numContainer.getAllItems()); // [1, 2]

// --------------------------------
// 🔹 Example 5: Multiple Type Parameters
// --------------------------------

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Alice" }, { age: 25 });
console.log(merged); // { name: 'Alice', age: 25 }

// --------------------------------
// ✅ Benefits of Generics:
// - Reusability
// - Type Safety
// - Code Clarity
// - Better Autocompletion in IDEs
