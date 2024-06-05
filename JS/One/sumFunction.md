The provided code snippet is written in JavaScript, not Python, and it defines a series of functions aimed at calculating the sum of two numbers and then displaying this sum in different formats. Let's break down the code and explain its functionality in detail.

### Function: `sum`
- **Parameters**: Takes three parameters: `numOne`, `numTwo`, and `fnToCall`.
- **Purpose**: Calculates the sum of `numOne` and `numTwo`.
- **Process**: Adds `numOne` and `numTwo` together and assigns the result to a variable `result`.
- **Action**: Calls the function passed as the third parameter (`fnToCall`) with `result` as its argument.

### Functions: `displayResult` and `displayResultPassive`
- **Similarity**: Both functions take a single parameter `data` and log a formatted message to the console, incorporating `data` into the message.
- **Difference**: The message format differs between the two functions. `displayResult` uses the active voice ("Result of the sum is : "), while `displayResultPassive` uses the passive voice ("Sum's result is : ").

### Usage
- The `sum` function is called twice with different arguments. The first call uses `displayResult` as the callback function, and the second call uses `displayResultPassive`.
- The results of these calls are stored in variables `ans` and `ansTwo`, but these variables are not used afterward in the provided code snippet.

### Execution Flow
1. The script begins execution from top to bottom.
2. The `sum` function is defined first, followed by `displayResult` and `displayResultPassive`.
3. The `sum` function is then called twice, each time with two numbers and one of the display functions as arguments.
4. The results of these calculations are passed to the corresponding display functions, which log the sums to the console in either active or passive voice.

### Expected Output
- When running this code, you would see two lines in the console, each displaying the sum of two numbers in a different format due to the choice of display function:
  - Using `displayResult`: `Result of the sum is : 7`
  - Using `displayResultPassive`: `Sum's result is : 20021`

### Conclusion
This JavaScript program demonstrates the use of higher-order functions, where functions can accept other functions as arguments and pass them as callbacks. It also illustrates the flexibility of JavaScript in handling different formatting styles for presenting data.