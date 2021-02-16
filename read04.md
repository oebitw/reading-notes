# HTML Links, JS Functions, and Intro to CSS Layout

## HTML Links

Links are one of the most important elements in the websites.

You might use a link that will redirect you to external website (External links), you also might use links that will redirect you to an internal page in the same website.
you might also click on a link that will redirect you to a specific place in the same page or a specific place on another page.
moreover you might use a link that will open a new tab or page in the browser, or open the email app for you.

All of these are different types of links that we use everyday in our life when we surf the internet.

to add a link in HTML you will use the following syntax:

`<a href=URL or relative link>link title</a>`

as we see we might have a URL or a relative link as a reference to redirect the user when he clicks the link.

URL stands for "Uniform Resource Locator" and they are used to redirect the user to an external webpage.

on the other hand relative links are used to redirect the users to internal webpages in the same website.

We can make the link open a new page for the user using:
`<a href="Link" target="_blank">link title</a>`
and we also can redirect the user to the email app using :
`<a href="mailto:someone@example.com">Send email<a>`

## CSS Lay Outs:

### Position Property

we use the position property to specify the type of positioning method used for any element in our code.
There are five different position values:
* static

Static is the default setting for the HTML elements, and they are not affected by the top, bottom, left, and right properties they are always always positioned according to the normal flow of the page.
* relative

Here the element is positioned relative to its normal position.
* fixed

fixed elements always stays in the same place even if the page is scrolled.
* absolute
* sticky

### Fixed width vs liquid layouts.

* Fixed-Width Layouts:  are layouts where the width of the entire page is set with a specific numerical value.

* Liquid Layouts: These are layouts where the width of the entire page is flexible depending on how wide the viewer's browser is.

### Grid layout

CSS Grid layout help us to design web pages without having to use floats and positioning.
it offers a grid-based layout system, with rows and columns, making it easier for us to design our webpage.

## Javascript:

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

### Pair Programming:

Pair programming is an agile software development technique where two developers work together, the first programmer he is the driver who write the code and type on the key board, the other is the navigator who will think of the big picture of the code and will navigate the driver to write the correct code, he will also help in scanning the code for typos or bugs.

Applying pair programming will lead in less typos and errors which will increase the efficiency and save time. it will help the developers to learn from each other and build new skills, it will also improve the social skills between the developers. 