class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
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
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });

    return this._checkResponse(response);
  }

  async saveArticle({ keyword, title, text, date, source, link, image }) {
    const response = await fetch(`${this._baseUrl}/articles/`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
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
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });

    return this._checkResponse(response);
  }

  async deleteSavedArticle(cardId) {
    const response = await fetch(`${this._baseUrl}/articles/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });

    return this._checkResponse(response);
  }
}

export default new Api({
  baseUrl: "https://api.newsexploreryakov.students.nomoredomainssbs.ru",
});
