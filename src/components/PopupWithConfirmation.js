import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._confirmButton = this._popupForm.querySelector(".modal__submit-button");
  }

  setSubmitAction(action) {
    this._handleConfirm = action;
  }

  // TODO consider putting this in Popup.js instead of here
  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmButton.textContent = "Saving...";
    } else {
      this._confirmButton.textContent = "Yes";
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleConfirm();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit.bind(this));
  }
}
