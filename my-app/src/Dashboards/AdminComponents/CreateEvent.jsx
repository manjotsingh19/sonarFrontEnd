import { MDBTextArea, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import axios from 'axios';


function CreateEvent() {
    const [errors, serErrors] = useState({});
    const [event, setEvent] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
    });


    /////////////////////////////Connect to server/////////////////////////////////////////////

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0) {
            console.log(event);

            axios.post('/event', event)
                .then((response) => {
                    console.log(response);

                }, (error) => {
                    console.log(error);
                });

        }
    }, [errors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        serErrors(validate(event));
    }

    const handleInput = (e) => {
        const { id, value } = e.target;
        setEvent({ ...event, [id]: value });
    }

    const validate = (event) => {
        const errorsObj = {};

        if (!event.name) {
            errorsObj.name = 'Name is required';
        }
        if (!event.description) {
            errorsObj.description = 'Description is required';
        }
        if (!event.startDate || !event.endDate) {
            errorsObj.endDate = 'Please select a date';
            errorsObj.startDate = 'Please select a date';
        }
        if (event.startDate > event.endDate) {
            errorsObj.endDate = 'Enter valid date';
            errorsObj.startDate = 'Enter valid date';
        }
        return errorsObj;
    }
    const myStyle = {
        color: 'red'
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Create Event</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <MDBInput id="name" value={event.name} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                                <p style={myStyle}>{errors.name}</p>
                            </MDBCol>


                            <MDBCol md='4' >
                                <div className="" style={{ bordeRadius: "50px", marginBottom: "15px" }}>
                                    <Form.Control
                                        placeholder="Start date"
                                        type="date"
                                        id="startDate"
                                        value={event.startDate}
                                        onChange={(e) => handleInput(e)}
                                    />
                                    <p style={myStyle}>{errors.startDate}</p>
                                </div>

                            </MDBCol>

                            <MDBCol md='4' >
                                <div className="" style={{ bordeRadius: "50px", marginBottom: "15px" }}>
                                    <Form.Control
                                        placeholder="End date"
                                        type="date"
                                        id="endDate"
                                        value={event.endDate}
                                        onChange={(e) => handleInput(e)}
                                    />
                                    <p style={myStyle}>{errors.endDate}</p>
                                </div>

                            </MDBCol>

                            <MDBRow className='align-items-center pt-2 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Event Description</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBTextArea id="description" value={event.description} onChange={(e) => handleInput(e)} label='' rows={3} style={{ resize: "none" }} required className='col-md-4' />
                                    <p style={myStyle}>{errors.description}</p>
                                </MDBCol>

                            </MDBRow>





                        </MDBRow>
                        <div className='col-12 '>
                            <MDBBtn onClick={handleSubmit} >Create</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>
        </>
    )
}

export default CreateEvent;