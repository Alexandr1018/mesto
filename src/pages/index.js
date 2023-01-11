import './index.css';

import {preloadedCards, selectors, template, popupOpenButtonElement, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCardOpenButton, formElementAddNewCard, popupTemplateList, formValidatorList} from '../components/utils';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';



//ПОПАП увеличения картинки -------------------------------------------------------------------------------------------------------------------
const handleCardClick = (data) => {
  popupWithImage.open(data);
}
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа

//Слушатели на открытие и закрытие попапа редактирования профиля
popupOpenButtonElement.addEventListener("click", () => {
  // заменяем значения в форме, на те, что отображаются на странице
  const formUserInfo = Object.assign({}, userInformation.getUserInfo());
  popupTextName.value = formUserInfo.name;
  popupTextJob.value = formUserInfo.info;
  //удаляем ошибки валидации
  formValidatorList[formElementProfileChanger.name].deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  formValidatorList[formElementProfileChanger.name].disableButtonSubmit();
  //открываем попап
  formProfileChanger.open();
});
function submitFormProfileChanger(data) {
  // заменяем значения полей в секции profile на введенные в форме
  userInformation.setUserInfo(data);
  // закрываем попап
  formProfileChanger.close();
};
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ-----------------------------------------------------------------------------------
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа



popupAddNewCardOpenButton.addEventListener("click", () => {
  //удаляем ошибки валидации
  formValidatorList[formElementAddNewCard.name].deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  formValidatorList[formElementAddNewCard.name].disableButtonSubmit();
  //открываем попап
  formAddNewCard.open();
});

//функция подтверждения добавления новой карточки
function submitFormAddNewCard(data) {
  cardsList.addItem(createCard(data));
  // закрываем попап и обнуляем поля в форме
  formAddNewCard.close();
};
//-------------------------------------------------------------------------------------------------------------------

//инициализируем классы дефортных карточек
const cardsList = new Section({
  items: preloadedCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  }
}, ".elements__list");

cardsList.renderer();

// функция создания карточки
function createCard(element) {
  const cardsDefault = new Card (element, template, handleCardClick);
  const cardElement = cardsDefault.generateCard();
  return cardElement;
}

// инициализируем валидацию в каждой форме и запускаем
popupTemplateList.forEach(item => {
  formValidatorList[item.name] = new FormValidator(item, selectors);
  formValidatorList[item.name].enableValidation();
});

// инициализируем класс отображения информации о пользователе
const userInformation = new UserInfo({selectorName: '.profile__profile-name', selectorInfo: '.profile__profile-job'});

// инициализируем попап открытия картинки
const popupWithImage = new PopupWithImage(".popup_photo");
popupWithImage.setEventListeners();

// инициализируем попап добавления карточки
const formAddNewCard = new PopupWithForm(".popup_add-new-card", submitFormAddNewCard);
formAddNewCard.setEventListeners();

// инициализируем попап редактирования профиля
const formProfileChanger = new PopupWithForm(".popup_profile-changer", submitFormProfileChanger);
formProfileChanger.setEventListeners();
