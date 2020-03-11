import React from "react";
import "./App.css";
import wands from "./wands";

import WandsList from "./WandsList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="content col-10">
          <WandsList wands={wands} />
        </div>
      </div>
    </div>
  );
}

export default App;
