// -----------------------------
// 📘 Topic: Getters & Setters in TypeScript
// -----------------------------

/**
 * TypeScript provides `get` and `set` accessors to control how properties of a class are accessed or mutated.
 * This enables encapsulation, validation, computed properties, and more.
 */

class empSetGetloyeeSetGet {
  private _fullName: string = "";
  private _salary: number = 0;

  // ✅ Getter for fullName
  get fullName(): string {
    console.log("Getter called for fullName");
    return this._fullName;
  }

  // ✅ Setter for fullName
  set fullName(name: string) {
    console.log("Setter called for fullName");
    if (name.length >= 3) {
      this._fullName = name;
    } else {
      throw new Error("Name must be at least 3 characters long.");
    }
  }

  // ✅ Getter for salary
  get salary(): number {
    console.log("Getter called for salary");
    return this._salary;
  }

  // ✅ Setter for salary
  set salary(amount: number) {
    console.log("Setter called for salary");
    if (amount >= 10000) {
      this._salary = amount;
    } else {
      throw new Error("Salary must be at least 10000.");
    }
  }
}

// ✅ Using the class
const empSetGet = new empSetGetloyeeSetGet();

empSetGet.fullName = "John Doe"; // Setter is called
empSetGet.salary = 50000; // Setter is called

console.log(empSetGet.fullName); // Getter is called
console.log(empSetGet.salary); // Getter is called

// ❌ empSetGet._fullName = "Hack"; // Error: Property '_fullName' is private

// -----------------------------
// ✅ Summary:
// -----------------------------
// - Use `get` to define a getter method for a property.
// - Use `set` to define a setter method for a property.
// - Provides better control and validation when accessing/modifying class fields.
// - Helps encapsulate logic without changing external access syntax.
//
// Syntax Example:
//    get propName(): type { return this._propName; }
//    set propName(value: type) { this._propName = value; }
