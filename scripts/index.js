/* Variables for Profile */
const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");

/* Variables for Modal + Form */
const profileModal = document.querySelector(".modal");
const profileForm = profileModal.querySelector(".modal__container");
const profileNameInput = profileModal.querySelector(".form__input-name");
const profileJobInput = profileModal.querySelector(".form__input-job");
const profileCloseButton = profileModal.querySelector(".modal__close-button");

/* Open profile modal and fill form with values */
function openModal() {
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileSubTitle.textContent;
  profileModal.classList.add("modal__opened");
  console.log("Modal Opened");
}

profileEditButton.addEventListener("click", openModal);

/* Close profile modal */
function closeModal() {
  profileModal.classList.remove("modal__opened");
  console.log("Modal Closed");
}

profileCloseButton.addEventListener("click", closeModal);

/* Form Submission - Prevent Default */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameInput.value = profileTitle.textContent;
  profileJobInput.value = profileSubTitle.textContent;
  closeModal();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

/* Initial Cards */
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
