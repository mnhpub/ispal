### Facade Pattern in JavaScript (Imperative Style)

The Facade Pattern provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use, hiding its complexity from clients.

#### Example Code

Here's an example implementation of the Facade Pattern in JavaScript using an imperative programming style:

```javascript
// Subsystem components
class Engine {
  start() {
    console.log('Engine started');
  }

  stop() {
    console.log('Engine stopped');
  }
}

class AirConditioner {
  turnOn() {
    console.log('Air conditioner turned on');
  }

  turnOff() {
    console.log('Air conditioner turned off');
  }
}

class GPS {
  navigate(destination) {
    console.log(`Navigating to ${destination}`);
  }
}

// Facade
class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.airConditioner = new AirConditioner();
    this.gps = new GPS();
  }

  startCar() {
    this.engine.start();
    this.airConditioner.turnOn();
  }

  stopCar() {
    this.engine.stop();
    this.airConditioner.turnOff();
  }

  navigateTo(destination) {
    this.gps.navigate(destination);
  }
}

// Usage
const carFacade = new CarFacade();
carFacade.startCar(); // Output: Engine started, Air conditioner turned on
carFacade.navigateTo('Destination'); // Output: Navigating to Destination
carFacade.stopCar(); // Output: Engine stopped, Air conditioner turned off
```

### Explanation

1. **Subsystem Components**: The `Engine`, `AirConditioner`, and `GPS` classes represent the subsystem components with their individual functionalities.
2. **Facade**: The `CarFacade` class provides a unified interface to these subsystem components, making it easier to interact with them. It hides the complexity of the subsystem from clients.
3. **Usage**: Clients interact with the facade to perform operations on the subsystem, without needing to know the details of individual components.

### Usage

The Facade Pattern is used in scenarios where:

1. **Simplified Interface**: There is a need to provide a simplified interface to a complex subsystem, hiding its complexity from clients.
2. **Subsystem Decoupling**: The implementation details of a subsystem need to be decoupled from its clients, promoting loose coupling.
3. **Abstraction of Complexity**: The complexity of a subsystem needs to be abstracted away, providing a higher-level interface for clients to interact with.

#### Common Use Cases

- **API Wrappers**: Providing simplified interfaces to complex APIs or libraries.
- **Library Integrations**: Abstracting the complexities of integrating with third-party libraries or systems.
- **User Interface Frameworks**: Creating simplified interfaces to complex user interface components or systems.

### Summary

The Facade Pattern provides a unified interface to a set of interfaces in a subsystem, making it easier to use and hiding its complexity from clients. In an imperative programming style, the facade class aggregates and delegates operations to the subsystem components, providing a simplified interface for clients. This pattern is commonly used in scenarios where a complex subsystem needs to be abstracted away, promoting loose coupling and simplifying client interactions.