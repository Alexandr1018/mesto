import './index.css';

import {selectors, template, popupOpenButtonElement, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCardOpenButton, formElementAddNewCard, popupTemplateList, formValidatorList, profileName, profileAbout, profileAvatar, popupAvatarPhoto, formElementAvatarChanger, avatarImage} from '../components/utils';
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
  // заменяем значения в форме, на те, что отображаются на странице
  const formUserInfo = userInformation.getUserInfo();
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
  formProfileChanger.downloadButton(true);
  api.setUserInfoServer(data)
  .then(() => {
    userInformation.setUserInfo(data);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formProfileChanger.downloadButton(false);
  });
  // заменяем значения полей в секции profile на введенные в форме
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
  formAddNewCard.downloadButton(true);
  api.postNewCardServer(data)
  .then(res => {
    const newCard = new Section({
      items: res
    }, ".elements__list");
    newCard.addItem(createCard(res));

  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formAddNewCard.downloadButton(false);
  });
  formAddNewCard.close();
};
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП ЗАМЕНЫ АВАТАРА-----------------------------------------------------------------------------------


popupAvatarPhoto.addEventListener('click', () => {
  //удаляем ошибки валидации
  formValidatorList[formElementAvatarChanger.name].deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  formValidatorList[formElementAvatarChanger.name].disableButtonSubmit();
  formAvatarChanger.open();
});

function submitFormAvatarChanger(data) {
  formAvatarChanger.downloadButton(true);
  api.setUserAvatarServer(data['link-avatar'])
  .then(() => {
    avatarImage.src = data['link-avatar'];
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    formAvatarChanger.downloadButton(false);
  })
  formAvatarChanger.close();
}

//-------------------------------------------------------------------------------------------------------------------


// функция создания карточки
function createCard(element) {
  const cardsDefault = new Card (element, template, handleCardClick, handleCardDelete, handlePutLike, handleDeleteLike);
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


//загрузка карточек с сервера
api.getCardsServer().then(data => {
  const allCards = new Section({
    items: data,
    renderer: (item) => {
      allCards.addItem(createCard(item));
    }
    }, ".elements__list");
  allCards.renderer();
}).catch(err => console.log(err));


//загрузка и установка инфы о пользователе
api.getUserInfoServer().then(data => {
  profileName.textContent = data.name;
  profileAbout.textContent = data.about;
  profileAvatar.src = data.avatar;
}).catch(err => console.log(err));



