import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./Panelist.css";
import PanelistModal from "./PanelistModal";
import { useState,useEffect } from "react";
import axios from "axios";

const Card = ( {teamObj} ) => {
  const { teamId, teamName, idea} = teamObj 
  return (
    <div className="teamCard">
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
      <PanelistModal item={{ teamId, teamName, statement: idea.problemStatement, description: idea.description }} />
    </div>
  );
};
function Panelist() {

  const [team,setTeam]= useState([]);

  useEffect(() => {
    axios.get('/getTeam')
      .then(response => {
        // console.log(response.data);
        setTeam(response.data);
        console.log("this is team table" + team);
      }, (error) => {
        console.log(error);
      });
  }, []);


  // const data = [
  //   {
  //     teamid: "0",
  //     teamname: "error404",
  //     statement:
  //       "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
  //     description:
  //       "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
  //   },
  // ];
  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Panelist Dashboard
      </h3>
      <MDBRow>
        {team.map((value, index) => (
          <MDBCol md="4" key={index}>
            <Card teamObj={value} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
export default Panelist;
