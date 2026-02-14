# Knuth-Morris-Pratt (KMP)

The Knuth-Morris-Pratt (KMP) algorithm is used for pattern searching in strings. It efficiently searches for occurrences of a "pattern" string within a longer "text" string, without the need for backtracking.

```javascript
function kmp(text, pattern) {
    const lps = computeLPSArray(pattern);
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j; // Pattern found at index i - j
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // Pattern not found
}

function computeLPSArray(pattern) {
    const lps = [0];
    let len = 0; // Length of the previous longest prefix suffix

    for (let i = 1; i < pattern.length; ) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = kmp(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
```

### Notes
