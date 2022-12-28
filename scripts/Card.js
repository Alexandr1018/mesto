class Card {
  constructor(data, templateSelector, openCard) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._openCard = openCard;
  }

  _getTemplate() {
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".template-element").cloneNode(true);
    return this._cardTemplate;
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector(".elements__button-like");
    this._buttonLike.addEventListener("click", () => this._likeCard());
    this._element.querySelector(".elements__button-delete").addEventListener("click", () => this._deleteCard());
    this._elementTopSide.addEventListener("click", () => this._openCard(this._data));
  }
  _likeCard() {
    this._buttonLike.classList.toggle("elements__button-like_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._elementTopSide = this._element.querySelector(".elements__top-side");
    this._element.querySelector(".elements__caption").textContent = this._name;
    this._elementTopSide.src = this._image;
    this._elementTopSide.alt = `Фото - ${this._image}`;
    this._setEventListeners();
    return this._element;
  }
}

export {Card};
