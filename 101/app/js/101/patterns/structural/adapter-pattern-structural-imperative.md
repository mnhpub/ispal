### Adapter Pattern in JavaScript (Imperative Style)

The Adapter Pattern allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, converting the interface of a class into another interface that a client expects.

#### Example Code

Here's an example implementation of the Adapter Pattern in JavaScript using an imperative programming style:

```javascript
// Adaptee: the existing interface that needs adaptation
class LegacyPrinter {
  print(text) {
    console.log(`Legacy Printer: ${text}`);
  }
}

// Target: the interface expected by the client
class ModernPrinter {
  printText(text) {
    console.log(`Modern Printer: ${text}`);
  }
}

// Adapter: adapts the legacy interface to the target interface
class PrinterAdapter {
  constructor(legacyPrinter) {
    this.legacyPrinter = legacyPrinter;
  }

  printText(text) {
    this.legacyPrinter.print(text);
  }
}

// Usage
const legacyPrinter = new LegacyPrinter();
const adapter = new PrinterAdapter(legacyPrinter);

adapter.printText('Adapting legacy printer'); // Output: Legacy Printer: Adapting legacy printer
```

### Explanation

1. **Adaptee**: The `LegacyPrinter` class represents the existing interface that needs to be adapted. It has a method `print` which needs to be compatible with the `ModernPrinter`.
2. **Target**: The `ModernPrinter` class represents the interface expected by the client. It has a method `printText`.
3. **Adapter**: The `PrinterAdapter` class adapts the `LegacyPrinter` interface to the `ModernPrinter` interface by implementing the `printText` method using the `print` method of the `LegacyPrinter`.
4. **Usage**: The client interacts with the `ModernPrinter` interface through the `PrinterAdapter`, which internally uses the `LegacyPrinter` to perform the desired action.

### Usage

The Adapter Pattern is used in scenarios where:

1. **Interoperability**: There is a need to integrate new code with existing code that has an incompatible interface.
2. **Legacy Systems**: Integration with legacy systems or libraries that cannot be modified directly.
3. **Interface Conversions**: Converting one interface into another interface that clients expect.

#### Common Use Cases

- **API Integrations**: Adapting APIs with different request/response formats or protocols.
- **Library Integrations**: Integrating with third-party libraries or frameworks with incompatible interfaces.
- **Version Upgrades**: Supporting new versions of existing libraries while maintaining compatibility with older versions.

### Summary

The Adapter Pattern acts as a bridge between two incompatible interfaces, allowing them to work together seamlessly. In an imperative programming style, the adapter class adapts the interface of the existing class (`Adaptee`) to match the interface expected by the client (`Target`). This pattern is commonly used in scenarios where integration with legacy systems or libraries is required, or when interoperability between incompatible interfaces is necessary.