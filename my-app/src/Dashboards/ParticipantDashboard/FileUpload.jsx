
import { MDBFile, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import axios from "axios";

import React, { useState } from 'react';

function FileUpload({ userObj }) {


  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }
  console.log(userObj);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedFile);
    if (selectedFile.type != "video/mp4") {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'File should be in .mp4 format!', })
    }
    else {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('ideaId', userObj.ideaId);


      axios.post('/upload', formData)
        .then((response) => {
          Swal.fire('Great', 'Video uploaded successfully!', 'success')
        }, (error) => {
          console.log(error);
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please upload the video!', })
        });
    }
  }

  return (
    <>
    {!userObj?.demo && (
      <>
      <MDBFile label="Upload the presentation video in '.mp4' format only" onChange={handleFileInput} />
      <br />
      <MDBBtn onClick={handleSubmit}>Upload</MDBBtn>
      </>
      )}
    </>
  );
}

export default FileUpload;


