import openCard from "./popups.js";

class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    // this._openCard = openCard;
  }

  _getTemplate() {
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".template-element").cloneNode(true);
    return this._cardTemplate;
  }

  _setEventListeners() {
    this._element.querySelector(".elements__button-like").addEventListener("click", this._likeCard);
    this._element.querySelector(".elements__button-delete").addEventListener("click", this._deleteCard);
    this._elementTopSide.addEventListener("click", openCard);
  }
  _likeCard(evt) {
    evt.target.classList.toggle("elements__button-like_active");
  }

  _deleteCard(evt) {
    evt.target.closest(".template-element").remove();
  }
  _generateCard(container) {
    this._element = this._getTemplate();
    this._elementTopSide = this._element.querySelector(".elements__top-side");
    this._element.querySelector(".elements__caption").textContent = this._name;
    this._elementTopSide.src = this._image;
    this._elementTopSide.alt = `Фото - ${this._image}`;
    this._setEventListeners();
    container.prepend(this._element);
  }

  renderCards(container) {
    this._data.forEach(item => {
      new Card(item, this._templateSelector)._generateCard(container);
    });
  }
}

export {Card};
