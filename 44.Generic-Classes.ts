// ----------------------------------------------
// 📘 Topic: TypeScript Generic Classes
// ----------------------------------------------

/**
 * ✅ What is a Generic Class?
 * A generic class allows you to create reusable class components that work with different types
 * while maintaining type safety.
 *
 * Syntax: class ClassName<T> { ... }
 */

// ----------------------------------
// 🔹 Example 1: Basic Generic Class
// ----------------------------------

class Container<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Usage with number
const numberContainer = new Container<number>();
numberContainer.add(10);
numberContainer.add(20);

console.log("Number Container:", numberContainer.getAll()); // [10, 20]

// Usage with string
const stringContainer = new Container<string>();
stringContainer.add("hello");
stringContainer.add("world");

console.log("String Container:", stringContainer.getAll()); // ["hello", "world"]

// ----------------------------------
// 🔹 Example 2: Generic Class with Constraints
// ----------------------------------

interface Identifiable {
  id: number;
}

class EntityStore<T extends Identifiable> {
  private store: T[] = [];

  addEntity(entity: T): void {
    this.store.push(entity);
  }

  getById(id: number): T | undefined {
    return this.store.find((item) => item.id === id);
  }
}

const userStore = new EntityStore<{ id: number; name: string }>();
userStore.addEntity({ id: 1, name: "Alice" });
userStore.addEntity({ id: 2, name: "Bob" });

console.log("User with ID 2:", userStore.getById(2)); // { id: 2, name: 'Bob' }

// ----------------------------------
// 🔹 Example 3: Generic Class with Multiple Type Parameters
// ----------------------------------

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const kv1 = new KeyValuePair<number, string>(1, "One");
const kv2 = new KeyValuePair<string, boolean>("isAdmin", true);

console.log(kv1); // KeyValuePair { key: 1, value: 'One' }
console.log(kv2); // KeyValuePair { key: 'isAdmin', value: true }

// ----------------------------------
// ✅ Benefits of Generic Classes:
// - Reusability across different types
// - Type safety without sacrificing flexibility
// - Enhanced IntelliSense/autocomplete support
