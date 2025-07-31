// ---------------------------------------------------
// ✅ Types of Exports
// ---------------------------------------------------

// Named Export: export function A() {} -> import { A } from '...';
// Default Export: export default B -> import B from '...';

import { add as sum } from "./46.Export";
console.log("Renamed function:", sum(1, 2));

// ---------------------------------------------------
// ✅ Summary
// ---------------------------------------------------
// - Use `export` to expose variables/functions/classes
// - Use `import` to bring them into other files
// - Modules make code cleaner, testable, and scalable
