import React, { useContext } from "react";
import { QspiderStudentAContext } from "./QspiderStudentA";

const QspiderStudentA1 = () => {
  let myData = useContext(QspiderStudentAContext);
  console.log("data from useContext student A1- ", myData);
  return <div>QspiderStudentA1</div>;
};

export default QspiderStudentA1;
