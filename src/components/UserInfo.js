export default class UserInfo {
  constructor({userName, userDescription, userAvatar}) {
    this._userName = userName;
    this._userDescription = userDescription;
    this._userAvatar = userAvatar;
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

  setUserAvatar({avatar}) {
    this._userAvatar.src = avatar;
    this._userAvatar.alt = 'Аватар';
  }
}