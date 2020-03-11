import React from "react";

function WandCard(props) {
  const wand = props.wand;
  return (
    <div className="col-lg-4 col-md-6 col-12 my-3">
      <div className="card border-dark ">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={wand.imageUrl}
            alt={wand.core}
          />
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">
            <span>{wand.core + " core" + wand.wood + " wood"}</span>
          </h5>
          <small className="card-text">length {wand.length}</small>
        </div>
      </div>
    </div>
  );
}

export default WandCard;
