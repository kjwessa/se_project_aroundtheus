export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  // _showInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
  //   const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);

  //   inputElement.classList.add(inputErrorClass);

  //   errorMessageElement.textContent = inputElement.validationMessage;

  //   inputElement.classList.add(errorClass);
  // }

  // _hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
  //   const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  //   inputElement.classList.remove(inputErrorClass);
  //   errorMessageElement.textContent = "";
  //   inputElement.classList.remove(errorClass);
  // }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._disableButton.disabled = true;
  }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _hasInvalidInput(inputList) {
    return !this._inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput) {
      this._disableButton();
      return;
    }

    this._enableButton();
  }

  _setEventListeners() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);

    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this.disableButton();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(options) {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
