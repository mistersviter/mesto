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
      headers: this._headers
    })
      .then(this._handleResponse)
      //.then(data => console.log(data))
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(this._handleResponse)
      //.then(data => console.log(data))
  }
  // getInitialData() {
  //   return Promise.all([this.getInitialCards(), this.getUserInfo()])
  // }
}