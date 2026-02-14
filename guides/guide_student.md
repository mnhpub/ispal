# Student Guide: Arrays, Lists, and Data Structures

**Looney Tunes + Animaniacs Edition**

> This student-friendly guide mirrors the instructor version but removes all solutions. It provides structured hints, patterns, and thinking prompts designed to help you build strong muscle memory.

---

## Module 1 – Fundamentals of Arrays / Lists

### Key Ideas
- Arrays/lists store ordered values
- Indexing starts at zero
- Access values with `list[i]`

### Practice Hints
For "every second item," think of index patterns: `0, 2, 4...`

Reverse order often uses negative indexing (Python) or reverse loops.

Rewriting loops usually involves changing only one part: condition, increment, or starting index.

---

## Module 2 – Iteration Patterns

### Key Ideas
- Use value-based loops when index doesn't matter
- Use index loops when you need positions

### Practice Hints
- Counting items = loop + condition + counter
- Building new lists = start empty, append results

---

## Module 3 – Implementing map, filter, reduce

### Key Ideas
- `map` transforms
- `filter` selects
- `reduce` accumulates

### Practice Hints
Ask yourself: What is changing in each iteration?

| Operation | Output Length | Purpose |
|-----------|---------------|---------|
| `map` | Same as input | Transform each item |
| `filter` | Less than or equal to input | Select items meeting condition |
| `reduce` | Single value | Accumulate into one result |

---

## Module 4 – Mutation vs Non-Mutation

### Key Ideas
- Mutation changes original data
- Non-mutation creates new data

### Practice Hints
Non-mutating steps almost always begin with making a copy.

Identify which part of the structure must be preserved.

---

## Module 5 – Searching, Sorting, Slicing

### Key Ideas
- Searching tests a condition for each item
- Sorting requires choosing a comparison rule
- Slicing extracts a subset of items

### Practice Hints
Say your rule aloud first: it helps clarify logic.

Sorting by a field usually requires comparing two items on that field.

---

## Module 6 – Nested Data Structures

### Key Ideas
- Lists and dictionaries can nest indefinitely
- Accessing requires chaining

### Practice Hints
Break deep access into intermediate variables.

Sketch the structure on paper if confused.

---

## Module 7 – Spread, Unpacking, Non-Mutating Updates

### Key Ideas
- Spread/unpacking quickly copies structures
- Useful for safe updates without mutation

### Practice Hints
When updating nested data, copy the outer level first, then inner.

---

## Module 8 – Searching Utilities

### Key Ideas
- `find` returns the first matching item
- `findIndex` returns the first matching position

### Practice Hints
Determine your condition before writing loops.

If no match exists, think about fallback behavior.

---

## Module 9 – Flattening

### Key Ideas
- Flattening means reducing layers of nested lists
- Often solved via recursion

### Practice Hints
Ask yourself:
- "If this is a list, what do I do?"
- "If this is a value, what do I do?"

---

## Module 10 – Sets, Dicts, Maps

### Key Ideas
- Sets remove duplicates
- Dicts/Maps associate keys with values

### Practice Hints
- For deduplication, focus on whether order matters
- For mapping, identify the key and value first

---

## Module 11 – Performance & Complexity

### Key Ideas
- Some operations scale poorly
- Repeated scanning often indicates inefficiency

### Practice Hints
- Use sets for fast membership checks
- Use dictionaries/maps for repeated lookups

---

## Module 12 – Nested Data Access (Safely)

### Key Ideas
- Python uses brackets, not dots, for dict access
- Missing keys can break your program

### Practice Hints
- Use `.get(key, default)` if not sure a key exists
- Check levels one at a time when navigating deeply

---

## Module 13 – Async & Lazy Iteration

### Key Ideas
- Generators produce values one at a time
- Async generators add pauses

### Practice Hints
If memory matters, avoid building full lists.

Think: Do I need everything now, or piece by piece?

---

## Capstone Project

### Objective
Transform, flatten, filter, sort, and index the Looney Tunes + Animaniacs dataset.

### Hints Only (No Solutions)

| Task | Hint |
|------|------|
| Uppercasing | Usually means transforming each string in place |
| Flattening | Requires looping characters, then episodes |
| Filtering by likes | Uses a threshold |
| Sorting | Requires deciding which field to sort by |
| Indexing | Usually means building a dictionary keyed by name |

---

**END OF STUDENT GUIDE**
