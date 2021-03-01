# Chart.js & Canvas

## Chart.js

Charts are a powerfull tool that help the users to follow the data and read it easily.

They are easy to look at and read more than tables and others elements, however it's not always easy to create a js chart.

There are 3 main types of charts:
* Line charts
* Pies Charts.
* Bar Charts.

After Setting up the [download Chart.js.](https://github.com/chartjs/Chart.js) we can now create our charts.

For example to draw a **Line Chart** we will create a canvas element in the html so the chart.js can draw the chart for us.

`<canvas id="buyers" width="600" height="400"></canvas>
`

Then we will write a script code that retrieve the context of the canvas to the html element.

and finally we will add an object to the script code that will hold properties like the labels for the base of the chart and datasets to describe the values on the chart

To Create a **Pie Chart**, first, we need the canvas element as we did for the line chart.

then we will write a script code that that retrieve the context of the canvas as we did before but this time we will have the code for pie chart not line chart.

and finally we will create the pie chart data which is mostly a value and a color for each section.

For creating a **Bar Chart** the first two steps are almost identical, and then create the data for it.

## Canvas


The HTML `<canvas>` element is used to draw graphics, via JavaScript.

The `<canvas>` element is only a container for graphics. we must use JavaScript to actually draw the graphics.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images. We also can Apply styling and colors and drawing texts.

`<canvas>` supports two basic shapes: rectangles and paths (lists of points connected by lines). 
and all other shapes must be created by combining one or more paths. 

When we are drawing a text using canvas element we want to keep in our mind that canvas rendering context provides two methods to render text:

* fillText(text, x, y [, maxWidth])
Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.

* strokeText(text, x, y [, maxWidth])
Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

