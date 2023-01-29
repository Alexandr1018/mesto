import './index.css';

import {selectors, template, popupOpenButtonElement, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCardOpenButton, formElementAddNewCard, popupTemplateList, formValidatorList, profileName, profileAbout, profileAvatar, popupAvatarPhoto, formElementAvatarChanger, avatarImage} from '../utils/utils';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import Api from '../components/Api';

// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа

//Слушатели на открытие и закрытие попапа редактирования профиля
popupOpenButtonElement.addEventListener("click", () => {
  const formUserInfo = userInformation.getUserInfo();
  popupTextName.value = formUserInfo.name;
  popupTextJob.value = formUserInfo.info;
  formValidatorList[formElementProfileChanger.name].deleteValidityErrors();
  formValidatorList[formElementProfileChanger.name].disableButtonSubmit();
  formProfileChanger.open();
});
function submitFormProfileChanger(data) {
  formProfileChanger.downloadButton(true);
  api.setUserInfoServer(data)
  .then(() => {
    userInformation.setUserInfo( {userName: data['popup-text-name'], userInfo: data['popup-text-job']} );
    formProfileChanger.close();
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formProfileChanger.downloadButton(false);
  });
};
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ-----------------------------------------------------------------------------------
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа

popupAddNewCardOpenButton.addEventListener("click", () => {
  formValidatorList[formElementAddNewCard.name].deleteValidityErrors();
  formValidatorList[formElementAddNewCard.name].disableButtonSubmit();
  formAddNewCard.open();
});

// const cardsList = new Section( {}, ".elements__list");

//функция подтверждения добавления новой карточки
function submitFormAddNewCard(data) {
  formAddNewCard.downloadButton(true);
  api.postNewCardServer(data)
  .then(res => {
    const newCard = new Section({
      items: res
    }, ".elements__list");
    newCard.addItem(createCard(res));
    formAddNewCard.close();
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formAddNewCard.downloadButton(false);
  });
};

// ПОПАП ЗАМЕНЫ АВАТАРА-----------------------------------------------------------------------------------

popupAvatarPhoto.addEventListener('click', () => {
  formValidatorList[formElementAvatarChanger.name].deleteValidityErrors();
  formValidatorList[formElementAvatarChanger.name].disableButtonSubmit();
  formAvatarChanger.open();
});

function submitFormAvatarChanger(data) {
  formAvatarChanger.downloadButton(true);
  api.setUserAvatarServer(data['link-avatar'])
  .then(() => {
    userInformation.setUserInfo( {userAvatar: data['link-avatar']} );
    formAvatarChanger.close();
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formAvatarChanger.downloadButton(false);
  })
}

// функция создания карточки
function createCard(element, ownerId) {
  const cardsDefault = new Card (element, template, handleCardClick, handleCardDelete, handlePutLike, handleDeleteLike, ownerId);
  const cardElement = cardsDefault.generateCard();
  return cardElement;
}

const handleCardClick = (data) => {
  popupWithImage.open(data);
}

const handleCardDelete = (card) => {
  popupWithConfirmation.open();
  popupWithConfirmation.setEventListeners(() => {
    api.deleteCardServer(card['_id'])
    .then(() => {
    card.deleteCard();
    popupWithConfirmation.close();
  }).catch(err => {
    console.log(err);
  });
  });
}

const handlePutLike = (data) => {
  api.postLikeServer(data)
  .catch(err => {
    console.log(err);
  })
}

const handleDeleteLike = (data) => {
  api.deleteLikeServer(data)
  .catch(err => {
    console.log(err);
  })
}

// инициализируем валидацию в каждой форме и запускаем
popupTemplateList.forEach(item => {
  formValidatorList[item.name] = new FormValidator(item, selectors);
  formValidatorList[item.name].enableValidation();
});

// инициализируем класс отображения информации о пользователе
const userInformation = new UserInfo({selectorName: '.profile__profile-name', selectorInfo: '.profile__profile-job', selectorAvatar: '.profile__avatar'});

// инициализируем попап открытия картинки
const popupWithImage = new PopupWithImage(".popup_photo");
popupWithImage.setEventListeners();

// инициализируем попап добавления карточки
const formAddNewCard = new PopupWithForm(".popup_add-new-card", submitFormAddNewCard);
formAddNewCard.setEventListeners();

// инициализируем попап редактирования профиля
const formProfileChanger = new PopupWithForm(".popup_profile-changer", submitFormProfileChanger);
formProfileChanger.setEventListeners();

// инициализируем попап редактирования аватарки
const formAvatarChanger = new PopupWithForm(".popup_avatar-changer", submitFormAvatarChanger);
formAvatarChanger.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(".popup_submit");

const api = new Api ({
  url: 'https://nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: '4873e823-ccc0-45af-addc-f805bcf9ef38',
    'Content-Type': 'application/json'
  }
});

Promise.all( [api.getUserInfoServer(), api.getCardsServer()] )
.then(data => {
  userInformation.setUserInfo( {userName: data[0].name, userInfo: data[0].about, userAvatar: data[0].avatar} );
  const allCards = new Section({
    items: data[1],
    renderItems: (item) => {
      // console.log(item);
      allCards.addItem(createCard(item, data[0]._id));
    }
    }, ".elements__list");
  allCards.renderItems();
});

/*
//загрузка и установка инфы о пользователе
api.getUserInfoServer().then(data => {
  userInformation.setUserInfo( {userName: data.name, userInfo: data.about, userAvatar: data.avatar} );
}).catch(err => console.log(err));

// console.log(currentUserId);

//загрузка карточек с сервера
api.getCardsServer().then(data => {
  const allCards = new Section({
    items: data,
    renderItems: (item) => {
      allCards.addItem(createCard(item));
    }
    }, ".elements__list");
  allCards.renderItems();
}).catch(err => console.log(err)); */
