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

// Preview Image Elements
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton = document.querySelector("#preview-image-close-button");

// Cards List Element
const cardsList = document.querySelector(".cards__list");

// All Modal Elements
const modals = document.querySelectorAll(".modal");

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

// Render the cards on the page
function renderCard(cardData) {
  const card = new Card(cardData, cardSelector);
  cardsList.prepend(card.getView());
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

profileCloseButton.addEventListener("click", () => closeModal(profileEditModal));

// Add New Card Form Handler
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCardTitle = evt.target.title.value;
  const newCardLink = evt.target.link.value;
  renderCard({ newCardTitle, newCardLink }, cardsList);
  closeModal(newCardModal);
  evt.target.reset();
}

function handleAddCardFormOpen(evt) {
  addFormValidator.resetValidation();
  openModal(newCardModal);
}

// Add New Card Form Listeners
newCardForm.addEventListener("submit", handleAddCardSubmit);

newCardAddButton.addEventListener("click", handleAddCardFormOpen);

newCardCloseButton.addEventListener("click", () => closeModal(newCardModal));

// Preview Image Listeners
previewImageCloseButton.addEventListener("click", () => closeModal(previewImageModal));

// Render the initial cards
initialCards.forEach(function (cardData) {
  renderCard(cardData, cardsList);
});
