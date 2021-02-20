# Readings : Problem Domain, Objects, and the DOM
## What is An Object
Objects are a set of variables and functions that are used to create a model of any thing we have in real life.

For example let us take the hotels over the world as an object each hotel has a different name different room numbers, swimming pool availability, parking areas, all of these elements are variables for the hotels around the world and they vary from one hotel to another. 

We call this variables as properties for the object in this case the hotel. if we want to book a room in a specific hotel we need first to check the availability for free rooms first. to check the availability we will subtract the booked rooms from the number of all the rooms in the hotel. here we used a function to check the availability of free rooms.

We call the function for models **method**.
for example lets say the royal hotel in amman has 200 rooms, 3 swimming pools, and a total parking area for 100 cars.
here we have 4 variables or 4 different properties. and we have one function or method to  check the rooms availability.

 The same concept goes for webpages we will deal with each element in the web page as variables or properties and each property has a method.

 In the next section we will discuss the DOM and reflect the same concept on the web pages.


## DOM

DOM stands for Document Object Model.
What is the document object model?
first of all let's explain the meaning of each word in DOM then we will define what is DOM exactly.
As we said DOM stands for Document Object Model;
* Document : as we have word documents, Power point documents we also can deal with the web page as a document. So document here we can refer it to the web page.

* Object: Objects in computer science as we discussed them in the previous section are a set of variables and functions .

* Model: it's making a model for the document object and here it's the DOM tree.

Okay now lets discuss what is exactly the document object model.

"*The W3C (World Wide Web Consortium) defines Document Object Model (DOM) as a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.*"

![](https://www.w3schools.com/js/pic_htmltree.gif)


Javascript can change :

* all the HTML elements in the page.
* all the HTML attributes in the page.
* all the CSS styles in the page.
* JavaScript can remove existing HTML elements and attributes.
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page.
* JavaScript can create new HTML events in the page.

However JS don't change the html file it self or the css file, JS can do all of this changes from the DOM, this is why DOM is so important.

DOM tree consist of four types of nodes:
* THE DOCUMENT NODE: which represents the all web page.

* ELEMENT NODES: which represents the structure of an HTML page.
* ATTRIBUTE NODES
* TEXT NODES

There are two steps to access and update the DOM tree:
* Step 1 Access the elements:
We can access the elements using the following **methods**:

 ` getElementById ()`

 `querySelector ()`

 `getElementsByClassName()`

 `getElementsByTagName()`

 `querySelectorAll()`

 and many other methods.

 * Step 2 we will work with those elements using the following **properties**:

 `innerHTML`

 `textContent`

 ` hasAttribute()`

`nodeValue`

And many other Properties.

To sum up , Document Object model is a neutral language. it treats HTML document as a tree structure where each node is an object representing a part of the document.

 The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.
 
  DOM methods allow programmatic access to the tree; with them we can change the HTML elements, attributes, the css styles and many other major changes in the webpage.