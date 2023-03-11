import Card from "./Card.js";
import { openModal, closeModal, closeModalOnEscape, closeModalOnClick } from "./utils.js";
import FormValidator from "./FormValidator.js";

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

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

/* Variables for Profile */
const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const newCardOpenButton = document.querySelector(".profile__add-button");

/* Variables for Profile Edit Modal */
const profileEditModal = document.querySelector("#profileEditModal");
const profileForm = profileEditModal.querySelector(".modal__form-container");
const profileNameInput = profileEditModal.querySelector(".modal__form-input_type_name");
const profileJobInput = profileEditModal.querySelector(".modal__form-input_type_job");

/* Variables for New Card Modal */
const newCardModal = document.querySelector("#newCardModal");
const newCardForm = newCardModal.querySelector(".modal__form-container");
const newCardInputs = [...newCardForm.querySelectorAll(".modal__form-input")];
const newCardSubmitButton = newCardForm.querySelector(".modal__button"); //?

/* Variables for Preview Image Modal */
const previewImageModal = document.querySelector("#cardPreviewModal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewName = previewImageModal.querySelector(".modal__caption");

/* Variables for Cards */
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardSelector = "#card-template";

//! Validate the forms

// This object contains the configuration options for the form validation
const configObject = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  configObject,
  document.querySelector("#profileEditModal")
);

const addFormValidator = new FormValidator(configObject, document.querySelector("#newCardModal"));

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//! Render the Cards
function renderCard(cardData) {
  const card = new Card(cardData, cardSelector);
  cardsList.prepend(card.getView());
}

//! Event Handlers
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubTitle.textContent = profileJobInput.value;
  closeModal(profileEditModal);
}

/* Close Buttons */
const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

/* Fill in and Close Profile Modal */
function fillProfileInputs() {
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileSubTitle.textContent;
}

/* Edit Profile Modal Event Listeners */
profileEditButton.addEventListener("click", () => {
  fillProfileInputs();
  openModal(profileEditModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// TODO - Remove the like button handler
/* Like Button Toggle */
function handleLikeButton(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

// TODO - Remove the delete button handler
/* Delete Button */
function handleDeleteButton(evt) {
  evt.target.closest(".card").remove();
}

/* Handle Preview Image Modal */
function handlePreviewImage(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewName.textContent = cardData.name;
  openModal(previewImageModal);
}

// TODO - Remove this which is being replaced by Card.js once the functionality is implemented and see if any remaining functionality is needed
/* Insert Cards on the page */
// function getCardElement(cardData) {
// const cardElement = cardTemplate.cloneNode(true);

// const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");
// const likeButton = cardElement.querySelector(".card__like-button");
// const deleteButton = cardElement.querySelector(".card__delete-button");

// cardImage.src = cardData.link;
// cardImage.alt = cardData.name;
//   cardTitle.textContent = cardData.name;

// likeButton.addEventListener("click", handleLikeButton);
// deleteButton.addEventListener("click", handleDeleteButton);
//   cardImage.addEventListener("click", () => {
//     handlePreviewImage(cardData);
//   });

//   return cardElement;
// }

//! Set Event Listeners
/* New Card Modal Event Listeners */
newCardOpenButton.addEventListener("click", () => {
  // TODO create the resetValidation method in FormValidator JS and then add it here
  // addFormValidator.resetValidation();
  openModal(newCardModal);
});

//! New Card Added Event Listeners
newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardTitle = evt.target.title.value;
  const newCardLink = evt.target.link.value;
  const cardData = { newCardTitle, newCardLink };
  renderCard(cardData, cardsList);
  closeModal(newCardModal);
  newCardForm.reset();
});

//! Initial Card Data on Load
initialCards.forEach(function (cardData) {
  renderCard(cardData, cardsList);
});
