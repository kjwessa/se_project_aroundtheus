function setEventListeners(formEl, options) {
  // below, we destructure the variable we need from the options object
  const { inputSelector } = options;
  // but it could written also like this
  // const inputSelector = options.inputSelector
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  // then we create an array from all the inputs on each form
  inputEls.forEach((inputEl) => {
    // and for each input
    inputEl.addEventListener("input", (e) => {
      // we attach an event listener
      console.log(inputEl.validationMessage);
      // and check the validation message
    });
  });
}

function enableValidation(options) {
  // we grab all the forms on the page and put them in an array
  const formEls = [...document.querySelectorAll(options.formSelector)];
  // run a forEach over every form
  formEls.forEach((formEl) => {
    // attach an event listener and listen for the event
    formEl.addEventListener("submit", (e) => {
      // prevent the default form submission
      e.preventDefault();
    });
    // then call the event listenrs and pass through each form along with the options
    setEventListeners(formEl, options);
  });
}

const configObject = {
  formSelector: ".modal__form-container",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible",
};

enableValidation(configObject);

// loop through all inputs of form
// loop through all the inputs to see if all are valid
// if input is not valid
//grab the validation message
// add error class to input
// display error message
// disable button
// if all inputs are valid
// enable button
// reset error message
