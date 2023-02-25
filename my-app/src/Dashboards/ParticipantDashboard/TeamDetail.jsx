// import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBTextArea, MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Card1 = ({ teamObj }) => {
  const { name, team } = teamObj
  return (
    <>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="fw-bold ">Participant Name</h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="">{name}</h5>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};
const Card2 = ({ teamObj }) => {

  const { team } = teamObj
  return (
    <>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Team Name</h5>
          </MDBCol>
          <MDBCol md="4">
            <h6 className="">{team?.teamName}</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Problem Statement</h5>
          </MDBCol>
          <MDBCol md="12">
            <h6 className="">{team?.idea?.problemStatement}</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Problem Description</h5>
          </MDBCol>
          <MDBCol md="12">
            <h6 className="">{team?.idea?.description}</h6>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

function TeamDetails({ userObj }) {
  const [teamData, setTeamData] = useState({});
  const [flag, setFlag] = useState(false);


  ////////////////////////////////////updated statemnt///////////////////////////////////////////////////////
  const [update, setUpdate] = useState({
    updatedStatement: '',
    updatedDescription: ''
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUpdate({ ...update, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    teamData.team.idea.problemStatement = update?.updatedStatement;
    teamData.team.idea.description = update?.updatedDescription;
    console.log(teamData);

    axios.post("/registrationForm", teamData).then(
      (response) => {
        // console.log(response);
        Swal.fire("Great", "Idea sends succesfully!", "success");
        navigate("/logIn");
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
      }
    );

  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/particpantsDetails/${userObj?.email}`).then(
      (response) => {
        // console.log( response.data);
        setTeamData(response.data);
        setFlag(true)
      },
      (error) => {
        console.log("this is error in team detail", error);
      }
    );
  }, []);
  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Participant Details
      </h3>

      {flag && (
        <>
          <MDBRow>
            {/* {console.log("this is team data")}
            {console.log(teamData.team.idea)} */}
            <MDBCol md="6">
              <Card1 teamObj={teamData} />
            </MDBCol>
            <MDBCol md="6">
              <Card2 teamObj={teamData} />
            </MDBCol>
          </MDBRow>
        </>
      )}
      {flag && teamData.team.status == "reverted" && (
        <>
          <MDBTextArea label='Upadate your problem satement' id='updatedStatement' value={update.updatedStatement} onChange={(e) => handleInput(e)} rows={4} />
          <MDBTextArea label='Upadate your problem description' id='updatedDescription' value={update.updatedDescription} onChange={(e) => handleInput(e)} rows={4} />
          <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
        </>
      )}
    </div>
  );
}
export default TeamDetails;