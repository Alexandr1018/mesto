export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

   getUserInfoServer() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject("Произошла ошибка");
        }
      });
  }

  getCardsServer() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
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
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
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
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
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
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
    });
  }

  postLikeServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
    });
  }

  deleteLikeServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
    });
  }

  deleteCardServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject("Произошла ошибка");
      }
    });
  }

}
