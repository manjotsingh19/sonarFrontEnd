//  import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import JudgeModal from "./JudgeModal";
// import "./.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import Swal from "sweetalert2";
import  FetchTeamData  from '../../hooks/fetch-team-data'


const Card = ({ teamObj, refetch }) => {
  const { teamId, teamName, idea } = teamObj
  return (
    <div className="ideaCard">
      <MDBRow>
        <MDBCol md="6">
          <h6 className="fw-bold">Team ID</h6>
        </MDBCol>
        <MDBCol md="6">
          <h6 className="fw-bold">Team Name</h6>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <h4 className="fw-bold">{teamId}</h4>
        </MDBCol>
        <MDBCol md="6">
          <h4 className="fw-bold">{teamName}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <h6 className="fw-bold">Problem Statement</h6>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <p className="fw-medium">{idea?.problemStatement}</p>
        </MDBCol>
      </MDBRow>
      <JudgeModal item={{ teamId, teamName, statement: idea.problemStatement, description: idea.description, teamObj }} refetch={ refetch} />
    </div>
  );
};
function Judge() {
  const [team, setTeam] = useState([]);
  const [judgeData, setJudgeData] = useState(JSON.parse(localStorage.getItem("data")))
  const { data, refetch } = FetchTeamData();



  useEffect(() => {
    setJudgeData(JSON.parse(localStorage.getItem("data")));
    console.log(judgeData);
  }, [localStorage.getItem("data")])

  useEffect(()=>{
    if (data) {
      const filtered = data?.data?.filter((value, index) => {
        if (judgeData.role_id == "3" && value?.gitHubLink && value?.idea?.demo && value.status === "accepted" && (value.judgeList == null || value.judgeList.indexOf((judgeData?.id).toString()) == -1)) {
          return true;
        }
        else return false;
      })
      setTeam(filtered)
    }
  }, [data])
  

  console.log(team);

  ///////team.gitHubLink && team.idea.demo///

  //////////////////////////////////////



  ////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="cards">

        <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">Judge Dashboard</h3>
        <h5 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center" style={{ margin: "-13px" }}>Welcome: {judgeData?.name} </h5>
        <MDBRow>
          {team.map((value, index) => (
            <>
              <MDBCol style={{ marginBottom: "25px" }} md="4" key={index}>

                <Card teamObj={value} refetch={ refetch} />
              </MDBCol>
            </>
          ))}
        </MDBRow>
      </div>
    </>);
}
export default Judge;