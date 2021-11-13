# PhotoCarousel
Photo carousel created with javascript and css
![](readme-images/carousel_1.PNG)
 
### Overview
Carousel can hold 6 images and will scroll infinately either left or right and back and forth.
The carousel works using DOM manipultion javascript. The images are all doubled into 2 panels. The panels shift by using the button clicks, and when they slide to far one direction, then one panel becomes invisible and moves to the other side.  

### Using this Carousel
Its suggested to use 3, 6, or 12 images with this particular carousel given how the move commands are built. 
In order to see exactly how the carousel is working, you can use the 'Toggle Window' button. This will change the "overflow" attribute to '' so that you can see the image panels moving behind the scenes. This can be helpful for making adjustments.
![](readme-images/carousel_2.PNG)

### Plans for the future
Going forward I would like to make this carousel more adaptable. Goals include:
 - simple way to vary number of images
 - offer different options for the buttons
 - a switch to enable vertical carousel

### Warning
unresolved bug: sometimes(though infrequently) the spacing between image panels widens. Cause currently unknown. Can be remedied easily with page refresh. 