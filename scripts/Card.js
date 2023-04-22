// TODO refactor the import to pull from the Popup class

import { openModal, previewImageModal, previewImage, previewCaption } from "./utils.js";

// TODO Adjust the card class to follow the new requirements
// Connect the Card class to the popup. Make Card take the handleCardClick() function into the constructor. When the user clicks on the card, this function will open the popup with an image.

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._cardElement = this._getCardTemplate();
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    this._cardImage = this._cardElement.querySelector(".card__image");

    this._setEventListeners();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeButton());
    this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
    // TODO Remove the functionality below now that there is a PopupWithImage class
    this._cardImage.addEventListener("click", () => this._handlePreviewImageModal());
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  // TODO remove the functionality below now that there is a PopupWithImage class
  _handlePreviewImageModal() {
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewCaption.textContent = this._name;
    openModal(previewImageModal);
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    const cardImage = this._cardImage;
    cardImage.src = this._link;
    cardImage.alt = `A photo of ${this._name}`;

    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;

    return this._cardElement;
  }
}

export default Card;
