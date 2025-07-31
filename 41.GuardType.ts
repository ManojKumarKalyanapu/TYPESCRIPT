// Type Guards are runtime checks that let you narrow down the type of a variable within a conditional block.
// TypeScript knows a variable could be multiple types (called a union type), but doesn't know which one at a given time. Type guards help you tell the compiler: "Hey, inside this block, it's definitely this specific type." This gives you type-safe access to properties and methods.
// 1.typeof type guard
function print(value: string | number) {
  if (typeof value === "string") {
    console.log("Uppercased:", value.toUpperCase());
  } else {
    console.log("Fixed number:", value.toFixed(2));
  }
}

print("hello");
print(123.456);

// 2. instanceof type guard
class DogGuard {
  bark() {
    console.log("Woof!");
  }
}

class CatGuard {
  meow() {
    console.log("Meow!");
  }
}

function speak(pet: DogGuard | CatGuard) {
  if (pet instanceof DogGuard) {
    pet.bark();
  } else {
    pet.meow();
  }
}

speak(new DogGuard());
speak(new CatGuard());

// 3. in operator type guard
type BMWCar = { drive: () => void };
type Boat = { sail: () => void };

function move(vehicle: BMWCar | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

move({ drive: () => console.log("Driving...") });
move({ sail: () => console.log("Sailing...") });

// 4. Custom type guard (type predicate)
type Admin = { role: "admin"; accessLevel: number };
type UserName = { role: "UserName"; UserNamename: string };

function isAdminType(person: Admin | UserName): person is Admin {
  return person.role === "admin";
}

function handlePerson(p: Admin | UserName) {
  if (isAdminType(p)) {
    console.log("Admin access:", p.accessLevel);
  } else {
    console.log("UserName:", p.UserNamename);
  }
}

handlePerson({ role: "admin", accessLevel: 5 });
handlePerson({ role: "UserName", UserNamename: "john_doe" });
