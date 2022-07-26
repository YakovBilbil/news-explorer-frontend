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

  async saveArticle({ keyword, title, text, date, source, link, image }) {
    const response = await fetch(`${this._baseUrl}/articles/`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: text,
        date: date,
        source: source,
        link: link,
        image: image,
      }),
    });

    return this._checkResponse(response);
  }

  async getSavedArticles() {
    const response = await fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: { authorization: this._token },
    });

    return this._checkResponse(response);
  }

  async deleteSavedArticle(cardId) {
    const response = await fetch(`${this._baseUrl}/articles/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    });

    return this._checkResponse(response);
  }
}

export default new Api({
  baseUrl: "https://api.newsexploreryakov.students.nomoreparties.sbs",
  token: `Bearer ${localStorage.getItem("jwt")}`,
});
