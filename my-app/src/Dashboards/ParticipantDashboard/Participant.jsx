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

<<<<<<< HEAD
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
=======
  // var data = JSON.parse(localStorage.getItem("data"));
>>>>>>> 9b87de20790ee5cb86fd585de85bcec051b029a6



  switch (status) {
<<<<<<< HEAD
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

=======
    case "1":
      return (
        <MDBContainer fluid>
          {/* <TeamDetails userObj={data} /> */}
          <TeamDetails />
          <MDBBtn color="success">Accepted</MDBBtn>
          <div>
            <FileUpload />
          </div>
        </MDBContainer>
      );

    case "0":
      return (
        <MDBContainer fluid>
          {/* <TeamDetails userObj={data} /> */}
          <TeamDetails />
          <MDBBtn color="danger">Rejected</MDBBtn>
          <div>You are not eligible to move further in this hackathon</div>
        </MDBContainer>
      );

    case "2":
      return (
        <MDBContainer fluid>
          <TeamDetails />
          {/* <TeamDetails userObj={data} /> */}
          <MDBBtn color="warning">Under Review</MDBBtn>
          <div>
            <Reviews />
            {/* edit details */}
          </div>
>>>>>>> 9b87de20790ee5cb86fd585de85bcec051b029a6
        </MDBContainer>
      );
    default:
      return (
<<<<<<< HEAD
      <MDBContainer fluid>
        {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
            <MDBBtn color="info">Pending</MDBBtn>
            <div>
              {/* Still Waiting for panelist */}
            </div></>)}
=======
        <MDBContainer fluid>
          {/* team details*/}
          {/* <TeamDetails {...data} /> */}
          <TeamDetails />
          <MDBBtn color="warning">Under Review</MDBBtn>
          <div></div>
>>>>>>> 9b87de20790ee5cb86fd585de85bcec051b029a6
        </MDBContainer>
      );
  }
}
export default Participant;
