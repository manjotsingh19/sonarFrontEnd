
import { MDBFile, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import axios from "axios";

import React, { useState } from 'react';

function FileUpload({ userObj }) {


  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }
  // console.log(userObj);

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedFile.type != "video/mp4") {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'File should be in .mp4 format!', })
    }
    else {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('ideaId', userObj.ideaId);


      axios.post('/upload', formData)
        .then((response) => {
          console.log(selectedFile);
          alert("video uploaded successfully")
          Swal.fire('Great', 'Video uploaded successfully!', 'success')
        }, (error) => {
          console.log(error);
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please upload the video!', })
        });
    }
    return false;
  }

  // const uploadVideo = async (file) => {
  //   const formData = new FormData();
  //   formData.append("video", file);
  
  //   try {
  //     const response =  await axios.post('/upload', formData)
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // // Example usage
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   uploadVideo(file);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (selectedFile) {
  //     uploadVideo(selectedFile);
  //   }
  // };

  return (
    <>
      {!userObj?.demo && (
        <>
{/* 
          <form onSubmit={handleSubmit}>
            <input type="file" accept="video/*" onChange={handleFileInput} />
            <button type="submit">Upload Video</button>
          </form> */}

      
      <MDBFile label="Upload the presentation video in '.mp4' format only" onChange={handleFileInput} />
      <br />
      <MDBBtn onClick={handleSubmit} >Upload</MDBBtn>
        </>
      )}
    </>
  );
}

export default FileUpload;


