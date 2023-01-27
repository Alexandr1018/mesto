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



// ПОПАП аватара-----------------------------------------------------------------------------------
const popupAvatarPhoto = document.querySelector('.profile__edit-avatar');
const popupAvatarChangerOpen = document.querySelector('.popup_avatar-changer');
const formElementAvatarChanger = popupAvatarChangerOpen.querySelector(".popup__form");
const avatarImage = document.querySelector('.profile__avatar');


//ОБЩИЕ
const popupsList = Array.from(document.querySelectorAll(".popup"));
const popupTemplateList = Array.from(document.querySelectorAll('.popup__form'));

const profileName = document.querySelector('.profile__profile-name');
const profileAbout = document.querySelector('.profile__profile-job');
const profileAvatar = document.querySelector('.profile__avatar');

const formValidatorList = {};



export {selectors, template, popupOpenButtonElement, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCardOpenButton, formElementAddNewCard, popupsList, popupTemplateList, formValidatorList, profileName, profileAbout, profileAvatar, popupAvatarPhoto, formElementAvatarChanger, avatarImage};
