import "../pages/index.css";
import {
  initialCards,
  validationSettings,
  profileEditForm,
  profileEditButton,
  newCardForm,
  newCardAddButton,
  selectors,
  avatarEditForm,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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
const avatarFormValidator = new FormValidator(validationSettings, avatarEditForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//* Preview Image Popup
const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewImageModal,
});

cardPreviewPopup.setEventListeners();

//* Classes
const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  jobSelector: selectors.profileJob,
  avatarSelector: selectors.profileAvatar,
});

//* API Classes
let cardSection;
let userId;

//* API Calls
//TODO Refactor all the API calls if needed

function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    selectors.cardTemplate,
    (cardName, cardLink) => {
      cardPreviewPopup.open(cardName, cardLink);
    },

    (cardId) => {
      //TODO create the deleteCardPopup functionality
      // deleteCardPopup.open(cardId);
      //
    }
  );
}

api
  .getAPIInfo()
  .then(([userData, userCards]) => {
    console.log(userData);
    console.log(userCards);
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardSection = new Section(
      {
        items: userCards,
        renderer: (cardData) => {
          const newCard = createCard(cardData);
          cardSection.addItem(newCard.getView());
        },
      },
      selectors.cardSection
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

//* Render the Cards
// const createCard = (item) => {
//   const { name, link } = item;
//   const card = new Card({ name, link }, selectors.cardTemplate, ({ name, link }) => {
//     cardPreviewPopup.open({ name, link });
//   });

//   return card.getView();
// };

// const cardSection = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       cardSection.addItem(createCard(item));
//     },
//   },
//   selectors.cardSection
// );

// cardSection.renderItems();

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
