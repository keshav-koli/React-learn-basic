import React, { createContext, useContext } from "react";
import { MyQspiderContext } from "./QspiderComponent";
import QspiderStudentA1 from "./QspiderStudentA1";
import QspiderStudentA2 from "./QspiderStudentA2";

export let QspiderStudentAContext = createContext();
const QspiderStudentA = () => {
  // let data = useContext(MyQspiderContext);

  return (
    <div>
      <h3>I am QspiderStudentA component</h3>
      <MyQspiderContext.Consumer>
        {(data) => {
          console.log("data from consumer student A -", data);
          return(
          <QspiderStudentAContext.Provider value={data}>
            <QspiderStudentA1 />
            <QspiderStudentA2 />
          </QspiderStudentAContext.Provider>
          );
        }}
      </MyQspiderContext.Consumer>
    </div>
  );
};

export default QspiderStudentA;
