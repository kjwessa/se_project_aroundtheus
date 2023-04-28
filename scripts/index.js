import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import {
  initialCards,
  validationSettings,
  profileEditForm,
  newCardForm,
  selectors,
} from "./constants.js";

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

//* Add Cards on the Page
const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewImageModal,
});

cardPreviewPopup.setEventListeners();

// const createCard = (item) => {
//   const card = new Card(item, selectors.cardTemplate, ({ name, link }) => {
//     cardPreviewPopup.open({ name, link });
//   });

//   return card.getView();
// };

// const cardSection = new Section(
//   {
//     renderer: (data) => {
//       cardSection.addItem(createCard(data));
//     },
//     items: initialCards,
//   },
//   selectors.cardsList
// );

// const cardPreviewPopup = new PopupWithImage({
//   popupSelector: "#preview-image-modal",
// });

// //TODO Find the missing selector functionality

// // TODO Refactor the modal open and close functions to use the new classes

// // Create the cards
// function createCard(cardData) {
//   const card = new Card(cardData, cardSelector);
//   return card;
// }

// // Render the cards on the page
// function renderCard(cardInstance) {
//   cardsList.prepend(cardInstance.getView());
// }

// // TODO Refactor the modal open and close functions to use the new classes
// // Add New Card Form Handler
// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   const newCardTitle = evt.target.title.value;
//   const newCardLink = evt.target.link.value;
//   const cardInstance = createCard({ name: newCardTitle, link: newCardLink });
//   renderCard(cardInstance);
//   closeModal(newCardModal);
//   evt.target.reset();
// }

// // TODO Refactor the modal open and close functions to use the new classes
// function handleAddCardFormOpen(evt) {
//   newCardForm.reset();
//   addFormValidator.resetValidation();
//   openModal(newCardModal);
// }

// // Add New Card Form Listeners
// newCardForm.addEventListener("submit", handleAddCardSubmit);

// newCardAddButton.addEventListener("click", handleAddCardFormOpen);

// // TODO Refactor the modal open and close functions to use the new classes
// // Add event listeners to all close buttons
// closeButtons.forEach(function (button) {
//   // find the closest modal
//   const modal = button.closest(".modal");
//   button.addEventListener("click", () => closeModal(modal));
// });

// // Render the initial cards
// initialCards.forEach(function (cardData) {
//   const cardInstance = createCard(cardData);
//   renderCard(cardInstance);
// });

//TODO Delete Items Below After Refactoring
// // Edit Profile Form Listeners
// profileEditForm.addEventListener("submit", handleProfileFormSubmit);
