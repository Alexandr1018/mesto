
import {selectors, elementsContainer, template, popupPhoto, popupPhotoRevealImageBig, popupPhotoRevealImageCaption, popupClosePhoroRevealButton, popupProfileChanger, popupCloseProfileButton, popupOpenButtonElement, profileName, profileJob, formElementProfileChanger, popupTextName, popupTextJob, popupAddNewCard, popupAddNewCardCloseButton, popupAddNewCardOpenButton, formElementAddNewCard, popups} from './utils.js';
import {Card} from './Card.js';

//ПОПАП увеличения картинки -------------------------------------------------------------------------------------------------------------------
export default function openCard(evt) {
  const elementCaptionTextContent = evt.target.closest('.elements__element').querySelector('.elements__caption').textContent;
  popupPhotoRevealImageBig.src = evt.target.src;
  popupPhotoRevealImageCaption.textContent = elementCaptionTextContent;
  popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${elementCaptionTextContent}`;
  popupClosePhoroRevealButton.addEventListener("click", closePopupPhotoRevealVisability);
  openPopup(popupPhoto);
}

const openPopup = popup => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

const closePopupEsc = evt => {
  if (evt.key === "Escape" && document.querySelector(".popup_opened")) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

const closePopup = popup => {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
  popupClosePhoroRevealButton.removeEventListener("click", closePopupPhotoRevealVisability);
  popupCloseProfileButton.removeEventListener("click", () => closePopup(popupProfileChanger));
}

function closePopupPhotoRevealVisability() {
  closePopup(popupPhoto);
  popupPhotoRevealImageBig.src = "";
  popupPhotoRevealImageCaption.textContent = "";
};
//-------------------------------------------------------------------------------------------------------------------


// ПОПАП редактирования профиля--------------------------------------------------------------------------------------
// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const openPopupProfileChanger =  () => {
  // заменяем значения в форме, на те, что отображабтся на странице
  popupTextName.value = profileName.textContent;
  popupTextJob.value = profileJob.textContent;
  //удаляем ошибки валидации
  deleteValidityErrors(popupProfileChanger, selectors);
  //делаем кнопку сабмита неактивной
  disableButtonSubmit(popupProfileChanger, selectors);
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
  deleteValidityErrors(popupAddNewCard, selectors);
  //делаем кнопку сабмита неактивной
  disableButtonSubmit(popupAddNewCard, selectors);
  //открываем попап
  openPopup(popupAddNewCard)
});
popupAddNewCardCloseButton.addEventListener("click", () => closePopup(popupAddNewCard));
//функция подтверждения добавления новой карточки
function submitFormAddNewCard(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // инпуты формы добавления новой карточки
  const popupTextLocationName = formElementAddNewCard.querySelector(".popup__input_text_name-location").value;
  const popupTextUrl = formElementAddNewCard.querySelector(".popup__input_text_url").value;
  const formElementCardInfo = [{
      name: popupTextLocationName,
      link: popupTextUrl
    }]

  const cardNew = new Card (formElementCardInfo, template);
  cardNew.renderCards(elementsContainer);

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

//отдельная функция удаления ошибок валидации
const deleteValidityErrors = (popupName, selectors) => {
  popupName.querySelectorAll(selectors.selectorInput).forEach((popupInputElement) => {
    popupInputElement.classList.remove(selectors.classInputTypeError);
  });

  popupName.querySelectorAll(selectors.selectorError).forEach((popupErrorElement) => {
    popupErrorElement.textContent = '';
  });
}

//отдельная функция дизейбла кнопки
const disableButtonSubmit = (popupName, selectors) => {
  popupName.querySelector(selectors.selectorButton).setAttribute("disabled", true);
  popupName.querySelector(selectors.selectorButton).classList.add(selectors.classButtonDisabled);
}
