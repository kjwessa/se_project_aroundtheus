export default class Popup {
  constructor({ popupSelector }) {
    // Find and store the popup element using popupSelector in the property _popupElement
    this._popupElement = document.querySelector(popupSelector);
    // Bind the _handleEscape method to the current instance and store it in the property _handleEscape
    // TODO Consider refactoring this method to act like the _handleOverlay method
    this._handleEscape = this._handleEscape.bind(this);
  }

  open() {
    // Add the class "modal_opened" to _popupElement's class list
    this._popupElement.classList.add("modal_opened");
    // Add an event listener for the "keydown" event on the document, using the _handleEscape method as the callback
    document.addEventListener("keydown", this._handleEscape);
  }

  close() {
    // Remove the "modal_opened" class from _popupElement's class list
    this._popupElement.classList.remove("modal_opened");
    // Remove the "keydown" event listener from the document
    document.removeEventListener("keydown", this._handleEscape);
  }

  // TODO Consider refactoring this method to act like the _handleOverlay method
  _handleEscape(evt) {
    // If the key property of evt is "Escape", call the close method
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
    // TODO Determine if the _handleOverlay method should have its event listener added here or in the constructor
    // Add an event listener for the "mousedown" event on _popupElement, using the _handleOverlay method as the callback
    this._popupElement.addEventListener("mousedown", (evt) => this._handleOverlay(evt));
  }
}
