// import React from "react";
import { MDBFile, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import axios from "axios";

import React, { useState } from 'react';

function FileUpload({ userObj }) {


  // console.log(userObj.ideaId);

  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('ideaId', userObj.ideaId);
    // console.log(selectedFile);


    axios.post('/upload', formData)
      .then((response) => {
        Swal.fire('Great','Event added successfully!','success')
      }, (error) => {
        console.log(error);
        Swal.fire({icon: 'error', title: 'Oops...',text: 'Something went wrong!',})
      });
  }

  return (
    <>
      <MDBFile label="Upload the presentation video in 'teamId.mp4' format only" onChange={handleFileInput} />
      <br />
      <MDBBtn  onClick={handleSubmit}>Upload</MDBBtn>

    </>
  );
}

export default FileUpload;


