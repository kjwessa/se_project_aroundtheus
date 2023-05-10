import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  initialCards,
  validationSettings,
  profileEditForm,
  profileEditButton,
  newCardForm,
  newCardAddButton,
  selectors,
} from "../utils/constants.js";

//* API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "ae2a222f-f992-4644-9116-ee81d5f8ba63",
    "Content-Type": "application/json",
  },
});

//* Form Validators
const editFormValidator = new FormValidator(validationSettings, profileEditForm);

const addFormValidator = new FormValidator(validationSettings, newCardForm);

//TODO Add in the avatar form validator when the functionality is built

addFormValidator.enableValidation();
editFormValidator.enableValidation();
//TODO Enable the avatar form validator when the functionality is built

//* Classes
const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  jobSelector: selectors.profileJob,
  //TODO Add in the avatar selector when the functionality is built
});

//* Preview Image Popup
const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewImageModal,
});

cardPreviewPopup.setEventListeners();

//* Render the Cards
const createCard = (item) => {
  const { name, link } = item;
  const card = new Card({ name, link }, selectors.cardTemplate, ({ name, link }) => {
    cardPreviewPopup.open({ name, link });
  });

  return card.getView();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  selectors.cardSection
);

cardSection.renderItems();

//* Profile Add Card Popup
const addCardPopup = new PopupWithForm({
  popupSelector: selectors.newCardModal,
  handleFormSubmit: (formData) => {
    cardSection.addItem(createCard(formData));
  },
});

addCardPopup.setEventListeners();

newCardAddButton.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addCardPopup.open();
});

//* Profile Edit Popup
const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profileEditModal,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  },
});

editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", function () {
  const info = userInfo.getUserInfo();
  editProfilePopup.setInputValues(info);
  editFormValidator.resetValidation();
  editProfilePopup.open();
});
