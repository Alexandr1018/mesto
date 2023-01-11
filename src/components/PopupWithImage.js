import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupPhotoRevealImageBig = this._popup.querySelector(".popup__image-big");
    this._popupPhotoRevealImageCaption = this._popup.querySelector(".popup__image-caption");
    }
  open(data) {
    this._popupPhotoRevealImageBig.src = data['popup-text-url'];
    this._popupPhotoRevealImageCaption.textContent = data['popup-text-name-card'];
    this._popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${data['popup-text-url']}`;
    super.open();
  }
}
