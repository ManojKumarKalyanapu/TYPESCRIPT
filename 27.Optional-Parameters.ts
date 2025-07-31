function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Manoj")); // Hello, Manoj!
console.log(greet("Manoj", "Good morning")); // Good morning, Manoj!
