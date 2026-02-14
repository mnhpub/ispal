# Hash Map

Below is a simple implementation of a hash map in JavaScript using object literals.

```javascript
class HashMap {
    constructor() {
        this.map = {};
    }

    // Add a key-value pair to the map
    put(key, value) {
        this.map[key] = value;
    }

    // Get the value associated with the given key
    get(key) {
        return this.map[key];
    }

    // Check if the map contains the given key
    contains(key) {
        return key in this.map;
    }

    // Remove the key-value pair associated with the given key
    remove(key) {
        if (this.contains(key)) {
            delete this.map[key];
        }
    }

    // Get all keys in the map
    keys() {
        return Object.keys(this.map);
    }

    // Get all values in the map
    values() {
        return Object.values(this.map);
    }

    // Get all key-value pairs in the map
    entries() {
        return Object.entries(this.map);
    }

    // Get the size of the map
    size() {
        return Object.keys(this.map).length;
    }
}

// Example usage:
const myMap = new HashMap();
myMap.put("key1", "value1");
myMap.put("key2", "value2");
myMap.put("key3", "value3");

console.log("Value for key2:", myMap.get("key2"));
console.log("Map contains key3?", myMap.contains("key3"));

myMap.remove("key1");

console.log("All keys:", myMap.keys());
console.log("All values:", myMap.values());
console.log("All entries:", myMap.entries());
console.log("Map size:", myMap.size());
```

### Notes
