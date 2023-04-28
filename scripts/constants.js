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
//TODO Return here if there are issues after renaming the classes for clarity and consistency
export const validationSettings = {
  formInputSelector: ".modal__form-input",
  formSubmitButtonSelector: ".modal__submit-button",
  formSubmitInactiveClass: "modal__button_disabled",
  formInputErrorClass: "modal__form-input_type_error",
  formInputErrorActiveClass: "modal__error_visible",
};

export const selectors = {
  profileName: "#profile-name",
  profileJob: "#profile-job",
  profileEditModal: "#profile-edit-modal",
  previewImageModal: "#preview-image-modal",
  cardTemplate: "#card-template",
  cardSection: "#card-section",
  newCardModal: "#new-card-modal",
};

//* Profile Elements

export const profileEditForm = document.querySelector("#profile-edit-form");
export const profileName = document.querySelector("#profile-name");
export const profileJob = document.querySelector("#profile-job");
export const profileEditButton = document.querySelector("#profile-edit-button");

//* New Card Elements

export const newCardForm = document.querySelector("#new-card-form");
export const newCardAddButton = document.querySelector("#new-card-add-button");
