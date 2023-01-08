/* Variables for Profile */
const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");

/* Variables for Modal + Form */
const profileModal = document.querySelector(".modal");
const profileForm = profileModal.querySelector(".modal__container");
const profileNameInput = profileModal.querySelector(".modal__form-input_type_name");
const profileJobInput = profileModal.querySelector(".modal__form-input_type_job");
const profileCloseButton = profileModal.querySelector(".modal__close-button");

/* Open profile modal and fill form with values */
function openModal() {
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileSubTitle.textContent;
  profileModal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

/* Close profile modal */
function closeModal() {
  profileModal.classList.remove("modal_opened");
}

profileCloseButton.addEventListener("click", closeModal);

/* Form Submission - Prevent Default */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubTitle.textContent = profileJobInput.value;
  closeModal();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

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

/* Insert Cards on the page */
function getCardTemplate(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardTemplate(initialCards[i]);
  const cardsContainer = document.querySelector(".cards__list");
  cardsContainer.append(card);
}
