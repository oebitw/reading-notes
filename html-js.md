# Introductory HTML and JavaScript.
Statistics shows that 4.6 billion people around the world have access to the internet.
4.2 Billion active users on different social media platforms.

![](https://images.squarespace-cdn.com/content/v1/5b79011d266c077298791201/1611995332050-09FE9C1B7J9IR23QY3IF/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/Global+Digital+Overview+January+2021+DataReportal?format=1000w)

The amount of money spent on online consumer goods purchases in 2020 exceeded US$2.4 trillion, an increase of more than 25 percent compared to 2019 level.

![](https://images.squarespace-cdn.com/content/v1/5b79011d266c077298791201/1611728903601-D0AXEPBL6718Z78C64CZ/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/Global+Ecommerce+Overview+January+2021+DataReportal?format=1000w)

Statistics shows that Every day billions of people visit different websites around the world, but do we ever stop to ask what is a website and how does it really work?

In this Blog we will discuss briefly the answers for this interesting Questions.

## How the Web Works?
Any user around the world start surfing the internet by going to the **web browser** and type the website link or a key word that will show the user different websites in the result page.

the website might be hosted on a server located anywhere in the world.Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.
In order to find a website Web browsers first connect to a Domain Name system (DNS) which is unique for every website.

**So what happens exactly ?**

* The browser goes to the DNS server, and finds the real address of the server that the website lives on.
* The browser sends [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HTTP) request message to the server, asking it to send a copy of the website to the user. 
* This message, and all other data sent between the user and the server, is sent across your internet connection using TCP/IP.
If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
* The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

![](https://www.evlio.com/wp-content/uploads/how-websites-work.jpg)

Now Let us discuss the main technologies used in building websites. Let us discuss HTML5 and JS.

* **

## HTML

![](https://www.maxpixel.net/static/photo/640/Icon-Html5-Logo-Html-2582748.png)

In this **Blog** we will go through general **Website Design** & **HTML** fundamentals.

 The following topics will be covered briefly:

 1. Website Process Design.
 2. HTML5 Layout
 3. Extra Markup

##  **Website Process & Design.**
![](data:image/png;base64,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)

Website Design is one of the most important aspects of your site.
If your website have poor design be sure that the bouncing rate will be huge, people will leave your website immediatly.
If it's an online shop, no one will buy from you, it will give a very bad impression for the users.
Succefull websites always work to increase the visitor numbers and to increase the time on page.

So before doing any programming we have to focus on our website design.

### Building Design VS Website Design

As Civil engineers build a design for the client building where they define the needs for the clients based on the building type then they start the construction work.
For example designing a home is totally deffirant than designing a hotel or a mall.

The same goes for building websites, first of all we should under stand our client needs and focus on the the target audiance for the site.
Building an Auto parts online store needs a design which is totally differant than building a fashion online store, and totally differant than building an online learning platform.

![](https://gatorworks.net/wp-content/uploads/2018/10/7-ways-house-infographic.jpg)

### Make your Design Based on : 
When you design any website you should take the following points into consideration and design the website based on them:

* Who is the Site For? (Who is the target Audiance? )

  ![](https://www.gosurvey.in/media/vzrla5wi/45-target-audience.jpg) 

* Why People Will Visit the Website ? ![](https://cdn.educba.com/academy/wp-content/uploads/2019/09/Types-of-Websites.png) 

* What Information the Visitors Need in the website? 

and many other aspects.

After you have all the data you need to design the website you can start the designing process.

### Website Design Steps

*  Build the Site Map


   ![](https://images.prismic.io/milanote/8d202269-7cb6-40aa-b697-f13ea07180a7_Site+Map+Template.png?auto=compress,format&w=2280)
  

* Design the Visual hierarchy

   ![](https://alvalyn.com/wp-content/uploads/2019/08/visual-hierarchy-1024x574.jpg)
   
   note that Visual hierarchy refers to the order in which your eyes perceive what they see. It is created by adding visual contrast between the items being
displayed. Items with higher contrast are recognized and processed first. 

* Designing Navigation

  ![](https://docs.scholantis.com/download/attachments/53772295/website_nav.png?version=1&modificationDate=1482357377323&api=v2)

* **
## **HTML5 Layout** 

After Getting the website Design ready now we will start building the website pages structure using HTML (Hyper Text Markup Language)

The Picture below summarize the webpage structure with HTML 5

![](https://i.pinimg.com/originals/46/e2/1c/46e21c46e7001fca6554cd45562268fa.jpg)

We will discuss **HTML** in details in the coming blogs.

For now Let us have a brief discussion about html basics in the next section of this blog.

* **

## **Extra Markup**

### DOCTYPES

Because there have been
several versions of HTML, each
web page should begin with a
DOCTYPE declaration to tell a
browser which version of HTML
the page is using.

1. HTML 5  DOCTYPE
```
<!DOCTYPE html>
```
2. HTML 4 DOCTYPE
```
<!DOCTYPE html PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```
3. Strict XHTML 1.0
```
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/
xhtml1-strict.dtd">
```
4. XML Declaration
```
<?xml version="1.0" ?>
```
We will focus and work using **HTML 5**.

### Adding Comment in HTML

To add a comment in HTML we use 
```
<!-- -->
```
### Block Elements

For Adding paragraphs we use
```
<p> TYPE YOUR PARAGRAPH </p>
```
For Ading a heading we use :
```
<h1> TYPE YOUR HEADING </h1>
<h2> TYPE YOUR HEADING </h2>
to
<h6> TYPE YOUR HEADING </h6>
```
For adding un-ordered list we use
```
<ul>
   <li>

   </li>
</ul>
```
### Inline Elements
Some elements will always
appear to continue on the
same line as their neighbouring
elements. These are known as
inline elements.
the following are examples for inline elements.
``` 
<a>, <b>, <em>, and <img>.
```
### IFrames

An iframe is like a little window
that has been cut into your
page — and in that window you
can see another page. The term
iframe is an abbreviation of inline
frame.
```
<iframe
width=""
height=""
src="URL">
</iframe>
```
As we see the iframe tag contain width, height and src attributes.

### Adding Information About the webpage

We add information about our webpage using the meta tag as the following:
```
<head>
 <meta name="description" content="An Essay on Installation Art" />
</head>
```
### Escape Characters
Escape chracters are used to add symbols to our html code.
for example if we want to add the Euro Currancy symbol we will add :
```
&euro;
&#8364;
```
If we want to add a copy rights symbol we will use:
```
 &copy;
 &#169;
 ```
 Below you will find a picture that summarize the escape characters.

 ![](https://odai1990.github.io/reading-notes/assesst/Scree.png)

 * **
 ## Programming with JavaScript
![](https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png)

After building the webpage structure with **HTML** , and designing it with **CSS**. Now it's the time to make our webpage interactive with the user using **Javascript**.


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
