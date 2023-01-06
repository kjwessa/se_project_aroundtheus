const profileEditButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-button");

function openModalProfile() {
  modal.classList.add("modal__opened");
}
profileEditButton.addEventListener("click", openModalProfile);

function closeModalProfile() {
  modal.classList.remove("modal__opened");
}

modalCloseButton.addEventListener("click", closeModalProfile);
