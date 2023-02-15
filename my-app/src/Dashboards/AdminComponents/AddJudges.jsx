import { MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

function AddJudges() {
    const [checkedpen, setCheckPen] = useState(false);
    const [checkedJudge, setCheckJudge] = useState(false);

    const [judges, setJudges] = useState({
        name: '',
        email: '',
        phone: '',
        penalist: checkedpen,
        judge: checkedJudge,
    });

    const [errors, serErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        serErrors(validate(judges));
        console.log(judges);
    }
    
    const handleInput = (e) => {
        setCheckPen(e.target.checkedpen);
        setCheckJudge(e.target.checkedJudge);
        judges.penalist = e.target.checkedpen;
        judges.judge = e.target.checkedJudge;

        const { id, value } = e.target;
        setJudges({ ...judges, [id]: value });
    }
    const myStyle = {
        color: 'red'
    }

    const validate = (judges) => {
        const errorsObj = {};
        const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
        const regexPh = /^[0-9]{10}$/;

        if (!judges.name) {
            errorsObj.name = 'Participent name is required';
        }
        if (!judges.email) {
            errorsObj.email = 'Participent email is required';
        }
        else if (!regex.test(judges.email)) {
            errorsObj.email = "this is not a valid email";
        }
        if (!judges.phone) {
            errorsObj.phone = 'Participent number is required';
        }
        else if (!regexPh.test(judges.phone)) {
            errorsObj.phone = "This is not a valid phone number";
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
                            <MDBCol md='4'>
                                <MDBCheckbox name='flexCheck' id='penalist' value={!checkedpen} onChange={(e) => handleInput(e)} label='Penalist' />
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBCheckbox name='flexCheck' id='judge' value={!checkedJudge} onChange={(e) => handleInput(e)} label='Judge' />
                            </MDBCol>
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