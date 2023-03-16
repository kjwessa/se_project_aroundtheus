import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal, closeModalOnClick, closeModalOnEscape } from "./utils.js";

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
const profileCloseButton = document.querySelector("#profile-close-button");
const profileTitle = document.querySelector("#profile-title");
const profileSubTitle = document.querySelector("#profile-subtitle");
const profileNameInput = document.querySelector("#owner-name");
const profileDescriptionInput = document.querySelector("#owner-description");
const profileEditForm = document.querySelector("#profile-edit-form");

// New Card Elements
const newCardModal = document.querySelector("#new-card-modal");
const newCardAddButton = document.querySelector("#new-card-add-button");
const newCardCloseButton = document.querySelector("#new-card-close-button");
const newCardForm = document.querySelector("#new-card-form");

// Cards List Element
const cardsList = document.querySelector(".cards__list");

// All Modal Elements
const modals = document.querySelectorAll(".modal");

//* Identify edit, add, and close buttons as elements

const closeButtons = document.querySelectorAll(".modal__close-button");

//* Find the Card Template
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

//* Find the card title and image elements
// const cardTitle = document.querySelector("#card-title");
// const cardImage = document.querySelector("#card-image");

//* Find the card and image inputs

// const inputTitle = document.querySelector("#card-title");
// const inputImage = document.querySelector("#card-link");

//* Define the card selector
const cardSelector = "#card-template";

//* Find the cards list

//* This object contains the configuration options for the form validation
const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

//* Find the edit and add forms in the DOM

const editFormElement = profileEditModal.querySelector(".modal__form-container");
const addFormElement = newCardModal.querySelector(".modal__form-container");

const editFormValidator = new FormValidator(validationSettings, editFormElement);
const addFormValidator = new FormValidator(validationSettings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//* Open the modal when users click on the edit button
function fillProfileInputs() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileSubTitle.textContent;
}

profileEditButton.addEventListener("click", () => {
  fillProfileInputs();
  openModal(profileEditModal);
});

//* Open the modal when users click on the add button
newCardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  openModal(newCardModal);
});

//* Close Buttons
closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

//* Close the modal when the users click on the overlay
modals.forEach((modal) => {
  modal.addEventListener("click", () => closeModalOnClick(modal));
});

//* Submit the edit form
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCardTitle = evt.target.title.value;
  const newCardLink = evt.target.link.value;
  renderCard({ newCardTitle, newCardLink }, cardsList);
  closeModal(newCardModal);
  addFormValidator._disableButton();
  evt.target.reset();
}

addFormElement.addEventListener("submit", handleAddCardSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubTitle.textContent = profileJobInput.value;
  closeModal(profileEditModal);
}

editFormElement.addEventListener("submit", handleProfileFormSubmit);

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector);
  cardsList.prepend(card.getView());
}

//* Render the initial cards
initialCards.forEach(function (cardData) {
  renderCard(cardData, cardsList);
});
