import moment from "moment";
import React, { useState } from "react";

import "../Card/card.css";
import "../Card/__picture/card__picture.css";
import "../Card/__written-content-block/card__written-content-block.css";
import "../Card/__date/card__date.css";
import "../Card/__text/card__text.css";
import "../Card/__title/card__title.css";
import "../Card/__origin/card__origin.css";
import "../Card/__like-flag/card__like-flag.css";
import "../Card/__like-flag/_active/card__like-flag_active.css";
import "../Card/__delete-trash/card__delete-trash.css";
import "../Card/__category/card__category.css";
import "../Card/__button-description/card__button-description.css";
import "../Card/__button-description/_non-active/card__button-description_non-active.css";

function Card({ card, onTrashClick }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="card">
      <img
        className="card__picture"
        src={`${card.image}`}
        alt={`Broken link: ${card.image}`}
      />
      <div className="card__written-content-block">
        <p className="card__date"> {moment(card.date).format("ll")} </p>
        <h3 className="card__title"> {card.title} </h3>
        <p className="card__text"> {card.text} </p>
        <p className="card__origin"> {card.source} </p>
        <button
          className="card__delete-trash"
          onClick={() => onTrashClick(card)}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        ></button>
        <div className="card__category">{`${card.keyword}`}</div>
        <p
          className={`card__button-description ${
            isShown ? "" : "card__button-description_non-active"
          }`}
        >
          Remove from saved
        </p>
      </div>
    </li>
  );
}

export default Card;
