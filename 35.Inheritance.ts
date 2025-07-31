// -----------------------------
// 📘 Topic: Inheritance in TypeScript
// -----------------------------

/**
 * Inheritance allows a class (child/subclass) to reuse properties and methods from another class (parent/superclass).
 * Use the `extends` keyword to inherit from a base class.
 */

// ✅ Base class (Parent)
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// ✅ Derived class (Child) that extends Animal
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // call the parent constructor
    this.breed = breed;
  }

  // Override the inherited method
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }

  // New method specific to Dog
  fetch(): void {
    console.log(`${this.name} is fetching the ball.`);
  }
}

// ✅ Another Derived class
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

// ✅ Usage
const dog = new Dog("Buddy", "Labrador");
dog.makeSound(); // Buddy barks.
dog.fetch(); // Buddy is fetching the ball.

const cat = new Cat("Whiskers");
cat.makeSound(); // Whiskers meows.

const generic = new Animal("Creature");
generic.makeSound(); // Creature makes a sound.

// -----------------------------
// ✅ Summary:
// -----------------------------
// - `class Child extends Parent {}` is used to inherit properties and methods.
// - Use `super()` in constructor to call the parent constructor.
// - You can override inherited methods to provide specific behavior.
// - Promotes code reuse and a cleaner class hierarchy.
