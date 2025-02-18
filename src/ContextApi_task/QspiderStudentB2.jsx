import React, { useContext } from 'react'
import { QspiderStudentBContext } from './QspiderStudentB';

const QspiderStudentB2 = () => {
  let myData = useContext(QspiderStudentBContext);
      console.log("data from useContext student B2- ", myData);
  return (
    <div>QspiderStudentB2</div>
  )
}

export default QspiderStudentB2