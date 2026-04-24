import cardImgae from "./assets/download.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={cardImgae} alt="card image"></img>
      <h2 className="card-title">card test</h2>
    </div>
  );
}

export default Card;
