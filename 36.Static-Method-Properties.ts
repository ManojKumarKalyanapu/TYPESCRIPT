// -----------------------------
// 📘 Topic: Static Methods & Properties in TypeScript
// -----------------------------

/**
 * Static members belong to the class itself, not to any specific instance.
 * Use the `static` keyword to define methods or properties that are shared by all instances.
 */

class MathUtil {
  // ✅ Static property
  static PI: number = 3.14159;

  // ✅ Static method
  static calculateCircleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }

  // ❌ Instance method (not static)
  describe(): void {
    console.log("This is a math utility class.");
  }
}

// ✅ Accessing static members using class name (without creating object)
console.log("Value of PI:", MathUtil.PI);
console.log("Area of circle (r=5):", MathUtil.calculateCircleArea(5));

// ❌ Error: Cannot access static members via instance
const util = new MathUtil();
util.describe(); // OK: instance method
// util.PI; // ❌ Property 'PI' does not exist on type 'MathUtil'.
// util.calculateCircleArea(5); // ❌ Same issue

// ✅ Another Example: Static Counter
class Counter {
  private static count: number = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

const aCounter = new Counter();
const bCounter = new Counter();
const cCounter = new Counter();

console.log("Number of instances:", Counter.getCount()); // Output: 3

// -----------------------------
// ✅ Summary:
// -----------------------------
// - Use `static` to define class-level members (shared by all instances).
// - Access static members using the class name (e.g., ClassName.member).
// - Useful for utility functions, shared constants, counters, config, etc.
// - Static members are not accessible via instances of the class.
