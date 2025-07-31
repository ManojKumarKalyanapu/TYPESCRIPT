// -----------------------------
// 📘 Topic: Abstract Classes in TypeScript
// -----------------------------

/**
 * An abstract class is a base class that cannot be instantiated directly.
 * It is designed to be inherited by other classes and can include:
 *  - Abstract methods (no implementation, must be overridden)
 *  - Concrete methods (with implementation)
 *
 * Use the `abstract` keyword to define an abstract class or method.
 */

// ✅ Abstract base class
abstract class ShapeAbstract {
  // Abstract method (must be implemented by subclass)
  abstract getArea(): number;

  // Concrete method (optional for subclass to override)
  describe(): void {
    console.log("This is a ShapeAbstract.");
  }
}

// ❌ Error: Cannot create instance of abstract class
// const s = new ShapeAbstract(); // Error

// ✅ Subclass that implements abstract method
class Rectangle extends ShapeAbstract {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends ShapeAbstract {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  // Optionally override the concrete method
  describe(): void {
    console.log("This is a circle.");
  }
}

// ✅ Usage
const rect = new Rectangle(10, 5);
console.log("Rectangle area:", rect.getArea()); // 50
rect.describe(); // This is a ShapeAbstract.

const circ = new Circle(7);
console.log("Circle area:", circ.getArea()); // ~153.93
circ.describe(); // This is a circle.

// -----------------------------
// ✅ Summary:
// -----------------------------
// - Abstract classes cannot be instantiated directly.
// - Use `abstract` keyword for class and method.
// - Abstract methods must be implemented in child classes.
// - Can include both abstract and concrete (normal) methods.
// - Useful for defining a common structure for subclasses.
