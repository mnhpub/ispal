# Rabin-Karp

The Rabin-Karp algorithm is a string searching algorithm that uses hashing to find any one of a set of pattern strings in a text.

```javascript
const prime = 101; // A prime number for hashing

function rabinKarp(text, pattern) {
    const patternHash = hash(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;

    // Hash the first window of the text
    let textHash = hash(text.substring(0, patternLength));

    // Check if the first window matches the pattern hash
    if (textHash === patternHash && text.substring(0, patternLength) === pattern) {
        return 0; // Pattern found at index 0
    }

    // Iterate through the text
    for (let i = 1; i <= textLength - patternLength; i++) {
        // Recalculate the hash for the next window
        textHash = recalculateHash(text, textHash, i, patternLength);

        // Check if the current window matches the pattern hash
        if (textHash === patternHash && text.substring(i, i + patternLength) === pattern) {
            return i; // Pattern found at index i
        }
    }

    return -1; // Pattern not found
}

function hash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
}

function recalculateHash(text, oldHash, oldIndex, patternLength) {
    let newHash = oldHash - text.charCodeAt(oldIndex - 1);
    newHash = newHash / prime;
    newHash += text.charCodeAt(oldIndex + patternLength - 1) * Math.pow(prime, patternLength - 1);
    return newHash;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = rabinKarp(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
```

### Notes
