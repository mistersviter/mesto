export default class UserInfo {
  constructor(selectors) {
    this._userName = document.querySelector(selectors.name);
    this._userInfo = document.querySelector(selectors.info);
  }

  getUserInfo() {
    this._userData = {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    }
    return this._userData;
  }

  setUserInfo(userNameInput, userInfoInput) {
    this._userName.textContent = userNameInput.value;
    this._userInfo.textContent = userInfoInput.value;
  }
}