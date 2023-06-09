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
import moment from 'moment';
import Swal from 'sweetalert2';




function Admin() {

    const navigate = useNavigate();

    //////////////////show user button////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/showUsers");
    }

    /////////////////update event/////////////////////////////
    const handleEvent = (e) => {
        e.preventDefault();
        navigate("/updateEvent");
    }

    ////////////////////handle mail for winners/////////////////
    const handleMail = (e) => {
        e.preventDefault();
        axios.post("/winnersMail").then(
            (response) => {
                Swal.fire('Great', 'Mail sends successfully!', 'success');
            },
            (error) => {
              console.log(error);
            }
          );
    }

    //////////////////////api call for get the event/////////////////////
    
    const [event, setEvent] = useState({});
    useEffect(() => {
        axios.get("/getEvent").then(
          (response) => {
            setEvent(response.data[0]);
            // console.log(response.data[0]);
          },
          (error) => {
            console.log(error);
          }
        );
    
      }, []);
      const currDate = moment().format("YYYY-MM-DD");

    return (
        <>
            <Navbar />

            <MDBContainer fluid>
                {/* //////////////////////add judges/////////////////// */}
                <AddJudges />


                  {/* ////////////////show alll //////////////////////////*/}
                <div className="col text-center">
                    <MDBBtn onClick={handleSubmit} className="btn btn-default" style={{ width: "25%" }}> Show Users</MDBBtn>
                </div>


                {/* ///////////////////create event///////////////////////////// */}

                <CreateEvent />

                {/* /////////////////////Edit event ////////////////////////////////////////////////// */}
                <div className="col text-center">
                    <MDBBtn onClick={handleEvent} className="btn btn-default" style={{ width: "25%" }}> Update Event</MDBBtn>
                </div>


                {/* /////////////////////////////add domain ///////////////////*/}

                <AddDomain />

                {/* /////////////////////////////send mail to winners///////////////////////////////////// */}
                {event.endDate <currDate && (
                <div className="col text-center">
                    <MDBBtn onClick={handleMail} className="btn btn-default" style={{ width: "25%",marginBottom:"5%" }}> Send mail to winners</MDBBtn>
                </div>
                )}

            </MDBContainer>
        </>
    )
}
export default Admin;