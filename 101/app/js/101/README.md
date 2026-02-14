# JS101 Syllabus

### Handbook
[Gitlab Handbook](https://handbook.gitlab.com/handbook/)

### Goals
- Understand and describe the role and importance of data performance and data management
- Demonstrate maintainable and repeatable concepts in JS

### Core Concepts
- Importance of OOP, design patterns, and FP for maintainable and efficient code
- JavaScript as a versatile language for exploring these paradigms
- Solving algorithms with functional patterns

### User Story
As a software engineer, I want code that is not only clear and maintainable but also robust and resilient in distributed or concurrent environments, therefore we will utilize idiomatic and idempotent paradigms when creating code. Performance is also important, but we'll get to that later.

### Why JS?
JS is an ideal language choice because of its ubiquitous nature; it's everywhere, and that makes it especially accessible. JS was selected to craft the CS 101 course with the goal of offering a high-quality online curriculum for individuals that do not have expensive computing resources at their disposal.

### Summary
Understanding OOP, design patterns, and functional programming is crucial for writing maintainable, efficient, and robust code. JavaScript, with its flexibility and extensive ecosystem, is an excellent language for exploring these paradigms.

### Acknowledgments
- Douglas Crockford
  - [JSON](https://www.json.org/json-en.html)
  - Disclaimer; Crockford has provided compelling arguments for why developers should consider other languages and technologies other than JS for projects.
- Sandy Metz
  - [99 Bottles of JS](https://sandimetz.com/99bottles)
- Billy Bunn
  - [JS WarmUps](https://github.com/BillyBunn/warm-ups)
- ToToo1985
  - [JS Array Operations](https://github.com/tooto1985/js-array-operations)

### Consideration of other languages and technologies

## Data
[SWAPI](https://swapi.dev/documentation)

## OOP (Object-Oriented Programming)
- **Definition**
  - Concept of objects
  - Classes as blueprints
- **Core Concepts**
  - **Classes and Objects**
    - Class definition
    - Object instantiation
  - **Encapsulation**
    - Data and methods bundling
  - **Inheritance**
    - Extending classes
  - **Polymorphism**
    - Unified interface for different data types
  - **Abstraction**
    - Hiding complex details
- **OOP in JS**
  - Prototype-based inheritance
  - ES6 class syntax
  - Code example

### OOP (Object-Oriented Programming)
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data. Objects are instances of classes, which can encapsulate data (attributes) and functions (methods) that operate on the data.

### OOP Core Concepts
1. **Classes and Objects**: Classes are blueprints for creating objects. An object is an instance of a class.
2. **Encapsulation**: Bundling the data (attributes) and methods that operate on the data into a single unit or class.
3. **Inheritance**: A mechanism where a new class inherits properties and behavior (methods) from an existing class.
4. **Polymorphism**: The ability to present the same interface for differing underlying forms (data types).
5. **Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.

### OOP in JS
In JavaScript, OOP can be implemented using prototypes and ES6 classes. The ES6 class syntax is syntactic sugar over JavaScript's prototype-based inheritance.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

## Design Patterns
Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that can be customized to solve a particular design problem in your code.

### Commonly Used Design Patterns

### Behavioral Patterns

1. **Command**: Encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations.
2. **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
3. **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Creational Patterns

1. **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
2. **Factory**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
3. **Singleton**: Ensures a class has only one instance and provides a global point of access to that instance.

### Structural Patterns

1. **Adapter**: Allows objects with incompatible interfaces to collaborate.
2. **Decorator**: Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.
3. **Facade**: Provides a unified interface to a set of interfaces in a subsystem, defining a higher-level interface that makes the subsystem easier to use.

## Functional Programming (FP)
Functional Programming (FP) is a programming paradigm where programs are constructed by applying and composing functions. It emphasizes the use of pure functions and avoiding shared state, mutable data, and side-effects.

### Core Concepts of Functional Programming
1. **Pure Functions**: Functions that return the same result given the same arguments and have no side effects.
2. **First-Class Functions**: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
3. **Immutability**: Data objects should not be modified after they are created. Instead, new objects should be created.
4. **Higher-Order Functions**: Functions that take other functions as arguments or return them as results.

### FP in JS
JavaScript supports functional programming features, allowing you to write concise and readable functional code.

```javascript
// Example of a pure function
const add = (a, b) => a + b;

// Example of higher-order function
const applyOperation = (a, b, operation) => operation(a, b);

console.log(applyOperation(2, 3, add)); // 5

// Example of immutability
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]
```

### Pure Functions

### First-class Functions

#### JS Array Methods
[Array Operations in JS](./data/array-ops.js)

### Immutability
[immutability.js](./immutable.js)

### A note on mastery

Immutability involves creating stable, unchangeable states, where consistency and reliability can be ensured. This course will emphasize programming fundamentals, including the importance of deliberate, strategic changes to data. By focusing on making intentional modifications, we aim to explore how thoughtful and adaptive changes can enhance code quality, foster innovation, and improve problem-solving skills. Additionally, we will highlight how the functional programming paradigm, with its emphasis on immutability, accelerates developer velocity by reducing bugs, simplifying debugging, and making code easier to reason about. This approach offers a more dynamic and flexible path to mastering programming concepts.

### Higher-Order Function Power Trio
- **map**
  - Definition: Transforms each element in an array
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8]
    ```
- **filter**
  - Definition: Filters elements in an array based on a condition
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const even = numbers.filter(num => num % 2 === 0);
    console.log(even); // [2, 4]
    ```
- **reduce**
  - Definition: Reduces array to a single value
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 10
    ```


# JS101

## Foster CS

### JavaScript, 101

1. **Introduction to JavaScript**
   - a. Overview and History
   - b. What is JavaScript?
   - c. How JavaScript Fits into a Web Page
   - d. Understanding the Role of Syntax

2. **Getting Started with JavaScript**
   - a. Your First JavaScript Program
   - b. Writing Comments and Using Good Commenting Practices
   - c. Understanding Various Places Your Code Can Live
   - d. Learning Where Our Code Will Live For This Course

3. **Variables and Data Types**
   - a. Declaring Variables and Constants
   - b. Data Types in JavaScript
   - c. Working with Numbers, Strings, and Booleans
   - d. String Ops

4. **Operators and Expressions**
   - a. Arithmetic Ops
   - b. Assignment Ops
   - c. Comparison Ops
   - d. Logical Ops

5. **Control Structures**
   - a. Using the Popular if/else Statement to Make Decisions
   - b. Switch Statements and When to Use Them
   - c. Loops: For, While, and Do...While

6. **Functions**
   - a. Understanding How Functions Make Your Code Reusable
   - b. Defining and Calling Functions
   - c. Function Expressions
   - d. Arrow Functions
   - e. Parameters and Return Values
   - f. Scope: Global and Local Scope
   - g. Understanding Closures

7. **Objects and Arrays**
   - a. Learning About the Basic Types of Objects in JavaScript
   - b. Creating and Modifying Objects
   - c. Creating Custom Objects
   - d. Working with Arrays and Array Methods

8. **The Document Object Model (DOM)**
   - a. Understanding the DOM
   - b. Selecting and Manipulating DOM Elements
   - c. Modifying Content and Styles

9. **Events**
   - a. Handling Events
   - b. Event Propagation
   - c. Default Actions and Event Delegation
   - d. Event Listeners

10. **Forms and User Input**
    - a. Form Validation
    - b. Handling Form Events

11. **Asynchronous JavaScript**
    - a. Understanding Asynchronous Concepts
    - b. Callbacks
    - c. Promises
    - d. Async/Await

12. **Working with APIs**
    - a. Understanding APIs
    - b. Fetch API and AJAX
    - c. JSON Handling

13. **Advanced JavaScript Concepts**
    - a. Closures (Reiterated for Emphasis)
    - b. Prototypes and Inheritance
    - c. Big ES6 Changes and Features

14. **Debugging and Testing**
    - a. Debugging Techniques
    - b. Writing Tests
    - c. Error Handling with Try/Catch

15. **Practical Projects and Applications**
    - a. Building Small Projects
    - b. Applying Concepts Learned
    - c. Finding Out That, In Addtion To Being Delicious, Pizza Has an Educational Value As Well

16. **Conclusion and Next Steps**
    - a. Putting It All Together
    - b. Building a Complete Application
    - c. Continuing Your Learning Journey