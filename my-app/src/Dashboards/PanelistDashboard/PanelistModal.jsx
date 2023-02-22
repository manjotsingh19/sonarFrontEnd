import { useState, useEffect } from "react";
import axios from "axios";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function PanelistModal({ item }) {
  const [basicModal, setBasicModal] = useState(false);
  const {  teamName, description, statement,teamObj} = item;


  const toggleShow = (e) => {
    setBasicModal(!basicModal)
  };


  

  const handleSubmit = (e) => {
    teamObj.status = e.target.value;

    setBasicModal(!basicModal);
    // setObj(teamObj)
    axios.post("/statusChange", teamObj)
        .then((response) => {
          // console.log(teamObj);
          // console.log(response);
          alert(teamObj.status);
        }, (error) => {
          console.log(error);
          alert("error is occured");
        });
  };

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "flex-end",
          //   backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <MDBBtn onClick={toggleShow}>Review</MDBBtn>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <h4>Team: {teamName}</h4>
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="">
                <h4>Problem Statement</h4>
                <p>{statement}</p>
              </div>
              <div className="">
                <h4>Problem Description</h4>
                <p>{description}</p>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="success" value={"accepted"} onClick={(e)=>handleSubmit(e)}>
                Accept
              </MDBBtn>
              <MDBBtn color="danger" value={"rejected"} onClick={(e)=>handleSubmit(e)}>
                Reject
              </MDBBtn>
              <MDBBtn color="warning" value={"reverted"} onClick={(e)=>handleSubmit(e)}>
                Revert
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
