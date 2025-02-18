import React, { useContext } from 'react'
import { QspiderStudentAContext } from './QspiderStudentA';

const QspiderStudentA2 = () => {
   let myData = useContext(QspiderStudentAContext);
    console.log("data from useContext student A2- ", myData);
  return (
    <div>QspiderStudentA2</div>
  )
}

export default QspiderStudentA2