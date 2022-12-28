import {preloadedCards, selectors, elementsContainer, template, popupPhoto, popupPhotoRevealImageBig, popupPhotoRevealImageCaption, popupProfileChanger,  popupOpenButtonElement, profileName, profileJob, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCard, popupAddNewCardOpenButton, formElementAddNewCard, popupTextLocationName, popupTextUrl, popups, popupTemplate, buttonCloseList, formValidatorList} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


//ПОПАП увеличения картинки -------------------------------------------------------------------------------------------------------------------
const openCard = (data) => {
  // const elementCaptionTextContent = evt.closest('.elements__element').querySelector('.elements__caption').textContent;
  popupPhotoRevealImageBig.src = data.link;
  popupPhotoRevealImageCaption.textContent = data.name;
  popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${data.name}`;
  openPopup(popupPhoto);
}

const openPopup = popup => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

const closePopupEsc = evt => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

const closePopup = popup => {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
}

/* function closePopupPhotoRevealVisability() {
  closePopup(popupPhoto);
  popupPhotoRevealImageBig.src = "";
  popupPhotoRevealImageCaption.textContent = "";
}; */
//-------------------------------------------------------------------------------------------------------------------


// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const openPopupProfileChanger =  () => {
  // заменяем значения в форме, на те, что отображабтся на странице
  popupTextName.value = profileName.textContent;
  popupTextJob.value = profileJob.textContent;
  //удаляем ошибки валидации
  formValidatorList[formElementProfileChanger.name].deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  formValidatorList[formElementProfileChanger.name].disableButtonSubmit();
  //открываем попап
  openPopup(popupProfileChanger);
};
//Слушатели на открытие и закрытие попапа редактирования профиля
popupOpenButtonElement.addEventListener("click", openPopupProfileChanger);
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
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ-----------------------------------------------------------------------------------
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа
popupAddNewCardOpenButton.addEventListener("click", () => {
  //удаляем ошибки валидации
  formValidatorList[formElementAddNewCard.name].deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  formValidatorList[formElementAddNewCard.name].disableButtonSubmit();
  //открываем попап
  openPopup(popupAddNewCard)
});
//функция подтверждения добавления новой карточки
function submitFormAddNewCard(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  const formElementCardInfo = {
      name: popupTextLocationName.value,
      link: popupTextUrl.value
    }
  insertCard(formElementCardInfo);
  // закрываем попап
  closePopup(popupAddNewCard);
  // обнуляем поля в форме
  formElementAddNewCard.reset();
};
formElementAddNewCard.addEventListener("submit", submitFormAddNewCard);
//-------------------------------------------------------------------------------------------------------------------

//ОБЩИЕ ФУНКЦИИ
//Функция закрытия попапа по оверлею
popups.forEach(popupElement => {
  popupElement.addEventListener('click', evt => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popupElement);
    }
  });
});

//Функция закрытия попапа по кнопке закрытия
buttonCloseList.forEach(button => {
  const popupCloser = button.closest('.popup');
  button.addEventListener("click", () => closePopup(popupCloser));
});

// функция создания карточки
function createCard(element) {
  const cardsDefault1 = new Card (element, template, openCard);
  const cardElement = cardsDefault1.generateCard();
  return cardElement;
}

// функция вставки карточки в разметку
function insertCard(element) {
  elementsContainer.prepend(createCard(element));
}

preloadedCards.forEach(item => {
  insertCard(item);
});


popupTemplate.forEach(item => {
  formValidatorList[item.name] = new FormValidator(item, selectors);
  formValidatorList[item.name].enableValidation();
});
