import React, { useEffect, useState, createContext, useContext } from "react";
import { MDBContainer, MDBFile, MDBInput, MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import Reviews from "./Reviews";
import FileUpload from "./FileUpload";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Swal from 'sweetalert2';


function Participant() {


  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
  const [fetchedData, setFetchedData] = useState({});
  const [status, setStatus] = useState("");
  // console.log(data);


  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")])

  useEffect(() => {
    // console.log(status)
    setStatus(fetchedData?.team?.status);
  }, [fetchedData])


  useEffect(() => {
    Object.keys(data).length > 0 &&
      axios.get(`/particpantsDetails/${data?.email}`).then(
        (response) => {
          // console.log(response.data);
          setFetchedData(response?.data)
        },
        (error) => {
          console.log("this is error in team detail", error);
        }
      );
  }, []);



  const [git, setGit] = useState({
    gitHubLink: '',
  });
  // const [file, setfile] = useState({
  //   gitHubLink: '',
  //   uploadFile:'',
  // });


  const formData = new FormData();

  const [file, setfile] = useState();
  
  const handleFile = (e) => {
    formData.append("file", file);
    console.log(file);

    // formData.append("ideaId", ideaId);

   
  }
  const handleFileSubmit = (e) => {
    console.log(file);
    axios.post("/upload", formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }


  const handleInput = (e) => {
    const { id, value } = e.target;
    setGit({ ...git, [id]: value });
  }

  const handleSubmit = () => {

    fetchedData.team.gitHubLink = git.gitHubLink;
    console.log(git);
    axios.post('/changeGithub', fetchedData.team)
      .then((response) => {
        Swal.fire(
          'Great',
          'Your GitHub is submitted successfully!',
          'success'
        )
      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      });
  };


  switch (status) {
    case "accepted":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              <MDBBtn color="success">Accepted</MDBBtn>
              <div>
                {/* <FileUpload  userData={fetchedData?.team}/> */}
                <div className="ml-5 pb-2">
                  <MDBFile label="Upload the presentation file" id="file" name="file"   value={file} onChange={(e) => handleFile(e)} />
                  <MDBBtn onClick={handleFileSubmit}>Submit file</MDBBtn>

                  <MDBInput label="Github repository link" id="gitHubLink" value={git.gitHubLink} onChange={(e) => handleInput(e)} type="url" />
                  <MDBBtn onClick={handleSubmit}>Submit Github repository</MDBBtn>

                </div>
              </div></>)}

          </MDBContainer>
        </>
      );

    case "rejected":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              <MDBBtn color="danger">Rejected</MDBBtn>
              <div>
                {"Your Idea is not accepted, Better luck next time"}
              </div></>)}

          </MDBContainer>
        </>
      )

    case "reverted":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              <MDBBtn color="warning">Reverted</MDBBtn>
              <div>

                {Object.keys(fetchedData).length > 0 && (
                  <>

                    {/* {console.log(fetchedData.team)} */}
                    {/* <Reviews userObj={fetchedData?.team}/> */}
                    {/* ////////////////////////// */}
                    <div className="ideaCard">
                      <MDBRow>
                        <MDBCol md="4">
                          <h4 className="fw-bold">Reviews from the Panelist</h4>
                        </MDBCol>
                        <MDBCol md="12">
                          {/* {console.log(fetchedData?.team)} */}
                          <h6 className="">{fetchedData?.team?.newComment}</h6>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    {/* //////////////////////////// */}
                  </>

                )}

                {/* edit details */}
              </div></>)}

          </MDBContainer></>
      );
    default:
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              <MDBBtn color="info">Pending</MDBBtn>
              <div>
                {/* Still Waiting for panelist */}
              </div></>)}
          </MDBContainer>
        </>
      );
  }
}
export default Participant;
