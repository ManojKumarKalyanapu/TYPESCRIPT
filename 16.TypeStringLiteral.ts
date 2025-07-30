// TypeScript: String Literal Types Example

// 1. Basic String Literal Type
let directionString: "up" | "down" | "left" | "right";

directionString = "up"; // ✅ Allowed
directionString = "left"; // ✅ Allowed
// directionString = "backward"; // ❌ Error: not assignable

console.log("directionString:", directionString);

// 2. Using String Literal Types in Functions
function move(dir: "up" | "down" | "left" | "right") {
  console.log(`Moving ${dir}`);
}

move("down"); // ✅ Valid
// move("back");       // ❌ Invalid

// 3. String Literal Type with Type Alias
type Role = "admin" | "user" | "guest";

function accessPage(role: Role) {
  if (role === "admin") {
    console.log("Welcome Admin! Full access granted.");
  } else if (role === "user") {
    console.log("Welcome User! Limited access.");
  } else {
    console.log("Welcome Guest! View-only access.");
  }
}

accessPage("user"); // ✅
// accessPage("owner"); // ❌ Error

// 4. String Literal Types in Objects
type Theme = "light" | "dark";

interface Settings {
  theme: Theme;
  fontSize: number;
}

const userSettings: Settings = {
  theme: "dark", // ✅ Must match Theme type
  fontSize: 14,
};

console.log("Settings:", userSettings);
