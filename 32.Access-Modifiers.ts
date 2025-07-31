// Access Modifiers work in TypeScript: public, private, and protected control visibility of class members.
class EmployeeClass {
  public name: string; // accessible anywhere
  private salary: number; // accessible only inside this class
  protected department: string; // accessible in this class & subclasses

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public showInfo(): void {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}

class Manager extends EmployeeClass {
  constructor(name: string, salary: number, department: string) {
    super(name, salary, department);
  }

  public showDepartment(): void {
    console.log(`${this.name} manages ${this.department}`); // OK
    // console.log(this.salary); // ❌ Error: 'salary' is private
  }
}

const emp = new EmployeeClass("Manoj", 50000, "Engineering");
emp.showInfo(); // ✅ public method
console.log(emp.name); // ✅ public
// console.log(emp.salary); // ❌ Error: 'salary' is private
// console.log(emp.department); // ❌ Error: 'department' is protected
