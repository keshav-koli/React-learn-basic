/*
import React, { Component } from "react";
class RegularChild extends Component {
  render() {
    console.log("I am RegularChild");
    return (
      <>
        <h3>I am RegularChild</h3>
      </>
    );
  }
}

export default RegularChild;
*/

import React from "react";

const RegularChild = () => {
  console.log("Regular child");

  return <h2>RegularChild</h2>;
};

export default RegularChild;
