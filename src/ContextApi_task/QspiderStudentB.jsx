import React, { createContext, useContext } from "react";
import { MyQspiderContext } from "./QspiderComponent";
import QspiderStudentB1 from "./QspiderStudentB1";
import QspiderStudentB2 from "./QspiderStudentB2";

export let QspiderStudentBContext=createContext();
const QspiderStudentB = () => {
  let myData = useContext(MyQspiderContext);
  console.log("data from useContext student B- ", myData);

  return (
    <div>
      <h3>I am QspiderStudentB component</h3>
      <a href={myData}>QspiderStudentB</a>;
      <QspiderStudentBContext.Provider value={myData}>
      <QspiderStudentB1 />
      <QspiderStudentB2 />
      </QspiderStudentBContext.Provider>
    </div>
  );
};

export default QspiderStudentB;
