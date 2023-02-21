import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ participantName, statement, description }) => {
  return (
    <div className="ideaCard">
      <MDBRow>
        <MDBCol md="6">
          <h5 className="fw-bold">Participant Name</h5>
        </MDBCol>
        <MDBCol md="6">
          <h5 className="">{participantName}</h5>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

function TeamDetails({id, email, mobile, name , password}) {
  const navigate = useNavigate();

  console.log(id);
  const url = "/participants/"+id;

  useEffect(() => {   
   
    console.log(url);
    
    axios.get(url)
    .then(response => {
        console.log(response.data);
    }, (error) => {
        console.log("this is error in team detail", error);

      });
}, []);


  const data = [
    {
      participantName: name
     }
  ];
  console.log(name);




  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Team Details
      </h3>
      <MDBRow>
        {data.map((value, index) => (
          <MDBCol md="3" key={index}>
            <Card {...value} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
export default TeamDetails;
