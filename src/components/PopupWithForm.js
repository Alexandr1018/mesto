import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"));
    this._button = this._formElement.querySelector('.popup__button');
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  _getInputValues() {
    this._objWithInfo = {};
    this._inputList.forEach( input => {
      this._objWithInfo[input.name] = input.value;
    });
    return this._objWithInfo;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  downloadButton(flag) {
    if(flag) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Сохранить';
    }
  }
}
