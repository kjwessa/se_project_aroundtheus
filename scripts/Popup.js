export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    // TODO Consider refactoring this method to act like the _handleOverlay method
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

  // TODO Consider refactoring this method to act like the _handleOverlay method
  _handleEscape(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlay = (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close")
    ) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => this._handleOverlay(evt));
  }
}
