import React from "react";

const A = props => {
  return (
    <div className="App-comp">
      <h1>{props.name}</h1>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default A;
