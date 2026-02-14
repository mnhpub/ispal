### Decorator Pattern in JavaScript (Imperative Style)

The Decorator Pattern allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. It is useful for adding functionalities to objects without modifying their structure.

#### Example Code

Here's an example implementation of the Decorator Pattern in JavaScript using an imperative programming style:

```javascript
// Component: the interface for objects that can have responsibilities added to them dynamically
class Coffee {
  cost() {
    return 5; // Base cost of coffee
  }
}

// Decorator: adds responsibilities to the component
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2; // Additional cost for milk
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1; // Additional cost for sugar
  }
}

// Usage
const simpleCoffee = new Coffee();
console.log(`Simple Coffee cost: ${simpleCoffee.cost()}`); // Output: Simple Coffee cost: 5

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(`Coffee with Milk cost: ${milkCoffee.cost()}`); // Output: Coffee with Milk cost: 7

const sugarCoffee = new SugarDecorator(simpleCoffee);
console.log(`Coffee with Sugar cost: ${sugarCoffee.cost()}`); // Output: Coffee with Sugar cost: 6
```

### Explanation

1. **Component**: The `Coffee` class represents the base component to which responsibilities can be added dynamically.
2. **Decorator**: The `MilkDecorator` and `SugarDecorator` classes add additional responsibilities (cost) to the coffee component without modifying its structure.
3. **Usage**: Clients can create simple coffee objects or decorate them with additional functionalities (decorators) as needed.

### Usage

The Decorator Pattern is used in scenarios where:

1. **Adding Responsibilities**: Additional functionalities need to be added to objects dynamically without modifying their structure.
2. **Open/Closed Principle**: Classes should be open for extension but closed for modification, allowing new behaviors to be added without altering existing code.
3. **Combining Behaviors**: Multiple combinations of behaviors need to be supported without creating a class explosion.

#### Common Use Cases

- **GUI Components**: Adding decorations (e.g., borders, shadows) to GUI components dynamically.
- **Stream Processing**: Adding filters and transformations to data streams.
- **Logging and Monitoring**: Adding logging or monitoring functionalities to application components dynamically.

### Summary

The Decorator Pattern allows behavior to be added to individual objects dynamically without affecting the behavior of other objects from the same class. In an imperative programming style, decorators are classes that wrap around the base component and provide additional functionalities. This pattern is commonly used in scenarios where objects need to be extended with additional behaviors without modifying their structure, promoting code reusability and maintainability.