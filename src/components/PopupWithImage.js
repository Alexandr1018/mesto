import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupPhotoRevealImageBig = this._popup.querySelector(".popup__image-big");
    this._popupPhotoRevealImageCaption = this._popup.querySelector(".popup__image-caption");
    }
  open(data) {
    this._popupPhotoRevealImageBig.src = data['link'];
    this._popupPhotoRevealImageCaption.textContent = data['name'];
    this._popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${data['link']}`;
    super.open();
  }
}
