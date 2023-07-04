The project uses Bootstrap's [Carousel](https://v4-alpha.getbootstrap.com/components/carousel/#content) component and `data` attributes to manipulate the carousel.

The slider has two arrows - left and right. Clicking the arrows creates a slide show. If the end is reached, the slide show moves on to the last slide (if the left arrow is clicked with the first slide active) or the first slide (if the right arrow is clicked with the last slide active).

* The `active` class is removed from the current active `.carousel-item`
* The `active` class is added to the next active `.carousel-item`

## application.js

The slider logic is implemented inside a function exported by default.

The function allows any number of sliders to be used on the page with any number of images inside.

The implementation is based on JQuery.

* removeClass()
* addClass()
* next()
* prev()
* first()
* last()
* siblings()
