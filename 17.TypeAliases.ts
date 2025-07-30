// TypeScript: Type Aliases Example

// 1. Basic Type Alias for a Primitive
type Username = string;
let user1: Username = "manoj";
// let user2: Username = 123; // ❌ Error: number not assignable to string

// 2. Type Alias for Object
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const admin: User = {
  id: 1,
  name: "Alice",
  isAdmin: true,
};

// 3. Type Alias for Union Types
type StatusAlias = "active" | "inactive" | "suspended";

let userStatusAlias: StatusAlias = "active";
// userStatusAlias = "banned"; // ❌ Error

// 4. Type Alias for Function Signature
type Logger = (message: string) => void;

const logToConsole: Logger = (msg) => {
  console.log("LOG:", msg);
};

logToConsole("System started");

// 5. Type Alias with Arrays
type PointAlias = [number, number];
const coordinates: PointAlias = [10, 20];

// 6. Nested Type Aliases
type ProductAlias = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  orderId: number;
  ProductAliass: ProductAlias[];
  total: number;
};

const order1: Order = {
  orderId: 1001,
  ProductAliass: [
    { id: 1, name: "Pen", price: 10 },
    { id: 2, name: "Notebook", price: 50 },
  ],
  total: 60,
};

console.log("Order:", order1);
