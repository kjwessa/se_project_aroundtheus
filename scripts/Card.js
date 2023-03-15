import { openModal, previewImageModal, previewImage, previewCaption } from "./utils.js";

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._cardData = cardData;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewImageModal());
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

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
    this._cardElement = this._getCardTemplate();

    const cardImage = this._cardElement.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = `A photo of ${this._name}`;

    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
