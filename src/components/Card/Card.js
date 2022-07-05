import "./card.css";
import "./__picture/card__picture.css";
import "./__written-content-block/card__written-content-block.css";
import "./__date/card__date.css";
import "./__text/card__text.css";
import "./__title/card__title.css";
import "./__origin/card__origin.css";

function Card({ children, card }) {
  return (
    <li className="card">
      <img className="card__picture" src={`${card.urlToImage}`} alt={""} />
      <div className="card__written-content-block">
        <p className="card__date"> {card.publishedAt} </p>
        <h3 className="card__title"> {card.title} </h3>
        <p className="card__text"> {card.description} </p>
        <p className="card__origin"> {card.source.name} </p>
        {children}
      </div>
    </li>
  );
}

export default Card;
