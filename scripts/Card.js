import { openModal } from "./utils.js";

// const previewImageModal = document.querySelector("#previewImageModal");
// const previewImage = document.querySelector("#previewImage");
// const previewCaption = document.querySelector("previewCaption");

class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    const likeButton = this._cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._handleLikeButton.bind(this));

    const deleteButton = this._cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", this._handleDeleteButton.bind(this));

    // this._imageWindow = this._cardElement.querySelector("#previewImage");
    // this._imageWindow.addEventListener("click", this._handlePreviewImage(previewImageModal));
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

  // _handleCardImageModal(previewImageModal) {
  //   previewImage.src = this._link;

  //   previewImage.alt = this._name;
  //   previewImage.textContent = this._name;

  //   openModal(previewImageModal);
  // }

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
