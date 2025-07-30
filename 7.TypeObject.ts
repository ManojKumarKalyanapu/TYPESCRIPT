// TypeScript: Object Type Examples

// 1. Basic object type
let userObject: object = {
  name: "Alice",
  age: 30,
};
console.log("userObject (object type):", userObject);

// 2. Limitation: can't access properties directly on type 'object'
// console.log(userObject.name); ❌ Error

// 3. Use custom object types for property access
type userObject = {
  name: string;
  age: number;
};

let customer: userObject = {
  name: "Bob",
  age: 25,
};
console.log("Customer Name:", customer.name);
console.log("Customer Age:", customer.age);

// 4. Optional properties
type Product = {
  id: number;
  name: string;
  description?: string;
};

let item: Product = {
  id: 101,
  name: "Book",
};
console.log("Product:", item);

// 5. Readonly properties
type Config = {
  readonly host: string;
  port: number;
};

let serverConfig: Config = {
  host: "localhost",
  port: 8080,
};

// serverConfig.host = "127.0.0.1"; ❌ Error: host is readonly

// 6. Nested object types
type Address = {
  city: string;
  zip: string;
};

type EmployeeObject = {
  id: number;
  name: string;
  address: Address;
};

let EmployeeObject: EmployeeObject = {
  id: 1,
  name: "Charlie",
  address: {
    city: "Mumbai",
    zip: "400001",
  },
};
console.log("EmployeeObject City:", EmployeeObject.address.city);

// 7. Object as a function parameter
function printuserObjectInfo(u: userObject): void {
  console.log(`userObject Info -> Name: ${u.name}, Age: ${u.age}`);
}

printuserObjectInfo({ name: "David", age: 40 });

// 8. object vs Object vs {}
let obj1: object = { key: "value" }; // Accepts only non-primitives
let obj2: Object = "hello"; // Accepts any value
let obj3: {} = 123; // Accepts any value except null/undefined

console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj3:", obj3);

// 9. Using Record type
const ObjectScore: Record<string, number> = {
  math: 90,
  science: 85,
};
console.log("ObjectScore:", ObjectScore);
