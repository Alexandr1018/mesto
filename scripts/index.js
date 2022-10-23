const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const profileElement = document.querySelector(".profile");
const formElement = popupElement.querySelector(".popup__form");
const popupTextName = formElement.querySelector(".popup__text_input_name");
const popupTextJob = formElement.querySelector(".popup__text_input_job");
let profileName = profileElement.querySelector(".profile__profile-name");
let profileJob = profileElement.querySelector(".profile__profile-job");

// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const togglePopupVisibility = function () {
  popupElement.classList.toggle("popup_opened");
  // заменяем значения в форме, на те, что отображабтся на странице
  if (popupElement.classList.contains("popup_opened")) {
    popupTextName.value = profileName.textContent;
    popupTextJob.value = profileJob.textContent;
  }
};

popupOpenButtonElement.addEventListener("click", togglePopupVisibility);
popupCloseButtonElement.addEventListener("click", togglePopupVisibility);



// Делаем попап редактирования профиля: подтверждение нового профиля
function formSubmitHandler(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // заменяем значения полей в секции profile на введенные в форме
  profileName.textContent = popupTextName.value;
  profileJob.textContent = popupTextJob.value;
  // закрываем попап
  togglePopupVisibility();
}

formElement.addEventListener("submit", formSubmitHandler);
