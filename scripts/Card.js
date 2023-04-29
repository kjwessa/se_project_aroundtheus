class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._cardData = cardData;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => this._handleLikeIcon());

    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      this._handleDeleteIcon();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  _handleLikeIcon() {
    this._cardLikeButton.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  getView() {
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._addCardTitle = this._cardElement.querySelector(".card__title");
    this._cardLikeButton = this._cardElement.querySelector(".card__like-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = `A photo of ${this._name}`;
    this._addCardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
