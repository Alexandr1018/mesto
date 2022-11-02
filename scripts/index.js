//Переменные попапа редактирования профиля
//переменная хранит попап редактирования профиля
const popupProfileChanger = document.querySelector(".popup_profile-changer");
//кнопка закрытия попапа редактирования профиля
const popupCloseProfileButton = popupProfileChanger.querySelector(".popup__close");
//кнопка открытия попапа редактирования профиля
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
// форма редактирования профиля
const formElementProfileChanger = popupProfileChanger.querySelector(".popup__form");
// инпуты формы редактирования профиля
const popupTextName = formElementProfileChanger.querySelector(".popup__text_input_name");
const popupTextJob = formElementProfileChanger.querySelector(".popup__text_input_job");

//Переменные попапа добавления новой карточки
//переменная хранит попап добавления новой картинки
const popupAddNewCard = document.querySelector(".popup_add-new-card");
//кнопка закрытия попапа добавления карточки
const popupAddNewCardCloseButton = popupAddNewCard.querySelector(".popup__close");
//кнопка открытия попапа добавления карточки
const popupAddNewCardOpenButton = document.querySelector(".profile__add-button");
// форма редактирования профиля
const formElementAddNewCard = popupAddNewCard.querySelector(".popup__form");
// инпуты формы добавления новой карточки
const popupTextLocationName = formElementAddNewCard.querySelector(".popup__text_input_name-location");
const popupTextUrl = formElementAddNewCard.querySelector(".popup__text_input_url");

//Переменные попапа увеличения картинки
//переменная хранит попап увеличения картинки
const popupPhoto = document.querySelector(".popup_photo");
//кнопка закрытия попапа увеличения картинки
const popupClosePhoroRevealButton = popupPhoto.querySelector(".popup__close");
//переменная открытия попапа увеличения картинки
// const elementTopSide = document.querySelector(".elements__top-side");
//переменные попапа увеличения картинки
const popupPhotoRevealImageBig = popupPhoto.querySelector(".popup__image-big");
const popupPhotoRevealImageCaption = popupPhoto.querySelector(".popup__image-caption");


//переменные секции профиля
const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__profile-name");
const profileJob = profileElement.querySelector(".profile__profile-job");

//переменные для хранения шаблона добавления новых карточек
const templateElement = document.querySelector("#template-element").content;
const elementsContainer = document.querySelector(".elements__list");


//функция открытия всех попапов
const openPopup = popup => popup.classList.add("popup_opened");
//функция закрытия всех попапов
const closePopup = popup => popup.classList.remove("popup_opened");

// функция создания новой карточки
const createNewCard = (link, name) => {
  const userElement = templateElement.querySelector(".template-element").cloneNode(true);
  userElement.querySelector(".elements__top-side").src = link;
  userElement.querySelector(".elements__caption").textContent = name;
  userElement.querySelector(".elements__top-side").alt = `Фото - ${name}`;
  return userElement;
}

// функция добавления созданной новой карточки
const addNewCard = (link, name) => {
  createNewCard(link, name);
  elementsContainer.prepend(createNewCard(link, name));
  elementsContainer.querySelector(".elements__button-like").addEventListener("click", likeCard);
  elementsContainer.querySelector(".elements__button-delete").addEventListener("click", deleteCard);
  elementsContainer.querySelector(".elements__top-side").addEventListener("click", openCard);
}

// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const openPopupProfileChanger =  () => {
  openPopup(popupProfileChanger);
  // заменяем значения в форме, на те, что отображабтся на странице
  popupTextName.value = profileName.textContent;
  popupTextJob.value = profileJob.textContent;
};
//Слушатели на открытие и закрытие попапа редактирования профиля
popupOpenButtonElement.addEventListener("click", openPopupProfileChanger);
popupCloseProfileButton.addEventListener("click", () => closePopup(popupProfileChanger));
// Делаем попап редактирования профиля: подтверждение нового профиля
function submitFormProfileChanger(evt) {
  // отменяем стандартное поведение кнопки при нажатии
  evt.preventDefault();
  // заменяем значения полей в секции profile на введенные в форме
  profileName.textContent = popupTextName.value;
  profileJob.textContent = popupTextJob.value;
  // закрываем попап
  closePopup(popupProfileChanger);
};
formElementProfileChanger.addEventListener("submit", submitFormProfileChanger);

//ДОБАВЛЕНИЕ КАРТОЧКИ
//делаем функцию предзагрузки карточек с картинками
preloadedCards.forEach( item => {
  addNewCard(item.link, item.name);
  //увеличение предзагруженных картинок
  // openCard();
});

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа
popupAddNewCardOpenButton.addEventListener("click", () => openPopup(popupAddNewCard));
popupAddNewCardCloseButton.addEventListener("click", () => closePopup(popupAddNewCard));
//функция подтверждения добавления новой карточки
function submitFormAddNewCard(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // добавляем новую карточку
  addNewCard(popupTextUrl.value, popupTextLocationName.value);
  // закрываем попап
  closePopup(popupAddNewCard);
  // обнуляем поля в форме
  formElementAddNewCard.reset();
  //увеличение предзагруженных картинок
  // openCard();
};
formElementAddNewCard.addEventListener("submit", submitFormAddNewCard);

//ЛАЙК КАРТОЧКИ
function likeCard(evt) {
  evt.target.classList.toggle("elements__button-like_active");
};

//УДАЛЕНИЕ КАРТОЧКИ
function deleteCard(evt) {
  evt.target.closest(".template-element").remove();
};

//ПОПАП УВЕЛИЧЕНИЯ КАРТОЧКИ
// Делаем попап увеличения картинки: открытие попапа, закрытие попапа
function closePopupPhotoRevealVisability() {
  closePopup(popupPhoto);
  popupPhotoRevealImageBig.src = "";
  popupPhotoRevealImageCaption.textContent = "";
};
//Слушатель на  открытие и закрытие попапа увеличения картинки
function openCard(evt) {
  popupPhotoRevealImageBig.src = evt.target.src;
  popupPhotoRevealImageCaption.textContent = evt.target.alt.split(" ").pop();
  popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${evt.target.alt.split(" ").pop()}`;
  openPopup(popupPhoto);
  popupClosePhoroRevealButton.addEventListener("click", closePopupPhotoRevealVisability);
}
