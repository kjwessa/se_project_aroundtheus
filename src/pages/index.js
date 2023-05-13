import "../pages/index.css";
import {
  validationSettings,
  profileEditForm,
  profileEditButton,
  newCardForm,
  newCardAddButton,
  avatarEditForm,
  confirmDeleteModal,
  selectors,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
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
const addFormValidator = new FormValidator(validationSettings, newCardForm);
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
const avatarFormValidator = new FormValidator(validationSettings, avatarEditForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//* Delete Card Popup
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: selectors.confirmDeleteModal,
});
deleteCardPopup.setEventListeners();

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

//* Profile Edit Popup
const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profileEditModal,
  handleFormSubmit: (formData) => {
    editProfilePopup.renderLoading(true);
    api
      .updateUserInfo(formData)
      .then((res) => {
        userInfo.setUserInfo(res);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editProfilePopup.renderLoading(false);
      });
  },
});

editProfilePopup.setEventListeners();

//* API Calls
function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    "#card-template",
    (cardName, cardLink) => {
      cardPreviewPopup.open(cardName, cardLink);
    },

    (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmitAction(() => {
        deleteCardPopup.renderLoading(true);
        api
          .deleteUserCard(cardId)
          .then(() => {
            card.deleteCard();
            deleteCardPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            deleteCardPopup.renderLoading(false);
          });
      });
    },
    (cardId) => {
      if (card.isLiked()) {
        api
          .removeCardLikes(cardId)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addCardLikes(cardId)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );
  return card;
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

//* Profile Add Card Popup
const addCardPopup = new PopupWithForm({
  popupSelector: selectors.newCardModal,
  handleFormSubmit: (formData) => {
    addCardPopup.renderLoading(true);
    api
      .addNewCard(formData)
      .then((res) => {
        const newCard = createCard(res);
        addCardPopup.close();
        cardSection.addItem(newCard.getView());
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addCardPopup.renderLoading(false);
      });
  },
});

addCardPopup.setEventListeners();

profileEditButton.addEventListener("click", function () {
  const info = userInfo.getUserInfo();
  editProfilePopup.setInputValues(info);
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

newCardAddButton.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addCardPopup.open();
});

//* Profile Edit Avatar Popup

//TODO Add the avatar edit popup and set the event listeners
