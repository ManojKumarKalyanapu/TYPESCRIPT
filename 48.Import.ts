import { PI, add, Calculator } from "./46.Export";
import greet from "./47.Export-Default";
console.log("PI is", PI); // 3.14
console.log("Add 2 + 3 =", add(2, 3)); // 5

const calc = new Calculator();
console.log("Multiply 4 * 5 =", calc.multiply(4, 5)); // 20

console.log(greet("TypeScript")); // Hello, TypeScript!
