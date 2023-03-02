import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
// import 'react-datepicker/dist/react-datepicker.css';
import AddJudges from './AddJudges';
import CreateEvent from './CreateEvent';
import AddDomain from './AddDomain';
import { useState, useEffect } from 'react';
import ShowUsers from './ShowUsers';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import { Link, useNavigate } from "react-router-dom";




function Admin() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/showUsers");
    }


    return (
        <>
            <Navbar />

            <MDBContainer fluid>
                {/* //////////////////////add judges/////////////////// */}
                <AddJudges />
                <div class="col text-center">
                    <MDBBtn onClick={handleSubmit} className="btn btn-default" style={{ width: "25%" }}> Show Users</MDBBtn>
                </div>


                {/* ///////////////////create event///////////////////////////// */}

                <CreateEvent />

                {/* /////////////////////////////add domain ///////////////////*/}

                <AddDomain />

                {/* ////////////////show alll */}
                {/* <ShowUsers /> */}

            </MDBContainer>
        </>
    )
}
export default Admin;