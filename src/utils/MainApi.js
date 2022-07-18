class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `something get wrong. Status: ${response.status}, ${response.statusText}`
      );
    }
  }

  async getUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: { authorization: this._token },
    });

    return this._checkResponse(response);
  }
}

export default new Api({
  baseUrl: "https://api.newsexploreryakov.students.nomoreparties.sbs",
  token: `Bearer ${localStorage.getItem("jwt")}`,
});
