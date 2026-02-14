### Builder Pattern in JavaScript (Imperative Style)

The Builder Pattern is a creational design pattern that allows the construction of complex objects step by step. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

#### Example Code

Here's an example implementation of the Builder Pattern in JavaScript using an imperative programming style:

```javascript
// Product: the object being constructed
class Pizza {
  constructor() {
    this.size = null;
    this.crust = null;
    this.toppings = [];
  }

  setSize(size) {
    this.size = size;
  }

  setCrust(crust) {
    this.crust = crust;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  describe() {
    console.log(`Pizza: Size - ${this.size}, Crust - ${this.crust}, Toppings - ${this.toppings.join(', ')}`);
  }
}

// Builder: interface for building different parts of the product
class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.setSize(size);
    return this;
  }

  setCrust(crust) {
    this.pizza.setCrust(crust);
    return this;
  }

  addTopping(topping) {
    this.pizza.addTopping(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}

// Usage
const pizzaBuilder = new PizzaBuilder();
const pizza = pizzaBuilder
  .setSize('Medium')
  .setCrust('Thin')
  .addTopping('Cheese')
  .addTopping('Mushrooms')
  .build();

pizza.describe(); // Output: Pizza: Size - Medium, Crust - Thin, Toppings - Cheese, Mushrooms
```

### Explanation

1. **Product**: The `Pizza` class represents the object being constructed. It has methods to set various attributes of the pizza.
2. **Builder**: The `PizzaBuilder` class constructs the pizza step by step. It provides methods to set the size, crust, and toppings of the pizza, and a `build` method to return the final product.
3. **Usage**: Clients use the builder to specify the parameters of the product they want to construct.

### Usage

The Builder Pattern is used in scenarios where:

1. **Complex Object Creation**: The creation of an object involves multiple steps or parameters.
2. **Flexible Object Creation**: Different representations of an object need to be created using the same construction process.
3. **Encapsulation of Construction Logic**: The construction logic needs to be encapsulated in a separate builder class to keep the client code clean.

#### Common Use Cases

- **Document Builders**: Creating documents with varying structures (e.g., HTML, XML) using a consistent building process.
- **Database Query Builders**: Constructing complex database queries with varying conditions and parameters.
- **GUI Layout Builders**: Building GUI components with different layouts and configurations.

### Summary

The Builder Pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations. In an imperative programming style, the builder class constructs the object step by step, providing methods to set its various attributes. This pattern is commonly used in scenarios where objects need to be constructed with multiple parameters or in different configurations, providing flexibility and encapsulation of construction logic.