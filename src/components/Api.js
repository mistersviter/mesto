export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  updateUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(this._handleResponse)
  }

  addUserCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(this._handleResponse)
  }

  deleteUserCard(cardData) {
    return fetch(`${this._url}/cards/${cardData._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  // getCardLikes(cardData) {
  //   return fetch(`${this._url}/cards`, {
  //     method: 'GET',
  //     headers: this._headers,
  //   })
  //     .then(this._handleResponse)
  // }

  // getInitialData() {
  //   return Promise.all([this.getInitialCards(), this.getUserInfo()])
  // }
}