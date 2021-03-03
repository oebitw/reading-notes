# CSS Transforms, Transitions, and Animations

## Transforms

Transform is a css property that applies a 2D or a 3D transformation to the html elements.
We can rotate, scale, move, skew the elements using transform property.

As we said the transform Property has a set of wide values that help us to manipulate the html like:
	
* translate(x,y)	Defines a 2D translation.

* translate3d(x,y,z)	Defines a 3D translation.

* translateX(x)	Defines a translation, using only the value for the X-axis.

* translateY(y)	Defines a translation, using only the value for the Y-axis.

* translateZ(z)	Defines a 3D translation, using only the value for the Z-axis.

* scale(x,y)	Defines a 2D scale transformation.	
* scale3d(x,y,z)	Defines a 3D scale transformation.

* scaleX(x)	Defines a scale transformation by giving a value for the X-axis.

* scaleY(y)	Defines a scale transformation by giving a value for the Y-axis.

* scaleZ(z)	Defines a 3D scale transformation by giving a value for the Z-axis.	

* rotate(angle)	Defines a 2D rotation, the angle is specified in the parameter.	

* rotate3d(x,y,z,angle)	Defines a 3D rotation.

* rotateX(angle)	Defines a 3D rotation along the X-axis.	

* rotateY(angle)	Defines a 3D rotation along the Y-axis.	

* rotateZ(angle)	Defines a 3D rotation along the Z-axis.	

* skew(x-angle,y-angle)	Defines a 2D skew transformation along the X- and the Y-axis.

* skewX(angle)	Defines a 2D skew transformation along the X-axis.	

* skewY(angle)	Defines a 2D skew transformation along the Y-axis.

* perspective(n)	Defines a perspective view for a 3D transformed element.	

* initial	Sets this property to its default value. Read about initial.	

* inherit	Inherits this property from its parent element. Read about inherit.

## CSS Transition

CSS transitions us to change property values smoothly, over a given duration.

We have different types of css transition:

* transition
* transition-delay
* transition-duration
* transition-property
* transition-timing-function

To create a transition effect for any element we have to specify :

* The CSS property we want want to add.

* The duration of the effect.

for example:

`transition: width 2s;`

## CSS Animation


Css allows us to implement animation on the HTML elements without the need for JS or Flash.

Thjere are different properties for the CSS animation:

* @keyframes

Specifies the animation code

* animation-name

Specifies the name of the @keyframes animation


* animation-duration

Specifies how long time an animation should take to complete one cycle


* animation-delay

Specifies a delay for the start of an animation

* animation-iteration-count

Specifies the number of times an animation should be played


* animation-direction

Specifies whether an animation should be played forwards, backwards or in alternate cycles


* animation-timing-function

Specifies the speed curve of the animation


* animation-fill-mode

Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)


* animation

A shorthand property for setting all the animation properties
