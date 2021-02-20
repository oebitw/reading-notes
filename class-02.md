# Basics of HTML, CSS & JS
In this Blog we will summarize the fundamentals of HTML, CSS & Javascript.



## HTML
**HTML** it's a hyper text markup language, it's used to build the structure of web pages.

We start Writing our HTML Code by defining the version of HTML language that we are using in the code. In this course we are using the newest version of HTML which is HTML 5.

Then we will use the html tag which represents the root of an HTML document.
```
<!DOCTYPE html>

<html> 

     <head>
         <meta charset="UTF-8">
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

* **

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

* **We can also implement the CSS3 code by adding it to the HTML lines** However this is a very bad practice (inline).

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

* **
## Javascript

After building the webpage structure using HTML and give it a nice design using CSS, now we will JS to make the webpage interactive with the users.

![](data:image/png;base64,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)

Javascript is a scripting language. script language it's a language that gives the cumputer a series of instructions where the computer can fellow them one by one.
we call each individual instruction as a statment and we end the statement syntax using a semicolon.
 For example:

 ```
 var greeting;
 if (hourNow > 18) {
greeting= 'Good evening';}
document.write(greeting) ;

```
as we can see the if function here contains an instruction for the computer whic is to write greeting = good evening if the time more than 6pm.

Here we have two instructions, the first instruction tells the computer that the variable greeting will equal to good evening if the time is more than 6pm and the second instruction or statment is to output the result and write it to be shown for the user.

### Javascript Variables:

As discussed in the previous example we had a variable name (greeting) and the value for this variable is the out put from the if function.
So declaring a variable be as the following:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAACJCAMAAADUiEkNAAAB6VBMVEX////+/v7tAIzs7Ow6tUv8//////zr6+v//v/7+/vv7+9NTU16qtg/iMj8//xISEgqhMlQuVv19fVCQkLrLpRJSUlGjMpPT09Ci85bW1vvAIl4eHje3t7Dw8NqamrW1ta6urr8UVI7Ozv/8O7+SEr/pKBeXl7/ioxnZ2f///eTk5P0//+ioqLKysp1dXVCt1Otra2Dg4Obm5v/4N/+dXX+V10zMzP9Wlb/t7n+TEf+rKv9np3rAI8nsT3tAID/Rkz+x8f/goHI7cxdu2mkw+M9fsIAnUbxYWT78Or51NV9qNb9Rj38cGv29v+nq/ny6O7f+dx8zYGIzZPri8TlL5fxs90+q0vhO5Lucrev3rQmtDeCzIz55vn2wOHtnNGWzZ653LzrVqXtR5Hh7d2u3b2Hz4PP7dbR48X5t8/80eT1p8X21ejyvOP2erDyirfrmcBAsmFhvH2j3qnxAHUDsSP1x9f2ltHvfbvoTpbI3uzF8MWYu99rnczP5fb3hMn0LqQAmE5huIm9z+Z/odlFr3TrUaxWk8KW2baYwuYAoD374P11lL7Y7fb5k4r+hZQ3fc75s638e4j7xLbd5v1jY/MDAO53dfSxuffIzO59iPlAQv2Tlfi7x/dVWPhudv9iYvwqL/pGS/yNld8EUNWsAAAgAElEQVR4nO19i0PbRra+BkeyRgbZkTDG4AB+BBACYjAOmJdNQgIOGJr0lec2Kb20KbdNt9vertfk7pbuZpv7g20a0jzapml+f+k9Z0aSZTAQckOSdn0SbD1Gr09H3/nOzGgsCDVzjHCrXCRsWVKzF2YM7Ap4cQmt4X1ARih8UDe6DOrXEHBi/e1zEzBve3vEu3tB4iq+Zc22pVuW7HRO1XdJhJ7+/orFRGjtH9jvlb0Mawv3b73WPYwiWh3dPr8eDHUnd94USvV1D1TbN4PbhXlvONxexsYbCvfsfEq0p7NdoNsW9/v9lYcQwsHuva7kVVinr1ug289/FwMoaL8e9IVCIb8+sFs52u2LHam2hgrE7dHtur+njHcyqPft7JlH9FCoytpWn6/yEELY17brZbwiQ7zJfvHu8ft7gEtoZLBvt3KkX4+1V18TSSbLqNFOX7iMfrcvrO3s330xvfW3jHc41O2+OItzt0R6gf1zJFdED/Y4q/mfo8h4afZFBSUJ94MK1saCvQPw/ON6j3MYuH/BYLu9N6/u67GOZZ8GcQ6PHJXUiD3Nj4XG8aaCvZULb76xYNO+tQ3Z+ZYeqKF/s9jullQubkVdZYFowQXk7dcjFTuxAadlXJy7Q4gbLmv/NMZBtbZuD/p77T0lg/52h+HtAqR8CoJz+8oFEO9gxT11403srV3zrxjv8hNaXU5UzAmDfl0RtixziroUBNdkVTUQOnG5HA2Fuu0Hq9PXScvly4+bpfDsg1QUqOAT6wRc/l1R1A37KzALbyHS2xr2d/awx1rr6HDC3JGOJFy+0jHQGQwPsKXo3/6KMAgnTvt62nydA0kPEZCahSNtsQjbGHFqT3ZQwTvYH+ruYc9FpCMZDPV3dCT77M17fL4In4wEg73ofLg/X2tSY0tpR7Jd8PT4IDp7kzCJm7AC/b0aPwWGd3tPd7A/qfAlZf6GI/vaepwnEkrBdpFX69+Dx2PBUFj3xxittum6RZJKWG/DIBXTwyGfrrcpLNjpobCXC0OLI9o7dV33BfXjgOCRWEzoiQUR71b9OEKTjIVJMhbzg8UGcf54LBTyxWIxR920+/1JTgW9wSBAoQRjoENCup9xC8TQWIc35PdD+cjxWAecohKyC/SxAq2+kDAQiwVhga+P+S7HG6Z6dThdnx7r5Qfoiem+kD/WRl8J3DbeHf0dEUVpHwjqHbYD8+ikgzgTIt1JWBsZDAYHmJrr8YfCHVqZGvv8wdBgeyRypJWiugsdiYUHUMAM+HT0xSP+zqTe3RGJJOG6gajbk+jfyWSy/JT4Q61YkpJuH4vfbT19XsXbEfaFGHP1+3v7/W09SYzVfsRb6LcKhEIeLNAKoj3W0xfp6/GFdHaPLLyFQd3X4aHeXr+eZM+m7hv0KpHejlfq34RJcACvn6lbJexr5XgP+MKUBUK2mjkfTGutekjvTHp43BG8vlDYflyBPfyhzjaeeSLecFVH/CF/K3vwI+GQn5Ws4G9WMujFOaCTJJ6NZu/Lz1ACKtIxtSIW3k6BCCuAeIcsjjviC3U6eBPU9vwJ6PWHcJs2uDJur8bBLbxtcQXSw8sEGrgNLNFCyKbUDlhePdjByyZDus8f6mWCBEr72gUn6APePi/3HoY3+ncorPA99KGUBD9m+sTlYn0II6OTmMIOaAm7fniiCOLtt+6PhberQCv3b1+vFQN7fIgww5s9GQPcc7QguyG6LYzKIfdV4G3N0Q5kTAEFGrt8rvzsUE69uq3bIKZ26iF/N2Qmgqb73Gkm8Ik9y/gE/Ts4yOYJOx48INTyb8e0kA+rO2gbQ4nw5w1oupXTXb8VTx0+sQtoUABPDuKl1zpEJOTHo3E+0XTdzri62Un0+8KuK3r55uhvT3IgfDwGT77Ffqz+p9XfyhlaO9LTDQGOeZFgibO+Tp+vjdgu51h7edbhE7+VhwKd+kJeC++KSx7w+eFxB3rosHR0+2C/H2NiJ/NSn53E23hvKYD62zoC7Qy1Ov4NN38wya2bXVKfHgoO7l7PdqBm+bc2qMf0zrb+Now2mHX40aEUXT/CLq4D5EC4rb8V6YVdFX9EoXQfg9OdtbeX1WIZbyt9tJ+Y7XgfQZ4FOtGRZOEedgOU3f39YYBTYF5plbPjZaTNKWD5t6PVu32dFt4UnteQHuPmB6XFLsUf1Acq87WXaJ0hhne/3zcYQQfTOd6KjnGow9/JqjJ6df9AuwbXowdtPmEXF/FjYg8QVuCtb8ebFwBeRulTFW8lBLuibX5ORXDPukFVABkHq+ItRHz+Tl7AX4k3fHZjFQXiTTwK4N3RZxuvhPT2hINB3y5VYgdq4WAbC5PBIwzDds53IEyCbVRo86NodepLiBBz8Obmw2jfV5n+7Iw3Wm+wKp+gEgpBPNYZ8YAq7PSw8xnwVffvNruAdUOc/BKYvZOFAvRvj3LE74+4j8L+tKQvFFJeCd5amF14f7CN6wu4HI43CG+vV/exNCzJRAty9la8gxgalVhF8KuGt7UEhTWPl7FKvFHEwAE7/GEuG316B6+52cG/IyE9WVGgNeTnmSZB109aeENGYemecgUVY8IjQSDKfdWKviADIYL6NQSxhF11Msj5RKBhfzKp41K8Jp2yxqmIXol3JMgurTMUcjnRFrwFpr85TbA9oErYpk9Aa4b9HQNWPTgTzThF2qrzNz8GFrUKtPqcIA16EM8G8da84E/9RLBqGK0jYdVlLJh8uYTCby5pDbKTa/MxgQwXzbIznBz0t7ZZwCUtfUGZygXQLHQhXgYx1EPM7y6H/Gr+HbLQwC0iuKgb2FWorEsa8PWHrbgaCVq3I6lXxzviswp06Fa8DNn3vMOHityKl4oC5+6EHGJnbhimjrxUvFH/tUeO9Pt4gIIsdyCiKUfCYfuSIRbCJVB7Mtyuae39/jB4J+Q3+kBHe6Q92enjOTIsCIWSEa+3b0DbAe+wH8Kx0tft4zyA+eRgpL1Cl0FoC3Vq/JnvDvmSiuYd1DtDDOgq/F0uwPAODoR9yYgnMhhEwWnhDQFTG/BDrFc0T4TXnbUlI3Alndim8XL5pO+4rvv9eis/ar8OWXjoeFskjNVB7Jr7/fqgFWGSkEx2hmP+vgEdQhHt1v06bmzl0vB4DupBPwhbVl/VHnMa0Vr1mK2/+2OwB93vt2qNIrrPpx/vcM4GSnlBpw1as0A7/nCnHuvFyi+wNt2ubo3E2AmCMmIFBqEAXkFbrCOCVVhwZt0RdkdDOggvzePRemBZuBNkIaqWyHHd39mp+33t1aueD8ogIPaHY50DFgsKNNmm6/0dVEj22k237b29XkvTCn2t/lh3r0foY/U8WPnqj/n6Yb1Ni5HBNr/eOYD1p97eXpvNO3rZs8z0yZHWsN7GMg22STvci3Bla1wy2RuxDwiiLRYGlQw7o2xHSauQp7eXQeVhBdqxgIanP9gnaL1t/mB/kjfywIXAJpri0YRIT5sPzq03gsTdN9AZ0/FSXlWGWVkLfyB2pFKgu2zHR3rP89lSgCiKYk+6dY/H82p031Zzt/0Jgt3otccWrhK0un9UdxqGN6lsla5ooNy+G3cz0Q4lXAXAb72K124FIkQD40dTFA+tbJ1zNWW+RHMaAt0LdnnE7AZDe9bqhlK5w51qgTjeblHGxd6uePM6vF1Op6IAKBHNqmWgiocZA5wCgVc2nu5xob99I7vwyQs7BL97eAeAshUNPjwKq9JnhPKK6l5fiZGXgnfZ0b0e1pCgeT0s4VReEwJ/eUawRXOXfkEvyKjGHVqz9AkAzr48Hu3Aj/1a2Uuo28fGB9uhLUUJhO7BxhD6b4f3gRvREFJkarunCqDt9eC8gITi+TcjlIM0CvQBng1UQhBY/igh2gpF5iaMUF5R14ffo2lexZJ8FlMzQehFKkegOaEoe++nZi6rFgGsdAfkiObl/d9sYIniZfgTjj8Qirfm3/sysmUGW+c5cSC4isdaYzG1xlMdAFpRXPM1e3bT3BKD8ARS4X1fkLz5Ys7U+MXjJvg3kybUW1Mo+zMAsjwDaHsVhQPO6Fmx8aZcAXLeZt8st6y9p7azVfbUts1hCMLgVijhPo6kArLECYecUDQP428Nsnr+ENRsV9sOEMtZqKLhrQC+JmUiIRX0zKUfZjoK1qLYLF+z3WxLtSCbxtonD6sY0fCTPwOwhL12WU4g2SRSDCQ7TBK+gorX18Fk629vI1TbVr1EeG2fgjXaKktigHRkrv9kK6+0SjJCQS5h1d/PUO8q7vNKDsgkVSSSqJIXYqqkqkTaC2/CwfbwJMW1HBwZJB+T0rKsKouKaO1XhqUy+1KoTGRcwupQYJJvuKuJsgx0Q9WDA3EfJoO92P1Jxs5rrQomTfF6kXldeGPQYzk7BkWASDTBnO1U0xT5l1le8qwAigLsTKIv9DKf10Qiv3H28Auzk+feUGVptwMC2KxJhnGGu5mPcQVhlX9UUGWz8GZj41uNL8jeelskrwfe8ol3Jg7tYBO4Zse11bd45y/yzkyJLTJerM5z1afamlBxmsW8mqAal9+drGvZYnWTdduWwVL8mNyyaLyuXBQm6ybPm7u6wUuzpcM7IH1sD2B3WnN4aeeDES/wiEYZpGxe0Oy2dmIpDq6yZfE8g6nSxlvGJ7cv5avqxsszLVDSwtlZNPn264H3hYvVQLt0DvCcOHtu4tjEhao3hJeoZhcv7KIUQE1YkFot7IrVJgbTtvhAaS1ebhnfCimzK9tvwzh489uTbrzhvrz7h7qKkuMt774WfCJcAkhtn8X/6LgTE4dPTlycuPje1S8OXVw6OcF5ha9hExNY4iIumZjY6ukTl3a5MN5U7yQupNxUYyk8q5nG3IIrUgT4aN2kOtnCZlo4X/C/yfFrwDVldoGn4P2Vloo7Bg6/+DLg3NNOOsQx8eHZi0t/XF4+fGzpxHsf/Mfy8sR7S8vLx5YPv7d8AdzW+5elk5dg/uzyGxc+hMkLny8vXZi48Mby1UrAJ87ufVBer0R4RYgtqZ3mR6wm+cjtnuMtH52fXHnr+sq7k4uN1yc//fT961cax1turHw8/unKf/35+n+2LE5+eX3lk4+vXP605Q/Xb0zeWLlyfbLiAYH78drhfe7q4eWLExcuHFI/+48TE58tn720fOjciaVLy3/88NKhi8I773148dCH584u3TbeOXvi3NUPPn9n6dzy7UvL+8fb7gtF3G1gTmsBLBI/qqSDT668vzLZ8ubbk2bjyuSNGyuf3LiCTH65ceV83X/emBy//PGbf3r7zSuf/Klw7fr7lz9Z+dP5lcnxltcb70OHlq6ePLd89eqEcfHcBxc+Xzp77uoXJz9cPrd07r2ThybUL04ug0ufO3vionrx5NK5CxcufbH0OZR4Dryxosl6c97VqK64Ou5swbtu5cq1a9c/vjKpId4fX77x5vmWlo/ejr8/fuVL8Oa6yx99Mnnjqy+vTcY/vf7pp29+1PLuFrzrxveNN3nBAZa71VkX3heWvrhw9cTVQ4D31eX3li6dW/pg+dIbAPPnxyYmjImzyycuvPHe2Q+/UGHy0tWr5yaWTi59DrxzbN94U6+i8TOgrDcgcVdHYQfBjyrRarlxueXGlbe/nBQnF99evHHj7Rt/rhtffLPQ+F8fX/kK1sWvrdy4/CngXWhZufHp+MrHX27hE9jFvvAmkB6tT9efqX8hduZM/RpkXLjjCxfLaEGUPHbp5MmJszAFE8cOn7x0cuLksUPnzoJGP3vs2MlDZ09CTsMmD8MUTBw6e+7ExQq8L17YGi+r9VYr982xKkIQeg+HHidWKt17vPHPLS3X/vwWBMbGT95vHL92vrEFll2r+8cnde+ff6vuWstbf/7oq3cbJ6/V/fWTa+Pjn7z7VktdZbx8q7AfvCVRKjY1NDc3vBhramhYXcfnRV465ghClBuA1yGuOnBmgssWpkrcIoaXxTJ/WV7+YwWfTByrms6TLXPlqlWtHDu9NpdTRTtf4ZsI3fg4ypJxVNqY0Ixb+oSJl7p3r3+50sLXMOUyXilPgE7+sK8KK1Fab2puboI/xwKuz+Zt09aCbYsca6jHE4D80oUV+zxmo89mT5/eut6yY/xjS1o08c6JrdhSraKihFu55Yt4LVcnGmb5/GGQaOEtl4czDCcBYwQUscYJ/GQf4yyZ/GtLy1/Hy6zPlzo2eX6XtLcq3iXAqAkRb2pqaAJrWDt1C6bXYKb+DF9SWsUSqyVw4Olv4NY0TK9O4wa4tqGpub4ePvg0WHPDTe5qb1w6fPgYs0PHttk7tw8dtlcc4n/uUoeOHa6YP3z2DVmVbSdmbgsZjZd1Y6i4CU5vbVa5zd781Lwaa2FAk0S18N+NTooIU40AX0sjpo6Nk+jFsAD9u5H/xyIAakujld7jErf99W3B2Ge+s4rOjSA2B4BXAoGG6UBDQ/Mp87vmwPQaTAKMN+sDDYGG1foz04H6VQA9cLO+BAwUaGoINDetnTqzCpsC/IEAu3OBaQeWnW35b1/v7zRdV8Wa1wFCBWtZt7bjKg6hII1Ajo9Y84Ydy1RBrOaSpiia4H/mm5ONK6JZpcA2g72YcDL7rABHD22qnw5Mn5m+eaZhba2+2Fxcu3VKmi7WT0/fWlsDhy3Wr63dXF1dKyql6W+mi6VAcXVttVgsnikWm9fU6VLpVrG4eqq4VryFeDeXOCgUK5TVqibLy7f/aIjVV1YrTyRbRBGNNRtQbGDEALi1o4KrD6DGarC8vPqkfP9lUZKqHMO4rMFy+avJv66I1Hi285IkWd5f848kNDAyKATWm26twud0g3jq1nQxIK2urq9N3yxNrwFB1HvO1K+vFkvFhptnbq3SQPGb9VvNxenmW8XS6nrz9NrNb1bXT4mr00V4Mhy8BVUlVKpuonn776K8w8rtRuzLYr36kCgU3mFB8ygV/RxcXXa4EEQX3/KoqYRWazy4/A8qi4XzLeOLqlwQq5So3uYg7q/lXjYYWweK02sNxTUt4F09RVdvFtcChcB3gLeytlZC/y40NWmrN0tr362V1tYk8O/1hvpioFQsTjetn5peMwOnzAbjuzPFANJ6adcjirIsU8m8/ZmKU3vX7fN2F2wBoxolvB3XY/OI3RfeZe7Ofs/Y3AsnIl4e/0qUxGt1jZefiUue31ikbK4X6uvX69VT66sBc3ptrdggTK8Vp2GqHvnkzHpTg/nNev36rZvT62dE4O/CN6R0Zn0a8T6DxdaKAbOB423x904mw2Moq9rpz1SBmuYzOwem6NjRj3W/8SheW/V5vFsJhYXJ/WFAZOHa5B9U8drku5fNA63vE4VSM6qKpmmQIaX65tKt5lJz6Ux9oFQqNa2uNpW+vQU65VYJ1jaVAqXV+qb6UqmhdOsMoPxt07f1q0319Vis1NQ83XSrxOJlcdcjyurSP0XJPH3alJf+vrT3xRHWD955zUOw+uFYNLK9b7bVqXU/iMsCKYxPXpavTf6jIO5vZNb9migXTzEx2Oz8b8B/EEUDqFmamVpEyvmu6TuuHJsb2B+oE7a+AbMl3JJtjXpm9wdSpkt/+6dY+Oy0KX592tWGUEYIvA1vA4FPUZSwMlvxiMgqCo+FpFynbXXZ5pNQWkTWVqr7N4YN14W7dAWw8EpL4+Vrk9cKMLk3xcGZEbxLz9FCK0rCt6ea9mcI7c4rm4q718dIsvnZ6XPiZ6eN927/zfFvagsNommSqYoGYGeqJhA8GPYygy9BWfJY91JzOqw6CSWwFKUQGqpzCUhAQpwmbFmkokiJjbgkizda3vrH5DUZitG99Z0piKpo4t++AZdlQ1xrOtUQ2Ic17Fb6m3VjjwdSFj44ffvrv5/++vbpE46asvNCDIiq1DUzk9KG0vMgyyD+S1j3hBLFohGrwxnbzmkuE1QKABg7tSYi3Big+ZzE0bIPDiki6JKW84XrH/33tcW9/Ts+M9Ml5mdmRsXncHBQowIqyWc3U9hpDe5G3iPBxY4Sy7f/dhrsg7I+IV6n1ctL1aloNK6lh9Ma6He+0IM4qnbHynJzAikTSkHoSmd3FDwEZbdpnZoqxtPRMdN2DCIJ41h3NdnSMv4/5t78Hc+mp8xcJjP2HLFVFZEsd9lOInhHAGJAilfdmv/v25sElsvbNkMsibR7qAJSFuTlv92+ffqfgosBEWditXrJXTPZuDY0PKx2JbIZsEQik5mDr2xKsWieqz67DQ2XyVTsymTEHfwb4N7IZtNxUWXbm7OJzFETFsqol4hRYLl8XQt4t7Q3n8zODA+J+fTwmPjiY6skFVen10WDPdgcYHkdomKpCGnI89aci8LyZ7e/FmWXirCFBusrvJTLxEXzaNrsykYTYOnhKHxnM3Ozdtcpi3+ISxGqYlc0IezEJ7I2HB2O5kWVFRbjiehRUVJNIBYE/Upd47UbV1YKz5aci8LGlCga80cPoDObJJSAsFe/XQcWETkBykIx0Bw4tQbn+5w7hUdj+WuDaq7kkHCu4P38CmMJg5hT80qKWT4b3eBTHlt7WAqF8Ned2KLd8RZzmZn5zJjA/dvCm4rxkamcQI3F/4HHDli1as3KdkzoTJcpx7O5A8CbiE1YGdUcuFUqUoFVY0gyWQtgGmQ87+FUGVO6RY/7NQ3exx142bNozqanBDGfGSsoAsqzeGb4KOurqhacVknF6Zht55e74i2L/8psHI2mVR5dHLzvZudyIFVUUcWqkGcUeGZuLqcKR7OzB9B3Via0WN9kCe36NVXimJdQbq8bsiqhLKAS01bg/ygjJNRaqiBLIoteskrhemSiyowa4YmmIpAtZomLike2q0Y4oWhU9irKUHpWjA9/P6twao5no0eZ96NCMUGKy1Rm3dMg0hE8tCgWTBnwTmcANxUkgKpurRePz8zl8tFsnlOijbeZj2ZyIshItlPYEM+Qmkx3UEpAj4JniATOmMJpwgwKfCGVOEqEXCIHl0RhK2KYL87PYW+QJxSnb7G0JhBYXVuHBUSox2oA05BliQK+JgNNlk3QzHhO8GhqMCVTdhfAIIOfNVkkhXNG1sTIuKgqBc2WhLxDJWtZV1KzpiylVNMSiRxv1lNbUTTJMEDPyQUVvQsOCRnhLMV7K3YNJ+BoQDA4U+k1Yi6aiKvp6Ibo9m9VRLxNOB+ZMipnDMlRx4wICMacncX7ABIdL0lknRjFFKQHNCVKsgAbEHC3FwY3wmWqkiEJ69OrTVhDfuo7iJ9A5pi515uQNEgjXWNxFqllMf+vsbxM4iPfp7PZma4UWyqNjuXM/EZ0imVlgjo7tjEWB9UF/j2ysRFxALczF/BcuHJZNQui1UTD8AboweuUxdGhaHZoLAX+jHATIz82lAZ9NioxvM3Z0aFEdCq/VRmDdkkLZlc0yrsPW3iPjMGSqbGxsbwopjbgk51AfGwsh/cWzltMgcac2YibJsX9DuWYJ4PLwD0QWKgV47Ow8oU2ucPNJcgXkrJ2BttwsKWhVFzHBp4SBtGRbOIOvz61KzscN7XhRHRmaCaRiY4wdxmau5NKZxJDJhsuRjZz0cyYiO/P3M0mxoAyRAdv5s0ydoJX4VFVZev9Axtv8Lv8TCI9NZTOpHNsSAEzvhHNJKLpaGbGQP6OxofmsgkQMyNiGXF2y9JwTPFuNJMXXHh3zWWGh6OgNe+aYmouc8fCOzt3FMvMz40CA8G/zEzcmJrLZmG/Y6B0IJUFzpRU5Bp1NDqTeo6051kMz9sslpoCWOESuIXV5g3TEPu0aGaK1zrEh+GBlcWu0ZRGaWoqk07heU9Fx4aiXXdyKqNzIqpjGQjttAClp2YVZRHTcGTkxUUPRTMX7TpW6mW0jXhT1OdiajjbFafy7FQinQInM43vM9Gu/OxsPDfC4mV6Kj0ST42C8kuZTmIOrAZ0Es2DpEhHu9x8ks+NRqNHc3dzKRFIOTNiXQWsY34S3YjO52ZTXeAfY4nRVDwHujRvVlTxzkaHEyDDD+QlB1BxqLilmwB5A2uvhBgKIkXciEZT7Ii5BF4VdmLHgBiPRsfQC6fAh3ImRlO8HFAI8flo2hDNjSygoilj0WG3Rceo16lR5WO+AN6jInub5vvMFIRD2aTzcJWwp43hLCR5BRmXId7D6VmMFyN45HLIBNnRFZ0B8oXENe3W38QEqZljAaYq3ul5rMfBiewIHBfvWpdYEYqNmcTcqCkeyDs+WN8jy6z1D8kcKwNBpdwU5FQ2M8pKTEXncS2wgYFxcyozhQobsvMxuAFWdRGEHDGVHd4Q8lG4VFnWxobTYOwDLTqmluv88J09rycFeOO4YGI+kQamJRDZ7mQAODEeTYAQVlWKdVGIdzaPkkI2ZqLzklOvANpjMZoZFcFZclF4ssp4S0I+A/oEQqFUDe90Ar3HgK2i86AI4Mkdis7PErczi/nvj9JnU+3PATjQOIETkARRKa5a1YFN67I6nxmiQGnxKJwyMVhKTOPx1FRixqsg3lnIoyGdsHgOLu4OYD2U6YIrlU1FM00uYkw2ATsvj3+BgCsMbzi6OBYdwvVQKJVOAKHcgScEAiBAAbGU4Q2cBWcHBaNauW5GFnKZKFKbMJuGg5qSS58k4AYwN6rm38PgOiCA8PiwFcgr2G+84j0L1EHwcB0M4MCqWCtVKJZWG0CqANyBU82rRVW8k4DLkcyRRDSugqeZ8ZGu+SzEl+E0CoypaEKszAxE4/toenhmEXUvb3G039kjTt8/HH4e2w2A0OMMbxYJ0htd3NKZL5HIhstsWs53ZMAloTlVKYSCcpnhCeoQMA4SkeXfkFQlcrzUNrwFoBE8qCrFE/z5lYXRaCa+UxXNizcAw7z57Sq2RLB+KViLokFehnHoKGhuiIqmBP6Qm8nMpac2xuajM5iAT0UzW3YkmxBnonfh2Sf8jTKnR7xmv2CtKDaJE8HGWwC6meOWyWZyiMh8uYpuR7wBXVQwGayJyQyn7wr7xFuw8RYA78RLxFvAXDMQwFAJn2fW1pH3wB3T8ZAAAAlZSURBVHtUtSszAxEnmsjD84epxVAe4qU5lnHwJhXNVLI5Av49pYiUtZGZpsbaEUTr2+rJ4PzknOPf6ehUPGXZLGQfM8NpYW+8iQh0MvR919TUVNdUdLgL8pnd8c7ugLfM8N6pyuBgTBJAETasfluU3IfNJzJ5iGFDpiRSY354ngkkcSMzg32uIV6aFn4Ca2+XxRQE+nTiTsHjXVTG5lAwl61LhVzIGW0RzcUnQ8ij1mLQz5n0rGrPuutPKvAWBWARW7LNDA/PioatTwDvaI7dMjGViI7A6cPJzWb44ar6N/CJuyMjvoMJIePA3kEmkiEY7JorjkFnQJ/NRO9AimsClneYo5ig9DSPYgLeiocTBDtDiJIQttQNkOfg2+LoDBcm1lcatIzTn4F/OXxyNDozKztqgIgjGZQ41uzOeM9GoxsC6w4nChBicwCrG29LkUMyAzqWgO9Hd+GTLXhDlmWa8jPUmT+n4bu+qOwqVagqjIKnZSEUwfo8Pph4rRT4myoMb5NSzeoLBSpYGgOoZbgvQxSSESoZhgKS2wDzehWDgmKs9BcHb7yVgiMGKDwmw1NOle6OeAsQx/Mix1uGfU2BouR4yy68Z0FDGugMKEK2xMvszv4dT+Xj4jN0o3lOww5F2GpGKuouJQBvuCsDuSUx5dQwJAUoke5AcCKQhwPeWMgajQFOLo9qWDUhtxs1VVZVILOh5wRZ02Sm0LfgneB4g/7FhAqzE6xHgFKQ+nVRFJPgCBLDmxEZw9vRber3INZ5d08CuwCFAhE+ATkBRWJLjLLNKWQLCZb6gNrGw8kW3oTdI85n4rZ4qY4lQKS/vHdeOTAyir50FOsmJFGdAsBTs7mp7DzgrXm1oXSWFVV4G5gMnjREQNfOwo1ICfwFXerdZYgoxJvX96YgQnblU6n8yFQKN5udSURnRvOp3NgYrO0azjJ2Qf2dmHWIJp5OdFmTQHcAWc4k8UzmKKu2nIFkLDeiQZiH/Cu6kRvpyvxrKjGKzX6ov1nj/WzWPj7492xFbQkUmlHlrbW/B2bWcSB7H8kkhlhtIDEX09jkOJcdvZudo9SjDWUS7JHlXSlF9fu5LOQqUkFJpeeGNatiSdN2Hl03PjfH/AsuPTWUmMMWzbm5L1HKYH1VIhMdBv0pmeChWdZcBolRYi7uKMWRubm8NSmhEpybUo3ZTOIoJGDUvJuJRufmZk1I10czCZzuolNzYxhD5zP4XEKGOTuXGOX1gqOJuVRFI7GWzoyaB0cn24yycaEgl47ncnlEAJuRjdGpmaHRuBnP3aWCotzN3WV48zYwdRZKYn0mEHr+7t1F2faXnfGmuAWWAFDM1FjXzFTXnbzIEZBSeLB/jWBtdD6Xo0iuKoEpzRlPIn83Z5M8VqDmYJ26yE6CGODWXTNDXXFsERHzY/NDY8D0+bspyAxMKIgHlVUtl0uxhi2SyuUWK8apyCeGU+JBurdLOmCqwt+XgQcK+0Hz9AQEn6bgIAsyI1Mc3s8SyaxvNjK7iDIdVjDI7KxmF8MtBCZtZNliaDtjteWKiH1VBeveyVg54MbFnpRZQLQ2gl2o1uas0diKw3aHDnsBYTm7vH2/GCZHQWgJB4i3M4Q3ywsV600Nwd0L2v0SjeDq4bdlOR+w4bdsiPdUNn/QA87wrpOKNfgFw56Nh6MoGh8Q3R6G1X7xw6NYI7M7faGYaYr2ssLMwRgwTXxu6Lk7KTyz4eAXCDbvcWN3unEG9LNHAeXnhMWtDiKkYiRtsuvo878Fg1xjMR8/2P7L1ut1Ho26R8UGKlYoG/CFcvArck/XcIpeb228s30bYxHiwMiGcmEOje8mCcyhK0BVnLEWawPfPo9xDiGK69VSa9hs7vNbR1stv4NAFO23HSJfvlmULZRfMkDkrV8a4d1WbUVivxVmDbvze/9Rj4M2Z/Qiag18y4aiw4DIf7HGjqXWsDs1qP+PRmxeBn+mbCg6rg8J4aPFMwXCfnRccb9uWrPnNVv3YfOXNRKd9SYNzmqED4lLf+Oq7/Uxu6GXKIoz7B//ASgc75a1MHhqnv3izB4OjfcNFipeMWP0YuefNXsxprmHUrSMWMRNqFYD+wUbtd8XU5xhA0CjlBXjnj8YWLN9GbE7QuE4DeDOvCtJzasPxogrk+Q/xuTBUUVr8fGAjFgvm/IZDbtEWdWzr/S0fsdG8KWyLRWsNco+SMMK1ld9Dv9OVvupwpdrxFOrYH2pViPrmtWsZjWrWc1qVrOa1axmNatZzWr2mpho8LH/VCLbb6MZBjVkg8hUNmQ+Mh2+226txHFAX82Z/j5Mlg32GoMsOT8XIEkFQ5IAdQkBx6Uw4bwCB7fj1Zzp78Mko6AhloaxbkO6ec9QRQk+ZaPAf/oUIP7BWvnwPt3Xz8LUrNJE4/4DqSAUtIf3qFAAKAsFrUAXTWPziWE8WgBfx2WXjR9IQZBh+uGjhZ/kggygFwqkwKAvbMrWlmKh8Hr8ZuPra5Ly4y+bP6o/Pfjpx58f/HL/J+PX+w8fbz56XNi8JxUeP9n86ad72oP7j4wfHj2mDx89WX/4yy+PN395+PMj+YdHT356ummQh788erhw/5eftR8e/fLo8evxG2uvr0nCo4fGU7rwYPO+8athPNF+kBafGA9/WfDek6SFnws/LjxZeCoJxg/S/YfGz/d+3rz/YEG6v/kz3Bjj8ebCAjEeF4zCYwNmfzSeFhYWauy+uxmPfjbQvzfvS7+a0pPCr0bh3qOfFxbAv0VYeq+gKT8aAKf06OH9h3BbHll4kx+lJ8qDBWI+3ZQKTw3zqfgUoF9YqBHKrkakn3/cfPD08YPC0webPz5+AI68ee/BvScLm/cXftr8dXPh8b3Cg6dPxB+M+5s/3Xvy4OEvm78+fPj03v8XfzWeehcWHt7ffPzk4YPHTx9q3L9reO9ukiESQzBUHMwT/Fg1CgaQDM7AJ8pCSYZPCTS5CDIF5tmsAApRlUTcQsJCUNQQVNzDq76e19wk1NYyYkrx15kMSHIogK9CykNhWiIGBXFIJUiHJEoNtoyCWKcqBdglynFXMTHCWVJrVN/dCLorppOYVRpssE/mzCo4LgHcAXZVwnGJRQpgUnwMCKwRDbaVhIPqqgb+uJZE+LD/B/0S8m/cZEHiL/bzIeZxlEuZzctWCo+/CeCMj8Vfn8bxrInM+wZLVhm2I2HX3w+o2UHZ/wKe5zN2DqY8DwAAAABJRU5ErkJggg==)

Always Remember that the variable name: 
* Should Only starts with letters or underscore  ( _ ) or dollar sign ($). You can't start the variable name with a number.

* It can contain letters,
numbers, dollar sign ($), or an
underscore (_). you can't insert a dash(-) or a
period (.) in a variable name.

* Variable names are case sensitive.

We have different types of data we can use in JS.

we have Booleans, strings and numbers.
there are more data types that will be discussed in the next blogs.

### Javascript Operators:

```
ASSIGNMENT OPERATORS
Assign a value to a variable
color = 'beige';
The value of co 1 or is now beige.



