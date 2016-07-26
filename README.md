# accordion-navigation

This plugin is a simple accordion open/close script, with some options.

## Included Files

All you will need is to add the accordion.jquery.js file into your javascript build, and good to go.

## Usage

### HTML Structure

The accordion-navigation plugin requires that the header and content be adjacent siblings:
```html
<div class="js-accordion-header">
  <h2>Title</h2
</div>
<div class="js-accordion-content">
  <p>All content goes here</p>
</div>
```

### CSS Styles

The ".js-accordion-content" needs to have an original "display: none" to start closed, or leave alone to start in the open state. The ".active" class is added to the ".js-accordion-content" element to indicate the alternate state.

```css
.js-accordion-content {
  display: none;
}
.js-accordion-content.active {
  display: block;
}
```

### Accordion-Navigation Options

* "selector" - default is ".js-accordion-header", requires the dot notation. The "header" that will be clicked on to open the accordion.
* "contentSelector" - default is ".js-accordion-content", requires the dot notation. The "content" that will be opened when the "selector" is clicked.
* "activeClassSelector" - default is "active", no dot notation, just the class name. Will be added to "contentSelector" to indicate that the element is open.
* "multipleOpen" - default is true. True allows more than one accordion to open, false will close all other accordions and only allow one to open at once.
* "animationSpeed" - default is 250. The simple-accordion uses jQuery's slideToggle() function, speed can be changed here.
* "callback" - function to add once the slideToggle() function is complete.

