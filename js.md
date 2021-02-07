# Programming with JavaScript
![](https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png)

After building the webpage structure with **[HTML](https://oebitw.github.io/reading-notes/structure-html-web)** , and designing it with **[CSS](https://oebitw.github.io/reading-notes/css-design)**. Now it's the time to make our webpage interactive with the user using **Javascript**.


## Javascript:
Javascript is a script language.

**scripting language** is a programming language that is **[Interpreted](https://www.programiz.com/article/difference-compiler-interpreter)**. It is translated into machine code when the code is run, rather than beforehand.

 Scripting languages are often used for short scripts over full computer programs. JavaScript, Python, and Ruby are all examples of scripting languages. to sum up we can define script language as a series of instructions that a
computer can follow to achieve a goal.

Before writing a script, you need to first
state your goal and then list the
tasks that need to be completed in
order to achieve it. You should Start with the big picture of what you want to achieve, and break
that down into smaller steps, then you will write a code for each step to translate the steps from human language into a script language that is interperted to a machine language for the computers to understand.
## Javascript Variables and Data types.

Simply JavaScript variables are containers for storing data values.
```
var x = 5;
var y = 6;
var z = x + y;
```
We can save variable in different data types:

* Strings:
```
var x = "car";           // Using double quotes
var y = 'car';   // Using single quotes
var z = "1" ;  // Here 1 is a string it's not a number.
```

* Numbers:
```
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
```
* Booleans:
Booleans can only have two values: true or false.
```
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```
* Javascript Operators:
```
ASSIGNMENT OPERATORS
Assign a value to a variable
color = 'beige';
The value of co 1 or is now beige.
```
```
ARITHMETIC OPERATORS
Perform basic math
area = 3 * 2;
The value of area is now 6.
```
```
STRING OPERATORS
Combine two strings
greeting= 'Hi 1 + 'Mol ly';
The value of greeting is now Hi Molly.
```
```
COMPARISON OPERATORS
Compare two values and return true or fa 1 se
buy = 3 > 5;
The value of buy is fa 1 se.
```
```
LOGICAL OPERATORS
Combine expressions and return true or fa 1 se
buy= (5 > 3) && (2 < 4);
The value of buy is now true.
```
## Javascript Function

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

* **JavaScript Function Syntax:**
```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.
* **Function Invocation**

The code inside the function will execute when "something" invokes (calls) the function:
1. When an event occurs (when a user clicks a button).
2. When it is invoked (called) from JavaScript code.
3. Automatically (self invoked).

* **Function Return**

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example: Calculate the product of two numbers, and return the result:

```
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
```
The result in x will be:

```
12
```

