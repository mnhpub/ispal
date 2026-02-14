### Command Pattern in JavaScript (Imperative Style)

The Command Pattern is a behavioral design pattern that encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of the requests. This pattern decouples the object that invokes the operation from the one that knows how to perform it.

#### Example Code

Here's an example implementation of the Command Pattern in JavaScript using an imperative programming style:

```javascript
// Receiver: the object that performs the actual operations
class Light {
  turnOn() {
    console.log('The light is on');
  }

  turnOff() {
    console.log('The light is off');
  }
}

// Command interface: declares the execute method
class Command {
  execute() {}
}

// Concrete commands
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker: asks the command to carry out the request
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Client code
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // Output: The light is on

remote.setCommand(turnOff);
remote.pressButton(); // Output: The light is off
```

### Explanation

1. **Receiver**: The `Light` class knows how to perform the actual operations (turning on and off the light).
2. **Command Interface**: The `Command` class declares the `execute` method, which all concrete commands must implement.
3. **Concrete Commands**: The `TurnOnCommand` and `TurnOffCommand` classes implement the `execute` method by calling the corresponding method on the `Light` instance.
4. **Invoker**: The `RemoteControl` class holds a command and asks it to execute the request by calling its `execute` method.
5. **Client Code**: The client creates instances of the receiver and concrete commands, then uses the invoker to execute the commands.

### Usage

The Command Pattern is used in scenarios where:

1. **Parameterizing Objects**: The pattern allows parameterizing objects with operations.
2. **Queuing Operations**: It enables queuing of requests and their execution at a later time.
3. **Undo/Redo Operations**: It supports implementing undo and redo functionality.
4. **Logging Operations**: It allows logging of operations, which can be useful for auditing and debugging.

#### Common Use Cases

- **GUI Buttons**: Buttons in graphical user interfaces can be associated with command objects that perform specific actions.
- **Macro Recording**: Recording sequences of operations to be executed later.
- **Undo Mechanism**: Implementing undo and redo functionalities in applications.
- **Transaction Systems**: Executing transactions that can be logged, reversed, or retried.

### Summary

The Command Pattern encapsulates a request as an object, allowing for the parameterization, queuing, logging, and undoing of operations. In an imperative programming style, this pattern involves defining a command interface with concrete command classes that implement the operations. The invoker holds and executes these commands, decoupling the client from the receiver that performs the actual work. This pattern is widely used in GUI applications, transaction systems, and any scenario requiring flexible and decoupled execution of operations.