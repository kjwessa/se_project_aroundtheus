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

  // _checkInputValidity(formElement, inputElement, options) {
  //   if (!inputElement.validity.valid) {
  //     showInputError(formElement, inputElement, options);
  //   } else {
  //     hideInputError(formElement, inputElement, options);
  //   }
  // }

  // _disableButton() {
  //   submitButton.classList.add(inactiveButtonClass);
  //   submitButton.disabled = true;
  // }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // TODO This needs to be refactored
  _hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid);
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

  //write hello world
}

// const settings = {
//   formSelector: ".modal__form-container",
//   inputSelector: ".modal__form-input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__form-input_type_error",
//   errorClass: "modal__error_visible",
// };

// const editFormValidator = new FormValidator();

// const editFormValidator = new FormValidator();
// editFormValidator.enableValidation();

// const addFormValidator = new FormValidator(settings, addForm);
