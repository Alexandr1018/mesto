export default class UserInfo {
  constructor({ selectorName, selectorInfo }) {
    this._selectorName = selectorName;
    this._selectorInfo = selectorInfo;
    this._profileName = document.querySelector(selectorName);
    this._profileJob = document.querySelector(selectorInfo);
  }

  getUserInfo() {
    this._name = this._profileName.textContent;
    this._info = this._profileJob.textContent;
    return {name: this._name, info: this._info};
  }

  setUserInfo(data) {
    this._profileName.textContent = Object.values(data)[0];
    this._profileJob.textContent = Object.values(data)[1];
  }
}
