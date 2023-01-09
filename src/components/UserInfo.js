export default class UserInfo {
  constructor({ name, info }) {
    this._name = name;
    this._info = info;
    this._profileName = document.querySelector(".profile__profile-name");
    this._profileJob = document.querySelector(".profile__profile-job");
    this._profileName.textContent = this._name;
    this._profileJob.textContent = this._info;
  }

  getUserInfo() {
    this._name = this._profileName.textContent;
    this._info = this._profileJob.textContent;
    return {name: this._name, info: this._info};
  }

  setUserInfo(dataName, dataInfo) {
    this._profileName.textContent = dataName;
    this._profileJob.textContent = dataInfo;
  }
}
