import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../Dashboards/AdminComponents/Admin";
import axios from "axios";
import Participant from "../Dashboards/ParticipantDashboard/Participant";
import Swal from "sweetalert2";
import Navbar2 from "./Navbar2";

function LoginPage() {
  const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const [teamForm, setTeamForm] = useState({
    email: "",
    password: "",
  });
  const italicText = {
    color: "#ccc",
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setTeamForm({ ...teamForm, [id]: value });
  };

  const styles = {
    backgroundImage: "url('./images/login-bg.png')",
  };
  const handleclick = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!teamForm?.email || !teamForm.password) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Username or password is empty!", });
    }
    else {
      axios.post("/login", teamForm).then(
        (response) => {

        // //////////////send response to dashboard
        window.login = true;
        window.status = "Logout";
        localStorage.setItem("data", JSON.stringify(response.data));
        if (response.data.role_id === 4) {
          navigate("/participant");
        } else if (response.data.role_id === 3) {
          navigate("/judge");
        } else if (response.data.role_id === 2) {
          navigate("/panelist");
        } else if (response.data.role_id === 1) {
          navigate("/AdminDashboard");
        }

          ///////////////////////////
        },
        (error) => {
          console.log(error);
          Swal.fire({ icon: "error", title: "Oops...", text: "Invalid username or password!", });
          setTeamForm({ ...teamForm, email: '', password: '' });
        }
      );
    }
  };

  return (
    <>
      <div style={styles}></div>
      <Navbar2 />
      <MDBContainer fluid >
        <MDBRow className="justify-content-center align-items-center"
        style={{
          margin: "50px"
        }}>
          <MDBCard>
          <MDBCardBody className="px-8">
          <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center">
                  Login
                </h3>
          {/* <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol> */}
          <MDBRow className="align-items-center mb-5">
          <MDBCol md="6" >
            <MDBInput id="email" value={teamForm.email} onChange={(e) => handleInput(e)} wrapperClass="mb-4" label=<span style={italicText}>Email Address</span> type="email" size="lg" />
            <MDBInput id="password" value={teamForm.password} onChange={(e) => handleInput(e)} wrapperClass="mb-4" label=<span style={italicText}>Password</span> type="password" size="lg" />

            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/registrationForm" style={{ color: "blue" }}>
                Register{" "}
              </Link>
            </p>

            <div className="col-12">
              <MDBBtn
                onClick={handleclick}
                type="submit"
                className="bg-primary shadow-1-strong"
              >
                {" "}
                LogIn{" "}
              </MDBBtn>
            </div>
          </MDBCol>
          </MDBRow>
          </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginPage;
