import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Statement from "./Statement";
import Description from "./Description";
import Reviews from "./Reviews";
// import { countdown } from "./Countdown";

function Participant() {
  // Here data will be fetched from the backend(status)
  const isReverted = true;
  const isRejected = false;
  const isAccepted = true;
  // countdown("2023-03-01T00:00:00");

  return (
    <>
      <MDBContainer fluid>
        {/* team details*/}
        <TeamDetails />
        {/* problem statement*/}
        <Statement />
        {/* problem description*/}
        <Description />

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
