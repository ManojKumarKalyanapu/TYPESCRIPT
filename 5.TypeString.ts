// TypeScript String Type Examples

// 1. Basic string declaration
let firstname: string = "Manoj";
let lastname: string = "Kumar";
console.log("First Name:", firstname);
console.log("Last Name:", lastname);

// 2. Template literals (backticks)
let fullName: string = `${firstname} ${lastname}`;
console.log("Full Name:", fullName);

// 3. Multi-line string using template literals
let MultiMessage: string = `
Hello, ${fullName}!
Welcome to TypeScript string tutorial.
`;
console.log("Multi-line message:", MultiMessage);

// 4. String length
console.log("Length of fullName:", fullName.length);

// 5. Accessing characters
console.log("First character:", fullName[0]);
console.log("Last character:", fullName[fullName.length - 1]);

// 6. String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("Starts with 'Manoj':", fullName.startsWith("Manoj"));
console.log("Ends with 'Kumar':", fullName.endsWith("Kumar"));
console.log("Includes 'oj':", fullName.includes("oj"));

// 7. Substring and slicing
console.log("Slice(0, 5):", fullName.slice(0, 5)); // "Manoj"
console.log("Substring(6):", fullName.substring(6)); // "Kumar"

// 8. String concatenation
let concatName: string = firstname.concat(" ", lastname);
console.log("Concatenated:", concatName);

// 9. Trimming whitespace
let rawInput: string = "   Hello World   ";
console.log("Trimmed:", rawInput.trim());

// 10. Splitting and joining
let csv: string = "apple,banana,grape";
let fruitString: string[] = csv.split(",");
console.log("Fruits array:", fruitString);
console.log("Joined again:", fruitString.join(" | "));

// 11. Replacing
let replaced = fullName.replace("Kumar", "Kalyanapu");
console.log("Replaced Last Name:", replaced);
