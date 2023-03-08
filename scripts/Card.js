export default class Card {
  constructor({ name, link }, cardSelector) {
    // Find the data's name and link
    this._name = name;
    this._link = link;

    // Find the card selector
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    // Add event listner for like button
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likeButton = addEventListener("click", () => {
      this._handleLikeButton();
    });

    // Add event listner for delete button
    this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // get the card view
    this._setEventListeners();
    // return the card
  }
}
