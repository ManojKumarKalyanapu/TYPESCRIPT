// -----------------------------
// 📘 Topic: Interfaces vs. Abstract Classes in TypeScript
// -----------------------------

/**
 * Both interfaces and abstract classes are used to define a contract or structure for classes.
 * However, they serve slightly different purposes and have different features.
 *
 * ✅ Interfaces: Declare the shape of objects, classes, or functions.
 * ✅ Abstract Classes: Provide a partial implementation that can be extended.
 */

// -----------------------------
// ✅ INTERFACE EXAMPLE
// -----------------------------

interface Vehicle {
  brand: string;
  drive(): void;
}

class Car implements Vehicle {
  constructor(public brand: string) {}

  drive(): void {
    console.log(`${this.brand} car is driving.`);
  }
}

const car = new Car("Toyota");
car.drive(); // Toyota car is driving.

// -----------------------------
// ✅ ABSTRACT CLASS EXAMPLE
// -----------------------------

abstract class AnimalAbstract {
  constructor(public name: string) {}

  // Abstract method (must be implemented)
  abstract makeSound(): void;

  // Concrete method (optional to override)
  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class DogAnimal extends AnimalAbstract {
  makeSound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const dogObject = new DogAnimal("Buddy");
dogObject.makeSound(); // Buddy says Woof!
dogObject.move(); // Buddy is moving.

// -----------------------------
// ✅ Key Differences
// -----------------------------

/*
| Feature                      | Interface                    | Abstract Class                        |
|-----------------------------|------------------------------|----------------------------------------|
| Instantiation               | Cannot be instantiated       | Cannot be instantiated                 |
| Implementation              | No implementation            | Can have method implementations        |
| Multiple inheritance        | Allowed (via implements)     | Not allowed (only one base class)      |
| Constructor                 | Not supported                | Supported                              |
| Access modifiers            | Not allowed                  | Allowed (public/private/protected)     |
| Readability for contracts   | Preferred                    | Preferred for shared logic + contracts |
*/

// -----------------------------
// ✅ Summary
// -----------------------------

// ✅ Use an interface when:
// - You only need to define the structure (shape)
// - You want multiple classes to implement the same contract
// - You need multiple inheritance

// ✅ Use an abstract class when:
// - You want to provide some shared/default functionality
// - You want to enforce some method implementations
// - You want to use access modifiers or constructors
