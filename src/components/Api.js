export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

_checkStatus(status) {
    if(status.ok) {
      return status.json();
    } else {
      return Promise.reject("Произошла ошибка");
    }
  }

  getUserInfoServer() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    }).then(res => {
     return this._checkStatus(res);
    });
  }

  getCardsServer() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  setUserInfoServer(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data['popup-text-name'],
        about: data['popup-text-job']
      })
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  setUserAvatarServer(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data
      })
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  postNewCardServer(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  postLikeServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  deleteLikeServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      return this._checkStatus(res);
    });
  }

  deleteCardServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      return this._checkStatus(res);
    });
  }

}
