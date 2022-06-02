import image from "../../images/image_08.png";

function Card() {
  return (
    <li className="card">
      <img className="card__picture" src={image} alt={`A Card name`} />
      <div className="card__written-content-block">
        <p className="card__date"> November 4, 2020 </p>
        <h3 className="card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__origin">treehugger</p>
        <div className="card__like-flag"></div>
      </div>
    </li>
  );
}

export default Card;
