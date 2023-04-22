// TODO Refactor this file and remove the functions that are no longer needed

export const previewImageModal = document.getElementById("preview-image-modal");
export const previewImage = document.getElementById("preview-image");
export const previewCaption = document.getElementById("preview-caption");

export function openModal(modalName) {
  modalName.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("mousedown", closeModalOnClick);
}

export function closeModal(modalName) {
  modalName.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("mousedown", closeModalOnClick);
}

export function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

export function closeModalOnClick(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}
