export default class UserInfo {
  constructor({userName, userDescription}) {
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo() {
    this._userData = {
      userName: this._userName.textContent,
      userDescription: this._userDescription.textContent
    }
    return this._userData;
  }

  setUserInfo({name, about}) {
    this._userName.textContent = name;
    this._userDescription.textContent = about;
  }
}