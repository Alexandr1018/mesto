import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = document.querySelector(".popup_photo");
    this._popupPhotoRevealImageBig = this._popupPhoto.querySelector(".popup__image-big");
    this._popupPhotoRevealImageCaption = this._popupPhoto.querySelector(".popup__image-caption");
    }
  open(data) {
    this._popupPhotoRevealImageBig.src = data.link;
    this._popupPhotoRevealImageCaption.textContent = data.name;
    this._popupPhotoRevealImageBig.alt = `Фото в увеличенном виде - ${data.name}`;
    super.open();
  }
}
