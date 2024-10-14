import { useState } from "react";

function Card(props) {
  const [readmore, setReadmore] = useState(false);
  const item = props.tourData;
  const description = readmore
    ? item.info
    : `${item.info.substring(0, 200)}...`;

  const readmoreHandler = () => setReadmore(!readmore);
  const removeTour = props.removeTour;
  return (
    <div className="card">
      <img src={item.image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {item.price}</h4>
          <h4 className="tour-name">{item.name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show More` : "Read More"}
          </span>
        </div>
        <button
          className="btn-red"
          onClick={() => {
            removeTour(item.id);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
