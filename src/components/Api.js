export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //* Handle the response from the server
  _handleResponse(res) {
    console.log("Handle Response:", res);
    return res.json().then((data) => {
      console.log("Handle Response Body:", data); // Add this line
      if (res.ok) {
        return data;
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //* Get the initial cards from the server
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //* Promise All to get the initial user info and cards
  getAPIInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  //* Update the user profile info
  //TODO This is returning a 400 error
  updateUserInfo(userData) {
    console.log("User Data:", userData); // Add this line
    //TODO Delete the console.log above
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(this._handleResponse);
  }

  //* Add a new card to the server
  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._handleResponse);
  }

  //* Delete a card from the server
  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //* Add a like to a card
  addCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //* Remove a like from a card
  removeCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //* Update the user profile avatar
  updateProfileAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then(this._handleResponse);
  }
}
