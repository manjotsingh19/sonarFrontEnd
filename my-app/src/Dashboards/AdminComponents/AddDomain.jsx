import { validation, MDBListGroup, MDBListGroupItem, MDBTextArea, MDBValidationItem, inputGroup, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBValidation, MDBContainer, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBRadio, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";

function AddDomain() {
    const [isSubmit, setSubmit] = useState(false);
    const [errors, serErrors] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const handleclick = () => {

    }
    const handleInput = () => {

    }
    const myStyle = {
        color: 'red'
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Add/Remove Domain</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <MDBInput id="n1" onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Domain' size='md' type='text' />
                                <p style={myStyle}>{errors.n1}</p>
                            </MDBCol>

                            {/* sbow doamin list */}
                            <MDBCol md='4' >
                                <MDBListGroup style={{ overflow: "hidden", overflowY: "scroll", minWidth: '22rem' }}>
                                    <MDBListGroupItem>Cras justo odio <button style={{ color: "red" }}>remove</button></MDBListGroupItem>
                                    <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCol>



                        </MDBRow>


                        <div className='col-12 '>
                            <MDBBtn onClick={handleclick} >Add</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow></>
    )
}

export default AddDomain;