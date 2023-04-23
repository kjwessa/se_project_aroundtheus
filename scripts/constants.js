// Initial Card Data
export const initialCards = [
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

// This object contains the validation settings
export const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

// Profile Elements
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileTitle = document.querySelector("#profile-title");
export const profileDescription = document.querySelector("#profile-description");
export const profileNameInput = document.querySelector("#owner-name");
export const profileDescriptionInput = document.querySelector("#owner-description");

// New Card Elements
export const newCardModal = document.querySelector("#new-card-modal");
export const newCardAddButton = document.querySelector("#new-card-add-button");

// TODO determine if the classes below are still needed
// const profileEditForm = document.querySelector("#profile-edit-form");

// Close Buttons
// const closeButtons = document.querySelectorAll(".modal__close-button");

// const newCardForm = document.querySelector("#new-card-form");
// Preview Image Elements
// const previewImageModal = document.querySelector("#preview-image-modal");

// Cards List Element
// const cardsList = document.querySelector(".cards__list");

// Define the card selector
// const cardSelector = "#card-template";
