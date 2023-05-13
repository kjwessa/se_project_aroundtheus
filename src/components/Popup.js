export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscape = this._handleEscape.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscape);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscape);
  }

  _handleEscape(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  //TODO Is this the best place to handle this?
  _handlePopupClose = (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close-button")
    ) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => this._handlePopupClose(evt));
  }
}
