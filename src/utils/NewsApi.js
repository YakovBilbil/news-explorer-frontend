class Api {
  constructor({ baseUrl, apiKey, from, to, pageSize }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._from = from;
    this._to = to;
    this._pageSize = pageSize;
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

  async getArticlesBySearchWord(q) {
    const response = await fetch(
      `${this._baseUrl}?q=${q}&apiKey=${this._apiKey}&from=${this._from}&to=${this._to}&pageSize=${this._pageSize}`,
      {
        method: "GET",
      }
    );

    return this._checkResponse(response);
  }
}

const currentDate = new Date();

const weekAgoDate = new Date();
weekAgoDate.setDate(weekAgoDate.getDate() - 7);

export default new Api({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  apiKey: "1bf903cf704a46a897c4562ddda13b88",
  pageSize: "100",
  from: weekAgoDate,
  to: currentDate,
});
