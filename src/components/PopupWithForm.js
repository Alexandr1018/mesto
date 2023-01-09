import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElementAddNewCard = this._popupSelector.querySelector(".popup__form");
    this._popupInputs = this._popupSelector.querySelectorAll(".popup__input");
    this._objWithInfo = {};
  }

  close() {
    super.close();
    this._formElementAddNewCard.reset();
  }

  _getInputValues() {
    const inputsArray = Array.from(this._popupInputs);
    this._objWithInfo.name = inputsArray[0].value;
    this._objWithInfo.link = inputsArray[1].value;
    return this._objWithInfo;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElementAddNewCard.addEventListener("submit", (evt) => {
      // this.show();
      this._submitForm(evt);
    });
  }
}
