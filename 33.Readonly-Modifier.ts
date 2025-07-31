// -----------------------------
// 📘 Topic: The readonly Modifier
// -----------------------------

/**
 * The `readonly` modifier in TypeScript is used to make a class property immutable after it is initialized.
 * This means the property can only be assigned a value once – either at declaration or inside the constructor.
 */

// ✅ Example 1: Using readonly in a class
class Student {
  readonly id: number; // can only be set once

  constructor(id: number) {
    this.id = id; // ✅ allowed: setting readonly in constructor
  }

  showID() {
    console.log(`Student ID: ${this.id}`);
  }
}

const ReadS1 = new Student(101);
ReadS1.showID();

// ❌ Error: Cannot assign to 'id' because it is a read-only property
// ReadS1.id = 202;

// ✅ Example 2: Readonly with inline initialization
class Book {
  readonly title: string = "Default Title"; // initialized at declaration
}

const book = new Book();
console.log(book.title);

// ❌ Error: Cannot reassign
// book.title = "New Title";

// ✅ Example 3: Readonly with array or object (shallow immutability)
class Library {
  readonly books: string[];

  constructor() {
    this.books = ["Book A", "Book B"];
  }
}

const lib = new Library();
console.log(lib.books); // [ 'Book A', 'Book B' ]

// ❌ lib.books = ["New Book"]; // Cannot reassign the whole array

// ⚠️ However, we can still modify the content inside the array (not deeply immutable)
lib.books.push("Book C"); // This is allowed
console.log(lib.books); // [ 'Book A', 'Book B', 'Book C' ]

// ✅ Example 4: Readonly with interface
interface ConfigRead {
  readonly apiKey: string;
  readonly timeout: number;
}

const ConfigRead: ConfigRead = {
  apiKey: "ABC123",
  timeout: 5000,
};

// ❌ ConfigRead.apiKey = "XYZ789"; // Error: cannot assign to readonly property

// -----------------------------
// ✅ Summary:
// -----------------------------
// - Use `readonly` for class properties that should not be modified after initialization.
// - Can assign a value only once: at declaration or in constructor.
// - Helps enforce immutability and prevent unintended changes.
// - Shallow immutability: objects/arrays marked `readonly` can have their contents changed unless deeply frozen.
