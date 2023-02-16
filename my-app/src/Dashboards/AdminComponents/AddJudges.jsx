import { MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';


function AddJudges() {
    const [judges, setJudges] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
    });

    const [errors, serErrors] = useState({});


    /////////////////////////////Connect to server/////////////////////////////////////////////
    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0) {
            console.log(judges);

            axios.post('/user', judges)
                .then((response) => {
                    console.log(response);

                }, (error) => {
                    console.log(error);
                });

        }
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        serErrors(validate(judges));
    }

    const handleInput = (e) => {
        const { id, value } = e.target;
        setJudges({ ...judges, [id]: value });
    }


    const myStyle = {
        color: 'red'
    }

    const handleRole = (e) => {
        setJudges({ ...judges, role: e.target.value });
    }

    const validate = (judges) => {
        const errorsObj = {};
        const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
        const regexPh = /^[0-9]{10}$/;

        if (!judges.name) {
            errorsObj.name = 'Name is required';
        }
        if (!judges.email) {
            errorsObj.email = 'Email is required';
        }
        else if (!regex.test(judges.email)) {
            errorsObj.email = "This is not a valid email";
        }
        if (!judges.phone) {
            errorsObj.phone = 'Number is required';
        }
        else if (!regexPh.test(judges.phone)) {
            errorsObj.phone = "Enter valid phone number";
        }

        return errorsObj;
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4">Admin Dashboard</h3>
                <MDBCard>
                    <MDBCardBody className='px-8'>

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Add new judge/penalist</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <MDBInput id="name" value={judges.name} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                                <p style={myStyle}>{errors.name}</p>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput id="email" value={judges.email} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' required className='col-md-4' />
                                <p style={myStyle}>{errors.email}</p>
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBInput id="phone" value={judges.phone} onChange={(e) => handleInput(e)} label='Phone number' type='tel' required className='col-md-4' />
                                <p style={myStyle}>{errors.phone}</p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className=' pb-md-2'>

                            <div onChange={(e) => handleRole(e)}  >
                                <input type="radio" value="penelist" name="role" /> Penalist
                                <input type="radio" value="judge" name="role" style={{ marginLeft: "25px" }} /> Judge
                            </div>


                        </MDBRow>
                        <div className='col-12 '>
                            <MDBBtn onClick={handleSubmit} >Add</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>

        </>
    )
}

export default AddJudges;