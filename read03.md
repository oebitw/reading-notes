# Readings : HTML Lists, Control Flow with JS, and the CSS Box Model
## HTML Lists

HTML Allows us to create 3 different types of lists:

### Ordered List:

From the name it's obvious that this list will shows numbers for example or letters.
We write an order as the following:

```
<ol>
  <li> First Name </li>
  <li> Last Name </li>
<ol>
```
and the output of this function will be :
1) First Name
2) Second Name

### Unordered List:

Unordered list have pullet points instead of numbers.
We write the ul in HTML as the following:

```
<ul>
  <li> First Name </li>
  <li> Last Name </li>
<ul>
```
the out put will be :
* First Name
* Last Name

we can have a nested list for ordered and unordered list just by adding new list item for the parent list item

for example:

```
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

the output will be:

* Coffee
* Tea
   * Black tea
  * Green tea
* Milk

### Description List

the description list has different syntax than ul and ol.


```
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```
## CSS:

### Borders:

we have different types of borders in css
we have solid borders, dotted borders, double, groved borders and many other types.

we can give the border a width, a color, a rounded shape and many other styles.
In the following code we gave the paragraphs in a website a solid red border with 6px width.

```
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```
we can add a **margin** for the border.
the margin will give a space between the border and the other elements in the page.
We Also can have a padding for the border, which will give space inside the bolder elements, for example it will change the space between the paragraph and the border.

Moreover we can specify the display behavior for the border using the **display** property.
we have different values for the display property.
for example `Display: inline`  will Display the border or any other element as an inline element (like `<span>` in HTML), any height and width properties will have no effect here.

`Display:block` will Display the border or any element as a block element (like `<p>`). It starts on a new line, and takes up the whole width.

`Display:inline-block` will display the border as an inline-level block container.

## JavaScript

### Switch Statement

Switch statement is similar to If statement however If statement will execute each code if the condition is true however the switch statement will execute a specific code or statement.

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### Loops
* **For Loop**
* **While Loop**
* **Do while loop**
#### For loop: 
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
#### While Loop
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

 #### do..while Loop
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

