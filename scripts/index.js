
import {preloadedCards, selectors, template, popupPhoto, popupPhotoRevealImageBig, popupPhotoRevealImageCaption, popupClosePhoroRevealButton, popupProfileChanger, popupCloseProfileButton, popupOpenButtonElement, profileName, profileJob, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCard, popupAddNewCardCloseButton, popupAddNewCardOpenButton, formElementAddNewCard, popupTextLocationName, popupTextUrl, popups, popupTemplate, createCard} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


//ПОПАП увеличения картинки -------------------------------------------------------------------------------------------------------------------
const openCard = (evt) => {
  const elementCaptionTextContent = evt.closest('.elements__element').querySelector('.elements__caption').textContent;
  popupPhotoRevealImageBig.src = evt.src;
  popupPhotoRevealImageCaption.textContent = elementCaptionTextContent;
  popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${elementCaptionTextContent}`;
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

function closePopupPhotoRevealVisability() {
  closePopup(popupPhoto);
  popupPhotoRevealImageBig.src = "";
  popupPhotoRevealImageCaption.textContent = "";
};

//ставим слушатель закрытия попапа
popupClosePhoroRevealButton.addEventListener("click", closePopupPhotoRevealVisability);
//-------------------------------------------------------------------------------------------------------------------


// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const openPopupProfileChanger =  () => {
  // заменяем значения в форме, на те, что отображабтся на странице
  popupTextName.value = profileName.textContent;
  popupTextJob.value = profileJob.textContent;
  //удаляем ошибки валидации
  new FormValidator(formElementProfileChanger, selectors).deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  new FormValidator(formElementProfileChanger, selectors).disableButtonSubmit();
  //открываем попап
  openPopup(popupProfileChanger);
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
//-------------------------------------------------------------------------------------------------------------------

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ-----------------------------------------------------------------------------------
// Делаем попап добавления новой карточки: открытие попапа, закрытие попапа
popupAddNewCardOpenButton.addEventListener("click", () => {
  //удаляем ошибки валидации
  new FormValidator(formElementAddNewCard, selectors).deleteValidityErrors();
  //делаем кнопку сабмита неактивной
  new FormValidator(formElementAddNewCard, selectors).disableButtonSubmit();
  //открываем попап
  openPopup(popupAddNewCard)
});
popupAddNewCardCloseButton.addEventListener("click", () => closePopup(popupAddNewCard));
//функция подтверждения добавления новой карточки
function submitFormAddNewCard(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  const formElementCardInfo = {
      name: popupTextLocationName.value,
      link: popupTextUrl.value
    }
   const cardNew = new Card (formElementCardInfo, template, openCard);
  createCard(cardNew);
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

preloadedCards.forEach(item => {
  const cardsDefault = new Card (item, template, openCard);
  createCard(cardsDefault);
});

popupTemplate.forEach(item => {
  new FormValidator(item, selectors).enableValidation();
});

