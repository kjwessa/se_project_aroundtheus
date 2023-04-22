// TODO Create the PopupWithForm class

// TODO Follow the Practicum instructions below to create the PopupWithForm class
// Create PopupWithForm as a child class of Popup. The PopupWithForm class must comply with the following requirements:
// It takes two arguments: the popup selector, and a callback function which PopupWithForm calls when the form’s submit event fires.
// It stores a private method named _getInputValues(), which collects data from all the input fields and returns that data as an object.
// It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the submit event handler to the form and the click event listener to the close icon.
// It modifies the close() parent method in order to reset the form once the popup is closed.
// Create an instance of the PopupWithForm class for each popup.

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    // Find and store the popup form element in the property _popupForm

    // TODO Return to this area if renaming .modal__form-container to .modal__form causes issues
    this._popupForm = this._popupElement.querySelector(".modal__form");
    // Find and store all input elements in the form as an array in the property _inputList
    this._inputList = this._popupForm.querySelectorAll(".modal__form-input");
    // Find and store the save button element in the property _saveButton
    this._saveButton = this._popupForm.querySelector(".modal__submit-button");
    // Store the handleFormSubmit callback in the property _handleFormSubmit
  }

  _getInputValues() {}

  setEventListeners() {}

  close() {}

  // TODO Utilize the pseudocode below to create the PopupWithForm class
  // Call the constructor of the superclass (Popup) with an object containing the property popupSelector
  // Find and store the popup form element in the property _popupForm
  // Find and store all input elements in the form as an array in the property _inputList
  // Find and store the save button element in the property _saveButton
  // Store the handleFormSubmit callback in the property _handleFormSubmit
  // Define a private method _getInputValues
  // Create an empty object called formValues
  // For each input element in _inputList, add a new property to formValues with the key as the input's name and the value as the input's value
  // Return formValues
  // Define method setEventListeners
  // Call the setEventListeners method of the superclass (Popup)
  // Add an event listener for the "submit" event on the popup element
  //Prevent the default action for the submit event
  // Call the _handleFormSubmit callback with the result of calling _getInputValues()
  // Define method close
  // Call the close method of the superclass (Popup)
  // Reset the popup form
}

// Pretend it's index.js
// const newCardPopup = new PopupWithForm("#new-card-popup", (data) => {}");
// newCardPopup.open();
// newCardPopup.close();
