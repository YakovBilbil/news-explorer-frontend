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

function Card({ card, isLoggedIn, savedArticles, handleFlagClick }) {
  const [isShown, setIsShown] = useState(false);
  const isAlreadySaved = savedArticles.some((c) => c.text === card.description);

  return (
    <li className="card">
      <img
        className="card__picture"
        src={`${card.urlToImage}`}
        alt={`Broken link <${card.urlToImage}>`}
      />
      <div className="card__written-content-block">
        <p className="card__date"> {moment(card.publishedAt).format("ll")} </p>
        <h3 className="card__title"> {card.title} </h3>
        <p className="card__text"> {card.description} </p>
        <p className="card__origin"> {card.source.name} </p>
        <button
          className={`card__like-flag ${
            isAlreadySaved ? "card__like-flag_active" : ""
          }`}
          onClick={() => handleFlagClick(card, isAlreadySaved)}
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
