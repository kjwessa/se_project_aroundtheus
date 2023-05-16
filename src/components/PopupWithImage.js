import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewModalImage = this._popupElement.querySelector(".modal__preview-image");
    this._previewModalCaption = this._popupElement.querySelector(".modal__preview-caption");
  }

  open(name, link) {
    this._previewModalCaption.textContent = name;
    this._previewModalImage.src = link;
    this._previewModalImage.alt = name;
    super.open();
  }
}
