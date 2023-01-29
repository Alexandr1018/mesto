export default class Card {
  constructor(data, templateSelector, handleCardClick, handleCardDelete, handlePutLike, handleDeleteLike, ownerId) {
    this._data = data;
    this._name = data['name'];
    this._link = data['link'];
    this._likes = data['likes'];
    this._id = data['_id'];
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
    this._ownerId = ownerId;
  }

  _getTemplate() {
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".template-element").cloneNode(true);
    return this._cardTemplate;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => this._likeCard());
    if (this._buttonDelete !== null) {
      this._buttonDelete.addEventListener("click", () => {
        /* if (this._handleCardDelete()) {
          this._deleteCard();
        } */
        this._handleCardDelete(this);

      });
    }
    this._elementTopSide.addEventListener("click", () => this._handleCardClick(this._data));
  }
  _likeCard() {
    this._buttonLike.classList.toggle("elements__button-like_active");
    if (this._buttonLike.classList.contains('elements__button-like_active')) {
      this._handlePutLike(this._id);
      this._likeNumber.textContent = Number(this._likeNumber.textContent) + 1;
    } else {
      this._handleDeleteLike(this._id);
      this._likeNumber.textContent = Number(this._likeNumber.textContent) - 1;
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

 /*  _isLiked(data) {
    // console.log(data['_id']);
    return data['_id'] === this._ownerId;
  } */

  _isMine() {
    return this._data.owner['_id'] === this._ownerId;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".elements__button-like");
    this._buttonDelete = this._element.querySelector(".elements__button-delete");
    this._elementTopSide = this._element.querySelector(".elements__top-side");
    this._element.querySelector(".elements__caption").textContent = this._name;
    this._elementTopSide.src = this._link;
    this._elementTopSide.alt = `Фото - ${this._name}`;

    this._likeNumber = this._element.querySelector('.elements__like-number');
    this._likeNumber.textContent = this._likes.length;

    if (this._likes.some(like => like._id === this._ownerId)) {
      this._buttonLike.classList.add('elements__button-like_active');
    }

    if(!this._isMine()) {
      this._buttonDelete.remove();
    }

    this._setEventListeners();
    return this._element;
  }
}
