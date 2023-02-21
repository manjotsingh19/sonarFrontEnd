import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import Admin from '../Dashboards/AdminComponents/Admin';
import axios from 'axios';
import Participant from '../Dashboards/ParticipantDashboard/Participant';


function LoginPage() {
  const [isSubmit,setSubmit] = useState(false);
  const navigate = useNavigate();


  const[teamForm, setTeamForm] = useState({
    email:'',
    password: '',
  });


  const handleInput = (e) => {
    const { id, value } = e.target;
    setTeamForm({ ...teamForm, [id]: value });
  }


  const handleclick = (e) => {
    e.preventDefault();
    setSubmit(true);
    axios.post('/login', teamForm)
        .then((response) => {

          // //////////////send response to dashboard

          localStorage.setItem("data",JSON.stringify(response.data));
          navigate("/participant");
            ///////////////////////////
        }, (error) => {
          console.log(error);
          alert("Username or password is incorrect");
        });
  }




  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput id="email" value={teamForm.email} onChange={(e) => handleInput(e)} wrapperClass='mb-4' label='Email address'  type='email' size="lg"/>
          <MDBInput id="password" value={teamForm.password} onChange={(e) => handleInput(e)} wrapperClass='mb-4' label='Password' type='password' size="lg"/>

          <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/registrationForm" style={{color:"blue"}} >Register </Link></p>

          <div className='col-12'>
                  <MDBBtn onClick={handleclick} type='submit' className='bg-primary shadow-1-strong'> LogIn </MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}

export default LoginPage;




// const mystyle = {
//   color: "white",
//   backgroundColor: "whitesmoke",
//   padding: "10px",
//   fontFamily: "Arial",
//   textAlign: "center",
//   textdecoration: "none",

// };



// const btnStyle = {
//   lineHeight: "1.6",
//   fontStyle: "normal",
//   fontSize: "20px",
//   textAlign: 'center',
//   color: "white",
//   backgroundColor: "#34495E",
//   textDecoration: "none",
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   border: "solid 0 #e3edf4",
//   borderBottom: "2px solid #AEB6BF",
//   borderRadius: "4px",
//   padding:" 16px 40px",
// }