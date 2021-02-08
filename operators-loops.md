# Javascript Operators and Loops
In this Blog we will discuss two of the main Fundamentals of **[Javascript](https://oebitw.github.io/reading-notes/js)** we will talk about **[Javascript](https://oebitw.github.io/reading-notes/js)** **operators** and **Loops**.

## Javascript Operators
We have to types of operators:
* Comparison Operators.
* Logical Operators.

### Comparison Operators
In our last [blog](https://oebitw.github.io/reading-notes/js) we talked about the most used **comparison** operators :

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


There are other important comparison operators like:

| Operator |Description|
|---|---|
|==|This operater compares two values to see if they are the same.|
|===	 |This operator compares two values to see if they have the same type and value.|
|!=	|This operater compares two values to see if they are not the same.|
|!==|This operator compares two values to see if they don't have the same type and value.|

Now let us take a look on the **logical operators**:

### Logical operators

Logical Operators allow you to comparethe results of more than one comparison operator.

* **And operator:**
```
&&
```
```
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```
* **Or Operator:**

```
||
```
```
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```
* **Logical not:**
```
!
```
```
alert( !true ); // false
alert( !false); // true
```
* **
## Javascript Loops

![](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Loops.jpg)

Loops offer a quick and easy way to do something repeatedly, they are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact.

In this section we will discuss two of the most common Javascript loops:
* **For Loop**
* **While Loop**
* **Do while loop**
### For loop: 
A for loop repeats until a specified condition evaluates to false.
* For Loop Syntax:
```
for ([initialExpression]; [conditionExpression]; [incrementExpression])

 {
   
   statement
   
   } 
  ```

insted of writing:

```
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

```

you can write:

```
var i;
for (i = 0; i < cars.length; i++)
 {
  text += cars[i] + "<br>";
}
```
## While Loop
The while loop loops through a block of code as long as a specified condition is true.
* **While loop syntax:**
```
while (condition)
 {
  // code block to be executed
}
```
**Condition**:

An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution continues with the statement after the while loop.

**statement**

An optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement:
```
 ({ ... }) 
 ```
 to group those statements.

 ## do..while Loop
 The do...while statement repeats until a specified condition evaluates to false.

 A do...while statement looks as follows:
```
do {
  code block to be executed
}
while (condition);
```

**Statement** is always executed once before the condition is checked.

If **condition** is true, the statement executes again.

 At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.