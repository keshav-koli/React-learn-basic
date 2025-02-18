import React, { useContext } from 'react'
import { QspiderStudentBContext } from './QspiderStudentB';

const QspiderStudentB1 = () => {
   let myData = useContext(QspiderStudentBContext);
    console.log("data from useContext student B1- ", myData);
  
  return (
    <div>QspiderStudentB1</div>
  )
}

export default QspiderStudentB1