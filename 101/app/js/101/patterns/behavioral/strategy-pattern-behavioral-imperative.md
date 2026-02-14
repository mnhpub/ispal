### Strategy Pattern in JavaScript (Imperative Style)

The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. This pattern allows the algorithm to vary independently from clients that use it.

#### Example Code

Here's an example implementation of the Strategy Pattern in JavaScript using an imperative programming style:

```javascript
// Context: contains a reference to the strategy object and delegates the algorithm to it
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data) {
    return this.strategy.execute(data);
  }
}

// Strategies: defines a family of algorithms
class ConcreteStrategyA {
  execute(data) {
    return data.toUpperCase();
  }
}

class ConcreteStrategyB {
  execute(data) {
    return data.toLowerCase();
  }
}

// Usage
const contextA = new Context(new ConcreteStrategyA());
console.log(contextA.executeStrategy('Hello')); // Output: HELLO

const contextB = new Context(new ConcreteStrategyB());
console.log(contextB.executeStrategy('World')); // Output: world
```

### Explanation

1. **Context**: The `Context` class contains a reference to a strategy object and delegates the algorithm to it.
2. **Strategies**: The strategy objects (`ConcreteStrategyA` and `ConcreteStrategyB`) define different algorithms for the context to use.
3. **Execution**: Clients create a context instance with a specific strategy object and call the `executeStrategy` method to execute the algorithm.

### Usage

The Strategy Pattern is used in scenarios where:

1. **Multiple Algorithms**: There are multiple algorithms for a particular task, and the client needs to choose one at runtime.
2. **Algorithm Encapsulation**: Algorithms need to be encapsulated in separate classes to allow for easier maintenance and testing.
3. **Interchangeable Behavior**: The behavior of an object needs to vary independently from clients that use it.

#### Common Use Cases

- **Sorting Algorithms**: Different sorting algorithms (e.g., bubble sort, merge sort) can be encapsulated as strategies.
- **Compression Algorithms**: Various compression algorithms (e.g., zip, gzip) can be encapsulated as strategies.
- **Payment Processing**: Different payment methods (e.g., credit card, PayPal) can be encapsulated as strategies.

### Summary

The Strategy Pattern allows for the encapsulation of interchangeable algorithms and promotes loosely coupled code. In an imperative programming style, the context delegates the algorithm to a strategy object, allowing clients to easily switch between different algorithms. This pattern is commonly used in scenarios where objects need to vary their behavior at runtime based on different algorithms or strategies.