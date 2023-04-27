// imports the Popup class from Popup.js.
import Popup from "./Popup.js";
// defines an exported PopupWithImage class that extends the Popup class.
export default class PopupWithImage extends Popup {
  // is the constructor method for the PopupWithImage class.
  constructor(popupSelector) {
    //  calls the parent class Popup's constructor, passing in popupSelector.
    super({ popupSelector });
    // gets a reference to the .modal__preview-image element within the popup.
    this._previewModalImage = this._popupElement.querySelector(".modal__preview-image");
    // gets a reference to the .modal__preview-caption element within the popup.
    this._previewModalCaption = this._popupElement.querySelector(".modal__preview-caption");
  }

  //  defines an open method for the PopupWithImage class.
  open(name, link) {
    // sets the text content of the .modal__preview-caption element to the name parameter.
    this._previewModalCaption.textContent = name;
    // sets the src attribute of the .modal__preview-image element to the link parameter.
    this._previewModalImage.src = link;
    // sets the alt attribute of the .modal__preview-image element to the name parameter.
    this._previewModalImage.alt = name;
    // calls the parent Popup class's open method.
    super.open();
  }
}
