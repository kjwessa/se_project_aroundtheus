export default class Card {
  // constructor method that takes in an object with name and link properties and a card selector
  constructor({ name, link }, cardSelector) {
    // set instance properties
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  // method that adds event listeners to the card element
  _setEventListeners() {
    // get the like button element and add a click event listener that calls the _handleLikeButton method
    const likeButton = this._cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._handleLikeButton.bind(this));

    // get the delete button element and add a click event listener that calls the _handleDeleteButton method
    const deleteButton = this._cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", this._handleDeleteButton.bind(this));
  }

  // method that toggles the active class on the like button element
  _handleLikeButton() {
    // get the like button element and toggle the "card__like-button_is-active" class
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  // method that removes the card element from the DOM
  _handleDeleteButton() {
    // remove the card element from the DOM
    this._cardElement.remove();
    // set the card element to null to remove any reference to it
    this._cardElement = null;
  }

  // method that handles previewing an image
  _handlePreviewImage() {}

  // method that retrieves the card template from the HTML
  _getCardTemplate() {
    // get the card template from the HTML using the card selector property
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  // method that creates the card view and returns it
  getView() {
    // create the card element from the card template
    this._cardElement = this._getCardTemplate();

    // set the image source and alt text for the card element
    const cardImage = this._cardElement.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = `A photo of ${this._name}`;

    // set the title text for the card element
    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;

    // add event listeners to the card element
    this._setEventListeners();

    // return the card element
    return this._cardElement;
  }
}
