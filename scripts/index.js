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
const popupPhotoReveal = document.querySelector(".popup_photo-reveal");
//кнопка закрытия попапа увеличения картинки
const popupClosePhoroRevealButton = popupPhotoReveal.querySelector(".popup__close");
//переменная открытия попапа увеличения картинки
// const elementTopSide = document.querySelector(".elements__top-side");
//переменные попапа увеличения картинки
const popupPhotoRevealImageBig = popupPhotoReveal.querySelector(".popup__image-big");
const popupPhotoRevealImageCaption = popupPhotoReveal.querySelector(".popup__image-caption");


//переменные секции профиля
const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__profile-name");
const profileJob = profileElement.querySelector(".profile__profile-job");

//переменные для хранения шаблона добавления новых карточек
const templateElement = document.querySelector("#template-element").content;
const elementsList = document.querySelector(".elements__list");

//переменная в которой хранятся предзагруженные карточки
const preloadedCards = [
  {
    name: "Байкал",
    link: "../images/body/elements/__element/elements__element_Baikal.jpg"
  },
  {
    name: "Иваново",
    link: "../images/body/elements/__element/elements__element_Ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "../images/body/elements/__element/elements__element_Kamchatka.jpg"
  },
  {
    name: "Красноярск",
    link: "../images/body/elements/__element/elements__element_Krasnoyarsk.jpg"
  },
  {
    name: "Москва",
    link: "../images/body/elements/__element/elements__element_Moskva.jpg"
  },
  {
    name: "Тюмень",
    link: "../images/body/elements/__element/elements__element_Tyumen.jpg"
  }
];

// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const togglePopupProfileChangerVisibility =  () => {
  popupProfileChanger.classList.toggle("popup_opened");
  // заменяем значения в форме, на те, что отображабтся на странице
  if (popupProfileChanger.classList.contains("popup_opened")) {
    popupTextName.value = profileName.textContent;
    popupTextJob.value = profileJob.textContent;
  }
};
//Слушатели на открытие и закрытие попапа редактирования профиля
popupOpenButtonElement.addEventListener("click", togglePopupProfileChangerVisibility);
popupCloseProfileButton.addEventListener("click", togglePopupProfileChangerVisibility);
// Делаем попап редактирования профиля: подтверждение нового профиля
function formSubmitProfileChanger(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // заменяем значения полей в секции profile на введенные в форме
  profileName.textContent = popupTextName.value;
  profileJob.textContent = popupTextJob.value;
  // закрываем попап
  togglePopupProfileChangerVisibility();
};
formElementProfileChanger.addEventListener("submit", formSubmitProfileChanger);

//ДОБАВЛЕНИЕ КАРТОЧКИ
//делаем функцию предзагрузки карточек с картинками
preloadedCards.forEach( item => {
  const userElement = templateElement.querySelector(".template-element").cloneNode(true);
  userElement.querySelector(".elements__top-side").src = item.link;
  userElement.querySelector(".elements__caption").textContent = item.name;
  elementsList.prepend(userElement);
  //лайк предзагруженных карточек
  likeCard();
  //удаление предзагруженных карточек
  deleteCard();
  //увеличение предзагруженных картинок
  openCard();
});

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа
const togglePopupAddNewCardVisibility = () => {
  popupAddNewCard.classList.toggle("popup_opened");
};
popupAddNewCardOpenButton.addEventListener("click", togglePopupAddNewCardVisibility);
popupAddNewCardCloseButton.addEventListener("click", togglePopupAddNewCardVisibility);
//функция добавления новой карточки
function addNewCard() {
  const userElement = templateElement.querySelector(".template-element").cloneNode(true);
  userElement.querySelector(".elements__top-side").src = popupTextUrl.value;
  userElement.querySelector(".elements__caption").textContent = popupTextLocationName.value;
  elementsList.prepend(userElement);
};
//функция подтверждения добавления новой карточки
function formSubmitAddNewCard(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // добавляем новую карточку
  addNewCard();
  // закрываем попап
  togglePopupAddNewCardVisibility();
  // обнуляем поля в форме
  popupTextUrl.value = "";
  popupTextLocationName.value = "";
  //лайк новых карточек
  likeCard();
  //удаление новых карточек
  deleteCard();
  //увеличение предзагруженных картинок
  openCard();
};
formElementAddNewCard.addEventListener("submit", formSubmitAddNewCard);

//ЛАЙК КАРТОЧКИ
function likeCard() {
  document.querySelector(".elements__button-like").addEventListener("click", function(evt) {
    evt.target.classList.toggle("elements__button-like_active");
  });
};

//УДАЛЕНИЕ КАРТОЧКИ
function deleteCard() {
  document.querySelector(".elements__button-delete").addEventListener("click", function(evt) {
    evt.target.closest(".template-element").remove();
  })
};

//ПОПАП УВЕЛИЧЕНИЯ КАРТОЧКИ
// Делаем попап увеличения картинки: открытие попапа, закрытие попапа
function togglePopupPhotoRevealVisability() {
  popupPhotoReveal.classList.toggle("popup_opened");
  if (!popupPhotoReveal.classList.contains("popup_opened")) {
    popupPhotoRevealImageBig.src = "";
    popupPhotoRevealImageCaption.textContent = "";
  }
};
//Слушатель на  открытие и закрытие попапа увеличения картинки
function openCard() {
  const elementTopSide = document.querySelector(".elements__top-side");
  elementTopSide.addEventListener("click", function(evt) {
    popupPhotoRevealImageBig.src = evt.target.src;
    popupPhotoRevealImageCaption.textContent = evt.target.nextElementSibling.textContent;
    // console.log(popupPhotoRevealImageBig.src);
    togglePopupPhotoRevealVisability();
    // popupPhotoRevealImageBig.src = "";
    // console.log(popupPhotoRevealImageBig.src);
  });
  popupClosePhoroRevealButton.addEventListener("click", togglePopupPhotoRevealVisability);

}
