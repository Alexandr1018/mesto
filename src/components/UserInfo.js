export default class UserInfo {
  constructor({ selectorName, selectorInfo }) {
    this._profileName = document.querySelector(selectorName);
    this._profileJob = document.querySelector(selectorInfo);
  }

  getUserInfo() {
    const userInfo ={};
    userInfo.name = this._profileName.textContent;
    userInfo.info = this._profileJob.textContent;
    return userInfo;
  }

  setUserInfo(data) {
    this._profileName.textContent = data['popup-text-name'];
    this._profileJob.textContent = data['popup-text-job'];
  }
}
