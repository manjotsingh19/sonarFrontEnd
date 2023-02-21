import React, { useEffect, useState } from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Statement from "./Statement";
import Description from "./Description";
import Reviews from "./Reviews";
import FileUpload from "./Submission";

function Participant() {
  // Here data will be fetched from the backend(status)
  const status = "2"; // 0 rejected 1 accepted 2 waiting

  // var userObj = JSON.parse(localStorage.getItem("data"));

  console.log();
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")]);

  switch (status) {
    case "1":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          <TeamDetails {...data} />
          <MDBBtn color="success">Accepted</MDBBtn>
          <div>
            <FileUpload />
          </div>
        </MDBContainer>
      );

    case "0":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          <TeamDetails {...data} />
          <MDBBtn color="danger">Rejected</MDBBtn>
          <div>You are not eligible to move further in this hackathon</div>
        </MDBContainer>
      );

    case "2":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          <TeamDetails {...data} />
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
          <TeamDetails {...data} />
          <MDBBtn color="warning">Under Review</MDBBtn>
          <div></div>
        </MDBContainer>
      );
  }
}
export default Participant;
