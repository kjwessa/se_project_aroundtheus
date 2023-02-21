function showInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(errorClass);
}

function hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  inputElement.classList.remove(errorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function disableButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function toggleButtonState(inputElements, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputElements)) {
    disableButton(submitButton, inactiveButtonClass);
    return;
  }

  enableButton(submitButton, inactiveButtonClass);
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(options.submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const { formSelector } = options;
  const formElements = [...document.querySelectorAll(formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

// Object of Variables
const configObject = {
  formSelector: ".modal__form-container",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

// Validate the forms
enableValidation(configObject);
