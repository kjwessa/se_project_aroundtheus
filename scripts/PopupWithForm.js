import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    // Call the constructor of the superclass (Popup) with an object containing the property popupSelector
    super({ popupSelector });
    // TODO Return to this area if renaming .modal__form-container to .modal__form causes issues
    // Find and store the popup form element in the property _popupForm
    this._popupForm = this._popupElement.querySelector(".modal__form");

    // Find and store all input elements in the form as an array in the property _inputList
    this._inputList = this._popupForm.querySelectorAll(".modal__form-input");

    // Find and store the save button element in the property _saveButton
    this._submitButton = this._popupForm.querySelector(".modal__submit-button");

    // Store the handleFormSubmit callback in the property _handleFormSubmit
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // Create an empty object called formValues
    const formValues = {};

    // For each input element in _inputList, add a new property to formValues with the key as the input's name and the value as the input's value
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    // Return formValues
    return formValues;
  }

  setEventListeners() {
    // Call the setEventListeners method of the superclass (Popup)
    super.setEventListeners();

    // Add an event listener for the "submit" event on the popup element
    this._popupElement.addEventListener("submit", (evt) => {
      // Prevent the default action for the submit event
      evt.preventDefault();

      // Call the _handleFormSubmit callback with the result of calling _getInputValues()
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    // Call the close method of the superclass (Popup)
    super.close();

    // Reset the popup form
    this._popupForm.reset();
  }
}
