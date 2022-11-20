
const selectors = {
  selectorForm: '.popup__form',
  selectorInput: '.popup__input',
  selectorButton: '.popup__button',
  selectorError: '.popup__error',
  classButtonDisabled: 'popup__button_disabled',
  classInputTypeError: 'popup__input_type_error',
  classErrorVisible: 'popup__error_visible'
}

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.selectorForm));

  formList.forEach((formElement) => {
    checkInputsValidity(formElement, selectors);
  })
}

const checkInputsValidity = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.selectorInput));
  const buttonElement = formElement.querySelector(selectors.selectorButton);

  //дизейблим кнопку сабмита по умолчанию при открытии попапов
  //toggleButtonSubmit(inputList, buttonElement, selectors);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isInputValid(formElement, inputElement);
      toggleButtonSubmit(inputList, buttonElement, selectors);
    });
  });
}

const isInputValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, selectors);
  } else {
    hideErrorMessage(formElement, inputElement, selectors);
  }
}

const showErrorMessage = (formElement, inputElement, selectors) => {
  const popupError = formElement.querySelector(`.${inputElement.name}-error`)

  inputElement.classList.add(selectors.classInputTypeError);
  popupError.textContent = inputElement.validationMessage;
  popupError.classList.add(selectors.classErrorVisible);
}

const hideErrorMessage = (formElement, inputElement, selectors) => {
  const popupError = formElement.querySelector(`.${inputElement.name}-error`)

  inputElement.classList.remove(selectors.classInputTypeError);
  popupError.textContent = "";
  popupError.classList.remove(selectors.classErrorVisible);
}

const toggleButtonSubmit = (inputList, buttonElement, selectors) => {
  if (isFormInputsValid(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(selectors.classButtonDisabled);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(selectors.classButtonDisabled);
  }
}

const isFormInputsValid = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

//отдельная функция удаления ошибок валидации
const deleteValidityErrors = (popupName, selectors) => {
  popupName.querySelectorAll(selectors.selectorInput).forEach((popupInputElement) => {
    popupInputElement.classList.remove('popup__input_type_error');
  });

  popupName.querySelectorAll(selectors.selectorError).forEach((popupErrorElement) => {
    popupErrorElement.textContent = '';
  });
}

const disableButtonSubmit = (popupName, selectors) => {
    popupName.querySelector(selectors.selectorButton).setAttribute("disabled", true);
    popupName.querySelector(selectors.selectorButton).classList.add(selectors.classButtonDisabled);
}
