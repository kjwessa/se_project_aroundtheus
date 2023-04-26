// This exports the Section class so it can be imported and used in other files.
export default class Section {
  // The constructor accepts an options object with items and renderer properties, as well as a containerSelector.
  constructor({ items, renderer }, containerSelector) {
    // The items property is assigned to the _items property. Without seeing how this class is used, I can't determine what exactly _items contains.
    this._items = items;
    // The renderer property is assigned to the _renderer property. Again, without more context I can't determine what _renderer does.
    this._renderer = renderer;
    // The containerSelector is used to select an element from the DOM, which is then assigned to the _container property.
    this._container = document.querySelector(containerSelector);
  }

  // The renderItems method loops through each item in _items.
  renderItems() {
    // This forEach loop will iterate over each item in _items.
    this._items.forEach((item) => {
      // For each item, the _renderer method/function is called and the current item is passed to it. Without more context, I can't determine what exactly _renderer does with each item.
      this._renderer(item);
    });
  }

  // The addItem method accepts a new item to add.
  addItem(item) {
    // The new item is prepended (added at the beginning) to the _container element.
    this._container.prepend(item);
  }
}
