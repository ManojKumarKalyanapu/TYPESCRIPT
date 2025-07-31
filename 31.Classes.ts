/*
class is the blueprint.
constructor() initializes properties.
greet() is a method attached to each instance.
You use new ClassName() to create an object.
*/

class PersonClass {
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet(): void {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an object (instance)
const PersonClass1 = new PersonClass("Manoj", 25);
PersonClass1.greet(); // Output: Hi, my name is Manoj and I am 25 years old.

// Default Values
class StudentClass {
  name: string = "Unknown";
  marks: number = 0;

  display(): void {
    console.log(`${this.name} scored ${this.marks} marks.`);
  }
}

const s1 = new StudentClass();
s1.display(); // Unknown scored 0 marks.
