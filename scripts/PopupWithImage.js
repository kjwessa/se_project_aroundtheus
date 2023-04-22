import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    // Call the constructor of the superclass (Popup) with an object containing the property popupSelector
    super({ popupSelector });

    // Find and store the image element in the property _image
    this._image = this._popupElement.querySelector(".modal__preview-image");

    // Find and store the caption element in the property _caption
    this._caption = this._popupElement.querySelector(".modal__preview-caption");
  }

  open(name, link) {
    // Set the caption's text content to name
    this._caption.textContent = name;

    // Set the image's source to link
    this._image.src = link;

    // Set the image's alt attribute to name
    this._image.alt = name;

    // Call the open method of the superclass (Popup)
    super.open();
  }
}
