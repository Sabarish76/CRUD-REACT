import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import './CreateTab.css'

function CreateTab(){
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const { index } = useParams();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (index !== undefined) {
      const students = JSON.parse(localStorage.getItem('students')) || [];
      const student = students[index];
      if (student) {
        setName(student.name);
        setDob(student.dob);
        setMobile(student.mobile);
        setEmail(student.email);
      }
    }
  }, [index]);

 

  const handleSubmit = () => {
    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    const student = { name, dob, mobile, email };

    if (index !== undefined) {
      existingStudents[index] = student;
      setAlertMessage('Update successful');
      navigate('/read')
    } else {
      existingStudents.push(student);
      setAlertMessage('Successfully stored');
    }

    localStorage.setItem('students', JSON.stringify(existingStudents));

   setShowAlert(true);
  
  };

  const resetForm = () => {
    setName('');
    setDob('');
    setMobile('');
    setEmail('');
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    resetForm();
  
  };

 
  return(
    <div className="Body">
      <section className="Container">
      <div className="left">
                  <img src={require('../Components/Images/Signup.png')} className="img"></img>
      </div>
      <div className="right">
      <h1 className="Head">Student Registration</h1><br /><br /><br />
      {showAlert && (
        <Alert severity="success" onClose={handleAlertClose}>
         {alertMessage}
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="Form">
        <TextField
          className='input'
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br /> 
        <TextField 
      className='input'
      label="DOB"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
         
      />
    
        <br /><br /> 
        <TextField
          className='input'
          label="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br /><br /> 
        <TextField
          className='input'
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br /><br /> 
        <button variant="contained" type="submit" className='btn1'> SUBMIT</button>
        <button variant="contained" onClick={resetForm} className='btn2'> CLEAR </button>
      </form>
      </div>
      </section>
    </div>
  
  )
}

export default CreateTab;