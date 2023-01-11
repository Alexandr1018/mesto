const preloadedCards = [
  {
    'popup-text-name-card': "Байкал",
    'popup-text-url': "https://images.unsplash.com/photo-1551845041-63e8e76836ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
  },
  {
    'popup-text-name-card': "Иваново",
    'popup-text-url': "https://images.unsplash.com/photo-1527440050868-25ac612aae1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    'popup-text-name-card': "Камчатка",
    'popup-text-url': "https://images.unsplash.com/photo-1557094005-176cbfe3554d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80"
  },
  {
    'popup-text-name-card': "Красноярск",
    'popup-text-url': "https://images.unsplash.com/photo-1587451152235-05466c2fc532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    'popup-text-name-card': "Москва",
    'popup-text-url': "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    'popup-text-name-card': "Тюмень",
    'popup-text-url': "https://images.unsplash.com/photo-1621878983992-bac95a1e8dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  }
];

const selectors = {
  selectorForm: '.popup__form',
  selectorInput: '.popup__input',
  selectorButton: '.popup__button',
  selectorError: '.popup__error',
  classButtonDisabled: 'popup__button_disabled',
  classInputTypeError: 'popup__input_type_error',
  classErrorVisible: 'popup__error_visible'
}

const template = "#template-element";

// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
//переменная хранит попап редактирования профиля
const popupProfileChanger = document.querySelector(".popup_profile-changer");
//кнопка закрытия попапа редактирования профиля
//кнопка открытия попапа редактирования профиля
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
// форма редактирования профиля
const formElementProfileChanger = popupProfileChanger.querySelector(".popup__form");
// инпуты формы редактирования профиля
const popupTextName = formElementProfileChanger.querySelector(".popup__input_text_name");
const popupTextJob = formElementProfileChanger.querySelector(".popup__input_text_job");

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ-----------------------------------------------------------------------------------
//переменная хранит попап добавления новой картинки
const popupAddNewCard = document.querySelector(".popup_add-new-card");
//кнопка открытия попапа добавления карточки
const popupAddNewCardOpenButton = document.querySelector(".profile__add-button");
// форма редактирования профиля
const formElementAddNewCard = popupAddNewCard.querySelector(".popup__form");

//ОБЩИЕ
const popupsList = Array.from(document.querySelectorAll(".popup"));
const popupTemplateList = Array.from(document.querySelectorAll('.popup__form'));

const formValidatorList = {};

// const formUserInfo = {};


export {preloadedCards, selectors, template, popupOpenButtonElement, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCardOpenButton, formElementAddNewCard, popupsList, popupTemplateList, formValidatorList};
