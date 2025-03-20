/*
import React, { PureComponent } from "react";
class PureChild extends PureComponent {
  render() {
    console.log("I am PureChild");

    return (
      <>
        <h3>I am PureChild</h3>
      </>
    );
  }
}

export default PureChild;
*/

import React, { memo } from "react";

const PureChild = () => {
  console.log("I am PureChild");
  return (
    <>
      <h3>I am PureChild</h3>
    </>
  );
};

export default memo(PureChild);
