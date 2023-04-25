import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

import { initialCards, validationSettings } from "./constants.js";

/* --------ELEMENTS-------- */

// // Form Validators
const editFormValidator = new FormValidator(
  validationSettings,
  // TODO Return here if the selector is wrong
  // changed from #profile-edit-form to profile-edit-modal
  profileEditModal
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  validationSettings,
  // TODO Return here if the selector is wrong
  // changed from #new-card-form to #new-card-modal
  newCardModal
);

addFormValidator.enableValidation();

// // Edit Profile Form Listeners
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

// //TODO  Refactor the modal open and close functions to use the new classes
// Edit Profile Form Handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubTitle.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function fillProfileInputs() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileSubTitle.textContent;
}

// TODO Refactor the modal open and close functions to use the new classes

// Create the cards
function createCard(cardData) {
  const card = new Card(cardData, cardSelector);
  return card;
}

// Render the cards on the page
function renderCard(cardInstance) {
  cardsList.prepend(cardInstance.getView());
}

// TODO Refactor the modal open and close functions to use the new classes
// Add New Card Form Handler
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCardTitle = evt.target.title.value;
  const newCardLink = evt.target.link.value;
  const cardInstance = createCard({ name: newCardTitle, link: newCardLink });
  renderCard(cardInstance);
  closeModal(newCardModal);
  evt.target.reset();
}

// TODO Refactor the modal open and close functions to use the new classes
function handleAddCardFormOpen(evt) {
  newCardForm.reset();
  addFormValidator.resetValidation();
  openModal(newCardModal);
}

// Add New Card Form Listeners
newCardForm.addEventListener("submit", handleAddCardSubmit);

newCardAddButton.addEventListener("click", handleAddCardFormOpen);

// TODO Refactor the modal open and close functions to use the new classes
// Add event listeners to all close buttons
closeButtons.forEach(function (button) {
  // find the closest modal
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

// Render the initial cards
initialCards.forEach(function (cardData) {
  const cardInstance = createCard(cardData);
  renderCard(cardInstance);
});
