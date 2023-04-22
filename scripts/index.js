// TODO Adjust the index.js file to use the new classes

import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";

/* Initial Card Data */
const initialCards = [
  {
    name: "Grand Teton",
    link: "https://source.unsplash.com/9nUcpfu476M/",
  },
  {
    name: "Antelope Canyon",
    link: "https://source.unsplash.com/7he8rO3qdsc",
  },
  {
    name: "Glacier National Park",
    link: "https://source.unsplash.com/qsngjpG5I5s",
  },
  {
    name: "Yosemite National Park",
    link: "https://source.unsplash.com/UCd78vfC8vU",
  },
  {
    name: "Rockey Mountain National Park",
    link: "https://source.unsplash.com/pq2DJBntZW0",
  },
  {
    name: "Zion National Park",
    link: "https://source.unsplash.com/tvg2AeJHfbM",
  },
];

/* --------ELEMENTS-------- */

// Profile Elements
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitle = document.querySelector("#profile-title");
const profileSubTitle = document.querySelector("#profile-subtitle");
const profileNameInput = document.querySelector("#owner-name");
const profileDescriptionInput = document.querySelector("#owner-description");
const profileEditForm = document.querySelector("#profile-edit-form");

// Close Buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

// New Card Elements
const newCardModal = document.querySelector("#new-card-modal");
const newCardAddButton = document.querySelector("#new-card-add-button");
const newCardForm = document.querySelector("#new-card-form");

// Preview Image Elements
const previewImageModal = document.querySelector("#preview-image-modal");

// Cards List Element
const cardsList = document.querySelector(".cards__list");

// Define the card selector
const cardSelector = "#card-template";

// This object contains the validation settings
const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

// Form Validators
const editFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#profile-edit-form")
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#new-card-form")
);

addFormValidator.enableValidation();

// Create the cards
function createCard(cardData) {
  const card = new Card(cardData, cardSelector);
  return card;
}

// Render the cards on the page
function renderCard(cardInstance) {
  cardsList.prepend(cardInstance.getView());
}

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

function handleProfileFormOpen(evt) {
  fillProfileInputs();
  editFormValidator.resetValidation();
  openModal(profileEditModal);
}

// Edit Profile Form Listeners
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

profileEditButton.addEventListener("click", handleProfileFormOpen);

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

function handleAddCardFormOpen(evt) {
  newCardForm.reset();
  addFormValidator.resetValidation();
  openModal(newCardModal);
}

// Add New Card Form Listeners
newCardForm.addEventListener("submit", handleAddCardSubmit);

newCardAddButton.addEventListener("click", handleAddCardFormOpen);

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
