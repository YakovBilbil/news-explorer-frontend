import moment from "moment";
import React, { useState } from "react";

import "./card.css";
import "./__picture/card__picture.css";
import "./__written-content-block/card__written-content-block.css";
import "./__date/card__date.css";
import "./__text/card__text.css";
import "./__title/card__title.css";
import "./__origin/card__origin.css";

import "./__like-flag/card__like-flag.css";
import "./__like-flag/_active/card__like-flag_active.css";
import "./__delete-trash/card__delete-trash.css";
import "./__category/card__category.css";
import "./__button-description/card__button-description.css";
import "./__button-description/_non-active/card__button-description_non-active.css";
import MainApi from "../../utils/MainApi";

function Card({
  card,
  isLoggedIn,
  keyword,
  updateSavedArticles,
  savedArticles,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const isAlreadySaved = savedArticles.some((c) => c.title === card.title);

  return (
    <li className="card">
      <img className="card__picture" src={`${card.urlToImage}`} alt={""} />
      <div className="card__written-content-block">
        <p className="card__date"> {moment(card.publishedAt).format("ll")} </p>
        <h3 className="card__title"> {card.title} </h3>
        <p className="card__text"> {card.description} </p>
        <p className="card__origin"> {card.source.name} </p>
        <button
          className={`card__like-flag ${
            isLiked || isAlreadySaved ? "card__like-flag_active" : ""
          }`}
          onClick={async (e) => {
            if (isLoggedIn && !isLiked && !isAlreadySaved) {
              try {
                const newSavedArticle = await MainApi.saveArticle({
                  keyword: keyword,
                  title: card.title,
                  text: card.description,
                  date: card.publishedAt,
                  source: card.source.name,
                  link: card.url,
                  image: card.urlToImage,
                });
                updateSavedArticles(newSavedArticle);
                setIsLiked(true);
              } catch (error) {
                console.log("CAUGHT ERROR", error);
              }
            }
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        ></button>{" "}
        <p
          className={`card__button-description ${
            isShown && !isLoggedIn ? "" : "card__button-description_non-active"
          }`}
        >
          Sign in to save articles
        </p>
      </div>
    </li>
  );
}

export default Card;
