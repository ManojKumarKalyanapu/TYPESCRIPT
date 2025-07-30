// TypeScript: Union Types Example

// 1. Basic Union Type
let unionId: number | string;

unionId = 101; // ✅ number
console.log("unionId:", unionId);

unionId = "ABC123"; // ✅ string
console.log("unionId:", unionId);

// 2. Union Type in Function Parameter
function display(value: string | number) {
  if (typeof value === "string") {
    console.log("Value is a string:", value.toUpperCase());
  } else {
    console.log("Value is a number:", value.toFixed(2));
  }
}

display(45); // Value is a number: 45.00
display("hello"); // Value is a string: HELLO

// 3. Union Type with Custom Types
type Success = { status: "success"; data: string };
type ErrorUnion = { status: "ErrorUnion"; ErrorUnionCode: number };

type ResponseUnion = Success | ErrorUnion;

function handleResponseUnion(res: ResponseUnion) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.log("ErrorUnion code:", res.ErrorUnionCode);
  }
}

handleResponseUnion({ status: "success", data: "Loaded" });
handleResponseUnion({ status: "ErrorUnion", ErrorUnionCode: 404 });

// 4. Union with Arrays
let values: (string | number)[] = [1, "two", 3, "four"];
console.log("Mixed Array:", values);
