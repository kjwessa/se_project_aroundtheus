export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    //TODO consider refactor this._jobElement to this._aboutElement
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }

  setUserAvatar(value) {
    this._avatarElement.textContent = value.name;
    this._avatarElement.src = value.avatar;
  }

  getAvatar() {
    return this._avatarElement.src;
  }
}
