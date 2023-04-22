export default class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    // store the userName property in the property _userName
    this._userName = userName;

    // store the userJob property in the property _userDescription
    this._userDescription = userJob;

    // store the userAvatar property in the property _userAvatar
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
    // Return an object with properties (name, about)
    return {
      // name: the text content of _userName
      name: this._userName.textContent,

      // about: the text content of _userDescription
      about: this._userDescription.textContent,
    };
  }

  setUserInfo(value) {
    // Set the text content of _userName to the name property of value
    this._userName.textContent = value.name;

    // Set the text content of _userDescription to the about property of value
    this._userDescription.textContent = value.about;
  }

  // TODO Determine if the setAvatar() and getAvatar() methods are necessary
  setAvatar(value) {
    // Set the alt attribute of _userAvatar to the result of calling getUserInfo()
    this._userAvatar.alt = this.getUserInfo();

    // Set the source attribute of _userAvatar to value
    this._userAvatar.src = value;
  }

  getAvatar() {
    // Return the source attribute of _userAvatar
    return this._userAvatar.src;
  }
}
