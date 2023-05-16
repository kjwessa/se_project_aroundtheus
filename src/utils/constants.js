export const validationSettings = {
  formInputSelector: ".modal__form-input",
  formSubmitButtonSelector: ".modal__submit-button",
  formSubmitInactiveClass: "modal__submit-button_disabled",
  formInputErrorClass: "modal__form-input_type_error",
  formInputErrorActiveClass: "modal__error_visible",
};

export const selectors = {
  profileName: "#profile-name",
  profileJob: "#profile-job",
  profileAvatar: "#profile-avatar",
  profileEditModal: "#profile-edit-modal",
  previewImageModal: "#preview-image-modal",
  confirmDeleteModal: "#confirm-delete-modal",
  cardTemplate: "#card-template",
  cardSection: "#card-section",
  newCardModal: "#new-card-modal",
  avatarEditModal: "#avatar-edit-modal",
};

//* Profile Elements
export const profileEditForm = document.querySelector("#profile-edit-form");
export const profileName = document.querySelector("#profile-name");
export const profileJob = document.querySelector("#profile-job");
export const profileEditButton = document.querySelector("#profile-edit-button");

//* New Card Elements
export const newCardForm = document.querySelector("#new-card-form");
export const newCardAddButton = document.querySelector("#new-card-add-button");

//* Avatar Elements
export const avatarEditForm = document.querySelector("#avatar-edit-form");
export const avatarEditButton = document.querySelector("#avatar-edit-button");

//* Delete Modal
export const confirmDeleteModal = document.querySelector("#confirm-delete-modal");
