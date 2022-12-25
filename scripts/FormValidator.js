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

  enableValidation = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._selectorInput));
    const buttonElement = this._formElement.querySelector(this._selectorButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isInputValid(inputElement);
        this._toggleButtonSubmit(inputList, buttonElement);
      });
    });
  }

  _isInputValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement);
    } else {
      this._hideErrorMessage(inputElement);
    }
  }

  _showErrorMessage = (inputElement) => {
    const popupError = this._formElement.querySelector(`.${inputElement.name}-error`)
    inputElement.classList.add(this._classInputTypeError);
    popupError.textContent = inputElement.validationMessage;
    popupError.classList.add(this._classErrorVisible);
  }

  _hideErrorMessage = (inputElement) => {
    const popupError = this._formElement.querySelector(`.${inputElement.name}-error`)
    inputElement.classList.remove(this._classInputTypeError);
    popupError.textContent = "";
    popupError.classList.remove(this._classErrorVisible);
  }

  _toggleButtonSubmit = (inputList, buttonElement) => {
    if (this._isFormInputsValid(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._classButtonDisabled);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._classButtonDisabled);
    }
  }

  _isFormInputsValid = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }
}

export {FormValidator};
