import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._formElement = this._popup.querySelector(".popup__form");
  }

  setEventListeners(submitHandler) {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      submitHandler();
    });
  }
}
