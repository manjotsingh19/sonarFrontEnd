import { validation, MDBListGroup, MDBListGroupItem, MDBTextArea, MDBValidationItem, inputGroup, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBValidation, MDBContainer, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBRadio, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";

function ShowUsers() {
    
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



                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <h5 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Penalist</h5>
                                {/* .////////////////////////////////////////////////////////// */}
                            </MDBCol>

                            <MDBCol md='4'>
                                <h5 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Judges</h5>
                                {/* /////////////////////////////////////////////// */}
                            </MDBCol>

                            <MDBCol md='4'>
                                <h5 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Participents</h5>
                                {/* /////////////////////////////////////////////////////// */}
                            </MDBCol>
                        </MDBRow>


                    </MDBCardBody>
                </MDBCard>

            </MDBRow></>
    )
}

export default ShowUsers;