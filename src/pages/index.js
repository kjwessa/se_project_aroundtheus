import "../pages/index.css";
import {
  selectors,
  validationSettings,
  profileEditButton,
  newCardAddButton,
  avatarEditButton,
  profileEditForm,
  newCardForm,
  avatarEditForm,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

//* User Info
const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  jobSelector: selectors.profileJob,
  avatarSelector: selectors.profileAvatar,
});

//* API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "ae2a222f-f992-4644-9116-ee81d5f8ba63",
    "Content-Type": "application/json",
  },
});

let cardSection;
let userId;

//* Form Validators
const addFormValidator = new FormValidator(validationSettings, newCardForm);
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
const avatarFormValidator = new FormValidator(validationSettings, avatarEditForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//* Preview Image Popup
function handleImageClick(cardName, cardLink) {
  cardPreviewPopup.open(cardName, cardLink);
}

const cardPreviewPopup = new PopupWithImage(selectors.previewImageModal, handleImageClick);

cardPreviewPopup.setEventListeners();

//* Delete Card Popup
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: selectors.confirmDeleteModal,
});
deleteCardPopup.setEventListeners();

//* Profile Edit Popup
const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profileEditModal,
  handleFormSubmit: (values) => {
    editProfilePopup.renderLoading(true);
    api
      .updateUserInfo(values)
      .then((data) => {
        userInfo.setUserInfo(data);
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

//* Create Cards
function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    selectors.cardTemplate,
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

//* Get user cards
api
  .getAPIInfo()
  .then(([userData, userCards]) => {
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

//* Add Card Popup
const addCardPopup = new PopupWithForm({
  popupSelector: selectors.newCardModal,
  handleFormSubmit: (values) => {
    addCardPopup.renderLoading(true);
    api
      .addNewCard(values)
      .then((cardData) => {
        const newCard = createCard(cardData);
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

//* Avatar buttons
avatarEditButton.addEventListener("click", function () {
  avatarFormValidator.resetValidation();
  editAvatarPopup.open();
});

//* Profile Edit Avatar Popup
const editAvatarPopup = new PopupWithForm({
  popupSelector: selectors.avatarEditModal,
  handleFormSubmit: (values) => {
    editAvatarPopup.renderLoading(true);
    api
      .updateProfileAvatar(values.avatar)
      .then((data) => {
        userInfo.setUserAvatar(data.avatar);
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editAvatarPopup.renderLoading(false);
      });
  },
});

editAvatarPopup.setEventListeners();

//* Profile Edit Button
profileEditButton.addEventListener("click", function () {
  const info = userInfo.getUserInfo();
  editProfilePopup.setInputValues(info);
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

//* New Card Button
newCardAddButton.addEventListener("click", function () {
  addFormValidator.resetValidation();
  addCardPopup.open();
});
