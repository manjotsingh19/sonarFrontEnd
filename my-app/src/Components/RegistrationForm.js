import React from 'react';
import { MDBTextArea, MDBValidation, MDBContainer, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';



function RegistrationForm() {

  const [isSubmit, setSubmit] = useState(false);
  const [errors, serErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [addBtn, setAddBtn] = useState(false);


  const handleAddBtn = () => {
    setAddBtn(true);
  }

  // for drop down meny only
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };



  const [teamForm, setTeamForm] = useState({
    team: '',

    n1: '',
    e1: '',
    ph1: '',

    n2: '',
    e2: '',
    ph2: '',

    n3: '',
    e3: '',
    ph3: '',

    n4: '',
    e4: '',
    ph4: '',

    domain: '',
    problemS: '',
    problemD: '',


  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setTeamForm({ ...teamForm, [id]: value });
  }

  const handleclick = (e) => {
    e.preventDefault();
    serErrors(validate(teamForm));
    setSubmit(true);
  }



  //////////////////connect to server/////////////////////////////////////
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(teamForm);

      axios.post('/', teamForm)
        .then((response) => {
          console.log(response);

        }, (error) => {
          console.log(error);
        });

    }
  }, [errors]);

  const validate = (teamForm) => {
    const errorsObj = {};
    // const regex =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i;
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const regexPh = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (!teamForm.team) {
      errorsObj.team = 'Team is required';
    }
    if (!teamForm.n1) {
      errorsObj.n1 = 'Participant name is required';
    }
    if (!teamForm.e1) {
      errorsObj.e1 = 'Participant email is required';
    }
    else if (!regex.test(teamForm.e1)) {
      errorsObj.e1 = "this is not a valid email";
    }
    if (!teamForm.ph1) {
      errorsObj.ph1 = 'Participant number is required';
    }
    else if (!regexPh.test(teamForm.ph1)) {
      errorsObj.ph1 = "This is not a valid phone number";
    }
    if (!teamForm.n2) {
      errorsObj.n2 = 'Participant name is required';
    }
    if (!teamForm.e2) {
      errorsObj.e2 = 'Participant email is required';
    }
    else if (!regex.test(teamForm.e2)) {
      errorsObj.e2 = "This is not a valid email";
    }
    if (!teamForm.ph2) {
      errorsObj.ph2 = 'Participant number is required';
    }
    else if (!regexPh.test(teamForm.ph2)) {
      errorsObj.ph2 = "This is not a valid phone number";
    }
    if (!teamForm.n3) {
      errorsObj.n3 = 'Participant name is required';
    }
    if (!teamForm.e3) {
      errorsObj.e3 = 'Participant email is required';
    }
    else if (!regex.test(teamForm.e3)) {
      errorsObj.e3 = "This is not a valid email";
    }
    if (!teamForm.ph3) {
      errorsObj.ph3 = 'Participant number is required';
    }
    else if (!regexPh.test(teamForm.ph3)) {
      errorsObj.ph3 = "This is not a valid phone number";
    }

    if (teamForm.ph4) {
      if (!regexPh.test(teamForm.ph4)) {
        errorsObj.ph4 = "This is not a valid phone number";
      }
    }
    if (teamForm.e4) {
      if (!regex.test(teamForm.e4)) {
        errorsObj.e4 = "This is not a valid email";
      }
    }
    if (!teamForm.domain) {
      errorsObj.domain = "Domain not specified";
    }
    if (!teamForm.problemS) {
      errorsObj.problemS = 'Problem statement is required';
    }
    if (!teamForm.problemD) {
      errorsObj.problemD = 'Problem description is required';
    }
    if (teamForm.ph1 !== '' && teamForm.ph2 !== '' && teamForm.ph3 !== '') {
      if (teamForm.ph1 === teamForm.ph2 || teamForm.ph1 === teamForm.ph3 || teamForm.ph1 === teamForm.ph4 || teamForm.ph2 === teamForm.ph3 || teamForm.ph2 === teamForm.ph4 || teamForm.ph3 === teamForm.ph4) {
        if (teamForm.ph1 === teamForm.ph2 || teamForm.ph1 === teamForm.ph3 || teamForm.ph1 === teamForm.ph4) {
          errorsObj.ph1 = "Duplicate entries found";
        }
        else if (teamForm.ph2 === teamForm.ph3 || teamForm.ph2 === teamForm.ph4) {
          errorsObj.ph2 = "Duplicate entries found";
        }
        else if (teamForm.ph3 === teamForm.ph4) {
          errorsObj.ph3 = "Duplicate entries found";
        }
      }
    }
    if (teamForm.e1 !== '' && teamForm.e2 !== '' && teamForm.e3 !== '') {
      if (teamForm.e1 === teamForm.e2 || teamForm.e1 === teamForm.e3 || teamForm.e1 === teamForm.e4 || teamForm.e2 === teamForm.e3 || teamForm.e2 === teamForm.e4 || teamForm.e3 === teamForm.e4) {
        if (teamForm.e1 === teamForm.e2 || teamForm.e1 === teamForm.e3 || teamForm.e1 === teamForm.e4) {
          errorsObj.e1 = "Duplicate entries found";
        }
        else if (teamForm.e2 === teamForm.e3 || teamForm.e2 === teamForm.e4) {
          errorsObj.e2 = "Duplicate entries found";
        }
        else if (teamForm.e3 === teamForm.e4) {
          errorsObj.e3 = "Duplicate entries found";
        }
      }
    }
    return errorsObj;
  }

  const myStyle = {
    color: 'red'
  }


  return (
    <>

      <MDBValidation className='row g-3' noValidate>
        <MDBContainer fluid>

          <MDBRow className='justify-content-center align-items-center m-5'>

            <MDBCard>
              <MDBCardBody className='px-8'>

                <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>

                <MDBRow className='align-items-center pt-0 pb-4 '>


                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Team Name</h6>
                  </MDBCol>
                  <MDBCol md='6' >
                    <MDBInput id="team" value={teamForm.team} onChange={(e) => handleInput(e)} wrapperClass='mb-0' required className='col-md-4' label='Team Name' size='md' type='text' />
                    <p style={myStyle}>{errors.team}</p>
                  </MDBCol>


                </MDBRow>

                <MDBRow className='align-items-center pt-0 '>


                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Participant-1 <span style={{ color: "red" }}>*</span></h6>
                  </MDBCol>

                  <MDBCol md='3' >

                    <MDBInput id="n1" value={teamForm.n1} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                    <p style={myStyle}>{errors.n1}</p>
                  </MDBCol>


                  <MDBCol md='3'>
                    <MDBInput id="e1" value={teamForm.e1} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' required className='col-md-4' />
                    <p style={myStyle}>{errors.e1}</p>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput id="ph1" value={teamForm.ph1} onChange={(e) => handleInput(e)} label='Phone number' type='tel' required className='col-md-4' />
                    <p style={myStyle}>{errors.ph1}</p>
                  </MDBCol>
                </MDBRow>


                <MDBRow className='align-items-center pt-0 '>


                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Participant-2 <span style={{ color: "red" }}>*</span></h6>
                  </MDBCol>

                  <MDBCol md='3' >

                    <MDBInput id="n2" value={teamForm.n2} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                    <p style={myStyle}>{errors.n2}</p>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput id="e2" value={teamForm.e2} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' required className='col-md-4' />
                    <p style={myStyle}>{errors.e2}</p>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput id="ph2" value={teamForm.ph2} onChange={(e) => handleInput(e)} label='Phone number' type='tel' required className='col-md-4' />
                    <p style={myStyle}>{errors.ph2}</p>
                  </MDBCol>


                </MDBRow>

                <MDBRow className='align-items-center pt-0 '>


                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Participant-3 <span style={{ color: "red" }}>*</span></h6>
                  </MDBCol>

                  <MDBCol md='3' >

                    <MDBInput id="n3" value={teamForm.n3} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                    <p style={myStyle}>{errors.n3}</p>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput id="e3" value={teamForm.e3} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' required className='col-md-4' />
                    <p style={myStyle}>{errors.e3}</p>
                  </MDBCol>

                  <MDBCol md='3'>
                    <MDBInput id="ph3" value={teamForm.ph3} onChange={(e) => handleInput(e)} label='Phone number' type='tel' required className='col-md-4' />
                    <p style={myStyle}>{errors.ph3}</p>
                  </MDBCol>
                </MDBRow>

                {/* ////////////////add button   //////////// */}

                {!addBtn && (
                  <div className='col-12' style={{ textAlign: "right" }}>
                    <MDBBtn onClick={handleAddBtn} >Add more</MDBBtn>
                  </div>
                )}



                {addBtn && (
                  <MDBRow className='align-items-center pt-0 pb-5'>


                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Participant-4</h6>
                    </MDBCol>


                    <MDBCol md='3' >

                      <MDBInput id="n4" value={teamForm.n4} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Name' size='md' type='text' />
                    </MDBCol>

                    <MDBCol md='3'>
                      <MDBInput id="e4" value={teamForm.e4} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' />
                      <p style={myStyle}>{errors.e4}</p>
                    </MDBCol>

                    <MDBCol md='3'>
                      <MDBInput id="ph4" value={teamForm.ph4} onChange={(e) => handleInput(e)} label='Phone number' type='tel' />
                      <p style={myStyle}>{errors.ph4}</p>
                    </MDBCol>
                  </MDBRow>
                )}



                {/* /////////////////////////////////////////////////////////////////////// */}


                <MDBRow className='align-items-center pt-2 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <select md='3' id='domain' value={teamForm.domain} onChange={(e) => handleInput(e)} style={{border:"5px"}}>
                      <option value="">Select Domain</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <p style={myStyle}>{errors.domain}</p>
                  </MDBCol>
                </MDBRow>






                <MDBRow className='align-items-center pt-2 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Problem Statement</h6>
                  </MDBCol>

                  <MDBCol md='9' className='pe-5'>
                    <MDBTextArea id="problemS" value={teamForm.problemS} onChange={(e) => handleInput(e)} label='' rows={0} style={{ resize: "none" }} required className='col-md-4' />
                    <p style={myStyle}>{errors.problemS}</p>
                  </MDBCol>

                </MDBRow>


                <MDBRow className='align-items-center pt-2 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Problem Description</h6>
                  </MDBCol>

                  <MDBCol md='9' className='pe-5'>
                    <MDBTextArea id="problemD" value={teamForm.problemD} onChange={(e) => handleInput(e)} label='' rows={3} style={{ resize: "none" }} required className='col-md-4' />
                    <p style={myStyle}>{errors.problemD}</p>
                  </MDBCol>

                </MDBRow>



                <div className='col-12'>
                  <MDBBtn onClick={handleclick} >Submit Form</MDBBtn>
                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBRow>
        </MDBContainer>

      </MDBValidation>
    </>

  );

}

export default RegistrationForm;






  // const mystyle = {
  //   color: "white",
  //   // backgroundColor: "whitesmoke",
  //   backgroundColor: "rgb(59 130 246)",
  //   borderRadius: "9999px",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   textAlign: "center",
  //   textDecoration: 'none',
  //   padding: "15px 32px",
  //   justifyContent: "center"
  // };