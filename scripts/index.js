/* Initial Card Data */
const initialCards = [
  {
    name: "Grand Teton",
    link: "https://source.unsplash.com/9nUcpfu476M/",
  },
  {
    name: "Antelope Canyon",
    link: "https://source.unsplash.com/7he8rO3qdsc",
  },
  {
    name: "Glacier National Park",
    link: "https://source.unsplash.com/qsngjpG5I5s",
  },
  {
    name: "Yosemite National Park",
    link: "https://source.unsplash.com/UCd78vfC8vU",
  },
  {
    name: "Rockey Mountain National Park",
    link: "https://source.unsplash.com/pq2DJBntZW0",
  },
  {
    name: "Zion National Park",
    link: "https://source.unsplash.com/tvg2AeJHfbM",
  },
];

/* Variables for Profile */
const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const newCardOpenButton = document.querySelector(".profile__add-button");

/* Variables for Profile Edit Modal */
const profileEditModal = document.querySelector("#profileEditModal");
const profileForm = profileEditModal.querySelector(".modal__container");
const profileNameInput = profileEditModal.querySelector(".modal__form-input_type_name");
const profileJobInput = profileEditModal.querySelector(".modal__form-input_type_job");
const profileCloseButton = profileEditModal.querySelector(".modal__close-button");

/* Variables for New Card Modal */
const newCardModal = document.querySelector("#newCardModal");
const newCardForm = newCardModal.querySelector(".modal__container");
const newCardTitleInput = newCardModal.querySelector(".modal__form-input_type_title");
const newCardLinkInput = newCardModal.querySelector(".modal__form-input_type_link");
const newCardCloseButton = newCardModal.querySelector(".modal__close-button");

/* Variables for Cards */
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

/* Open & Close Modals */
function modalOpen(modalName) {
  modalName.classList.add("modal_opened");
}

function modalClose(modalName) {
  modalName.classList.remove("modal_opened");
}

/* Fill in and Close Profile Modal */
function handleProfileOpen() {
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileSubTitle.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubTitle.textContent = profileJobInput.value;
  modalClose(profileEditModal);
}

/* Edit Profile Modal Event Listeners */
profileEditButton.addEventListener("click", () => {
  handleProfileOpen();
  modalOpen(profileEditModal);
});

profileCloseButton.addEventListener("click", () => {
  modalClose(profileEditModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

/* New Card Modal Event Listeners */
newCardOpenButton.addEventListener("click", () => {
  modalOpen(newCardModal);
});

newCardCloseButton.addEventListener("click", () => {
  modalClose(newCardModal);
});

/* Insert Cards on the page */
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  return cardElement;
}

/* New Card Added Event Listener */
newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardTitle = evt.target.title.value;
  const newCardLink = evt.target.link.value;
  const cardElement = getCardElement({
    name: newCardTitle,
    link: newCardLink,
  });
  cardsWrap.prepend(cardElement);
  modalClose(newCardModal);
  newCardForm.reset();
});

/* Like Button Toggle */

/* Add initial cards on load */
initialCards.forEach((cardData) => {
  cardsWrap.append(getCardElement(cardData));
});
