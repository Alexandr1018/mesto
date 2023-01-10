import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPhotoRevealImageBig = this._popup.querySelector(".popup__image-big");
    this._popupPhotoRevealImageCaption = this._popup.querySelector(".popup__image-caption");
    }
  open(data) {
    this._popupPhotoRevealImageBig.src = Object.values(data)[1];
    this._popupPhotoRevealImageCaption.textContent = Object.values(data)[0];
    this._popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${Object.values(data)[0]}`;
    super.open();
  }
}
