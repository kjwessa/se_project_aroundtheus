// TODO Follow the Practicum instructions below to create the PopupWithImage class
// Create the PopupWithImage class as a child class of Popup. This class has to change the parent open() method. In the open() method of the PopupWithImage class, you need to add an image to the popup and the corresponding image src attribute along with a caption for the image.

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

  // TODO Utilize the pseudocode below to create the PopupWithImage class

  // Find and store the image element in the property _image
  // Find and store the caption element in the property _caption
  // Define method open with parameters (name, link)
  // Set the caption's text content to name
  // Set the image's source to link
  // Set the image's alt attribute to name
  // Call the open method of the superclass (Popup)
}
