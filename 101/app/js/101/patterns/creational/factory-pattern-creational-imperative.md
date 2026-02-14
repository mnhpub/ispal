### Factory Pattern in JavaScript (Imperative Style)

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. This pattern promotes loose coupling by decoupling the client code from the actual objects being created.

#### Example Code

Here's an example implementation of the Factory Pattern in JavaScript using an imperative programming style:

```javascript
// Product: the objects being created
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  describe() {
    console.log(`Car: ${this.make} ${this.model}`);
  }
}

// Factory: interface for creating objects
class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

// Usage
const carFactory = new CarFactory();
const car1 = carFactory.createCar('Toyota', 'Camry');
const car2 = carFactory.createCar('Honda', 'Civic');

car1.describe(); // Output: Car: Toyota Camry
car2.describe(); // Output: Car: Honda Civic
```

### Explanation

1. **Product**: The `Car` class represents the objects being created by the factory. It has attributes and methods common to all cars.
2. **Factory**: The `CarFactory` class provides a method `createCar` for creating instances of `Car`. It encapsulates the creation logic and allows clients to create cars without knowing the details of how they are created.
3. **Usage**: Clients use the factory to create objects by calling its `createCar` method with the desired parameters.

### Usage

The Factory Pattern is used in scenarios where:

1. **Object Creation**: Objects need to be created without exposing the instantiation logic to clients.
2. **Decoupling**: Client code should not depend on the concrete classes being instantiated, promoting loose coupling.
3. **Common Interface**: Different types of objects need to be created through a common interface or superclass.

#### Common Use Cases

- **Database Connection Factories**: Creating database connections of different types (e.g., MySQL, PostgreSQL) using a common factory interface.
- **GUI Component Factories**: Creating GUI components (e.g., buttons, text fields) with varying styles and configurations through a factory.
- **Logger Factories**: Creating different types of loggers (e.g., console logger, file logger) using a factory method.

### Summary

The Factory Pattern provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. In an imperative programming style, the factory class encapsulates the creation logic and provides a method for creating instances of objects. This pattern is commonly used in scenarios where objects need to be created dynamically, with different types of objects created through a common interface, promoting loose coupling and flexibility in object creation.n