# Instructor Guide: Mastering Arrays, Lists, and Data Structures in JavaScript & Python

**Looney Tunes + Animaniacs Edition**

---

## Table of Contents

1. [Module 1 – Fundamentals of Arrays / Lists](#module-1--fundamentals-of-arrays--lists)
2. [Module 2 – Iteration Patterns](#module-2--iteration-patterns)
3. [Module 3 – Implementing map, filter, reduce](#module-3--implementing-map-filter-reduce)
4. [Module 4 – Mutation vs Non-Mutation](#module-4--mutation-vs-non-mutation)
5. [Module 5 – Searching, Sorting, Slicing](#module-5--searching-sorting-slicing)
6. [Module 6 – Nested Data Structures](#module-6--nested-data-structures)
7. [Module 7 – Spread, Unpacking, Non-Mutating Updates](#module-7--spread-unpacking-non-mutating-updates)
8. [Module 8 – Searching Utilities](#module-8--searching-utilities)
9. [Module 9 – Flattening Structures](#module-9--flattening-structures)
10. [Module 10 – Sets, Dicts, Maps](#module-10--sets-dicts-maps)
11. [Module 11 – Performance & Complexity](#module-11--performance--complexity)
12. [Module 12 – Nested Data Access](#module-12--nested-data-access)
13. [Module 13 – Async & Lazy Iteration](#module-13--async--lazy-iteration)
14. [Capstone Project](#capstone-project)

---

## Unified Dataset

You'll use this dataset throughout all modules. It contains information about Looney Tunes and Animaniacs characters.

### JavaScript Version

```javascript
const characters = [
  {
    name: "Bugs Bunny",
    species: "Rabbit",
    chaos: 4,
    catchphrase: "Eh, what's up, doc?",
    friends: ["Daffy Duck", "Yakko"],
    episodes: [
      { title: "Rabbit Season", likes: 120 },
      { title: "Hare Tonic", likes: 95 }
    ]
  },
  {
    name: "Daffy Duck",
    species: "Duck",
    chaos: 7,
    catchphrase: "You're despicable!",
    friends: ["Bugs Bunny"],
    episodes: [
      { title: "Duck Amuck", likes: 140 }
    ]
  },
  {
    name: "Yakko",
    species: "Animaniac",
    chaos: 10,
    catchphrase: "Helloooo, Nurse!",
    friends: ["Wakko", "Dot", "Bugs Bunny"],
    episodes: [
      { title: "De-Zanitized", likes: 80 },
      { title: "Space Probed", likes: 70 }
    ]
  }
];
```

### Python Version

```python
characters = [
    {
        "name": "Bugs Bunny",
        "species": "Rabbit",
        "chaos": 4,
        "catchphrase": "Eh, what's up, doc?",
        "friends": ["Daffy Duck", "Yakko"],
        "episodes": [
            {"title": "Rabbit Season", "likes": 120},
            {"title": "Hare Tonic", "likes": 95},
        ],
    },
    {
        "name": "Daffy Duck",
        "species": "Duck",
        "chaos": 7,
        "catchphrase": "You're despicable!",
        "friends": ["Bugs Bunny"],
        "episodes": [
            {"title": "Duck Amuck", "likes": 140},
        ],
    },
    {
        "name": "Yakko",
        "species": "Animaniac",
        "chaos": 10,
        "catchphrase": "Helloooo, Nurse!",
        "friends": ["Wakko", "Dot", "Bugs Bunny"],
        "episodes": [
            {"title": "De-Zanitized", "likes": 80},
            {"title": "Space Probed", "likes": 70},
        ],
    },
]
```

---

## Module 1 – Fundamentals of Arrays / Lists

### Learning Objectives

By the end of this module, you will understand:
- What arrays/lists are and how they're structured
- How indexing works (zero-based indexing)
- How to access elements in a list
- How to iterate through lists using different methods
- The difference between primitive values and reference types

### Concept Notes

Arrays and lists are **ordered collections** that store multiple values. Think of them as numbered boxes where each box holds something specific.

#### Key Facts About Arrays/Lists

| Concept | Description |
|---------|-------------|
| **Zero-indexed** | The first item is at index 0, not 1 |
| **Ordered** | Items stay in the order you put them |
| **Mutable** | You can change, add, or remove items |
| **Mixed types** | Can contain any type of data |
| **Length property** | Use `.length` (JS) or `len()` (Python) to get size |

#### How Indexing Works

```
Index:    0          1          2
         ↓           ↓           ↓
Items: [Bugs]    [Daffy]     [Yakko]
         ↑                    ↑
    First item            Last item
```

To get the **last item** without knowing the length:
- JavaScript: `characters[characters.length - 1]`
- Python: `characters[-1]`

#### Accessing Elements

**JavaScript:**
```javascript
// Get the number of characters
console.log(characters.length);

// Get the first character's name
console.log(characters[0].name);

// Get the last character's name
console.log(characters[characters.length - 1].name);
```

**Python:**
```python
# Get the number of characters
print(len(characters))

# Get the first character's name
print(characters[0]["name"])

# Get the last character's name
print(characters[-1]["name"])
```

#### Iterating Through Lists

**Using a for loop (JavaScript):**
```javascript
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i].name);
}
```

**Using a for loop (Python):**
```python
for i in range(len(characters)):
    print(characters[i]["name"])
```

**Using forEach/for-each (JavaScript):**
```javascript
characters.forEach(c => console.log(c.catchphrase));
```

**Using for-each (Python):**
```python
for c in characters:
    print(c["catchphrase"])
```

### Exercises

#### Exercise 1.1: Print Every Second Character's Name

**Hint:** You need to skip every other character. Think about which indices you want: 0, 2, 4... or 1, 3, 5...?

**Think about:** How would you count "every second" item starting from index 0?

#### Exercise 1.2: Print All Character Names in Reverse

**Hint:** There are two approaches:
1. Start from the last index and go backwards
2. Print normally, then reverse the result

**Think about:** What's the index of the last item? How do you decrease it each iteration?

#### Exercise 1.3: Rewrite a for-loop as a while-loop

**Hint:** A for-loop has three parts: initialization, condition, and increment. A while-loop combines the condition and increment differently.

**Before (for-loop):**
```javascript
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i].name);
}
```

**Think about:** What would the while-loop version look like?

### Challenge 1.4: Print Every Third Episode Title Across All Characters

**Hint:** You need to look at episodes within each character. This requires **nested loops** (a loop inside another loop).

**Think about:**
1. First loop through characters
2. Second loop through each character's episodes
3. Track which episode number you're on (0, 3, 6...)

---

## Module 2 – Iteration Patterns

### Learning Objectives

By the end of this module, you will understand:
- When to use index-based vs value-only iteration
- How to count items that meet a condition
- How to build new lists by accumulating results
- How to iterate backwards through a list

### Concept Notes

Iteration is the process of going through each item in a collection. Different situations call for different iteration patterns.

#### Two Main Iteration Patterns

| Pattern | When to Use | Example |
|---------|-------------|---------|
| **Index-based** | When you need the position | `for (let i = 0; i < arr.length; i++)` |
| **Value-based** | When you only need the values | `for (const item of arr)` |

#### Counting with Conditions

**JavaScript:**
```javascript
let count = 0;
for (let i = 0; i < characters.length; i++) {
  if (characters[i].chaos > 5) {
    count++;
  }
}
console.log(count);
```

**Python:**
```python
count = 0
for c in characters:
    if c["chaos"] > 5:
        count += 1
print(count)
```

#### Accumulating Values

**JavaScript:**
```javascript
characters.forEach(c => console.log(c.friends.length));
```

**Python:**
```python
for c in characters:
    print(len(c["friends"]))
```

### Exercises

#### Exercise 2.1: Count Total Friends Across All Characters

**Hint:** You need to:
1. Loop through each character
2. Get their friends list
3. Add the length to a running total

**Think about:** What's your starting count? What happens in each iteration?

#### Exercise 2.2: Build a List of All Catchphrases

**Hint:** Create an empty list, then add each catchphrase as you iterate.

**Think about:** What method do you use to add items to a list? (JS: `push()`, Python: `append()`)

#### Exercise 2.3: Iterate Backward Through the Characters List

**Hint:** Start from the last index and decrease until you reach 0.

**Think about:** What's the starting index? What's your condition? How do you change the index each time?

### Challenge 2.4: Check if the List is Sorted by Chaos Level

**Hint:** Compare each item with the next one. If any item is greater than the next, it's not sorted.

**Think about:** Do you need to check every pair? What's a "short-circuit" (early exit) condition?

---

## Module 3 – Implementing map, filter, reduce

### Learning Objectives

By the end of this module, you will understand:
- What `map`, `filter`, and `reduce` do
- How to implement these functions from scratch
- When to use each transformation
- How to pass functions as arguments

### Concept Notes

`map`, `filter`, and `reduce` are three fundamental operations for working with lists. They're the building blocks of data transformation.

#### Overview of the Three Operations

| Operation | Purpose | Output | Example |
|-----------|---------|--------|---------|
| **map** | Transform each item | List of same length | Get all names |
| **filter** | Keep only matching items | List of ≤ same length | Get high chaos characters |
| **reduce** | Combine all items into one | Single value | Sum of all likes |

#### Understanding the Pattern

All three follow the same pattern:
1. Create an empty result collection
2. Loop through the input
3. Apply your function to each item
4. Add the result to your collection (or accumulator)

#### Implementing Your Own map

**JavaScript:**
```javascript
function myMap(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));  // Call function on item, add result
  }
  return res;
}

// Usage: Get all character names
const names = myMap(characters, c => c.name);
```

**Python:**
```python
def my_map(lst, fn):
    res = []
    for i, x in enumerate(lst):
        res.append(fn(x, i))  # Call function on item, add result
    return res

# Usage: Get all character names
names = my_map(characters, lambda c: c["name"])
```

#### Implementing Your Own filter

**JavaScript:**
```javascript
function myFilter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {  // Only add if function returns true
      res.push(arr[i]);
    }
  }
  return res;
}

// Usage: Get characters with chaos > 5
const chaotic = myFilter(characters, c => c.chaos > 5);
```

**Python:**
```python
def my_filter(lst, fn):
    res = []
    for i, x in enumerate(lst):
        if fn(x, i):  # Only add if function returns true
            res.append(x)
    return res

# Usage: Get characters with chaos > 5
chaotic = my_filter(characters, lambda c: c["chaos"] > 5)
```

#### Implementing Your Own reduce

**JavaScript:**
```javascript
function myReduce(arr, fn, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i], i);  // Update accumulator with function result
  }
  return acc;
}

// Usage: Sum all chaos levels
const totalChaos = myReduce(characters, (sum, c) => sum + c.chaos, 0);
```

**Python:**
```python
def my_reduce(lst, fn, init):
    acc = init
    for i, x in enumerate(lst):
        acc = fn(acc, x, i)  # Update accumulator with function result
    return acc

# Usage: Sum all chaos levels
total_chaos = my_reduce(characters, lambda sum, c: sum + c["chaos"], 0)
```

### Exercises

#### Exercise 3.1: Implement reject

**Hint:** `reject` is the opposite of `filter`. It keeps items that **don't** meet the condition.

**Think about:** What's the opposite of `if (condition)`?

#### Exercise 3.2: Implement find and findIndex

**Hint:** 
- `find` returns the **first item** that matches (not all items)
- `findIndex` returns the **index** of the first matching item

**Think about:** Do you need to collect all matches, or can you return early?

#### Exercise 3.3: Implement every and some

**Hint:**
- `every` returns true if **all** items match
- `some` returns true if **at least one** item matches

**Think about:** When can you stop early?

### Challenge 3.4: Implement flatMap Using Only map and reduce

**Hint:** `flatMap` first maps each item, then flattens the result (turns nested lists into one list).

**Think about:** How would you use `map` to transform, then `reduce` to flatten?

---

## Module 4 – Mutation vs Non-Mutation

### Learning Objectives

By the end of this module, you will understand:
- What mutation means and why it matters
- The difference between mutating and non-mutating operations
- How reference types behave differently from primitives
- When to use each approach

### Concept Notes

**Mutation** means changing existing data. **Non-mutation** (also called "immutable") means creating new data instead of changing the old.

#### Why This Matters

```javascript
// Mutation problem example
const bugs = characters[0];
bugs.friends.push("Elmer Fudd");
console.log(characters[0].friends); // Changed!
```

If another part of your code depends on `characters`, it might break when you mutate it unexpectedly.

#### The Copy Pattern

**JavaScript:**
```javascript
// Make a copy first
const clone = { ...bugs };

// Modify the copy, not the original
clone.friends.push("Elmer Fudd");
```

**Python:**
```python
# Make a copy first
clone = {**bugs}

# Modify the copy, not the original
clone["friends"].append("Elmer Fudd")
```

### Exercises

#### Exercise 4.1: Add an Episode to Daffy Without Mutating

**Hint:** You need to create a new character object with the new episode included.

**Think about:** How do you copy an object and add new data at the same time?

#### Exercise 4.2: Remove Yakko's Last Friend Using pop

**Hint:** 
- JavaScript: `pop()` removes from the end of an array
- Python: `pop()` removes from the end of a list

**Think about:** How do you do this without changing the original?

#### Exercise 4.3: Show How Deep Mutations Propagate

**Hint:** Create a test that shows what happens when you mutate nested data.

**Think about:** What happens if two variables point to the same object?

### Challenge 4.4: Update an Episode Title Without Mutating Siblings

**Hint:** You need to copy the character, copy their episodes array, update that episode, and assign it back.

**Think about:** How many levels of copying do you need?

---

## Module 5 – Searching, Sorting, Slicing

### Learning Objectives

By the end of this module, you will understand:
- How to search for items in a list
- How to sort lists based on different criteria
- How to extract subsets using slicing
- How to combine strings from list elements

### Concept Notes

These are essential operations for working with collections of data.

#### Sorting

**JavaScript (sort by chaos descending):**
```javascript
const sortedByChaos = [...characters].sort((a, b) => b.chaos - a.chaos);
```

**Python (sort by chaos descending):**
```python
sorted_by_chaos = sorted(characters, key=lambda c: c["chaos"], reverse=True)
```

#### Slicing

**JavaScript:**
```javascript
// Get first two characters
const firstTwo = characters.slice(0, 2);
```

**Python:**
```python
# Get first two characters
first_two = characters[:2]
```

#### Joining

**JavaScript:**
```javascript
// Get all names as a comma-separated string
const namesCSV = characters.map(c => c.name).join(",");
```

**Python:**
```python
# Get all names as a comma-separated string
names_csv = ",".join(c["name"] for c in characters)
```

### Exercises

#### Exercise 5.1: Extract a Sliding Window of Two Characters

**Hint:** A sliding window means overlapping pairs: [0,1], [1,2], [2,3], etc.

**Think about:** How many windows will you get for a list of 3 items?

#### Exercise 5.2: Sort by Total Episode Likes

**Hint:** You need to calculate total likes for each character first.

**Think about:** What's the sorting key function?

#### Exercise 5.3: Join All Catchphrases

**Hint:** Use the join operation after extracting catchphrases.

**Think about:** What separator would be fun?

### Challenge 5.4: Return the Top Three Characters by Chaos, Names Sorted Alphabetically

**Hint:** This requires multiple steps: sort by chaos, take top three, then sort those by name.

**Think about:** In what order do you apply these operations?

---

## Module 6 – Nested Data Structures

### Learning Objectives

By the end of this module, you will understand:
- How lists and dictionaries can be combined
- How to structure complex data
- How to access deeply nested values
- How to update nested structures

### Concept Notes

Lists and dictionaries can be nested inside each other to create complex data structures.

#### Example Nested Structure

**JavaScript:**
```javascript
const looneyVerse = {
  characters,  // shorthand for characters: characters
  teams: {
    toonSquad: ["Bugs Bunny", "Daffy Duck"],
    warners: ["Yakko", "Wakko", "Dot"]
  }
};
```

**Python:**
```python
looney_verse = {
    "characters": characters,
    "teams": {
        "toonSquad": ["Bugs Bunny", "Daffy Duck"],
        "warners": ["Yakko", "Wakko", "Dot"]
    }
}
```

#### Accessing Nested Data

**JavaScript:**
```javascript
// Get the warners team
const warners = looneyVerse.teams.warners;
```

**Python:**
```python
# Get the warners team
warners = looney_verse["teams"]["warners"]
```

### Exercises

#### Exercise 6.1: Add a New Team Without Mutating

**Hint:** Copy the outer structure, then add the new team to the copy.

**Think about:** How deep does the copying need to go?

#### Exercise 6.2: Update the Warners Team

**Hint:** Update a specific team without changing others.

**Think about:** What if you want to add a new Warner sibling?

#### Exercise 6.3: Merge Configuration Dictionaries

**Hint:** Python has dictionary unpacking with `**`.

**Think about:** How do you combine two dictionaries?

### Challenge 6.4: Recursively Uppercase All String Values

**Hint:** You need to check if a value is a string or a dictionary, and handle each case differently.

**Think about:** What's the base case? What's the recursive case?

---

## Module 7 – Spread, Unpacking, Non-Mutating Updates

### Learning Objectives

By the end of this module, you will understand:
- What the spread operator does
- How to destructure/unpack data
- How to update data without mutation
- Modern idioms for data manipulation

### Concept Notes

Spread and unpacking are powerful ways to work with data without mutation.

#### Adding Items to Lists

**JavaScript:**
```javascript
// Add Dot to characters
const newChars = [...characters, { name: "Dot", species: "Animaniac" }];
```

**Python:**
```python
# Add Dot to characters
new_chars = [*characters, {"name": "Dot", "species": "Animaniac"}]
```

#### Destructuring/Unpacking

**JavaScript:**
```javascript
// Extract fields from first character
const { name, episodes } = characters[0];
```

**Python:**
```python
# Extract fields from first character
name, episodes = characters[0]["name"], characters[0]["episodes"]
```

### Exercises

#### Exercise 7.1: Add a Friend to Yakko Without Mutating

**Hint:** Copy Yakko, add the friend to their friends list, then copy the characters array with the updated Yakko.

**Think about:** How many levels need copying?

#### Exercise 7.2: Extract Fields via Destructuring

**Hint:** Pull out specific fields from a character.

**Think about:** What fields would be useful to extract?

#### Exercise 7.3: Clone and Modify Characters

**Hint:** Make a complete copy, then make your changes.

**Think about:** What's the difference between shallow and deep copies?

### Challenge 7.4: Implement a Reducer-Style State Update

**Hint:** Create a function that takes the current state and an update action, returning the new state.

**Think about:** What would a reducer look like for adding a character?

---

## Module 8 – Searching Utilities

### Learning Objectives

By the end of this module, you will understand:
- How to find items in a list
- How to find the index of items
- How binary search works
- When to use which search method

### Concept Notes

Searching is about finding specific items or positions in a list.

#### Finding Items

**JavaScript:**
```javascript
// Find first character with chaos >= 10
const veryChaotic = characters.find(c => c.chaos >= 10);
```

**Python:**
```python
# Find first character with chaos >= 10
very_chaotic = next((c for c in characters if c["chaos"] >= 10), None)
```

#### Finding Indices

**JavaScript:**
```javascript
// Find index of Daffy Duck
const daffyIndex = characters.findIndex(c => c.name === "Daffy Duck");
```

**Python:**
```python
def find_index(lst, predicate):
    for i, v in enumerate(lst):
        if predicate(v):
            return i
    return -1

daffy_index = find_index(characters, lambda c: c["name"] == "Daffy Duck")
```

### Exercises

#### Exercise 8.1: Implement findLastIndex

**Hint:** Similar to findIndex, but you need to check the entire list and return the last matching index.

**Think about:** When should you update the result?

#### Exercise 8.2: Implement Binary Search for Sorted Chaos Values

**Hint:** Binary search only works on sorted lists. It repeatedly divides the search range in half.

**Think about:** What's the base case? How do you decide which half to search?

### Challenge 8.3: Find the First Character with Any Episode Having Likes > 100

**Hint:** This requires nested searching - first through characters, then through episodes.

**Think about:** Can you use find with a nested condition?

---

## Module 9 – Flattening Structures

### Learning Objectives

By the end of this module, you will understand:
- What flattening means
- How to flatten nested lists
- When to use recursion
- How to preserve relationships during flattening

### Concept Notes

Flattening means taking nested lists and turning them into a single flat list.

#### Flattening Algorithm

**JavaScript:**
```javascript
function flatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(
      Array.isArray(val) ? flatten(val) : val
    ),
    []
  );
}
```

**Python:**
```python
def flatten(lst):
    res = []
    for x in lst:
        if isinstance(x, list):
            res.extend(flatten(x))
        else:
            res.append(x)
    return res
```

### Exercises

#### Exercise 9.1: Flatten a 2D List of Episodes

**Hint:** You have episodes as arrays within each character.

**Think about:** What's the structure of the nested list?

#### Exercise 9.2: Flatten Arbitrary Nesting

**Hint:** Handle any level of nesting using recursion.

**Think about:** How do you know if something needs flattening?

### Challenge 9.3: Normalize Episodes into a Single Flat List Including Character Name

**Hint:** Each episode should know which character it belongs to.

**Think about:** What data structure would hold character name plus episode info?

---

## Module 10 – Sets, Dicts, Maps

### Learning Objectives

By the end of this module, you will understand:
- What sets are and when to use them
- How dictionaries/maps work
- How to use these for efficient lookups
- How to build graph structures

### Concept Notes

Sets, dictionaries, and maps are essential data structures for specific use cases.

#### Sets (Remove Duplicates)

**JavaScript:**
```javascript
// Get all unique friends
const allFriends = new Set(characters.flatMap(c => c.friends));
```

**Python:**
```python
# Get all unique friends
all_friends = set(name for c in characters for name in c["friends"])
```

#### Dictionaries/Maps (Key-Value Pairs)

**JavaScript:**
```javascript
// Map character names to species
const speciesMap = new Map(characters.map(c => [c.name, c.species]));
```

**Python:**
```python
# Map character names to species
species_map = {c["name"]: c["species"] for c in characters}
```

### Exercises

#### Exercise 10.1: Deduplicate All Friends

**Hint:** Use a set to automatically remove duplicates.

**Think about:** Does order matter?

#### Exercise 10.2: Count Species Frequency

**Hint:** Build a dictionary where keys are species and values are counts.

**Think about:** How do you increment a count in a dictionary?

#### Exercise 10.3: Convert Name/Species Pairs into a Map or Dict

**Hint:** Use dictionary/map comprehension or constructor.

**Think about:** What's the key? What's the value?

### Challenge 10.4: Build an Adjacency List Graph of Character Friendships

**Hint:** An adjacency list maps each character to their friends.

**Think about:** What data structure represents a graph?

---

## Module 11 – Performance & Complexity

### Learning Objectives

By the end of this module, you will understand:
- What algorithmic complexity means
- How to analyze performance
- When to use sets vs lists for lookups
- How to optimize data pipelines

### Concept Notes

Understanding performance helps you write efficient code.

#### Complexity Basics

| Operation | List/Array | Set/Dict |
|-----------|------------|----------|
| Lookup by value | O(n) | O(1) |
| Lookup by index | O(1) | N/A |
| Insertion | O(1)* | O(1) |

*Amortized for lists

#### Building Summary Statistics

**JavaScript:**
```javascript
const likeCounts = characters.reduce((acc, c) => {
  acc[c.name] = c.episodes.reduce((s, e) => s + e.likes, 0);
  return acc;
}, {});
```

**Python:**
```python
like_counts = {
    c["name"]: sum(e["likes"] for e in c["episodes"])
    for c in characters
}
```

### Exercises

#### Exercise 11.1: Convert O(n²) Episode Name Search to O(n)

**Hint:** If you search episodes by name repeatedly, build a lookup table first.

**Think about:** How many times do you search vs how many items you index?

#### Exercise 11.2: Measure Timing Differences

**Hint:** Compare loop-based vs map-based approaches with timing.

**Think about:** Does the size of data affect which is faster?

### Challenge 11.3: Optimize a Pipeline

**Hint:** Extract names, filter by chaos, sort by likes - but in the most efficient order.

**Think about:** Does order matter for performance?

---

## Module 12 – Nested Data Access

### Learning Objectives

By the end of this module, you will understand:
- How to access nested data safely
- The difference between Python and JavaScript syntax
- How to handle missing keys
- Recursive traversal techniques

### Concept Notes

Nested data requires careful access patterns to avoid errors.

#### Syntax Differences

**JavaScript (both dot and bracket notation):**
```javascript
const street = obj.address.street;
const name = obj.friends[0];
```

**Python (bracket notation only):**
```python
street = person["address"]["street"]
name = person["friends"][0]
```

#### Safe Access

**Python:**
```python
# Use .get() with a default value
email = person.get("email", "unknown@example.com")
```

**JavaScript:**
```javascript
// Use optional chaining (?.)
const street = obj.address?.street;
```

### Exercises

#### Exercise 12.1: Safely Access Nested Keys

**Hint:** Check for existence at each level or use safe access operators.

**Think about:** What happens if a key is missing?

#### Exercise 12.2: Extract All Episode Likes per Character

**Hint:** Navigate through characters → episodes → likes.

**Think about:** What's the nested structure?

#### Exercise 12.3: Handle Missing Keys with Defaults

**Hint:** Use get() or default values.

**Think about:** What's a reasonable default for different data types?

### Challenge 12.4: Recursively Print All Key-Value Pairs

**Hint:** Traverse dictionaries recursively, handling nested dictionaries.

**Think about:** What's the base case? What's the recursive case?

---

## Module 13 – Async & Lazy Iteration

### Learning Objectives

By the end of this module, you will understand:
- What generators are and why they're useful
- How async iteration works
- When to use lazy evaluation
- How to process data without loading everything

### Concept Notes

Generators and async iteration allow you to process data piece by piece, which is memory-efficient for large datasets.

#### Generators

**JavaScript:**
```javascript
function* chaosLevels() {
  for (const c of characters) {
    yield c.chaos;
  }
}

// Usage - doesn't create full array
for (const chaos of chaosLevels()) {
  console.log(chaos);
}
```

**Python:**
```python
def chaos_levels():
    for c in characters:
        yield c["chaos"]

# Usage - doesn't create full list
for chaos in chaos_levels():
    print(chaos)
```

#### Async Generators

**JavaScript:**
```javascript
async function* slowEpisodes() {
  for (const c of characters) {
    for (const e of c.episodes) {
      await new Promise(r => setTimeout(r, 10));
      yield e.title;
    }
  }
}
```

**Python:**
```python
import asyncio

async defitles():
    for async_episode_t c in characters:
        for e in c["episodes"]:
            await asyncio.sleep(0.01)
            yield e["title"]
```

### Exercises

#### Exercise 13.1: Create a Generator Yielding Every Nth Friend

**Hint:** Yield friends at specific indices.

**Think about:** Which indices do you want?

#### Exercise 13.2: Build an Async Loop Processing Episode Titles

**Hint:** Process each episode with an async operation.

**Think about:** How do you consume async generators?

### Challenge 13.3: Create a Streaming Transform

**Hint:** Process character data one at a time without building the entire structure.

**Think about:** What operations can be done lazily?

---

## Capstone Project

### Objective

Transform, flatten, filter, sort, and index the Looney Tunes + Animaniacs dataset.

### Project Steps

Complete these steps in order:

#### Step 1: Transform - Uppercase All Episode Titles

**Task:** Create a new dataset where all episode titles are in uppercase.

**Think about:** Should you modify the original? How do you transform nested data?

#### Step 2: Flatten - Combine Episodes with Character Names

**Task:** Create a flat list where each item contains the character name plus episode details.

**Think about:** What's the structure of each flattened item?

#### Step 3: Filter - Extract Episodes with Likes > 100

**Task:** Keep only episodes with more than 100 likes.

**Think about:** What condition do you check?

#### Step 4: Sort - Order by Likes Descending

**Task:** Sort the filtered episodes from highest to lowest likes.

**Think about:** What's the sorting key?

#### Step 5: Index - Map Characters by Name

**Task:** Create a dictionary/map keyed by character name for fast lookup.

**Think about:** What's the key? What's the value?

### Additional Exercises

#### Exercise A: Add an isPopular Field to Each Episode

**Hint:** Add a boolean indicating if likes > 100.

**Think about:** Should this happen before or after filtering?

#### Exercise B: Compute Total Likes per Character

**Hint:** Sum episode likes for each character.

**Think about:** What's the data structure for the result?

#### Exercise C: List Characters with Zero Episodes

**Hint:** Find characters with empty episodes arrays.

**Think about:** What condition identifies zero episodes?

### Ultimate Challenge: Recursive String Uppercasing

**Task:** Implement a function that recursively uppercases ALL string values in a nested structure of any depth.

**Think about:**
- What's the base case (non-dictionary/string)?
- What's the recursive case?
- How do you handle lists of dictionaries?

---

## Quick Reference

### JavaScript Array Methods

| Method | Purpose | Returns |
|--------|---------|---------|
| `.map()` | Transform each item | New array |
| `.filter()` | Keep matching items | New array |
| `.reduce()` | Combine to single value | Any value |
| `.forEach()` | Execute for each item | undefined |
| `.find()` | First matching item | Item or undefined |
| `.findIndex()` | First matching index | Number or -1 |
| `.slice()` | Extract portion | New array |
| `.push()` | Add to end | New length |
| `.pop()` | Remove from end | Removed item |

### Python List/Dict Methods

| Method | Purpose | Returns |
|--------|---------|---------|
| `map()` | Transform items | Map object |
| `filter()` | Keep matching items | Filter object |
| `reduce()` | Combine to single value | Any value |
| `enumerate()` | Get index and value | Enumerate object |
| `.append()` | Add to end | None |
| `.pop()` | Remove from end | Removed item |
| `.extend()` | Add multiple items | None |
| `.get()` | Safe dict access | Value or default |

### Common Patterns

#### Create a New List by Transforming
```javascript
const names = characters.map(c => c.name);
```

#### Create a New List by Filtering
```javascript
const chaotic = characters.filter(c => c.chaos > 5);
```

#### Check If Any Item Matches
```javascript
const hasChaotic = characters.some(c => c.chaos > 10);
```

#### Check If All Items Match
```javascript
const allFriends = characters.every(c => c.friends.length > 0);
```

---

## Next Steps

Congratulations on completing this guide! Here's what you can do next:

1. **Practice Daily** - Work with real datasets
2. **Build Projects** - Apply these concepts to real problems
3. **Learn More** - Explore advanced data structures (trees, graphs)
4. **Teach Others** - Explain these concepts to friends

Remember: Programming is a skill that improves with practice. Keep coding!

---

**END OF STUDENT GUIDE**
