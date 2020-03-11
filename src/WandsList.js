import React from "react";
import WandCard from "./WandCard";

function WandsList(props) {
  // const author = props.author;
  const wandList = props.wands.map(wand => (
    <WandCard key={wand.core} wand={wand} />
  ));
  //Will be rendered on the screen
  return (
    <div className="wands">
      <h3>Wands</h3>
      <div className="row">{wandList}</div>
    </div>
  );
}

export default WandsList;
