class Card {
  constructor(
    cardData,
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    loadingLikeCheck
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._loadingLikeCheck = loadingLikeCheck;
    this._userId = userId;
    this._userCardOwnerId = cardData["owner"]._id;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    if (this._cardLikeButton) {
      this._cardLikeButton.addEventListener("click", () => this._handleLikeClick(this._id));
    }

    if (this._cardImage) {
      this._cardImage.addEventListener("click", () => {
        this._handleImageClick();
      });
    }

    const deleteButton = this._cardElement.querySelector(".card__delete-button");
    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        this._handleDeleteClick(this._id);
      });
    }
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  updateLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  _renderLikes() {
    this._cardLikes.textContent = this._likes.length;
    if (this.isLiked()) {
      this._cardLikeButton.classList.add("card__like-button_is-active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_is-active");
    }
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  getView() {
    this._cardElement = this._getCardTemplate();
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardTitle.textContent = this._name;
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = `A photo of ${this._name}`;
    this._cardLikeButton = this._cardElement.querySelector(".card__like-button");
    this._cardDeleteButton = this._cardElement.querySelector(".card__delete-button");
    this._cardLikes = this._cardElement.querySelector(".card__like-counter");
    this._renderLikes();
    if (this._userId !== this._userCardOwnerId) {
      if (this._cardDeleteButton) {
        this._cardDeleteButton.remove();
      }
    }
    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
