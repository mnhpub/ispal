### Observer Pattern in JavaScript (Imperative Style)

The Observer Pattern is a behavioral design pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods. This pattern establishes a one-to-many relationship between a subject and its observers, allowing for loosely coupled communication.

#### Example Code

Here's an example implementation of the Observer Pattern in JavaScript using an imperative programming style:

```javascript
// Subject: the object being observed
class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyObservers();
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }
}

// Observer: the object observing the subject
class Observer {
  constructor(subject) {
    this.subject = subject;
  }

  update() {
    console.log(`Observer updated with new state: ${this.subject.getState()}`);
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer(subject);
const observer2 = new Observer(subject);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState('New State'); // Output: Observer updated with new state: New State (twice)
```

### Explanation

1. **Subject**: The `Subject` class maintains a list of observers and notifies them of changes in its state.
2. **Observer**: The `Observer` class provides an update method that is called by the subject when its state changes.
3. **Adding and Removing Observers**: The subject provides methods to add and remove observers from its list.
4. **Notifying Observers**: When the subject's state changes, it iterates over its list of observers and calls their update methods.

### Usage

The Observer Pattern is used in scenarios where:

1. **Decoupled Communication**: It allows for loosely coupled communication between objects.
2. **One-to-Many Relationships**: It establishes a one-to-many relationship between a subject and its observers.
3. **Dynamic Updates**: It enables objects to be notified of changes in state without having to poll for updates.

#### Common Use Cases

- **Event Handling**: In GUI frameworks, observers can be notified of events triggered by user interactions.
- **Model-View-Controller (MVC)**: Observers (views) can be notified of changes in the model's state.
- **Publish-Subscribe Systems**: Where multiple subscribers are interested in receiving updates from publishers.

### Summary

The Observer Pattern facilitates communication between objects in a decoupled manner. In an imperative programming style, the subject maintains a list of observers and notifies them of changes in its state by calling their update methods. This pattern is commonly used in scenarios where objects need to react to changes in state or events without tight coupling, such as in GUI frameworks, MVC architectures, and publish-subscribe systems.