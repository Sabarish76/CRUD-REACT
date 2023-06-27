import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import './ReadTab.css'
function ReadTab(){
   const students = JSON.parse(localStorage.getItem('students')) || [];
   const [showAlert, setShowAlert] = useState(false);

   const handleDelete = (index) => {
      const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
      existingStudents.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(existingStudents));
      setShowAlert(true);
    };

    const handleAlertClose = () => {
      setShowAlert(false);
    };
   return(
    <div className="Read">
      <div className="Read_container">
      <h2 className="Read_head">Registered Students</h2><br />
      {showAlert && (
        <Alert severity="success" onClose={handleAlertClose}>
          Successfully deleted
        </Alert>
      )}
      <ul>
        {students.map((student, index) => (
          <li key={index} className="Read_list">
              <span className="list-icon"><MarkChatReadIcon></MarkChatReadIcon></span>
            <Link to={`/${index}`} className="Read_name">{student.name}</Link>
            <button type="button"
              className="btn3"
              onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
   </div>
   )
}

export default ReadTab;