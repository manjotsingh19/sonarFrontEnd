import React, { useState } from "react";
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,} from "mdb-react-ui-kit";
import Marking from "./Marking";
import VideoPlayer from "./VideoPlayer";
// import Ppt from "./Ppt";
// import Present from "./Present";

export default function JudgeModal({ item }) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const { teamid, teamname, description, statement } = item;
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
        <MDBModalDialog centered size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <h4>Team: {teamname}</h4>
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
            <div
              className="Video"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <VideoPlayer />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <a
                href="https://1drv.ms/v/s!An5fe6AqNBBhh0f53t7U5g2KZi_j?e=Jm4Svr"
                target="_blank"
              >
                <button>Go to Video</button>
              </a>
            </div>
            {
              /* <Ppt /> */
              // <Present />
            }
            <>
              <Marking />
            </>

            <MDBModalFooter>
              <MDBBtn color="success" onClick={toggleShow}>
                Save
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
