import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationSettings,
  profileEditForm,
  profileEditButton,
  newCardForm,
  newCardAddButton,
  selectors,
} from "../utils/constants.js";

//* Form Validators
const editFormValidator = new FormValidator(validationSettings, profileEditForm);

const addFormValidator = new FormValidator(validationSettings, newCardForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();

//* Classes
const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  jobSelector: selectors.profileJob,
});

//* Preview Image Popup
const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewImageModal,
});

cardPreviewPopup.setEventListeners();

//* Render the Cards
const createCard = ({ name, link }) => {
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
