# Hash Table

Below is a simple implementation of a hash table in JavaScript using an array of linked lists for collision resolution.

```javascript
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size = 11) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => new Node(null, null));
    }

    // Hash function to determine the index of a key in the buckets array
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Add a key-value pair to the hash table
    put(key, value) {
        const index = this.hash(key);
        let currentNode = this.buckets[index];

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(key, value);
    }

    // Get the value associated with the given key
    get(key) {
        const index = this.hash(key);
        let currentNode = this.buckets[index].next;

        while (currentNode !== null) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return undefined;
    }

    // Remove the key-value pair associated with the given key
    remove(key) {
        const index = this.hash(key);
        let prevNode = this.buckets[index];
        let currentNode = this.buckets[index].next;

        while (currentNode !== null) {
            if (currentNode.key === key) {
                prevNode.next = currentNode.next;
                return;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.put("key1", "value1");
myHashTable.put("key2", "value2");
myHashTable.put("key3", "value3");

console.log("Value for key2:", myHashTable.get("key2"));

myHashTable.remove("key1");

console.log("Value for key1 after removal:", myHashTable.get("key1"));
```

### Notes
