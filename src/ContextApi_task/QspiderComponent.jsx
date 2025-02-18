import React, { createContext } from "react";
import QspiderStudentA from "./QspiderStudentA";
import QspiderStudentB from "./QspiderStudentB";

export let MyQspiderContext=createContext(); 
const QspiderComponent = () => {
  let data = "https://qspiders.com/";
  return (
    <div>
      I am App component
      <MyQspiderContext.Provider value={data}>
        <QspiderStudentA />
        <QspiderStudentB />
      </MyQspiderContext.Provider>
    </div>
  );
};

export default QspiderComponent;
