# JS101
## Chatper 5
### Control Structures
In JavaScript, control structures are used to control the flow of the program, making decisions, and repeating actions. The primary control structures can be categorized into two main groups: conditional statements and loops. Here's how they fit together:

### Conditional Statements
These are used to perform different actions based on different conditions.

1. **if Statement**
   ```javascript
   if (condition) {
       // code to be executed if the condition is true
   }
   ```

2. **else if Statement**
   ```javascript
   if (condition1) {
       // code to be executed if condition1 is true
   } else if (condition2) {
       // code to be executed if condition2 is true
   }
   ```

3. **else Statement**
   ```javascript
   if (condition1) {
       // code to be executed if condition1 is true
   } else {
       // code to be executed if condition1 is false
   }
   ```

4. **Nested if Statements**
   ```javascript
   if (condition1) {
       if (condition2) {
           // code to be executed if both condition1 and condition2 are true
       }
   }
   ```

5. **switch Statement**
   ```javascript
   switch (expression) {
       case value1:
           // code to be executed if expression === value1
           break;
       case value2:
           // code to be executed if expression === value2
           break;
       default:
           // code to be executed if none of the cases are matched
   }
   ```

6. **Ternary Operator**
   ```javascript
   let result = condition ? value1 : value2;
   ```

7. **Logical Operators**
   - **AND (&&)**
     ```javascript
     if (condition1 && condition2) {
         // code to be executed if both condition1 and condition2 are true
     }
     ```
   - **OR (||)**
     ```javascript
     if (condition1 || condition2) {
         // code to be executed if either condition1 or condition2 is true
     }
     ```
   - **NOT (!)**
     ```javascript
     if (!condition) {
         // code to be executed if condition is false
     }
     ```

### Loops
These are used to execute a block of code repeatedly as long as a specified condition is true.

1. **for Loop**
   ```javascript
   for (initialization; condition; increment) {
       // code to be executed in each iteration
   }
   ```

2. **while Loop**
   ```javascript
   while (condition) {
       // code to be executed as long as the condition is true
   }
   ```

3. **do...while Loop**
   ```javascript
   do {
       // code to be executed at least once and then repeatedly as long as the condition is true
   } while (condition);
   ```

### Summary
- **Conditional Statements:** `if`, `else if`, `else`, nested `if`, `switch`, ternary operator, logical operators (`&&`, `||`, `!`)
- **Loops:** `for`, `while`, `do...while`

Both conditional statements and loops are fundamental control structures that allow you to direct the flow of your program. Conditional statements let you make decisions based on conditions, while loops enable you to repeat actions until a condition is no longer true.