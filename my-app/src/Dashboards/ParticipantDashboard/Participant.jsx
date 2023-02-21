import React, { useEffect, useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Statement from "./Statement";
import Description from "./Description";
import Reviews from "./Reviews";

function Participant() {
  // Here data will be fetched from the backend(status)
  const isReverted = true;
  const isRejected = false;
  const isAccepted = true;



  // var userObj = JSON.parse(localStorage.getItem("data"));

  console.log();
  const [data, setData] = useState()

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  } , [localStorage.getItem("data")]);

  return (
    <>
      <MDBContainer fluid>
        {/* team details*/}
        <TeamDetails {...data} />
        {/* problem statement*/}
        {/* <Statement /> */}
        {/* problem description*/}
        {/* <Description />  */}
        <div>
          <h3>Acceptance</h3>
          {isAccepted
            ? "\nYour idea is accepted: START CODING..."
            : "\nYour idea is not accepted"}
          ,<h3>Rejection</h3>
          {isRejected
            ? "\nYour idea is rejected"
            : "\nYour idea is not rejected"}
          ,<h3>Revertion</h3>
          {isReverted ? <Reviews /> : "\nYour idea is accepted: Start coding"}
        </div>
      </MDBContainer>
    </>
  );
}
export default Participant;
