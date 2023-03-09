/* Functions for Modals */

// function to open a modal by adding the "modal_opened" class to it
function openModal(modalName) {
  modalName.classList.add("modal_opened");

  // add event listeners to close the modal when the escape key is pressed or the user clicks outside of the modal
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("mousedown", closeModalOnClick);
}

// function to close a modal by removing the "modal_opened" class from it
function closeModal(modalName) {
  modalName.classList.remove("modal_opened");

  // remove event listeners to prevent the modal from being closed by the escape key or a click outside of the modal
  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("mousedown", closeModalOnClick);
}

// function to close the opened modal when the escape key is pressed
function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    // get the currently opened modal and close it
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

// function to close the opened modal when the user clicks outside of the modal
function closeModalOnClick(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    // close the opened modal
    closeModal(evt.target);
  }
}

// export the functions for use in other modules
export { openModal, closeModal, closeModalOnEscape, closeModalOnClick };
