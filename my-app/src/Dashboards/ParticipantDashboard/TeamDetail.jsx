import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card1 = ({ teamObj }) => {
  const { name } = teamObj
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
          <MDBCol md="12">
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
  const [flag,setFlag] = useState(false);


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
      <MDBRow>
        {/* {teamData.map((value, index) => (
          <MDBCol md="3" key={index}>
            <Card1 teamObj={value} />
            <Card2  teamObj={value} />
          </MDBCol>
 ))}  */}
        {flag && (
          <>
            <MDBCol md="6">
              <Card1 teamObj={teamData} />
            </MDBCol>
            <MDBCol md="6">
              <Card2 teamObj={teamData} />
            </MDBCol>
          </>
        )}
      </MDBRow>
    </div>
  );
}
export default TeamDetails;