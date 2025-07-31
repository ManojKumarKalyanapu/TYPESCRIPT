// -------------------------------------------------
// 📘 Topic: TypeScript Generic Interfaces
// -------------------------------------------------

/**
 * ✅ What are Generic Interfaces?
 * A generic interface allows you to define reusable interface structures
 * that work with multiple types while keeping type safety.
 *
 * Syntax: interface InterfaceName<T> { ... }
 */

// -----------------------------------
// 🔹 Step 1: Basic Generic Interface
// -----------------------------------

interface ResponseData<T> {
  status: number;
  message: string;
  data: T;
}

// Usage with string data
const stringResponse: ResponseData<string> = {
  status: 200,
  message: "Success",
  data: "This is a string response",
};

// Usage with object data
const userResponse: ResponseData<{ name: string; age: number }> = {
  status: 200,
  message: "User found",
  data: { name: "Alice", age: 25 },
};

console.log(stringResponse.data); // "This is a string response"
console.log(userResponse.data.name); // "Alice"

// -----------------------------------
// 🔹 Step 2: Interface with Generic Array
// -----------------------------------

interface PaginatedResult<T> {
  currentPage: number;
  totalPages: number;
  results: T[];
}

const usersPage: PaginatedResult<{ id: number; name: string }> = {
  currentPage: 1,
  totalPages: 3,
  results: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

console.log(usersPage.results[1].name); // "Bob"

// -----------------------------------
// 🔹 Step 3: Generic Interface with Functions
// -----------------------------------

interface Processor<T> {
  process(input: T): T;
}

const stringProcessor: Processor<string> = {
  process: (input) => input.toUpperCase(),
};

const numberProcessor: Processor<number> = {
  process: (input) => input * 2,
};

console.log(stringProcessor.process("hello")); // "HELLO"
console.log(numberProcessor.process(10)); // 20

// -----------------------------------
// 🔹 Step 4: Optional Type Defaults
// -----------------------------------

interface ApiResponse<T = any> {
  code: number;
  payload: T;
}

const defaultApiResponse: ApiResponse = {
  code: 500,
  payload: "Something went wrong",
};

const typedApiResponse: ApiResponse<number> = {
  code: 200,
  payload: 12345,
};

// -----------------------------------
// ✅ Summary:
// - Use `<T>` to define generic types in interfaces.
// - You can use generics for objects, arrays, and functions.
// - Provides flexibility while ensuring type safety and reuse.
