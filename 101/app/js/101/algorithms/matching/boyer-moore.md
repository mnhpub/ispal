# Boyer Moore

The Boyer-Moore algorithm is used for pattern searching in strings. It's a powerful algorithm that can offer significant performance improvements over naive string searching algorithms like brute force. Implementing it in JavaScript can be quite complex.

```javascript
function boyerMoore(text, pattern) {
    const last = lastOccurrence(pattern);
    let i = pattern.length - 1;
    let j = pattern.length - 1;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // Match found
            }
            i--;
            j--;
        } else {
            i += pattern.length - Math.min(j, 1 + last[text[i]]);
            j = pattern.length - 1;
        }
    }

    return -1; // No match found
}

function lastOccurrence(pattern) {
    const last = {};
    for (let i = 0; i < pattern.length; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

// Example usage:
const text = "this is a test string";
const pattern = "test";

const index = boyerMoore(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
```

### Notes