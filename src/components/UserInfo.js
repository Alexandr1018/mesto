export default class UserInfo {
  constructor({ selectorName, selectorInfo, selectorAvatar }) {
    this._profileName = document.querySelector(selectorName);
    this._profileJob = document.querySelector(selectorInfo);
    this._profileAvatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    const userInfo ={};
    userInfo.name = this._profileName.textContent;
    userInfo.info = this._profileJob.textContent;
    return userInfo;
  }

  setUserInfo( {userName, userInfo, userAvatar} ) {
    if(userName) {
      this._profileName.textContent = userName;
    }
    if(userInfo) {
      this._profileJob.textContent = userInfo;
    }
    if(userAvatar) {
      this._profileAvatar.src = userAvatar;
    }
  }
}
