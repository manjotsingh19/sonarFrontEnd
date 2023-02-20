import { validation, MDBListGroup, MDBListGroupItem, MDBTextArea, MDBValidationItem, inputGroup, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBValidation, MDBContainer, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBRadio, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import axios from 'axios';


function AddDomain() {
    const [errors, serErrors] = useState({});
    const [domains, setDomains] = useState({
        domain: '',
    })



    /////////////////////////////Connect to server/////////////////////////////////////////////
    const [submitted, setSubmited] = useState(false);

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && submitted) {

            console.log(domains);

            axios.post('/domain', domains)
                .then((response) => {
                    console.log(response);

                }, (error) => {
                    console.log(error);
                });

        }
        else{
            setSubmited(false);
        }
    }, [errors,submitted]);

    const handleAdd = (e) => {
        e.preventDefault();
        serErrors(validate(domains));
        setSubmited(true);
    }

    const handleInput = (e) => {
        const { id, value } = e.target;
        setDomains({ ...domains, [id]: value });
    }

    const validate = (domains) => {
        const errorsObj = {};

        if (!domains.domain) {
            errorsObj.domain = 'Write a domain name';
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

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Add/Remove Domain</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <MDBInput id="domain" value={domains.domain} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Domain' size='md' type='text' />
                                <p style={myStyle}>{errors.domain}</p>
                            </MDBCol>

                            {/* sbow doamin list */}
                            <MDBCol md='4' >
                                <MDBListGroup style={{ overflow: "hidden", overflowY: "scroll", maxHeight: "100px", minWidth: '22rem' }}>
                                    <MDBListGroupItem>Cras justo odio <button style={{ color: "red" }}>remove</button></MDBListGroupItem>
                                    <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                    <MDBListGroupItem>Cras justo odio <button style={{ color: "red" }}>remove</button></MDBListGroupItem>
                                    <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCol>
                        </MDBRow>


                        <div className='col-12 '>
                            <MDBBtn onClick={handleAdd} >Add</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow></>
    )
}

export default AddDomain;