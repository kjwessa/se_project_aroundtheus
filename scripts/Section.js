//TODO Create the Section Class

// Practicum Instructions
// Creating the Section class
// Create the Section class for rendering a list of elements on a page according to the following requirements:
// It has an object with two properties (items and renderer) as the first parameter of the constructor. The items property serves as an array of data, which you need to add on a page when initializing the class. The renderer property is a function responsible for creating and rendering data on a page.
// The second parameter should be a CSS class selector where you'll add the card elements.
// It stores a public method named renderItems() that renders all elements on the page. The renderer() function will render each element on a page.
// It stores a public method named addItem() that takes a DOM element and adds it to the container.
// The Section class doesn't have markup. It receives markup through the callback function and inserts it in the container.

// TODO Utilize the pseudocode below to create the Section class
// Define a new class named Section
// Create a constructor for Section with parameters:
// An object with properties (items, renderer, classSelector)
// Store the items property in the property _items
// Store the renderer property in the property _renderer
// Find and store the container element using classSelector in the property _container
// Define method renderItems
// For each item in _items, call the _renderer method with the item as an argument
// Define method addItem with parameter (item)
// Add the item to the beginning of the _container's children
