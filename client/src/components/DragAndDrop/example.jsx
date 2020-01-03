import React from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hitchhikers: [],
      cars: {}
    };
  }

  render() {
    return (
      <div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin />
          <Dustbin />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    );
  }
}

export default Example;
