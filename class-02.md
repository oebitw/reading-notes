# Basics of HTML, CSS & JS
In this Blog we will summarize the fundamentals of HTML, CSS & Javascript.

![](https://miro.medium.com/max/5120/1*l4xICbIIYlz1OTymWCoUTw.jpeg)

## HTML
**HTML** it's a hyper text markup language, it's used to build the structure of web pages.

We start Writing our HTML Code by defining the version of HTML language that we are using in the code. In this course we are using the newest version of HTML which is HTML 5.
```
<!DOCTYPE html>
```
Then we will use the html tag which represents the root of an HTML document.
```
<html> 

     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>


     <body>

     </body>

</html>
```
html structure contains two major sections:
* Head section:

As it's shown in the code, the head section identify the page title which appear in the browser tab, head section content don't appear in the web page, it's main use is helping search engine to identify the web page and it helps in SEO.

* Body section:

It's where the web page structure is built.
Here we will build the webpage headings, paragraphs, inser images, lists and all the elemts we want to have in the web page.

In this Blog we will focus on the body section and we will go through the basics tags used in it.

We use two types of tags in the body section:
* Structural tags
* Semantic tags

Let's deep inside each type to know the differences between them.

### Structural tags

The structural tags are the main tags used to build the web page, adding or removing the tag will effect the web presence. 
* Heading tags
```
<h1> </h1>
<h2> </h2>

to

<h6> </h6>
```
if we removed the h1 tag from our code, that will remove the heading that we have in our page, so it will effect the webpage presence.

* Paragraph tag
```
<p>  </p>
```
* image tag
```
<img src="" alt="">
```
* Anchor tag 
```
<a href=""></a>
```
and many other tags used in web page structuring.

### Semantic tags

On the other hand we have the semantic tags. semantic tags are important to help us to define the webpage elements.
Each webpage has a header, a footer, some pages have side bar.
those tags will not effect thr page appearance if we remove them, however they are so important for search engines and they will help us in reading the code and designing it easily. 

![](https://miro.medium.com/max/393/1*ek7GdyA4kQly94xeShMSGg.png)

## CSS
![](https://www.kindpng.com/picc/m/23-237467_transparent-css3-logo-png-html5-css3-png-download.png)


After building the structure of our website using **HTML 5** Now we will **Design** our page using **CSS3** (Cascading Style Sheets).

Refering to the following picture: 

![](https://ariya.io/images/2013/06/decssify.png)

The website page on the right hand is built using **HTML 5**, the page structure is ready and now all we need is to apply **CSS 3** and give the page a nice design to improve the user experiance and interface with the webpage.
## CSS 3 Basics and Fundamentals
![](https://i.ytimg.com/vi/wNX7lWzchow/maxresdefault.jpg)

### CSS Syntax
CSS Syntax contains a selector and a decleration.
* **Selector**: we select the html box, class, or ID that we want to design.
Selectors will be discussed in detalis in this blog.

* **Decleration**: Here we will declare the design for the selected item in the html code.

  1. Property: We select what do we want to change, for example color, font,
width, height and border.
  2. Value: here we specify the change we want to have for the property.
  
Below is an example of changig a parahraph background color:
```
p {backgroun-color: "green"}

```

![](https://curriculum-content.s3.amazonaws.com/fewds/css-syntax.png)

### CSS3 implementation

we can implement the css3 code to our webpage structure in three different ways:

* **External CSS: Write your code in a separate file named stylesheet.css** and **link** the file to the **HTML** index file by adding the following code to the **HTML** head:

```
<head>
   <link href="css/styles.css" type="text/css"
   rel="stylesheet" />
</head>
```
and this **the best practice** and the best way to implement the css code.

* **Internal CSS: write the css code in the html head by placing them inside a style element:** 
In this way you will have to write the css code again and again for each webpage page.

```
<head>
  <style type="text/css">
      body {font-family: arial; background-color: rgb(185,179,175);}
        h1 {color: rgb(255,255,255);} 
 </style>
</head>
```

* **We can also implement the CSS3 code by adding it to the HTML lines** However this is a very bad practice.

### CSS Selectors

Now after we knew the css syntax and how to implement the css into HTML now we want to learn how to select the item we want to design.

Previously in this blog we learned about the selector in the css syntax.

now we will discuss it in details, and learn how we will select each html item:

* **Universal Selector:** Applies to all elements in the
document.
```
* {}
```
* **Type Selector:** Matches element names.

```
h1 {} for selecting the biggest header
or 
p {} for selecting a paragraph 
or
h2 {} for selecting the h2 header
 
etc ...
 ```
* **Class Selector:** Matches an element whose
class attribute has a value that
matches the one specified after
the period (or full stop) symbol.

the table below summarize the few css selectores.

![](https://pbs.twimg.com/media/EdTVA1CWAAAvVIu.jpg:large)










