class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
    this._selectorInput = selectors.selectorInput;
    this._selectorButton= selectors.selectorButton;
    this._selectorError = selectors.selectorError;
    this._classButtonDisabled = selectors.classButtonDisabled;
    this._classInputTypeError = selectors.classInputTypeError;
    this._classErrorVisible = selectors.classErrorVisible;
  }

//отдельная функция удаления ошибок валидации
  deleteValidityErrors = (popupName, selectors) => {
    this._formElement.querySelectorAll(this._selectorInput).forEach((popupInputElement) => {
      popupInputElement.classList.remove(this._classInputTypeError);
    });
    this._formElement.querySelectorAll(this._selectorError).forEach((popupErrorElement) => {
      popupErrorElement.textContent = '';
    });
  }

  disableButtonSubmit() {
    this._buttonElement = this._formElement.querySelector(this._selectorButton);
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._classButtonDisabled);
  }

  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selectorInput));
    this._buttonElement = this._formElement.querySelector(this._selectorButton);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isInputValid(inputElement);
        this._toggleButtonSubmit();
      });
    });
  }

  _isInputValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement);
    } else {
      this._hideErrorMessage(inputElement);
    }
  }

  _showErrorMessage(inputElement) {
    this._popupError = this._formElement.querySelector(`.${inputElement.name}-error`)
    inputElement.classList.add(this._classInputTypeError);
    this._popupError.textContent = inputElement.validationMessage;
    this._popupError.classList.add(this._classErrorVisible);
  }

  _hideErrorMessage(inputElement) {
    this._popupError = this._formElement.querySelector(`.${inputElement.name}-error`)
    inputElement.classList.remove(this._classInputTypeError);
    this._popupError.textContent = "";
    this._popupError.classList.remove(this._classErrorVisible);
  }

  _toggleButtonSubmit() {
    if (this._isFormInputsValid()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._classButtonDisabled);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._classButtonDisabled);
    }
  }

  _isFormInputsValid() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }
}

export {FormValidator};
