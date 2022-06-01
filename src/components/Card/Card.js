import image from "../../images/image_08.png";

function Card() {
  return (
    <li className="card">
      <img className="card__picture" src={image} alt={`A Card name`} />
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </li>
  );
}

export default Card;