ARITHMETIC OPERATORS
Perform basic math
area = 3 * 2;
The value of area is now 6.



STRING OPERATORS
Combine two strings
greeting= 'Hi 1 + 'Mol ly';
The value of greeting is now Hi Molly.



COMPARISON OPERATORS
Compare two values and return true or fa 1 se
buy = 3 > 5;
The value of buy is fa 1 se.



LOGICAL OPERATORS
Combine expressions and return true or fa 1 se
buy= (5 > 3) && (2 < 4);
The value of buy is now true.
```
Lets Have a deeper look into Comparison and Logical Operators:

There are other important comparison operators like:

| Operator |Description|
|---|---|
|==|This operater compares two values to see if they are the same.|
|===	 |This operator compares two values to see if they have the same type and value.|
|!=	|This operater compares two values to see if they are not the same.|
|!==|This operator compares two values to see if they don't have the same type and value.|

For the Logical Operators Logical they allow you to comparethe results of more than one comparison operator.

* **And , Or, Logical not operators:**
```
&& (and)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false



|| (Or)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false



alert( !true ); // false
alert( !false); // true

```


### If Statements

In this section we will discuss briefly the IF and Else if Statment.

We Use the If statment to check a condition if the condition is true any statments in the subsequent code block are executed.
If the condition is false we can add else statment and the statemnts in the subsequent code of else statment will be executed.
If we have more than one condition we will use else if.

Lets have a look on the if statments syntax to clear the blurness.

```
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
















