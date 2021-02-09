# Javascript Functions
 Javascript function Functions let you group a series of statements together to perform a
specific task.

 If different parts of a script repeat the same task, you can
reuse the function (rather than repeating the same set of st atements).

* **Function Syntax:**

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

The function will work only if it's invoked.

* **Function Invocation:**

The code inside the function will execute when "something" 
1. invokes (calls) the function: When an event occurs (when a user clicks a button).
2. When it is invoked (called) from JavaScript code.
3. Automatically (self invoked).

After invoking the function, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
```
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
```
the result for X will be
```
12
```
* **why we use functions ?**
1. functions make code reusable.
2. functions help us avoid repeated code.
3. functions let us define code once, and then run the code wherever we need it.
