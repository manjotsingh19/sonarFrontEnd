import React, { useEffect, useState, createContext, useContext } from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Reviews from "./Reviews";
import FileUpload from "./FileUpload";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


function Participant() {


  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
  const [fetchedData, setFetchedData] = useState({});
  const [status, setStatus] = useState("");
  console.log(data);


  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));

  }, [localStorage.getItem("data")])

  useEffect(() => {
    console.log(status)
    setStatus(fetchedData?.team?.status);
  }, [fetchedData])


  useEffect(() => {
    Object.keys(data).length > 0 &&
      axios.get(`/particpantsDetails/${data?.email}`).then(
        (response) => {
          console.log(response.data);

          setFetchedData(response?.data)
        },
        (error) => {
          console.log("this is error in team detail", error);
        }
      );
  }, []);




  switch (status) {

    case "accepted":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
            <MDBBtn color="success">Accepted</MDBBtn>
            <div>
              <FileUpload />
              {/* Upload details */}
            </div></>)}

        </MDBContainer>
      );
       
    case "rejected":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
            <MDBBtn color="danger">Rejected</MDBBtn>
            <div>
              {"Your Idea is not accepted, Better luck next time"}
            </div></>)}

        </MDBContainer>)

    case "reverted":
      return (
        <MDBContainer fluid>
          {/* team details*/}
          {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
            <MDBBtn color="warning">Reverted</MDBBtn>
            <div>
              <Reviews />
              {/* edit details */}
            </div></>)}


        </MDBContainer>
      );
    default:
      return (

      <MDBContainer fluid>
        {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
            <MDBBtn color="info">Pending</MDBBtn>
            <div>
              {/* Still Waiting for panelist */}
            </div></>)}

        </MDBContainer>
      );
  }
}
export default Participant;
