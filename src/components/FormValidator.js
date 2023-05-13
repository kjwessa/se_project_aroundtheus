class FormValidator {
  constructor(validationSettings, formElement) {
    this._inputSelector = validationSettings.formInputSelector;
    this._submitButtonSelector = validationSettings.formSubmitButtonSelector;
    this._inactiveButtonClass = validationSettings.formSubmitInactiveClass;
    this._inputErrorClass = validationSettings.formInputErrorClass;
    this._errorClass = validationSettings.formInputErrorActiveClass;

    this._form = formElement;
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    //TODO figure out if disable button is needed here
    // this._disableButton();
    //TODO Figure out if toggling button is better here
    this._toggleButtonState();
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(`#${inputElement.id}-error`);
    //TODO remove these console.logs when everything is working
    console.log(inputElement);
    console.log(inputElement.id);
    console.log(this._form);

    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    console.log("Hiding input error for input:", inputElement);
    //TODO The issue still lies here with the avatar-edit-error
    const errorMessageElement = this._form.querySelector(`#${inputElement.id}-error`);
    console.log("Error message element found:", errorMessageElement);
    if (errorMessageElement) {
      inputElement.classList.remove(this._inputErrorClass);
      errorMessageElement.textContent = "";
      errorMessageElement.classList.remove(this._errorClass);
    } else {
      console.error(`Error message element not found for input: ${inputElement.id}`);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  //TODO Figure out if disabling button is needed here
  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _hasInvalidInput() {
    return !this._inputElements.every((inputElement) => inputElement.validity.valid);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}

export default FormValidator;
