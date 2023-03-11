// This function shows an input error by adding error classes to the input element and its error message element

// TODO remove this function below now that it is in Validator.js
// function showInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
//   const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorMessageElement.textContent = inputElement.validationMessage;
//   inputElement.classList.add(errorClass);
// }

// This function hides an input error by removing error classes from the input element and its error message element
// TODO remove this function below now that it is in Validator.js
// function hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
//   const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorMessageElement.textContent = "";
//   inputElement.classList.remove(errorClass);
// }

// This function checks if an input is valid and calls showInputError or hideInputError accordingly
// TODO remove this function below now that it is in Validator.js
// function checkInputValidity(formElement, inputElement, options) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, options);
//   } else {
//     hideInputError(formElement, inputElement, options);
//   }
// }

// This function returns true if at least one input in the given list is invalid
// TODO remove this function below now that it is in Validator.js
// function hasInvalidInput(inputList) {
//   return !inputList.every((inputElement) => inputElement.validity.valid);
// }

// This function disables the submit button by adding the inactiveButtonClass and setting the disabled property to true
// TODO moved to the Validator class
// function disableButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.disabled = true;
// }

// This function enables the submit button by removing the inactiveButtonClass and setting the disabled property to false
// function enableButton(submitButton, inactiveButtonClass) {
//   submitButton.classList.remove(inactiveButtonClass);
//   submitButton.disabled = false;
// }

// This function toggles the state of the submit button based on the validity of the input elements
// TODO moved to the Validator class
// function toggleButtonState(inputElements, submitButton, { inactiveButtonClass }) {
//   if (hasInvalidInput(inputElements)) {
//     disableButton(submitButton, inactiveButtonClass);
//     return;
//   }

//   enableButton(submitButton, inactiveButtonClass);
// }

// TODO moved to the validator class
// This function adds event listeners to the input elements of the given form

// function setEventListeners(formElement, options) {
//   const { inputSelector } = options;
//   const inputElements = [...formElement.querySelectorAll(inputSelector)];
//   const submitButton = formElement.querySelector(options.submitButtonSelector);
//   inputElements.forEach((inputElement) => {
//     // Check input validity and toggle button state on input event
//     inputElement.addEventListener("input", (evt) => {
//       checkInputValidity(formElement, inputElement, options);
//       toggleButtonState(inputElements, submitButton, options);
//     });
//   });
// }

// This function enables form validation for all forms matching the given formSelector

//TODO remove the following code
// function enableValidation(options) {
//   const { formSelector } = options;
//   const formElements = [...document.querySelectorAll(formSelector)];
//   formElements.forEach((formElement) => {
//     // Prevent form submission on submit event
//     // TODO remove the bottom code now that it is in Validator.js
//     formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, options);
//   });
// }

// TODO Not sure why this is necessary but Julian is doing it
// enableValidation({
//   formSelector: ".modal__form-container",
//   inputSelector: ".modal__form-input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__form-input_type_error",
//   errorClass: "modal__error_visible",
// });

// Enable form validation with the configuration object
// enableValidation(configObject);
