import React from "react";

const dependencies = options => {
  class B extends React.Component {
    render() {
      const opt = options;
      return (
        <div className="App-comp">
          <h1>{this.props.name}</h1>
          <div className="description">{this.props.description}</div>
          <div>Dependencies: {opt.routing}</div>
        </div>
      );
    }
  }
  return B;
};

export default { dependencies };
