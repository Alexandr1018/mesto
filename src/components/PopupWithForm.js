import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"));
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
}
