function addNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(addNumbers(10, 20)); // 30
console.log(addNumbers(5, 10, 15, 20)); // 50
console.log(addNumbers()); // 0

function joinStrings(separator: string, ...words: string[]): string {
  return words.join(separator);
}

console.log(joinStrings("-", "one", "two", "three")); // one-two-three
