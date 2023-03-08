/* Functions for Modals */
function openModal(modalName) {
  modalName.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("mousedown", closeModalOnClick);
}

function closeModal(modalName) {
  modalName.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("mousedown", closeModalOnClick);
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function closeModalOnClick(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}

export { openModal, closeModal, closeModalOnEscape, closeModalOnClick };
