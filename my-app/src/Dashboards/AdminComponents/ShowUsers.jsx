import {  MDBCardBody, MDBCol, MDBRow, MDBCard} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowUsers() {


    useEffect(() => {   
        axios.get('/getUsers')
        .then(response => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
          });
    }, []);

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