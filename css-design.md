# Design web pages with CSS
![](https://www.kindpng.com/picc/m/23-237467_transparent-css3-logo-png-html5-css3-png-download.png)

In our last Blog we discussed toghether the basics and fundamentals of **[HTML 5](https://oebitw.github.io/reading-notes/structure-html-web)**
We knew that HTML is a **Hyper Text Markup Language** and we use it to build the structure of our webpage.
If you don't know what is **HTML** we suggest you to read our blog about it from **[Here](https://oebitw.github.io/reading-notes/structure-html-web)** firt.

After building the structure of our website using **HTML 5** Now we will **[Design](https://oebitw.github.io/reading-notes/structure-html-web)** our page using **CSS3** (Cascading Style Sheets
).

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

### CSS colors

One of the most used **values** in CSS is the colors value.
Here we will discuss briefly about CSS colors.

* **How to add a color to the css property?**

for example we want to add a color for the paragraphs text in our website.
as we discussed previously we will start by selecting the paragraphs.
```
p
```
then we will **declare** our design be specifying the **property** we want to change (for example: changing font color, background color, etc...) and finally by specifying the **value**.

 There are three ways to specify the color:
 1. typying the color name as shown in the code.
 ```
 p {color: blue;}
 ```
 2. typing the hex code of the color
 ```
 p {color: #ee3e80;}
 ```
 3. typying the RGB value of the color
 ```
 p {color: rgb(100,100,90);}
```
This is the basic way for adding a color value to the property.

CSS3 has introduced an extra value for [RGB](https://www.w3schools.com/css/css_colors_rgb.asp) colors to indicate opacity. It is known as [RGBA](https://www.w3schools.com/css/css_colors_rgb.asp), it also also allows you to specify colors as [HSL](https://www.w3schools.com/css/css_colors_hsl.asp) values,
with an optional opacity value. It is known as [HSLA](https://www.w3schools.com/css/css_colors_hsl.asp).


