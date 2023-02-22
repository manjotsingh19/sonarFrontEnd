import React, { useEffect, useState ,createContext, useContext} from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Reviews from "./Reviews";
import FileUpload from "./Submission";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


function Participant() {
  // Here data will be fetched from the backend(status)

  // const [status, setStatus] = useState('');
  // const [flag, setFlag] = useState(false);
const status = "1";

 // 0 rejected 1 accepted 2 waiting

  // var data = JSON.parse(localStorage.getItem("data"));

  // const {email} = data;

  // useEffect(() => {
  //   axios.get(`/particpantsDetails/${email}`).then(
  //     (response) => {
  //       console.log( response.data);
  //       setStatus(response.data.team.status);
  //       setFlag(true);
        
  //     },
  //     (error) => {
  //       console.log("this is error in team detail", error);
  //     }
  //   );
  // }, []);

  
 
  switch (status) {
    case "1":
      return (
        <MDBContainer fluid>
          {/* <TeamDetails userObj={data} /> */}
          <TeamDetails />
          <MDBBtn color="success">Accepted</MDBBtn>
          <div>
            <FileUpload />
          </div>
        </MDBContainer>
      );

    case "0":
      return (
        <MDBContainer fluid>
          {/* <TeamDetails userObj={data} /> */}
          <TeamDetails />
          <MDBBtn color="danger">Rejected</MDBBtn>
          <div>You are not eligible to move further in this hackathon</div>
        </MDBContainer>
      );

    case "2":
      return (
        <MDBContainer fluid>
          <TeamDetails />
          {/* <TeamDetails userObj={data} /> */}
          <MDBBtn color="warning">Under Review</MDBBtn>
          <div>
            <Reviews />
            {/* edit details */}
          </div>
        </MDBContainer>
      );
    default:
      return (
        <MDBContainer fluid>
          {/* team details*/}
          {/* <TeamDetails {...data} /> */}
          <TeamDetails />
          <MDBBtn color="warning">Under Review</MDBBtn>
          <div></div>
        </MDBContainer>
      );
  }
}
export default Participant;
