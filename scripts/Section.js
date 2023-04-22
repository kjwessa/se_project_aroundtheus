export default class Section {
  constructor({ items, renderer }, classSelector) {
    // Store the items properties in the property _items
    this._items = items;

    // Store the renderer property in the property _renderer
    this._renderer = renderer;

    // Find and store the container element using classSelector in the property _container
    this._container = document.querySelector(classSelector);
  }

  renderItems() {
    // For each item in _items, call the _renderer method with the item as an argument
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    // Add the item to the beginning of the _container's children
    this._container.prepend(item);
  }
}
