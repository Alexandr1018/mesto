// Делаем попап редактирования профиля: открытие попапа, закрытие попапа
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");

const togglePopupVisibility = function () {
  popupElement.classList.toggle("popup_opened");
};

popupOpenButtonElement.addEventListener("click", togglePopupVisibility);
popupCloseButtonElement.addEventListener("click", togglePopupVisibility);

// Делаем попап редактирования профиля: подтверждение нового профиля
const profileElement = document.querySelector(".profile");
const formElement = popupElement.querySelector(".popup__container");
const popupTextName = formElement.querySelector("#popup-text-name");
const popupTextJob = formElement.querySelector("#popup-text-job");
let profileName = profileElement.querySelector("#profile-name");
let profileJob = profileElement.querySelector("#profile-job");

function formSubmitHandler(event) {
  // отменяем стандартное поведение кнопки при нажатии
  event.preventDefault();
  // заменяем значения полей в секции profile на введенные в форме
  profileName.textContent = popupTextName.value;
  profileJob.textContent = popupTextJob.value;
  // заменяем значения в форме, на те, что отображабтся на странице
  popupTextName.setAttribute("value", profileName.textContent);
  popupTextJob.setAttribute("value", profileJob.textContent);
  // закрываем попап
  popupElement.classList.toggle("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);
