import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
// import 'react-datepicker/dist/react-datepicker.css';
import AddJudges from './AddJudges';
import CreateEvent from './CreateEvent';
import AddDomain from './AddDomain';
import { useState, useEffect } from 'react';
import ShowUsers from './ShowUsers';
import axios from 'axios';
import Navbar from '../../Components/Navbar2';
import { Link, useNavigate } from "react-router-dom";




function Admin() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/showUsers");
    }
    const handleEvent = (e) => {
        e.preventDefault();
        navigate("/updateEvent");
    }

    return (
        <>
            <Navbar />

            <MDBContainer fluid>
                {/* //////////////////////add judges/////////////////// */}
                <AddJudges />


                  {/* ////////////////show alll //////////////////////////*/}
                <div class="col text-center">
                    <MDBBtn onClick={handleSubmit} className="btn btn-default" style={{ width: "25%" }}> Show Users</MDBBtn>
                </div>


                {/* ///////////////////create event///////////////////////////// */}

                <CreateEvent />

                {/* /////////////////////Edit event ////////////////////////////////////////////////// */}
                <div class="col text-center">
                    <MDBBtn onClick={handleEvent} className="btn btn-default" style={{ width: "25%" }}> Update Event</MDBBtn>
                </div>


                {/* /////////////////////////////add domain ///////////////////*/}

                <AddDomain />

            </MDBContainer>
        </>
    )
}
export default Admin;